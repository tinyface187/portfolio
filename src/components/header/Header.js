import React, { useEffect } from "react";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

import { Background, Container, Logo, Title, Icon, NavLink } from "./HeaderStyles";

const Header = () => {
  return (
    <Background>
      <Container style={{ justifyContent: "space-between" }}>
        <Container>
          <Link href="/">
            <a>
              <Logo src="/imgs/headshot.jpg" />
            </a>
          </Link>
          <div>
            <Title>Noah Forester - Front End Developer</Title>
            <Container style={{ marginLeft: "1rem" }}>
              <Icon href="https://www.instagram.com/n.forester7/" target="_blank">
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
          <Link href="/">
            <NavLink>Home</NavLink>
          </Link>
          <Link href="/projects">
            <NavLink>Projects</NavLink>
          </Link>
          <Link href="/about-me">
            <NavLink>About</NavLink>
          </Link>
          <Link href="/contact">
            <NavLink>Contact</NavLink>
          </Link>
        </Container>
      </Container>
    </Background>
  );
}

export default Header;