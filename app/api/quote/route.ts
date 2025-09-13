import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] Quote API called")
    const formData = await request.json()
    console.log("[v0] Form data received:", {
      name: formData.name,
      email: formData.email,
      projectType: formData.projectType,
    })

    if (!process.env.RESEND_API_KEY) {
      console.log("[v0] RESEND_API_KEY not found in environment variables")
      return NextResponse.json({
        success: true,
        message: "Quote request received. I will contact you soon! (Email service not configured)",
      })
    }

    const emailContent = `
New Quote Request from ${formData.name}

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone || "Not provided"}
- Company: ${formData.company || "Not provided"}

Project Details:
- Project Type: ${formData.projectType}
- Budget Range: ${formData.budget || "Not specified"}
- Timeline: ${formData.timeline || "Not specified"}
- Description: ${formData.description}

Technical Requirements:
- Features: ${formData.features?.join(", ") || "None specified"}
- Tech Preferences: ${formData.techPreferences || "None specified"}
- Existing Assets: ${formData.existingAssets || "None specified"}

Additional Information:
- Design Inspiration: ${formData.inspiration || "None provided"}
- Additional Notes: ${formData.additionalNotes || "None provided"}

---
This quote request was submitted through your portfolio website.
Please respond to the client at: ${formData.email}
    `

    console.log("[v0] Attempting to send email via Resend")

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev", // Default Resend domain for testing
        to: ["chiragbihani131206@gmail.com"],
        subject: `New Quote Request from ${formData.name} - ${formData.projectType}`,
        text: emailContent,
        reply_to: formData.email,
      }),
    })

    console.log("[v0] Email response status:", emailResponse.status)

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text()
      console.log("[v0] Email sending failed:", errorData)

      // Still log the quote request for manual follow-up
      console.log("[v0] Quote Request (Email service failed):", {
        name: formData.name,
        email: formData.email,
        projectType: formData.projectType,
        budget: formData.budget,
        description: formData.description,
      })

      return NextResponse.json({
        success: true,
        message: "Quote request received. I will contact you soon!",
      })
    }

    const emailResult = await emailResponse.json()
    console.log("[v0] Email sent successfully:", emailResult)

    return NextResponse.json({
      success: true,
      message: "Quote request sent successfully!",
    })
  } catch (error) {
    console.error("[v0] Error processing quote request:", error)
    return NextResponse.json(
      { success: false, message: "Failed to submit quote request. Please try again." },
      { status: 500 },
    )
  }
}
