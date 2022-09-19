import Head from 'next/head'
import Header from '../src/components/header/Header';
import Hero from '../src/components/hero/Hero';
import Projects from '../src/components/projects/Projects';
import ProjectList from "../public/projects.json";
import Footer from '../src/components/footer/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Noah Forester - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div style={{ height: "90px" }} />
        <Hero />
        <div id="bottom">
          <Projects slides={ProjectList}/>
          <Footer />
        </div>
      </main>
    </div>
  )
}
