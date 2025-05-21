import sgMail, { MailDataRequired } from '@sendgrid/mail';

console.log('Email service module loaded');

// Initialize SendGrid with API key
if (!process.env.SENDGRID_API_KEY) {
  console.error('SENDGRID_API_KEY is missing');
  throw new Error('SENDGRID_API_KEY is not defined in environment variables');
}
console.log('Setting up SendGrid API key');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Types for email configuration
interface EmailConfig {
  to: string | { email: string; name?: string }[];
  from: {
    email: string;
    name?: string;
  };
  subject: string;
  text?: string;
  html?: string;
}

/**
 * Send an email using SendGrid
 * @param config Email configuration object
 * @returns Promise that resolves when email is sent
 */
export const sendEmail = async (config: EmailConfig): Promise<void> => {
  console.log('sendEmail function called with config:', config);
  try {
    const msg: MailDataRequired = {
      to: config.to,
      from: config.from.email,
      subject: config.subject,
      text: config.text || '',
      html: config.html,
    };

    console.log('Prepared email message:', {
      to: msg.to,
      from: msg.from,
      subject: msg.subject,
      hasText: !!msg.text,
      hasHtml: !!msg.html,
    });

    console.log('Attempting to send email via SendGrid...');
    await sgMail.send(msg);
    console.log('Email sent successfully via SendGrid');
  } catch (error: any) {
    console.error('Detailed error in sendEmail:', {
      error,
      message: error.message,
      response: error.response?.body,
      stack: error.stack,
    });
    throw error;
  }
};

/**
 * Send a test email
 * @param recipientEmail Email address of the recipient
 */
export const sendTestEmail = async (recipientEmail: string): Promise<void> => {
  console.log('sendTestEmail called with recipient:', recipientEmail);
  const config: EmailConfig = {
    to: recipientEmail,
    from: {
      email: process.env.SENDER_EMAIL!,
      name: 'Proficient Legal',
    },
    subject: 'Test Email from Proficient Legal',
    text: 'This is a test email from Proficient Legal.',
    html: '<strong>This is a test email from Proficient Legal.</strong>',
  };

  await sendEmail(config);
};
