import React from 'react'
import type { Reservation } from '../lib/mockData'

export default function Timeline({ reservations }: { reservations: Reservation[] }) {
  return (
    <div className="border rounded p-3">
      <div className="font-medium mb-2">Upcoming & current reservations</div>
      <ul className="space-y-2 text-sm">
        {reservations.map((r) => (
          <li key={r.id} className="flex justify-between">
            <div>
              <div className="font-semibold">{r.reserverName ?? 'Reserved'}</div>
              <div className="text-slate-500">{new Date(r.startISO).toLocaleTimeString()} — {new Date(r.endISO).toLocaleTimeString()}</div>
            </div>
            <div className="text-xs text-slate-600">{r.id}</div>
          </li>
        ))}
        {reservations.length === 0 && <li className="text-slate-500">No reservations</li>}
      </ul>
    </div>
  )
}

