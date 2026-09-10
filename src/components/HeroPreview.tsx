import React from 'react'
import Link from 'next/link'

function Badge({ color, children }: { color: string; children: React.ReactNode }) {
  return <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${color}`}>{children}</span>
}

export default function HeroPreview() {
  const rooms = [
    { id: 'r1', name: 'HBLL 101', status: 'Free', meta: 'Available now' },
    { id: 'r2', name: 'HBLL 202', status: 'Booked', meta: 'Ends in 12 min' },
    { id: 'r3', name: 'HBLL 303', status: 'Likely conflict', meta: 'Reservation present, occupied' },
    { id: 'r4', name: 'RB 12', status: 'Free', meta: 'Available now' },
  ]

  return (
    <div className="mt-6 bg-white border rounded-lg shadow-sm p-4">
      <div className="flex items-start gap-6">
        <div className="w-2/3">
          <div className="bg-slate-50 border rounded-md p-3">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-sm text-slate-500">Preview — Rooms now</div>
                <div className="text-lg font-medium">Scan and pick a room confidently</div>
              </div>
              <div className="text-xs text-slate-500">Updated just now</div>
            </div>

            <ul className="space-y-3">
              {rooms.slice(0, 3).map((r) => (
                <li key={r.id} className="flex items-center justify-between bg-white border rounded-md p-3">
                  <div>
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-xs text-slate-500">{r.meta}</div>
                  </div>
                  <div className="text-right">
                    {r.status === 'Free' && <Badge color="bg-green-100 text-green-800">{r.status}</Badge>}
                    {r.status === 'Booked' && <Badge color="bg-red-100 text-red-800">{r.status}</Badge>}
                    {r.status === 'Likely conflict' && <Badge color="bg-yellow-100 text-yellow-800">{r.status}</Badge>}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-3 flex items-center gap-2">
            <Badge color="bg-blue-50 text-blue-800">Real-time</Badge>
            <Badge color="bg-red-50 text-red-800">Conflict flags</Badge>
            <Badge color="bg-slate-50 text-slate-800">Timeline & actions</Badge>
          </div>
        </div>

        <div className="w-1/3 flex flex-col items-end">
          <div className="w-full h-32 bg-gradient-to-br from-slate-100 to-white rounded-md flex items-center justify-center text-slate-400">
            {/* stylized small device preview */}
            <div className="w-32 h-20 bg-white border rounded p-2 flex items-center justify-center text-sm font-semibold text-green-700">Free Now</div>
          </div>
          <Link href="/rooms" className="mt-4 w-full inline-block text-center bg-blue-600 text-white px-3 py-2 rounded-md font-semibold">Open rooms list</Link>
        </div>
      </div>
    </div>
  )
}

