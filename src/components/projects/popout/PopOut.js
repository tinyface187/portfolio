import React from "react";
import { Button } from "../../../../styles/globalStyles";

import { Container, Preview, Divider, Title, SubTitle, Text, Nav } from "./PopOutStyles";

const PopOut = ({ project }) => {
  return (
    <Container id="popOut">
      <Title>{project.Name}</Title>
      <Preview src={project.Preview} />
      <Divider />
      <Text>{project.About.Purpose}</Text>
      <div style={{ display: "flex" }}>
        <div>
          <SubTitle>Challenges</SubTitle>
          { project.About.Challenges.map( (item) => <Text>- {item}</Text> ) }
        </div>
        <div>
          <SubTitle>Tools Used</SubTitle>
          { project.About.Tools.map( (item) => <Text>- {item}</Text> ) }
        </div>
      </div>
      <Nav>
        <Button href={project.About.GitHub}>GitHub Repo</Button>
        <Button href={project.Link}>Go To Page</Button>
      </Nav>
    </Container>
  )
}

export default PopOut;