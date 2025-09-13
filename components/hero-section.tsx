"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Smartphone, Star, Users, Clock, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Badge className="px-4 py-2 bg-green-100 text-green-800 border-green-200 hover:bg-green-200 transition-colors">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Available for New Projects
            </Badge>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <div className="group p-4 rounded-2xl bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:rotate-3">
              <Code className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <div className="group p-4 rounded-2xl bg-secondary/10 hover:bg-secondary/20 transition-all duration-300 hover:scale-110 hover:-rotate-3">
              <Smartphone className="h-10 w-10 text-secondary group-hover:scale-110 transition-transform" />
            </div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6 leading-tight">
            Modern Websites &<br />
            <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Scalable Apps
            </span>
            <br />
            <span className="text-2xl lg:text-4xl font-medium text-muted-foreground">Built for Your Growth</span>
          </h1>

          <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional software developer helping startups, small businesses, and individuals launch impactful digital
            solutions at competitive prices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-gradient-to-r from-primary to-primary/90"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 bg-background/80 backdrop-blur-sm hover:scale-105 transition-all duration-300 border-2 hover:border-primary/50 hover:bg-primary/5"
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
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-2">
                <Star className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
              </div>
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-2">
                <Users className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
              </div>
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-2">
                <Clock className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
              </div>
              <div className="text-2xl font-bold text-primary">2-4 Weeks</div>
              <div className="text-sm text-muted-foreground">Average Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
