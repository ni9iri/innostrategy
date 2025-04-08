import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';
import { sendEmail, generateNewsletterWelcomeEmail } from '@/lib/email';

const newsletterSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name } = newsletterSchema.parse(body);

    const existingSubscriber = await prisma.newsletterSubscriber.findUnique({
      where: { email },
    });

    if (existingSubscriber) {
      if (!existingSubscriber.active) {
        await prisma.newsletterSubscriber.update({
          where: { email },
          data: { active: true },
        });

        // Send welcome back email
        try {
          const emailContent = generateNewsletterWelcomeEmail(name);
          await sendEmail({
            to: email,
            ...emailContent,
          });
        } catch (emailError) {
          console.error('Failed to send welcome back email:', emailError);
          // Don't fail the request if email sending fails
        }

        return NextResponse.json(
          { message: 'Subscription reactivated successfully' },
          { status: 200 }
        );
      }
      return NextResponse.json(
        { message: 'Email already subscribed' },
        { status: 400 }
      );
    }

    await prisma.newsletterSubscriber.create({
      data: {
        email,
        name,
      },
    });

    // Send welcome email
    try {
      const emailContent = generateNewsletterWelcomeEmail(name);
      await sendEmail({
        to: email,
        ...emailContent,
      });
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError);
      // Don't fail the request if email sending fails
    }

    return NextResponse.json(
      { message: 'Subscribed successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
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