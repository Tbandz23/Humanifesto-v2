"use client"

import { createBrowserClient } from "@supabase/ssr"

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !anonKey) {
    console.warn("[Supabase Client] URL or Anon Key is missing. Supabase client not created.")
    return null
  }

  return createBrowserClient(url, anonKey)
}