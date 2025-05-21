import sgMail from '@sendgrid/mail';

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

// Function to send emails
export const sendEmail = async (emailData: {
  to: string;
  from?: string;
  subject: string;
  text: string;
  html: string;
}) => {
  try {
    const msg = {
      to: emailData.to,
      from:
        emailData.from || process.env.SENDER_EMAIL || 'mohitdev4444@gmail.com',
      subject: emailData.subject,
      text: emailData.text,
      html: emailData.html,
    };

    const response = await sgMail.send(msg);
    console.log('Email sent successfully:', response);
    return { success: true };
  } catch (error: any) {
    console.error('Error sending email:', error);
    if (error.response) {
      console.error('Error details:', error.response.body);
    }
    throw error;
  }
};

// Common email styles
const emailStyles = {
  container:
    'font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;',
  header:
    'text-align: center; padding: 20px 0; border-bottom: 2px solid #f0f0f0;',
  logo: 'max-width: 200px; height: auto;',
  content: 'padding: 20px 0;',
  footer:
    'text-align: center; padding: 20px 0; border-top: 2px solid #f0f0f0; color: #666; font-size: 14px;',
  button:
    'display: inline-block; padding: 12px 24px; background-color: #1a365d; color: white; text-decoration: none; border-radius: 4px; margin: 20px 0;',
  infoBox:
    'background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e9ecef;',
  title: 'color: #1a365d; font-size: 24px; margin-bottom: 20px;',
  subtitle: 'color: #2c5282; font-size: 18px; margin: 15px 0;',
};

// Helper function to send contact form email
export const sendContactEmail = async (data: {
  name: string;
  email: string;
  phone: string;
  message: string;
  formType: string;
  subject: string;
}) => {
  const emailContent = {
    to: data.email,
    subject: `New ${data.formType} Form Submission - ${data.subject}`,
    text: `
New Contact Form Submission
Form Type: ${data.formType}
Subject: ${data.subject}
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Message: ${data.message}
    `,
    html: `
      <div style="${emailStyles.container}">
        <div style="${emailStyles.header}">
          <a href="https://proficientlegal.com.au" target="_blank">
            <img src="https://proficientlegal.com.au/logo.png" alt="Proficient Legal" style="${
              emailStyles.logo
            }">
          </a>
        </div>
        <div style="${emailStyles.content}">
          <h2 style="${emailStyles.title}">New Contact Form Submission</h2>
          <p>Thank you for contacting Proficient Legal. We have received your ${
            data.formType
          } and will get back to you shortly.</p>
          <div style="${emailStyles.infoBox}">
            <h3 style="${emailStyles.subtitle}">Your Message Details</h3>
            <p><strong>Form Type:</strong> ${data.formType}</p>
            <p><strong>Subject:</strong> ${data.subject}</p>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: #fff; padding: 15px; border-radius: 4px; border: 1px solid #e9ecef;">${
              data.message
            }</p>
          </div>
          <div style="text-align: center;">
            <a href="https://proficientlegal.com.au" style="${
              emailStyles.button
            }">Visit Our Website</a>
          </div>
          <p style="margin-top: 20px; color: #666;">If you have any additional information to provide, please don't hesitate to contact us.</p>
        </div>
        <div style="${emailStyles.footer}">
          <p>© ${new Date().getFullYear()} Proficient Legal. All rights reserved.</p>
          <p>This is an automated message, please do not reply directly to this email.</p>
          <p style="margin-top: 10px; font-size: 12px; color: #888;">
            <a href="https://proficientlegal.com.au/privacy" style="color: #888; text-decoration: none;">Privacy Policy</a> | 
            <a href="https://proficientlegal.com.au/terms" style="color: #888; text-decoration: none;">Terms of Service</a>
          </p>
        </div>
      </div>
    `,
  };

  return sendEmail(emailContent);
};

// Helper function to convert 24h time to 12h format
const convertTo12Hour = (time24: string) => {
  const [hours, minutes] = time24.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minutes} ${ampm}`;
};

// Helper function to send payment receipt email
export const sendPaymentReceiptEmail = async (data: {
  customerName: string;
  customerEmail: string;
  amount: number;
  consultationType: string;
  consultationName: string;
  consultationDate: string;
  consultationTime: string;
  paymentId: string;
}) => {
  const emailContent = {
    to: data.customerEmail,
    subject: 'Payment Receipt - Proficient Legal',
    text: `
Payment Receipt - Proficient Legal

Dear ${data.customerName},

Thank you for your payment. Here are your payment details:

Payment ID: ${data.paymentId}
Amount: AUD $${data.amount}
Service: ${data.consultationName}
Consultation Type: ${data.consultationType}
Date: ${data.consultationDate}
Time: ${convertTo12Hour(data.consultationTime)}

If you have any questions, please don't hesitate to contact us.

Best regards,
Proficient Legal Team
    `,
    html: `
      <div style="${emailStyles.container}">
        <div style="${emailStyles.header}">
          <a href="https://proficientlegal.com.au" target="_blank">
            <img src="https://proficientlegal.com.au/logo.png" alt="Proficient Legal" style="${
              emailStyles.logo
            }">
          </a>
        </div>
        <div style="${emailStyles.content}">
          <h2 style="${emailStyles.title}">Payment Receipt</h2>
          <p>Dear ${data.customerName},</p>
          <p>Thank you for your payment. Here are your payment details:</p>
          <div style="${emailStyles.infoBox}">
            <h3 style="${emailStyles.subtitle}">Payment Details</h3>
            <p><strong>Payment ID:</strong> ${data.paymentId}</p>
            <p><strong>Amount:</strong> AUD $${data.amount}</p>
            <p><strong>Service:</strong> ${data.consultationName}</p>
            <p><strong>Consultation Type:</strong> ${data.consultationType}</p>
            <p><strong>Date:</strong> ${data.consultationDate}</p>
            <p><strong>Time:</strong> ${convertTo12Hour(
              data.consultationTime
            )}</p>
          </div>
          <a href="https://proficientlegal.com.au" style="${
            emailStyles.button
          }">Visit Our Website</a>
        </div>
        <div style="${emailStyles.footer}">
          <p>© ${new Date().getFullYear()} Proficient Legal. All rights reserved.</p>
          <p>This is an automated message, please do not reply directly to this email.</p>
        </div>
      </div>
    `,
  };

  return sendEmail(emailContent);
};
