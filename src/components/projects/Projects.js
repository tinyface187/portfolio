import React from "react";
import Carousel from "../carousel/Carousel";
import Link from "next/link";

import { Background, BarText, Body, BodyLink, Hero, MiniBar, Title } from "./ProjectStyles";
import { Button } from "../../../styles/globalStyles";

const Projects = ({slides}) => {
  return (
    <div id="projects">
      <Hero>
        <Title className="gradient-text">
          Projects
        </Title>
        <Body className="gradient-text">
          Here you can view some of my favorite projects that I have created. Press the "Go To Page" button on any one of the slides to see the corresponding site in action. You can also see all the source code, including this page's on my
        </Body>
        <BodyLink href="">GitHub!</BodyLink>
      </Hero>
      <Background>
        <Carousel slides={ slides } />
      </Background>
      <MiniBar>
        <BarText className="gradient-text">
          See all of my projects in one place!
        </BarText>
        <Link href="/projects">
          <Button style={{ marginRight: "75px", transform: "scale(0.80)" }}>
            View Now
          </Button>
        </Link>
      </MiniBar>
    </div>
  )
}

export default Projects;