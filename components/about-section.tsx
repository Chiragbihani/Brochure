import { Card } from "@/components/ui/card"
import { User, Rocket, Target } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            I'm Chirag, a professional software developer helping startups, small businesses, and individuals launch
            impactful websites and apps at competitive prices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Professional Developer</h3>
            <p className="text-muted-foreground">
              Experienced in modern web and mobile technologies with a focus on clean, scalable code and user-friendly
              interfaces.
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
            <p className="text-muted-foreground">
              Quick turnaround times without compromising quality. Most projects delivered within 2-4 weeks.
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Affordable Pricing</h3>
            <p className="text-muted-foreground">
              Competitive rates tailored for startups and small businesses. Custom quotes available for unique
              requirements.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
