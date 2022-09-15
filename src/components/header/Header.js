import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

import { Background, Container, Logo, Title, Icon, NavLink } from "./HeaderStyles";

const Header = () => {
  return (
    <Background id="header">
      <Container style={{ justifyContent: "space-between" }}>
        <Container>
            <Logo src="/imgs/headshot.jpg" />
          <div>
            <Title className="gradient-text">Noah Forester - Front End Developer</Title>
            <Container style={{ marginLeft: "1rem" }}>
              <Icon href="https://www.instagram.com/n.forester7/" target="_blank" >
                <AiFillInstagram />
              </Icon>
              <Icon href="https://www.linkedin.com/in/noah-forester-ba150b243/" target="_blank">
                <AiFillLinkedin />
              </Icon>
              <Icon href="https://github.com/tinyface187" target="_blank">
                <AiFillGithub />
              </Icon>
            </Container>
          </div>
        </Container>

        <Container style={{ justifyContent: "center"}}>
          <NavLink href="#" className="gradient-text">About</NavLink>
          <NavLink href="" className="gradient-text">Projects</NavLink>
          <NavLink href="" className="gradient-text">Contact</NavLink>
        </Container>
      </Container>
    </Background>
  );
}

export default Header;