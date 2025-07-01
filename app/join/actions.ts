"use server"

import { createClient } from "@/lib/supabase/server"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export async function signup(formData: FormData) {
  const origin = headers().get("origin")
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const username = formData.get("username") as string
  const position = formData.get("position") as string
  const bio = formData.get("bio") as string
  const supabase = createClient()

  // If supabase client couldn't be created, redirect with an error
  if (!supabase) {
    return redirect("/join?message=Could not authenticate user")
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
      data: {
        username: username,
        position: position,
        bio: bio,
      },
    },
  })

  if (error) {
    console.error("Signup Error:", error)
    return redirect("/join?message=Could not authenticate user")
  }

  return redirect("/join?message=Check email to continue sign in process")
}

  return redirect("/join?message=Check email to continue sign in process")
}
