import { NextResponse } from "next/server";
import { z } from "zod";

const quoteSchema = z.object({
  // Basic Information
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  companyWebsite: z.string().optional(),
  
  // Project Type
  projectType: z.string(),
  projectTypeOther: z.string().optional(),
  
  // Timeline
  timeline: z.string(),
  
  // Budget
  budgetRange: z.string(),
  
  // Target Audience
  targetAudience: z.string().min(10).max(500),
  
  // Main Goals
  mainGoals: z.array(z.string()).min(1),
  mainGoalsOther: z.string().optional(),
  
  // Required Features
  requiredFeatures: z.array(z.string()).min(1),
  requiredFeaturesOther: z.string().optional(),
  
  // Design Preferences
  designPreferences: z.string().max(500).optional(),
  
  // Content Status
  contentStatus: z.string(),
  
  // Additional Information
  additionalInfo: z.string().max(500).optional(),
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

    // Format project type
    const projectTypeDisplay = data.projectType === "Other" && data.projectTypeOther
      ? `${data.projectType}: ${data.projectTypeOther}`
      : data.projectType;

    // Format main goals
    const mainGoalsDisplay = data.mainGoals.includes("Other") && data.mainGoalsOther
      ? [...data.mainGoals.filter(g => g !== "Other"), `Other: ${data.mainGoalsOther}`]
      : data.mainGoals;

    // Format required features
    const requiredFeaturesDisplay = data.requiredFeatures.includes("Other") && data.requiredFeaturesOther
      ? [...data.requiredFeatures.filter(f => f !== "Other"), `Other: ${data.requiredFeaturesOther}`]
      : data.requiredFeatures;

    // Send email
    await resend.emails.send({
      from: process.env.FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL || "anthonyhasrouny8@gmail.com",
      subject: `New Project Quote Request from ${data.name}`,
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
                max-width: 700px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9fafb;
              }
              .container {
                background-color: white;
                border-radius: 8px;
                padding: 30px;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
              }
              .header {
                background-color: #1a202c;
                color: white;
                padding: 30px;
                text-align: center;
                border-radius: 8px 8px 0 0;
                margin: -30px -30px 30px -30px;
              }
              .section {
                margin-bottom: 30px;
                padding-bottom: 20px;
                border-bottom: 1px solid #e5e7eb;
              }
              .section:last-child {
                border-bottom: none;
              }
              .section-title {
                font-size: 18px;
                font-weight: 600;
                color: #1a202c;
                margin-bottom: 15px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
              }
              .field {
                margin-bottom: 15px;
              }
              .label {
                font-weight: 600;
                color: #4b5563;
                display: block;
                margin-bottom: 5px;
                font-size: 14px;
              }
              .value {
                color: #1f2937;
                padding: 10px;
                background-color: #f9fafb;
                border-radius: 4px;
                border-left: 3px solid #d4af37;
                font-size: 15px;
              }
              .list {
                list-style: none;
                padding: 0;
                margin: 0;
              }
              .list-item {
                padding: 8px 10px;
                margin-bottom: 5px;
                background-color: #f9fafb;
                border-radius: 4px;
                border-left: 3px solid #d4af37;
                color: #1f2937;
              }
              .empty {
                color: #9ca3af;
                font-style: italic;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 24px;">NEW QUOTE REQUEST</h1>
              </div>

              <div class="section">
                <div class="section-title">Basic Information</div>
                <div class="field">
                  <span class="label">Name:</span>
                  <div class="value">${data.name}</div>
                </div>
                <div class="field">
                  <span class="label">Email:</span>
                  <div class="value">${data.email}</div>
                </div>
                ${data.phone ? `
                <div class="field">
                  <span class="label">Phone:</span>
                  <div class="value">${data.phone}</div>
                </div>
                ` : ''}
                ${data.company ? `
                <div class="field">
                  <span class="label">Company:</span>
                  <div class="value">${data.company}</div>
                </div>
                ` : ''}
                ${data.companyWebsite ? `
                <div class="field">
                  <span class="label">Company Website:</span>
                  <div class="value"><a href="${data.companyWebsite}" style="color: #1a202c;">${data.companyWebsite}</a></div>
                </div>
                ` : ''}
              </div>

              <div class="section">
                <div class="section-title">Project Details</div>
                <div class="field">
                  <span class="label">Project Type:</span>
                  <div class="value">${projectTypeDisplay}</div>
                </div>
                <div class="field">
                  <span class="label">Timeline:</span>
                  <div class="value">${data.timeline}</div>
                </div>
                <div class="field">
                  <span class="label">Budget Range:</span>
                  <div class="value">${data.budgetRange}</div>
                </div>
              </div>

              <div class="section">
                <div class="section-title">Target Audience</div>
                <div class="value">${data.targetAudience}</div>
              </div>

              <div class="section">
                <div class="section-title">Main Goals</div>
                <ul class="list">
                  ${mainGoalsDisplay.map(goal => `<li class="list-item">${goal}</li>`).join('')}
                </ul>
              </div>

              <div class="section">
                <div class="section-title">Required Features</div>
                <ul class="list">
                  ${requiredFeaturesDisplay.map(feature => `<li class="list-item">${feature}</li>`).join('')}
                </ul>
              </div>

              ${data.designPreferences ? `
              <div class="section">
                <div class="section-title">Design Preferences</div>
                <div class="value">${data.designPreferences}</div>
              </div>
              ` : ''}

              <div class="section">
                <div class="section-title">Content Status</div>
                <div class="value">${data.contentStatus}</div>
              </div>

              ${data.additionalInfo ? `
              <div class="section">
                <div class="section-title">Additional Information</div>
                <div class="value">${data.additionalInfo}</div>
              </div>
              ` : ''}
            </div>
          </body>
        </html>
      `,
      text: `
===================
NEW QUOTE REQUEST
===================

BASIC INFORMATION
Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}\n` : ''}${data.company ? `Company: ${data.company}\n` : ''}${data.companyWebsite ? `Company Website: ${data.companyWebsite}\n` : ''}

PROJECT DETAILS
Type: ${projectTypeDisplay}
Timeline: ${data.timeline}
Budget: ${data.budgetRange}

TARGET AUDIENCE
${data.targetAudience}

MAIN GOALS
${mainGoalsDisplay.map(g => `- ${g}`).join('\n')}

REQUIRED FEATURES
${requiredFeaturesDisplay.map(f => `- ${f}`).join('\n')}

${data.designPreferences ? `DESIGN PREFERENCES\n${data.designPreferences}\n\n` : ''}CONTENT STATUS
${data.contentStatus}

${data.additionalInfo ? `ADDITIONAL INFORMATION\n${data.additionalInfo}\n` : ''}
      `.trim(),
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
