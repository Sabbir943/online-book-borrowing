import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'

export async function middleware(request) {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  console.log(session)

  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next() // ✅ Allow request to proceed if session exists
}

export const config = {
  matcher: ["/bookDetails/:id*", '/myProfile'],
}