"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Instagram, Github, MessageCircle, Send } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", project: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4">Available for New Projects</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Let's Build Your Next Project Together</h2>
          <p className="text-lg text-muted-foreground">
            Ready to bring your ideas to life? Get in touch and let's discuss how I can help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-green-600 mb-2">Message Sent!</h4>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium mb-2">
                    Project Type
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="website">Website Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="ecommerce">E-Commerce Solution</option>
                    <option value="custom">Custom Development</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project requirements, timeline, and budget..."
                    rows={4}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full hover:scale-105 transition-transform !bg-primary !text-primary-foreground hover:!bg-primary/90 shadow-lg"
                  size="lg"
                  disabled={isSubmitting}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">Email</div>
                    <a
                      href="mailto:chiragbihani131206@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      chiragbihani131206@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <a href="tel:+917726823592" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 7726823592
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">WhatsApp</div>
                    <a
                      href="https://wa.me/917726823592"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
              <div className="space-y-4">
                <a
                  href="https://instagram.com/chirag_bihani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:text-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@chirag_bihani</span>
                </a>

                <a
                  href="https://github.com/Chiragbihani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>github.com/Chiragbihani</span>
                </a>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-secondary/10 to-accent/10 hover:shadow-lg transition-shadow">
              <h4 className="font-semibold mb-2">Quick Response Guarantee</h4>
              <p className="text-sm text-muted-foreground mb-4">
                I typically respond to all inquiries within 24 hours. For urgent projects, feel free to call or WhatsApp
                me directly.
              </p>
              <Link href="/quote">
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                >
                  Get Detailed Quote
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
