import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tighter">Get in Touch</h1>
          <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-lg">
            Have a question, suggestion, or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <Card className="w-full border-2">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Send a Message</CardTitle>
              <CardDescription>Our team will get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" type="text" placeholder="Your Name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." required className="min-h-[120px]" />
              </div>
              <Button className="w-full">Submit</Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold">Contact Information</h3>
            <p className="text-muted-foreground">
              For direct inquiries, partnership opportunities, or any other questions, you can reach out to us here.
            </p>
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <a href="mailto:tomas.cakulev@icloud.com" className="text-muted-foreground hover:text-primary">
                  tomas.cakulev@icloud.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <h4 className="font-semibold">Phone for Callbacks</h4>
                <p className="text-muted-foreground">
                  Please provide your number in the form if you'd like us to call you back.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
