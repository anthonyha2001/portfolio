import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple input sanitization helper
function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, "");
}

// Rate limiting (simple in-memory store - use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // Max 5 requests
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute window

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0] : "unknown";

    // Rate limiting check
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    let { name, email, company, projectType, budgetRange, message } = body;

    // Validate required fields
    if (!name || !email || !projectType || !budgetRange || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Sanitize inputs to prevent XSS
    name = sanitizeInput(String(name));
    email = sanitizeInput(String(email));
    if (company) company = sanitizeInput(String(company));
    projectType = sanitizeInput(String(projectType));
    budgetRange = sanitizeInput(String(budgetRange));
    message = sanitizeInput(String(message));

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (name.length > 100 || email.length > 255 || message.length > 2000) {
      return NextResponse.json(
        { error: "Field length exceeds maximum allowed" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Update this with your verified domain
      to: ["anthonyhasrouny8@gmail.com"],
      subject: `New Quote Request: ${projectType} - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background-color: #1a202c;
                color: white;
                padding: 30px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background-color: #f9fafb;
                padding: 30px;
                border: 1px solid #e5e7eb;
                border-top: none;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: 600;
                color: #1a202c;
                display: block;
                margin-bottom: 5px;
              }
              .value {
                color: #4b5563;
                padding: 10px;
                background-color: white;
                border-radius: 4px;
                border: 1px solid #e5e7eb;
              }
              .message-box {
                background-color: white;
                padding: 15px;
                border-radius: 4px;
                border: 1px solid #e5e7eb;
                white-space: pre-wrap;
                color: #4b5563;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">New Quote Request</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <span class="label">Email:</span>
                <div class="value">${email}</div>
              </div>
              
              ${company ? `
              <div class="field">
                <span class="label">Company:</span>
                <div class="value">${company}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <span class="label">Project Type:</span>
                <div class="value">${projectType}</div>
              </div>
              
              <div class="field">
                <span class="label">Budget Range:</span>
                <div class="value">${budgetRange}</div>
              </div>
              
              <div class="field">
                <span class="label">Message:</span>
                <div class="message-box">${message}</div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Quote Request

Name: ${name}
Email: ${email}
${company ? `Company: ${company}\n` : ''}Project Type: ${projectType}
Budget Range: ${budgetRange}

Message:
${message}
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

