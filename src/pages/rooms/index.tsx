import Head from 'next/head'
import RoomCard from '../../components/RoomCard'
import { getOccupancy } from '../../lib/mockData'
import Link from 'next/link'
import Header from '../../components/Header'

export default function Rooms() {
  const occ = getOccupancy()

  return (
    <>
      <Head>
        <title>Rooms — BYU Library Rooms</title>
      </Head>
      <Header />
      <main className="container py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Rooms now</h1>
          <Link href="/" className="text-sm text-blue-600">Home</Link>
        </div>

        <div>
          {occ.map((o) => {
            return (
              <RoomCard
                key={o.roomId}
                id={o.roomId}
                name={o.name}
                location={o.location}
                status={o.status}
                thumbnail={o.thumbnail}
                conflict={o.conflict}
              />
            )
          })}
        </div>
      </main>
    </>
  )
}

