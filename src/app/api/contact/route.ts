import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';
import { sendEmail, generateContactConfirmationEmail } from '@/lib/email';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    const contact = await prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      },
    });

    // Send confirmation email to user
    try {
      const emailContent = generateContactConfirmationEmail(data.name);
      await sendEmail({
        to: data.email,
        ...emailContent,
      });
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // Don't fail the request if email sending fails
    }

    // Send notification to admin
    try {
      await sendEmail({
        to: process.env.ADMIN_EMAIL || 'info@innovativestrategysolutions.com',
        subject: 'New Contact Form Submission',
        text: `
          New contact form submission:
          Name: ${data.name}
          Email: ${data.email}
          Phone: ${data.phone || 'Not provided'}
          Message: ${data.message}
        `,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
            <p><strong>Message:</strong></p>
            <p>${data.message}</p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error('Failed to send admin notification:', emailError);
      // Don't fail the request if email sending fails
    }

    return NextResponse.json(
      { message: 'Message sent successfully', id: contact.id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Invalid input data', errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 