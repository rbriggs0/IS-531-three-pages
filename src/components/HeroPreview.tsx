import React from 'react'
import { getOccupancy } from '../lib/mockData'
import RoomCard from './RoomCard'

function Chip({ children, color }: { children: React.ReactNode; color: string }) {
  return <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${color}`}>{children}</span>
}

export default function HeroPreview() {
  const occ = getOccupancy()
  const preview = occ.slice(0, 3)

  return (
    <div className="mt-6 bg-white border rounded-lg shadow-sm p-4">
      <div className="mb-3">
        <div className="text-sm text-slate-500">Preview — Rooms now</div>
        <div className="text-lg font-medium">Scan and pick a room confidently</div>
      </div>

      <div className="space-y-3">
        {preview.map((o) => (
          <RoomCard key={o.roomId} id={o.roomId} name={o.name} location={o.location} status={o.status} thumbnail={o.thumbnail} conflict={o.conflict} />
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2">
        <Chip color="bg-blue-50 text-blue-800">Real-time</Chip>
        <Chip color="bg-yellow-50 text-yellow-800">Conflict flags</Chip>
        <Chip color="bg-slate-50 text-slate-800">Timeline & actions</Chip>
      </div>
    </div>
  )
}

