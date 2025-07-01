import { login } from "./actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function LoginPage({ searchParams }: { searchParams: { message: string } }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-24">
      <Card className="w-full max-w-sm border-2">
        <form>
          <CardHeader className="text-center">
            <CardTitle className="font-serif text-3xl">Welcome Back</CardTitle>
            <CardDescription>Log in to continue your journey.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button formAction={login} className="w-full">
              Sign In
            </Button>
            {searchParams?.message && (
              <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center text-sm">{searchParams.message}</p>
            )}
            <p className="text-xs text-center text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/join" className="underline hover:text-primary font-semibold">
                Join
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
