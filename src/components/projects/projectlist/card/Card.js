import React from "react";

import { Body, Container, Image, Title, Text } from "./CardStyles";
import { Button } from "../../../../../styles/globalStyles";

const Card = ({ props, setStateIndex, setOpen }) => {
  return (
    <Container onClick={() => { 
      setStateIndex(props.Id); 
      setOpen(true);
    }}>
      <Image src={props.Preview} />
      <Body>
        <Title>{props.Name}</Title>
        <Text>{props.Description}</Text>
        <a href={props.Link} target="_blank" rel="noreferrer"><Button style={{ transform: "scale(0.75)", position: "relative", right: "15px" }}>Go To Page</Button></a>
      </Body>
    </Container>
  )
}

export default Card;