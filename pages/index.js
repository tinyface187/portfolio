import Head from 'next/head'
import Header from '../src/components/home/header/Header';
import Hero from '../src/components/home/hero/Hero';
import Projects from '../src/components/home/projects/Projects';
import Footer from '../src/components/home/footer/Footer';

import { Background } from '../styles/globalStyles';

import ProjectsJSON from "../public/projects.json";

export default function Home() {
  return (
    <div>
      <Background />
      <Head>
        <title>Noah Forester - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div style={{ height: "90px" }} />
        <Hero />
        <div id="bottom">
          <Projects slides={ProjectsJSON}/>
          <Footer />
        </div>
      </main>
    </div>
  )
}
