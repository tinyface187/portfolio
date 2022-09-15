import Head from 'next/head'
import Header from '../src/components/header/Header';
import Hero from '../src/components/hero/Hero';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Noah Forester - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Hero />
      </main>

      <footer>
      </footer>
    </div>
  )
}
