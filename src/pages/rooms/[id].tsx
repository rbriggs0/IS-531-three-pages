import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Timeline from '../../components/Timeline'
import { reservations, rooms } from '../../lib/mockData'

export default function RoomDetail() {
  const router = useRouter()
  const { id } = router.query
  const room = rooms.find((r) => r.id === id)
  const roomRes = reservations.filter((res) => res.roomId === id)

  if (!room) {
    return (
      <Header />
      <main className="container py-8">
        <p>Room not found. <Link href="/rooms" className="text-blue-600">Back</Link></p>
      </main>
    )
  }

  return (
    <>
      <Head>
        <title>{room.name} — BYU Library Rooms</title>
      </Head>
      <main className="container py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">{room.name}</h1>
          <Link href="/" className="text-sm text-blue-600">Home</Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <div className="mb-4">
              <strong>Location:</strong> {room.location}
            </div>
            <div className="mb-4">
              <strong>Capacity:</strong> {room.capacity}
            </div>
            <div className="mb-4">
              <button className="bg-red-600 text-white px-4 py-2 rounded mr-2">Report occupancy</button>
              <button className="bg-green-600 text-white px-4 py-2 rounded">Claim reservation</button>
            </div>
          </div>

          <div>
            <Timeline reservations={roomRes} />
          </div>
        </div>
      </main>
    </>
  )
}

