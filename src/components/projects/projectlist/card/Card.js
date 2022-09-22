import React from "react";

import { Body, Container, Image, Title, Text } from "./CardStyles";
import { Button } from "../../../../../styles/globalStyles";

const Card = ({ props, index }) => {
  return (
    <Container>
      <Image src={props.Preview} />
      <Body>
        <Title>{props.Name}</Title>
        <Text>{props.Description}</Text>
        <a href={props.Link}><Button style={{ transform: "scale(0.75)", position: "relative", right: "15px" }}>Go To Page</Button></a>
      </Body>
    </Container>
  )
}

export default Card;