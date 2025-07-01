"use server"

import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export async function logout() {
  const supabase = createClient()
  // Only try to sign out if the client was created
  if (supabase) {
    await supabase.auth.signOut()
  }
  return redirect("/")
}
