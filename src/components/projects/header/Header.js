import React from "react";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub, AiOutlineArrowLeft } from "react-icons/ai";

import { Background, Container, Logo, Title, Icon, NavLink } from "../../home/header/HeaderStyles";

const Header = () => {
  return (
    <Background id="header">
      <Container style={{ justifyContent: "space-between" }}>
        <Container>
          <Logo src="/imgs/headshot.jpg" />
          <div>
            <Title className="gradient-text">Noah Forester - Front End Developer</Title>
            <Container style={{ marginLeft: "1rem" }}>
              <Icon href="https://www.linkedin.com/in/noah-forester-ba150b243/" target="_blank">
                <AiFillLinkedin />
              </Icon>
              <Icon href="https://github.com/tinyface187" target="_blank">
                <AiFillGithub />
              </Icon>
            </Container>
          </div>
        </Container>

        <Container style={{ justifyContent: "center" }}>
          <AiOutlineArrowLeft style={{ color: "rgb(130, 188, 250)" }} />
          <Link href="/"><NavLink className="gradient-text" style={{ paddingLeft: "0px", marginRight: "100px" }}>Back To Home</NavLink></Link>
        </Container>
      </Container>
    </Background>
  )
}

export default Header;