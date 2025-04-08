import sgMail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  console.warn('SENDGRID_API_KEY is not set. Email functionality will not work.');
} else {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

type EmailData = {
  to: string;
  subject: string;
  text: string;
  html: string;
};

export async function sendEmail(data: EmailData) {
  if (!process.env.SENDGRID_API_KEY) {
    console.error('SENDGRID_API_KEY is not set');
    throw new Error('Email service is not configured');
  }

  const msg = {
    to: data.to,
    from: process.env.SENDGRID_FROM_EMAIL || 'info@innovativestrategysolutions.com',
    subject: data.subject,
    text: data.text,
    html: data.html,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}

export function generateContactConfirmationEmail(name: string) {
  return {
    subject: 'Thank you for contacting Innovative Strategy Solutions',
    text: `Dear ${name},\n\nThank you for reaching out to us. We have received your message and will get back to you shortly.\n\nBest regards,\nThe Innovative Strategy Solutions Team`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Thank You for Contacting Us</h2>
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to Innovative Strategy Solutions. We have received your message and one of our team members will get back to you shortly.</p>
        <p>In the meantime, you can learn more about our services on our website.</p>
        <p>Best regards,<br>The Innovative Strategy Solutions Team</p>
      </div>
    `,
  };
}

export function generateNewsletterWelcomeEmail(name: string) {
  return {
    subject: 'Welcome to Innovative Strategy Solutions Newsletter',
    text: `Dear ${name},\n\nThank you for subscribing to our newsletter. You'll now receive regular updates on digital strategy, personal finance, and business growth.\n\nBest regards,\nThe Innovative Strategy Solutions Team`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Welcome to Our Newsletter</h2>
        <p>Dear ${name},</p>
        <p>Thank you for subscribing to the Innovative Strategy Solutions newsletter. You'll now receive regular updates and insights on:</p>
        <ul>
          <li>Digital Strategy Tips</li>
          <li>Personal Finance Guidance</li>
          <li>Business Growth Strategies</li>
        </ul>
        <p>Stay tuned for our next update!</p>
        <p>Best regards,<br>The Innovative Strategy Solutions Team</p>
      </div>
    `,
  };
} 