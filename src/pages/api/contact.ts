import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ResponseData = {
  success: boolean;
  message: string;
  error?: string;
};

const DEFAULT_RECIPIENT = 'sonaurahealth@gmail.com';
const SMTP_HOST = process.env.SMTP_HOST || 'sonaurahealthcare.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '465', 10);
const SMTP_USER = process.env.SMTP_USER || 'info@sonaurahealthcare.com';
const SMTP_PASS = process.env.SMTP_PASS || 'nb2136tit29knwfj';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({
      success: false,
      message: `Method ${req.method} Not Allowed`,
    });
  }

  const { name, email, phone, country, treatment, message } = req.body || {};

  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: 'Full Name, Email, and Phone number are required fields.',
    });
  }

  try {
    const recipient = process.env.RECIPIENT_EMAIL || DEFAULT_RECIPIENT;

    const htmlContent = `
      <div style="font-family: Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
        <div style="background: linear-gradient(135deg, #0284c7 0%, #2563eb 100%); padding: 30px 24px; text-align: center; color: #ffffff;">
          <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">🏥 New Patient Consultation Request</h1>
          <p style="margin: 8px 0 0; opacity: 0.95; font-size: 14px;">Direct inquiry received from Sonaura Global HealthCare</p>
        </div>

        <div style="padding: 24px 30px; background-color: #ffffff;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tbody>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 0; color: #64748b; font-weight: 600; width: 35%;">Patient Name:</td>
                <td style="padding: 12px 0; color: #0f172a; font-weight: 700; font-size: 15px;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 0; color: #64748b; font-weight: 600;">Email Address:</td>
                <td style="padding: 12px 0; color: #0284c7; font-weight: 600;">
                  <a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 0; color: #64748b; font-weight: 600;">Phone / WhatsApp:</td>
                <td style="padding: 12px 0; color: #0f172a; font-weight: 600;">
                  <a href="tel:${phone}" style="color: #0f172a; text-decoration: none;">${phone}</a>
                  &nbsp;•&nbsp;
                  <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" style="color: #059669; text-decoration: none; font-weight: 700;">💬 Open WhatsApp</a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 0; color: #64748b; font-weight: 600;">Country / Location:</td>
                <td style="padding: 12px 0; color: #0f172a;">${country || 'Not specified'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 0; color: #64748b; font-weight: 600;">Treatment Interested:</td>
                <td style="padding: 12px 0; color: #0f172a;">
                  <span style="display: inline-block; background-color: #eff6ff; color: #1d4ed8; font-weight: 700; padding: 4px 10px; border-radius: 6px; font-size: 13px;">
                    ${treatment ? treatment.toUpperCase() : 'GENERAL CONSULTATION'}
                  </span>
                </td>
              </tr>
              <tr>
                <td style="padding: 16px 0 6px; color: #64748b; font-weight: 600; vertical-align: top;">Medical Query / Message:</td>
                <td style="padding: 16px 0 6px; color: #334155; line-height: 1.6;">
                  <div style="background-color: #f8fafc; padding: 14px 16px; border-radius: 8px; border-left: 4px solid #0284c7; white-space: pre-wrap;">
                    ${message || 'No description provided.'}
                  </div>
                </td>
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

    const hostCandidates = Array.from(new Set([
      SMTP_HOST,
      'localhost',
      '127.0.0.1',
      'mail.sonaurahealthcare.com',
      'nsrv.hostdserver.com',
    ]));

    let lastError: any = null;
    let sent = false;

    for (const host of hostCandidates) {
      try {
        const transporter = nodemailer.createTransport({
          host,
          port: SMTP_PORT,
          secure: SMTP_PORT === 465,
          auth: {
            user: SMTP_USER,
            pass: SMTP_PASS,
          },
          tls: {
            rejectUnauthorized: false,
          },
          connectionTimeout: 5000,
          greetingTimeout: 5000,
        });

        await transporter.sendMail({
          from: `"Sonaura HealthCare Portal" <${SMTP_USER}>`,
          to: recipient,
          replyTo: email,
          subject: `🏥 New Patient Enquiry: ${name} (${treatment || 'Consultation'})`,
          html: htmlContent,
        });

        sent = true;
        break;
      } catch (err: any) {
        lastError = err;
        console.warn(`Failed sending via host ${host}:`, err?.message || err);
      }
    }

    if (!sent) {
      throw lastError || new Error('All SMTP servers failed to connect');
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your inquiry has been sent to our medical team. We will contact you within 24 hours.',
    });
  } catch (error: any) {
    console.error('Contact Form Error:', error);
    return res.status(200).json({
      success: false,
      message: 'Failed to send enquiry: ' + (error?.message || 'Server error'),
      error: error?.message || 'Server error',
    });
  }
}
