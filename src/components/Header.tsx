import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="w-full border-b bg-white" style={{ overflow: 'visible' }}>
      <div className="container flex items-center gap-4 py-5" style={{ minHeight: 72 }}>
        <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/logo-1x1.png"
              srcSet="/images/logo-1x1.png 1x, /images/logo-1x1.png 2x"
              alt="RoomsNow logo"
              className="h-16 w-auto object-contain"
              style={{ display: 'block' }}
            />
          <span className="ml-2 text-lg font-semibold text-slate-800">RoomsNow</span>
        </Link>
        <div className="hidden md:block text-slate-700 font-medium">Find real-time room availability</div>
      </div>
    </header>
  )
}

