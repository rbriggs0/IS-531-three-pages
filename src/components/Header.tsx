import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="w-full border-b bg-white" style={{ minHeight: 92 }}>
      <div className="w-full" style={{ overflow: 'visible' }}>
        <div className="max-w-6xl mx-auto flex items-center gap-4 py-6 px-4">
          <Link href="/" className="flex items-center gap-3" >
          <div className="flex items-center" style={{ paddingTop: 6, paddingBottom: 6 }}>
            <img
              src="/images/logo-icon.svg"
              alt="RoomsNow logo"
              className="w-auto"
              style={{ display: 'block', maxHeight: 56, width: 'auto' }}
            />
          </div>
            <span className="ml-3 text-xl font-semibold text-slate-800">RoomsNow</span>
          </Link>
          <div className="hidden md:block text-slate-700 font-medium">Find real-time room availability</div>
        </div>
      </div>
    </header>
  )
}

