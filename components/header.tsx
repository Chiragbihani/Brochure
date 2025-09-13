import { Button } from "@/components/ui/button"
import { Code2, Menu } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-[60] w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">Chirag Bihani</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </a>
          <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
            Portfolio
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/quote">
            <Button className="hidden md:inline-flex hover:scale-105 transition-transform bg-primary text-primary-foreground hover:bg-primary/90">
              Get Free Quote
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
