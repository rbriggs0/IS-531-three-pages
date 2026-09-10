import Link from 'next/link'
import Head from 'next/head'
import HeroPreview from '../components/HeroPreview'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>BYU Library Rooms — Now</title>
      </Head>
      <Header />
      <main className="container py-12">
        {/* Header moved to top; keep spacing consistent */}
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold">Know which library rooms are free before you walk over.</h1>
          <p className="mt-3 text-lg text-slate-700">Real-time room status so you can pick a room with confidence.</p>
        </header>

        <section className="mt-6">
          <Link href="/rooms" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold">Find available rooms</Link>
        </section>

        <section className="mt-8">
          <HeroPreview />
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

