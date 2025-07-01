import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import { logout } from "@/app/logout/actions"
import MobileNav from "./mobile-nav"

const navLinks = [
  { href: "/explore", label: "Explore" },
  { href: "/forums", label: "Forums" },
  { href: "/messages", label: "Messages" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export default async function Header() {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <header className="bg-background/80 backdrop-blur-lg border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold font-serif">
              <Globe className="h-6 w-6" />
              The Humanifesto
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-2">
            {user ? (
              <form action={logout}>
                <Button variant="ghost" type="submit">
                  Logout
                </Button>
              </form>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/login">Log In</Link>
                </Button>
                <Button asChild>
                  <Link href="/join">Join</Link>
                </Button>
              </>
            )}
          </div>
          <div className="md:hidden">
            <MobileNav user={user} navLinks={navLinks} />
          </div>
        </div>
      </div>
    </header>
  )
}
