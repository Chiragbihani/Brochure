import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Globe, Smartphone, ShoppingCart, Layers } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const websiteServices = [
    {
      title: "Landing Page / Portfolio",
      price: "₹8,000 – ₹15,000",
      features: ["Responsive Design", "Contact Forms", "SEO Optimized", "Fast Loading"],
      icon: Globe,
    },
    {
      title: "Business Website",
      price: "₹20,000 – ₹35,000",
      features: ["Multi-page Design", "CMS Integration", "Analytics Setup", "Social Media Integration"],
      icon: Layers,
    },
    {
      title: "E-Commerce Website",
      price: "₹40,000 – ₹75,000",
      features: ["Payment Gateway", "Product Management", "Order Tracking", "Admin Dashboard"],
      icon: ShoppingCart,
    },
  ]

  const appServices = [
    {
      title: "Basic App",
      price: "₹25,000 – ₹40,000",
      features: ["Static Content", "Basic Navigation", "Offline Support", "Cross-platform"],
      icon: Smartphone,
    },
    {
      title: "Dynamic App",
      price: "₹50,000 – ₹1,00,000",
      features: ["API Integration", "Database", "User Authentication", "Push Notifications"],
      icon: Smartphone,
    },
    {
      title: "Advanced App",
      price: "₹1,20,000+",
      features: ["E-Commerce Features", "Real-time Updates", "Advanced Analytics", "Custom Backend"],
      icon: Smartphone,
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Services & Pricing</h2>
          <p className="text-lg text-muted-foreground">
            Transparent pricing based on market standards. All projects include responsive design, testing, and
            deployment support.
          </p>
        </div>

        <div className="space-y-16">
          {/* Website Development */}
          <div>
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-4">
                Website Development
              </Badge>
              <h3 className="text-2xl font-bold">Professional Websites</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {websiteServices.map((service, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 border-2 hover:border-primary/20"
                >
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href="/quote">
                    <Button
                      className="w-full bg-transparent hover:bg-primary hover:text-primary-foreground transition-colors"
                      variant="outline"
                    >
                      Get Quote
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>

          {/* Mobile App Development */}
          <div>
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-4">
                Mobile App Development
              </Badge>
              <h3 className="text-2xl font-bold">Cross-Platform Apps</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {appServices.map((service, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl hover:shadow-secondary/10 hover:-translate-y-2 transition-all duration-300 border-2 hover:border-secondary/20"
                >
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                    <div className="text-2xl font-bold text-secondary">{service.price}</div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href="/quote">
                    <Button
                      className="w-full bg-transparent hover:bg-secondary hover:text-secondary-foreground transition-colors"
                      variant="outline"
                    >
                      Get Quote
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
            <h4 className="text-xl font-semibold mb-2">Custom Quotes Available</h4>
            <p className="text-muted-foreground mb-4">
              Have a unique project in mind? Let's discuss your requirements and create a custom solution.
            </p>
            <Link href="/quote">
              <Button className="hover:scale-105 transition-transform">Request Custom Quote</Button>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  )
}
