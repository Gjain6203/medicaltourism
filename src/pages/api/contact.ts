import type { NextApiRequest, NextApiResponse } from 'next';
import { spawn } from 'child_process';
import tls from 'tls';

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

// 1. Direct local sendmail binary (/usr/sbin/sendmail on Linux/cPanel)
function sendViaSendmail(rawEmail: string): Promise<boolean> {
  return new Promise((resolve) => {
    try {
      if (process.platform !== 'linux') {
        return resolve(false);
      }
      const proc = spawn('/usr/sbin/sendmail', ['-t', '-i']);
      let hasError = false;

      proc.on('error', () => {
        hasError = true;
        resolve(false);
      });

      proc.stdin.on('error', () => {
        hasError = true;
        resolve(false);
      });

      proc.stdin.write(rawEmail);
      proc.stdin.end();

      proc.on('close', (code) => {
        resolve(!hasError && code === 0);
      });
    } catch {
      resolve(false);
    }
  });
}

// 2. Zero-dependency native Node.js TLS SMTP Sender
function sendViaTls({
  host,
  port,
  user,
  pass,
  from,
  to,
  replyTo,
  subject,
  html,
}: {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
  to: string;
  replyTo?: string;
  subject: string;
  html: string;
}): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const socket = tls.connect(
      {
        host,
        port,
        rejectUnauthorized: false,
      },
      () => {}
    );

    socket.setEncoding('utf8');
    let step = 0;
    let finished = false;

    const timeout = setTimeout(() => {
      if (!finished) {
        finished = true;
        socket.destroy();
        reject(new Error(`SMTP connection timed out on ${host}`));
      }
    }, 6000);

    socket.on('data', (data: string) => {
      if (finished) return;
      const code = parseInt(data.substring(0, 3), 10);

      try {
        if (step === 0 && code === 220) {
          step++;
          socket.write('EHLO sonaurahealthcare.com\r\n');
        } else if (step === 1 && code === 250) {
          step++;
          socket.write('AUTH LOGIN\r\n');
        } else if (step === 2 && code === 334) {
          step++;
          socket.write(Buffer.from(user).toString('base64') + '\r\n');
        } else if (step === 3 && code === 334) {
          step++;
          socket.write(Buffer.from(pass).toString('base64') + '\r\n');
        } else if (step === 4 && code === 235) {
          step++;
          socket.write(`MAIL FROM:<${user}>\r\n`);
        } else if (step === 5 && code === 250) {
          step++;
          socket.write(`RCPT TO:<${to}>\r\n`);
        } else if (step === 6 && code === 250) {
          step++;
          socket.write('DATA\r\n');
        } else if (step === 7 && code === 354) {
          step++;
          const headers = [
            `From: "Sonaura HealthCare Portal" <${from}>`,
            `To: <${to}>`,
            ...(replyTo ? [`Reply-To: <${replyTo}>`] : []),
            `Subject: =?UTF-8?B?${Buffer.from(subject).toString('base64')}?=`,
            'MIME-Version: 1.0',
            'Content-Type: text/html; charset=UTF-8',
            `Date: ${new Date().toUTCString()}`,
            '',
            html,
            '.',
            '',
          ].join('\r\n');
          socket.write(headers);
        } else if (step === 8 && code === 250) {
          step++;
          finished = true;
          clearTimeout(timeout);
          socket.write('QUIT\r\n');
          socket.end();
          resolve(true);
        } else if (code >= 400) {
          finished = true;
          clearTimeout(timeout);
          socket.destroy();
          reject(new Error(`SMTP error (${code}) on ${host}: ${data.trim()}`));
        }
      } catch (err) {
        finished = true;
        clearTimeout(timeout);
        socket.destroy();
        reject(err);
      }
    });

    socket.on('error', (err) => {
      if (!finished) {
        finished = true;
        clearTimeout(timeout);
        reject(err);
      }
    });
  });
}

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

    const rawEmail = [
      `To: <${recipient}>`,
      `From: "Sonaura HealthCare Portal" <${SMTP_USER}>`,
      `Reply-To: <${email}>`,
      `Subject: =?UTF-8?B?${Buffer.from(`🏥 New Patient Enquiry: ${name} (${treatment || 'Consultation'})`).toString('base64')}?=`,
      'MIME-Version: 1.0',
      'Content-Type: text/html; charset=UTF-8',
      `Date: ${new Date().toUTCString()}`,
      '',
      htmlContent,
      '',
    ].join('\r\n');

    let delivered = false;

    // Method 1: Local cPanel/Linux sendmail (fastest & most reliable on cPanel, zero dependencies)
    if (process.platform === 'linux') {
      delivered = await sendViaSendmail(rawEmail);
      if (delivered) {
        console.log('Delivered successfully via local sendmail binary');
      }
    }

    // Method 2: Pure Native TLS SMTP socket fallback across candidates
    if (!delivered) {
      const candidates = Array.from(new Set([
        'localhost',
        '127.0.0.1',
        SMTP_HOST,
        'sonaurahealthcare.com',
        'nsrv.hostdserver.com',
      ]));

      for (const host of candidates) {
        try {
          await sendViaTls({
            host,
            port: SMTP_PORT,
            user: SMTP_USER,
            pass: SMTP_PASS,
            from: SMTP_USER,
            to: recipient,
            replyTo: email,
            subject: `🏥 New Patient Enquiry: ${name} (${treatment || 'Consultation'})`,
            html: htmlContent,
          });
          delivered = true;
          console.log(`Delivered successfully via TLS host ${host}`);
          break;
        } catch (smtpErr) {
          console.warn(`TLS host ${host} failed:`, smtpErr);
        }
      }
    }

    if (!delivered) {
      throw new Error('Unable to deliver message through local sendmail or TLS gateways.');
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
