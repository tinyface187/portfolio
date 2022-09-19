import React from "react";
import { AiOutlineMail, AiOutlinePhone, AiFillCloseCircle } from "react-icons/ai";

import { Title, Line, Content, Container, Item, CopyMsg, RemoveCpy } from "./FooterStyles";

async function copyNum() {
  navigator.clipboard.writeText("+15419445116");
  const msg = document.getElementById("copyMsg");
  msg.style.display = "flex";
  setTimeout(removeCopy, 7500);
}

function removeCopy() {
  const msg = document.getElementById("copyMsg");
  msg.style.display = "none";
}

const Footer = () => {
  return(
    <>
      <Container>
        <div style={{ width: "750px" }}>
          <Title>
            Contact Me!
          </Title>
          <Line />
          <Content>
            <Item onClick={copyNum} ><AiOutlinePhone />&ensp;(541) 944 - 5116</Item>
            <Item><AiOutlineMail />&ensp;nforester351@gmail.com</Item>
          </Content>
        </div>
      </Container>
      <CopyMsg id="copyMsg">
        Copied to Clipboard!&ensp;<RemoveCpy><AiFillCloseCircle onClick={removeCopy}/></RemoveCpy>
      </CopyMsg>
    </>
  )
}

export default Footer;