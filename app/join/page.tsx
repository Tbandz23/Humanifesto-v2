import { signup } from "./actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function JoinPage({ searchParams }: { searchParams: { message: string } }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-16">
      <Card className="w-full max-w-md border-2">
        <CardHeader className="text-center">
          <CardTitle className="font-serif text-3xl">Join The Humanifesto</CardTitle>
          <CardDescription>Create your profile to share and connect.</CardDescription>
        </CardHeader>
        <form>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" name="username" type="text" placeholder="your_unique_username" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="position">Position</Label>
                <Select name="position">
                  <SelectTrigger id="position">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="anthropologist">Anthropologist</SelectItem>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="researcher">Researcher</SelectItem>
                    <SelectItem value="enthusiast">Enthusiast</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" name="bio" placeholder="Tell the community a little about yourself..." />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button formAction={signup} className="w-full">
              Create Account
            </Button>
            {searchParams?.message && (
              <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center text-sm">{searchParams.message}</p>
            )}
            <p className="text-xs text-center text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="underline hover:text-primary font-semibold">
                Log In
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
