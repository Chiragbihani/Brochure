"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Smartphone, Star, Users, Clock, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/5 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent/5 rounded-full blur-xl animate-pulse delay-500" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Badge className="bg-green-100 text-green-800 border-green-200 hover:bg-green-200 transition-colors">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Available for New Projects
            </Badge>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <div className="p-4 rounded-2xl bg-primary/10 backdrop-blur-sm border border-primary/20 hover:scale-110 transition-transform duration-300">
              <Code className="h-10 w-10 text-primary" />
            </div>
            <div className="p-4 rounded-2xl bg-secondary/10 backdrop-blur-sm border border-secondary/20 hover:scale-110 transition-transform duration-300">
              <Smartphone className="h-10 w-10 text-secondary" />
            </div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6 leading-tight">
            Modern Websites &
            <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              {" "}
              Scalable Apps
            </span>
            <br />
            <span className="text-3xl lg:text-5xl text-muted-foreground">Built for Your Growth</span>
          </h1>

          <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional software developer helping startups, small businesses, and individuals launch impactful digital
            solutions at competitive prices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="text-lg px-8 py-6 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-gradient-to-r from-primary to-primary/90"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-background/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 border-2 hover:border-primary/50"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Free Consultation
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-2">
                <Award className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">10+</div>
              <div className="text-sm text-muted-foreground font-medium">Projects Delivered</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-2">
                <Star className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground font-medium">Client Satisfaction</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-2">
                <Users className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground font-medium">Support Available</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-2">
                <Clock className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">2-4 Weeks</div>
              <div className="text-sm text-muted-foreground font-medium">Average Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
