import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/validations';

// Initialize Resend with API key from environment variables
// Use a fallback to prevent build-time crashes if the env var is missing
const resend = new Resend(process.env.RESEND_API_KEY || 're_missing_key');

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact support.' },
        { status: 500 }
      );
    }

    // Check if recipient email is configured
    if (!process.env.EMAIL_TO) {
      console.error('EMAIL_TO is not configured');
      return NextResponse.json(
        { error: 'Recipient email is not configured. Please contact support.' },
        { status: 500 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: generateEmailHTML(validatedData),
      reply_to: validatedData.email,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    // Log successful submission (useful for monitoring)
    console.log('Contact form submission successful:', {
      id: data?.id,
      name: validatedData.name,
      email: validatedData.email,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been sent successfully!',
        id: data?.id 
      },
      { status: 200 }
    );
  } catch (error) {
    // Handle validation errors
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Invalid form data. Please check your inputs.' },
        { status: 400 }
      );
    }

    // Handle other errors
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

// Generate professional HTML email template
function generateEmailHTML(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
        <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0;">Fitztar Landing Page</p>
      </div>
      
      <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
        <div style="margin-bottom: 20px;">
          <h2 style="color: #0369a1; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">Contact Information</h2>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #0369a1; display: inline-block; width: 100px;">Name:</strong>
            <span style="color: #333;">${data.name}</span>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #0369a1; display: inline-block; width: 100px;">Email:</strong>
            <a href="mailto:${data.email}" style="color: #0ea5e9; text-decoration: none;">${data.email}</a>
          </div>
          
          ${
            data.phone
              ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #0369a1; display: inline-block; width: 100px;">Phone:</strong>
            <a href="tel:${data.phone}" style="color: #0ea5e9; text-decoration: none;">${data.phone}</a>
          </div>
          `
              : ''
          }
        </div>
        
        <div style="margin-top: 30px;">
          <h2 style="color: #0369a1; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">Message</h2>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #0ea5e9;">
            <p style="margin: 0; white-space: pre-wrap; color: #333;">${data.message}</p>
          </div>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
          <p style="color: #6b7280; font-size: 14px; margin: 0;">
            Submitted on ${new Date().toLocaleString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
        <p>This email was sent from the Fitztar contact form</p>
      </div>
    </body>
    </html>
  `;
}
