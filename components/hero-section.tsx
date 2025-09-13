"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Smartphone } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-8">
            <div className="p-3 rounded-full bg-primary/10">
              <Code className="h-8 w-8 text-primary" />
            </div>
            <div className="p-3 rounded-full bg-secondary/10">
              <Smartphone className="h-8 w-8 text-secondary" />
            </div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
            Modern Websites &<span className="text-primary"> Scalable Apps</span>
            <br />
            Built for Your Growth
          </h1>

          <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
            Professional software developer helping startups, small businesses, and individuals launch impactful digital
            solutions at competitive prices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 hover:scale-105 transition-transform"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-transparent hover:scale-105 transition-transform"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Free Consultation
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">2-4 Weeks</div>
              <div className="text-sm text-muted-foreground">Average Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
