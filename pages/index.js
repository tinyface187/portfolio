import Head from 'next/head'
import Header from '../src/components/header/Header';
import Hero from '../src/components/hero/Hero';
import Projects from '../src/components/projects/Projects';
import ProjectList from "../public/projects.json";

import { Body } from "./styles/HomeStyles";

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
        <Body>
          <Projects slides={ProjectList}/>
        </Body>
      </main>

      <footer>
      </footer>
    </div>
  )
}
