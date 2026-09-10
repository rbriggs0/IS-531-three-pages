import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="container flex items-center gap-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/logo-icon.svg" alt="RoomsNow logo" className="h-12 w-12 object-contain" />
          <span className="ml-2 text-lg font-semibold text-slate-800">RoomsNow</span>
        </Link>
        <div className="hidden md:block text-slate-700 font-medium">Find real-time room availability</div>
      </div>
    </header>
  )
}

