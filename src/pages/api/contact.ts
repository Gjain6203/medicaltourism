import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  success: boolean;
  message: string;
  error?: string;
};

const DEFAULT_RECIPIENT = 'sonaurahealth@gmail.com';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method Not Allowed. Only POST is supported.',
    });
  }

  try {
    const { name, email, phone, country, treatment, message } = req.body || {};

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and phone are required fields.',
      });
    }

    const recipient = process.env.RECIPIENT_EMAIL || DEFAULT_RECIPIENT;
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    // Option A: If SMTP credentials are provided, send via Nodemailer
    if (emailUser && emailPass && emailPass !== 'YOUR_16_DIGIT_GMAIL_APP_PASSWORD') {
      try {
        const cleanPass = emailPass.replace(/\s+/g, '');
        const nodemailer = (await import('nodemailer')).default;
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: emailUser,
            pass: cleanPass,
          },
        });

        const htmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            <div style="background: linear-gradient(135deg, #1e3a8a, #2563eb); padding: 24px 30px; color: #ffffff;">
              <h2 style="margin: 0; font-size: 22px; font-weight: bold;">New Patient Enquiry / Assessment</h2>
              <p style="margin: 6px 0 0; opacity: 0.85; font-size: 14px;">Sonaura Global HealthCare Portal</p>
            </div>
            
            <div style="padding: 24px 30px; background-color: #ffffff;">
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tbody>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 0; font-weight: bold; color: #475569; width: 35%;">Patient Name:</td>
                    <td style="padding: 12px 0; color: #0f172a; font-weight: 600;">${name}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 0; font-weight: bold; color: #475569;">Email Address:</td>
                    <td style="padding: 12px 0; color: #0f172a;">
                      <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                    </td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 0; font-weight: bold; color: #475569;">Phone / WhatsApp:</td>
                    <td style="padding: 12px 0; color: #0f172a;">
                      <a href="tel:${phone}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${phone}</a>
                      &nbsp;|&nbsp;
                      <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" target="_blank" style="color: #16a34a; text-decoration: none;">Open WhatsApp</a>
                    </td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 0; font-weight: bold; color: #475569;">Country:</td>
                    <td style="padding: 12px 0; color: #0f172a;">${country || 'Not specified'}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 0; font-weight: bold; color: #475569;">Treatment Interested:</td>
                    <td style="padding: 12px 0; color: #1e40af; font-weight: 600;">${treatment || 'General Inquiry'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 14px 0 6px; font-weight: bold; color: #475569; vertical-align: top;">Message / Symptoms:</td>
                    <td style="padding: 14px 0 6px; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message || 'No description provided.'}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style="background-color: #f8fafc; padding: 16px 30px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center;">
              <p style="margin: 0;">Sent automatically from Sonaura Medical Tourism website to <strong>${recipient}</strong>.</p>
              <p style="margin: 4px 0 0;">Received at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"Sonaura HealthCare Portal" <${emailUser}>`,
          to: recipient,
          replyTo: email,
          subject: `🏥 New Enquiry: ${name} (${treatment || 'Consultation'})`,
          text: `New Patient Enquiry:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCountry: ${country}\nTreatment: ${treatment}\nMessage: ${message}`,
          html: htmlContent,
        });

        return res.status(200).json({
          success: true,
          message: 'Enquiry sent successfully via Nodemailer!',
        });
      } catch (smtpErr: any) {
        console.error('Nodemailer sending failed:', smtpErr);
      }
    }

    // Option B: Fallback to FormSubmit AJAX endpoint
    const proto = (req.headers['x-forwarded-proto'] || 'https').toString();
    const host = (req.headers.host || process.env.NEXT_PUBLIC_SITE_URL || '').toString().replace(/^https?:\/\//, '');
    const siteDomain = host ? `${proto}://${host}` : (process.env.NEXT_PUBLIC_SITE_URL || 'https://sonaurahealthcare.com');
    const refererUrl = (req.headers.referer || req.headers.origin || siteDomain).toString();

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          Referer: refererUrl,
          Origin: refererUrl,
        },
        body: JSON.stringify({
          _subject: `🏥 New Patient Enquiry: ${name} - Sonaura HealthCare`,
          Name: name,
          Email: email,
          'Phone/WhatsApp': phone,
          Country: country || 'Not provided',
          Treatment: treatment || 'General Consultation',
          Message: message || 'None',
          _template: 'table',
        }),
      });

      const rawText = await response.text();
      let data: any = {};
      try {
        data = JSON.parse(rawText);
      } catch {
        data = { message: rawText };
      }

      const isSuccess = data?.success === 'true' || data?.success === true;

      if (isSuccess) {
        return res.status(200).json({
          success: true,
          message: `Thank you! Your enquiry has been sent to ${recipient}. Our team will contact you shortly.`,
        });
      } else if (data?.message && (data.message.includes('Activation') || data.message.includes('actived') || data.message.includes('activate'))) {
        return res.status(200).json({
          success: true,
          message: `Form Activation link sent to ${recipient}! Please check your Gmail inbox (or Spam) and click 'Activate Form' once to start receiving leads directly.`,
        });
      } else {
        return res.status(200).json({
          success: false,
          message: data?.message || 'Failed to send message via form gateway.',
          error: data?.message || 'Gateway error',
        });
      }
    } catch (fetchErr: any) {
      console.error('FormSubmit server fetch failed:', fetchErr);
      return res.status(200).json({
        success: false,
        message: 'Server gateway could not be reached.',
        error: fetchErr?.message || 'Network error',
      });
    }
  } catch (error: any) {
    console.error('Contact Form Error:', error);
    return res.status(200).json({
      success: false,
      message: 'Failed to send enquiry. Please try again later.',
      error: error?.message || 'Server error',
    });
  }
}
