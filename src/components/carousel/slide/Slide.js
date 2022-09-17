import React from "react";

import { Card, TextBox, Title, Description } from "./SlideStyles";
import { Button } from "../../../../styles/globalStyles";

export const Slide = ({props}) => {
  return (
    <Card style={{ backgroundImage: `url(${props.Preview})` }}>
      <TextBox>
        <div className="gradient-text" style={{ width: "65%" }}>
          <Title>{props.Name}</Title>
          <Description>{props.Description}</Description>
        </div>
        <a href={props.Link}>
          <Button>Go To Page</Button>
        </a>
      </TextBox>
    </Card>
  )
}