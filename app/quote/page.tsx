"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Send, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function QuotePage() {
  const searchParams = useSearchParams()
  const [projectType, setProjectType] = useState("")
  const [budget, setBudget] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  useEffect(() => {
    const service = searchParams.get("service")
    const price = searchParams.get("price")
    const type = searchParams.get("type")

    if (service && price) {
      // Map service names to project types
      const serviceMapping: { [key: string]: string } = {
        "Landing Page / Portfolio": "landing-page",
        "Business Website": "business-website",
        "E-Commerce Website": "ecommerce",
        "Basic App": "basic-app",
        "Dynamic App": "dynamic-app",
        "Advanced App": "advanced-app",
      }

      // Map price ranges to budget options
      const priceMapping: { [key: string]: string } = {
        "₹8,000 – ₹15,000": "15k-35k",
        "₹20,000 – ₹35,000": "15k-35k",
        "₹40,000 – ₹75,000": "35k-75k",
        "₹25,000 – ₹40,000": "35k-75k",
        "₹50,000 – ₹1,00,000": "75k-1l",
        "₹1,20,000+": "1l-plus",
      }

      const mappedProjectType = serviceMapping[service] || "custom"
      const mappedBudget = priceMapping[price] || "discuss"

      setProjectType(mappedProjectType)
      setBudget(mappedBudget)
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.target as HTMLFormElement)
    const features = Array.from(formData.getAll("features"))

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      projectType: projectType,
      budget: budget || formData.get("budget"),
      timeline: formData.get("timeline"),
      description: formData.get("description"),
      features: features,
      techPreferences: formData.get("tech-preferences"),
      existingAssets: formData.get("existing-assets"),
      inspiration: formData.get("inspiration"),
      additionalNotes: formData.get("additional-notes"),
    }

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitMessage(result.message)
        setIsSubmitted(true)
      } else {
        setSubmitMessage(result.message || "Failed to submit quote request")
      }
    } catch (error) {
      setSubmitMessage("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Quote Request Submitted!</h2>
          <p className="text-muted-foreground mb-6">
            {submitMessage ||
              "Thank you for your interest! I'll review your requirements and get back to you within 24 hours with a detailed quote."}
          </p>
          <Link href="/">
            <Button className="w-full">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">Get Your Project Quote</h1>
            <p className="text-lg text-muted-foreground">
              Tell me about your project and I'll provide you with a detailed quote within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Project Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" name="name" required placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" name="email" type="email" required placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input id="company" name="company" placeholder="Your company name (optional)" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Project Details</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="project-type">Project Type *</Label>
                  <Select value={projectType} onValueChange={setProjectType} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="landing-page">Landing Page / Portfolio</SelectItem>
                      <SelectItem value="business-website">Business Website</SelectItem>
                      <SelectItem value="ecommerce">E-Commerce Website</SelectItem>
                      <SelectItem value="basic-app">Basic Mobile App</SelectItem>
                      <SelectItem value="dynamic-app">Dynamic Mobile App</SelectItem>
                      <SelectItem value="advanced-app">Advanced Mobile App</SelectItem>
                      <SelectItem value="custom">Custom Project</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select value={budget} onValueChange={setBudget} name="budget">
                    <SelectTrigger>
                      <SelectValue placeholder="Select your budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-15k">Under ₹15,000</SelectItem>
                      <SelectItem value="15k-35k">₹15,000 - ₹35,000</SelectItem>
                      <SelectItem value="35k-75k">₹35,000 - ₹75,000</SelectItem>
                      <SelectItem value="75k-1l">₹75,000 - ₹1,00,000</SelectItem>
                      <SelectItem value="1l-plus">₹1,00,000+</SelectItem>
                      <SelectItem value="discuss">Let's discuss</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Expected Timeline</Label>
                  <Select name="timeline">
                    <SelectTrigger>
                      <SelectValue placeholder="When do you need this completed?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP (Rush job)</SelectItem>
                      <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
                      <SelectItem value="2-4-weeks">2-4 weeks</SelectItem>
                      <SelectItem value="1-2-months">1-2 months</SelectItem>
                      <SelectItem value="flexible">Flexible timeline</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Project Description *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    required
                    placeholder="Describe your project in detail. Include features you need, design preferences, target audience, etc."
                    className="min-h-[120px]"
                  />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Technical Requirements</h3>
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label>Features Needed (check all that apply)</Label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Responsive Design",
                      "Contact Forms",
                      "User Authentication",
                      "Payment Integration",
                      "Database Integration",
                      "API Development",
                      "Admin Dashboard",
                      "E-commerce Features",
                      "Push Notifications",
                      "Real-time Updates",
                      "Analytics Integration",
                      "SEO Optimization",
                    ].map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox id={feature} name="features" value={feature} />
                        <Label htmlFor={feature} className="text-sm">
                          {feature}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tech-preferences">Technology Preferences</Label>
                  <Textarea
                    id="tech-preferences"
                    name="tech-preferences"
                    placeholder="Any specific technologies you prefer? (React, Flutter, specific databases, etc.)"
                    className="min-h-[80px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="existing-assets">Existing Assets</Label>
                  <Textarea
                    id="existing-assets"
                    name="existing-assets"
                    placeholder="Do you have existing branding, content, or technical assets I should know about?"
                    className="min-h-[80px]"
                  />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="inspiration">Design Inspiration</Label>
                  <Textarea
                    id="inspiration"
                    name="inspiration"
                    placeholder="Share any websites or apps you like, or describe your design vision"
                    className="min-h-[80px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additional-notes">Additional Notes</Label>
                  <Textarea
                    id="additional-notes"
                    name="additional-notes"
                    placeholder="Anything else you'd like me to know about your project?"
                    className="min-h-[80px]"
                  />
                </div>
              </div>
            </Card>

            <div className="flex justify-end">
              <Button type="submit" size="lg" className="px-8" disabled={isSubmitting}>
                <Send className="mr-2 h-4 w-4" />
                {isSubmitting ? "Submitting..." : "Submit Quote Request"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
