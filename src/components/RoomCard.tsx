import Link from 'next/link'
import React from 'react'

type Props = {
  id: string
  name: string
  location: string
  status: 'free' | 'occupied' | 'uncertain'
  conflict?: boolean
}

export default function RoomCard({ id, name, location, status }: Props) {
  const color =
    status === 'free' ? 'bg-green-100 text-green-800' : status === 'occupied' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'

  return (
    <Link href={`/rooms/${id}`} className="block border rounded-md p-4 hover:shadow-sm transition-colors mb-3">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-slate-500">{location}</div>
        </div>
        <div className="flex items-center gap-2">
          {conflict && <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Likely conflict</span>}
          <div className={`px-3 py-1 rounded-full text-sm ${color}`}>{status.toUpperCase()}</div>
        </div>
      </div>
      <div className="mt-3 text-xs text-slate-600">Tap to view timeline and resolve conflicts</div>
    </Link>
  )
}

