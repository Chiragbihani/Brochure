import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      company: "StartupXYZ",
      content:
        "Chirag helped us launch our business website in record time. The design is modern, responsive, and exactly what we needed. Highly recommend!",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      company: "Local Restaurant",
      content:
        "Our restaurant website has increased online orders by 40%. Chirag delivered quality work within budget and timeline.",
      rating: 5,
    },
    {
      name: "Anita Patel",
      company: "Fashion Boutique",
      content:
        "The e-commerce platform Chirag built for us is user-friendly and has all the features we needed. Great communication throughout the project.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground">
            Don't just take my word for it — here's what my clients say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-muted-foreground mb-4 italic">"{testimonial.content}"</blockquote>

              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.company}</div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold">4.9/5</span>
            <span>Average Client Rating</span>
          </div>
        </div>
      </div>
    </section>
  )
}
