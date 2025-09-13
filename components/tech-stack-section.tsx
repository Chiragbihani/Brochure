import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TechStackSection() {
  const techCategories = [
    {
      category: "Frontend",
      color: "bg-blue-500",
      technologies: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Mobile",
      color: "bg-green-500",
      technologies: ["Flutter", "React Native", "Java/Kotlin", "Swift"],
    },
    {
      category: "Backend",
      color: "bg-purple-500",
      technologies: ["Node.js", "Django", "Spring Boot", "Express.js"],
    },
    {
      category: "Database",
      color: "bg-orange-500",
      technologies: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
    },
    {
      category: "Tools & Others",
      color: "bg-pink-500",
      technologies: ["Git", "Docker", "AWS", "Vercel", "WordPress"],
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Tech Stack</h2>
          <p className="text-lg text-muted-foreground">
            Modern technologies and frameworks I use to build robust, scalable solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-2 hover:border-primary/20"
            >
              <div className="flex items-center mb-4">
                <div className={`w-3 h-3 rounded-full ${category.color} mr-3`} />
                <h3 className="text-lg font-semibold">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Always learning and adapting to new technologies to deliver the best solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
