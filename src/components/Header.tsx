import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="container flex items-center gap-4 py-6" style={{ overflow: 'visible' }}>
        <Link href="/" className="flex items-center gap-3" >
          <div className="flex items-center" style={{ paddingTop: 2, paddingBottom: 2 }}>
            <img
              src="/images/logo-icon.svg"
              alt="RoomsNow logo"
              className="h-16 w-auto object-contain"
              style={{ display: 'block' }}
            />
          </div>
          <span className="ml-3 text-lg font-semibold text-slate-800">RoomsNow</span>
        </Link>
        <div className="hidden md:block text-slate-700 font-medium">Find real-time room availability</div>
      </div>
    </header>
  )
}

