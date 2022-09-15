import React from "react";
import Link from "next/link";

import { Section, SectionTitle, SectionBody, Button } from "./HeroStyles"

const Hero = () => {
  return (
    <Section style={{ marginTop: "5rem" }}>
      <div>
        <SectionTitle className="gradient-text">Welcome to my<br />Portfolio!</SectionTitle>
        <SectionBody>
          Hi! My name is Noah and I am a front end web developer. Ever I was little, I was facinated with technolegy and once I discovered software in highschool, I fell in love instantly. I am a fast learning, hard working individual who has dedicated years of my life to being the best programmer I can be.
        </SectionBody>
        <Link href="/about">
         <Button>Learn More</Button>
        </Link>
      </div>
    </Section>
  )
}

export default Hero;