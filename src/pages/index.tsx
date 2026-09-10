import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>BYU Library Rooms — Now</title>
      </Head>
      <main className="container py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">See which BYU library rooms are actually free now</h1>
          <p className="mt-2 text-slate-600">Avoid double bookings and wasted trips — find rooms that are truly available or see conflict warnings.</p>
        </header>

        <section className="mt-6">
          <Link href="/rooms">
            <a className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold">Find rooms near me now</a>
          </Link>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-3">How it helps</h2>
          <ul className="list-disc pl-5 text-slate-600">
            <li>Real-time occupancy signals</li>
            <li>Conflict flags when a reservation appears superseded</li>
            <li>Quick timeline and actions to report or claim</li>
          </ul>
        </section>
      </main>
    </>
  )
}

