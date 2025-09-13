"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function PortfolioSection() {
  const projects = [
    {
      title: "Loan App Management",
      description: "Full-stack Loan management solution with payment integration and admin dashboard.",
      image: "/LoanApp",
      technologies: ["Angular", "Node.js", "Json-Server", "Stripe"],
      type: "Website",
      
      githubUrl: "https://github.com/Chiragbihani/loan-app",
    },
    {
      title: "Route Optimization App",
      description: "Cross-platform mobile app for finding the shortest route and best mode of transport",
      image: "/Route_opt.jpg",
      technologies: ["React Native", "Express","API"],
      type: "Mobile App",
      
      githubUrl: "https://github.com/Chiragbihani/Route-optimization-for-Cabs-and-Public-Transports",
    },
    {
      title: "College ERP Master",
      description: "Responsive Full Stack College ERP management system , for both students and  Teachers.",
      image: "/College_ERP.png",
      technologies: ["Jupyter","JavaScript"],
      type: "Website",
      githubUrl: "https://github.com/Chiragbihani/Student-Database-Management",
    },
    
  ]

  return (
    <section id="portfolio" className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Portfolio Preview</h2>
          <p className="text-lg text-muted-foreground">
            From startups to businesses — I build solutions tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 border-2 hover:border-primary/20"
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant={project.type === "Website" ? "default" : "secondary"}>{project.type}</Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="hover:bg-secondary hover:text-secondary-foreground transition-colors"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="hover:scale-105 transition-transform"
            onClick={() => window.open("https://chirag-bihani.vercel.app/", "_blank")}
          >
            View Full Portfolio
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
