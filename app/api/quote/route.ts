import { NextResponse } from "next/server";
import { z } from "zod";

const quoteSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  projectType: z.string(),
  budgetRange: z.string(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    // Validate request body
    const body = await request.json();
    const data = quoteSchema.parse(body);

    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Dynamically import Resend only when needed
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email
    await resend.emails.send({
      from: process.env.FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL || "your.email@example.com",
      subject: `New Quote Request from ${data.name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company || "N/A"}</p>
        <p><strong>Project Type:</strong> ${data.projectType}</p>
        <p><strong>Budget Range:</strong> ${data.budgetRange}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

