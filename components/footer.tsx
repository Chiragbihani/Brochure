import { Code2, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Chirag Bihani</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Professional software developer creating modern websites and mobile apps for startups and businesses.
            </p>
            <p className="text-sm text-muted-foreground">Available for freelance projects • Based in India</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary">
                  E-Commerce
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary">
                  Custom Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-primary">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary">
                  Contact
                </a>
              </li>
              <li>
                <a href="mailto:chiragbihani131206@gmail.com" className="hover:text-primary">
                  Get Quote
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2024 Chirag Bihani. All rights reserved.</p>
          <p className="text-sm text-muted-foreground flex items-center mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for amazing clients
          </p>
        </div>
      </div>
    </footer>
  )
}
