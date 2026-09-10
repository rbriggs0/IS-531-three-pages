import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="container flex items-center gap-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/logo-1x1.png" alt="RoomsNow logo" className="h-10 w-10 object-contain" />
          <span className="sr-only">RoomsNow</span>
        </Link>
        <div className="hidden md:block text-slate-700 font-medium">Find real-time room availability</div>
      </div>
    </header>
  )
}

