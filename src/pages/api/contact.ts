import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ResponseData = {
  success: boolean;
  message: string;
  error?: string;
};

const DEFAULT_RECIPIENT = 'sonaurahealth@gmail.com';
const SMTP_HOST = process.env.SMTP_HOST || 'nsrv.hostdserver.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '465', 10);
const SMTP_USER = process.env.SMTP_USER || 'info@sonaurahealthcare.com';
const SMTP_PASS = process.env.SMTP_PASS || 'nb2136tit29knwfj';

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

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
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
                  <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" target="_blank" style="color: #16a34a; text-decoration: none; font-weight: bold;">💬 Chat on WhatsApp</a>
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
          <p style="margin: 0;">Sent directly from Sonaura Medical Tourism website to <strong>${recipient}</strong>.</p>
          <p style="margin: 4px 0 0;">Received at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Sonaura HealthCare Portal" <${SMTP_USER}>`,
      to: recipient,
      replyTo: email,
      subject: `🏥 New Patient Enquiry: ${name} (${treatment || 'Consultation'})`,
      text: `New Patient Enquiry:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCountry: ${country}\nTreatment: ${treatment}\nMessage: ${message}`,
      html: htmlContent,
    });

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your enquiry has been sent to our medical team. We will contact you within 24 hours.',
    });
  } catch (error: any) {
    console.error('Contact Form Error:', error);
    return res.status(200).json({
      success: false,
      message: 'Failed to send enquiry. Please try again or contact us directly on WhatsApp.',
      error: error?.message || 'Server error',
    });
  }
}
