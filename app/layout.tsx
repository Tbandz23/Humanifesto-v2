import type React from "react"
import type { Metadata } from "next"
import { Inter, Lora } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { cn } from "@/lib/utils"

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontSerif = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "The Humanifesto",
  description: "Connecting humanity, one story at a time.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn("relative h-full font-sans antialiased", fontSans.variable, fontSerif.variable)}>
        <div className="flex flex-col min-h-screen bg-background">
          <Header />
          <main className="flex-grow flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
