"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Globe } from "lucide-react"
import { useState } from "react"
import type { User } from "@supabase/supabase-js"
import { logout } from "@/app/logout/actions"

type NavLink = {
  href: string
  label: string
}

interface MobileNavProps {
  user: User | null
  navLinks: NavLink[]
}

export default function MobileNav({ user, navLinks }: MobileNavProps) {
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-xs">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-bold font-serif"
              onClick={() => setIsSheetOpen(false)}
            >
              <Globe className="h-6 w-6" />
              The Humanifesto
            </Link>
          </div>
          <nav className="flex-grow p-4">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="block text-lg font-medium" onClick={() => setIsSheetOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-4 border-t space-y-2">
            {user ? (
              <form action={logout}>
                <Button variant="ghost" type="submit" className="w-full">
                  Logout
                </Button>
              </form>
            ) : (
              <>
                <Button variant="ghost" className="w-full" asChild>
                  <Link href="/login" onClick={() => setIsSheetOpen(false)}>
                    Log In
                  </Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href="/join" onClick={() => setIsSheetOpen(false)}>
                    Join
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
