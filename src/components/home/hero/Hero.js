import React from "react";
import Link from "next/link";

import { Section, SectionTitle, SectionBody } from "./HeroStyles";
import { Button } from "../../../../styles/globalStyles";

const Hero = () => {
  return (
    <Section style={{ marginTop: "5rem" }}>
      <div>
        <SectionTitle className="gradient-text">Welcome to my<br />Portfolio!</SectionTitle>
        <SectionBody className="gradient-text">
          Hi! My name is Noah and I am a front end web developer. Ever since I was little, <br/>I was facinated with technology and once I discovered software in highschool, I fell in love instantly. I am a fast learning, hard working individual who has dedicated years of my life to being the best programmer I can be.
        </SectionBody>
      </div>
    </Section>
  )
}

export default Hero;