import Head from 'next/head'
import Header from '../src/components/header/Header';
import Hero from '../src/components/hero/Hero';
import Projects from '../public/projects.json';
import { Carousel } from '../src/components/carousel/Carousel';


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

        <Carousel slides={Projects} />
      </main>

      <footer>
      </footer>
    </div>
  )
}
