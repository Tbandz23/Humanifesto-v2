import Link from "next/link"
import { Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Globe className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} The Humanifesto. All rights reserved.
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/terms-of-service"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
