import Head from 'next/head'
import RoomCard from '../../components/RoomCard'
import { getOccupancy, rooms } from '../../lib/mockData'
import Link from 'next/link'

export default function Rooms() {
  const occ = getOccupancy()
  const byId = Object.fromEntries(rooms.map((r) => [r.id, r]))

  return (
    <>
      <Head>
        <title>Rooms — BYU Library Rooms</title>
      </Head>
      <main className="container py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Rooms now</h1>
          <Link href="/"><a className="text-sm text-blue-600">Home</a></Link>
        </div>

        <div>
          {occ.map((o) => {
            const r = byId[o.roomId]
            const conflict = o.status === 'uncertain' || (o.status === 'occupied' && !o.hasCurrentRes)
            return <RoomCard key={o.roomId} id={r.id} name={r.name} location={r.location} status={o.status} conflict={conflict} />
          })}
        </div>
      </main>
    </>
  )
}

