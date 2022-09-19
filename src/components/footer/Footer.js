import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

import { Title, Line, Content, Container, Item } from "./FooterStyles";

const Footer = () => {
  return(
    <Container>
      <div style={{ width: "750px" }}>
        <Title>
          Contact Me!
        </Title>
        <Line />
        <Content>
          <Item><AiOutlinePhone />&ensp;(541) 944 - 5116</Item>
          <Item><AiOutlineMail />&ensp;nforester351@gmail.com</Item>
        </Content>
      </div>
    </Container>
  )
}

export default Footer;