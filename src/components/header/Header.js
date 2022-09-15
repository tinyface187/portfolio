import React, { useEffect } from "react";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import { Background, Container, Logo, Icon } from "./HeaderStyles";

const Header = () => {
  return (
    <Background>
      <Container>
        <div>
          <Container>
            <Link href="/">
              <a>
                <Logo src="/imgs/headshot.jpg" />
              </a>
            </Link>
            <div>
              <h1 style={{ fontSize: "18px", margin: "0", marginLeft: "1rem" }}>Noah Forester</h1>
              <Container style={{ marginLeft: "1rem" }}>
                {/* LinkedIn */}
                <Icon href="/">
                  <AiFillLinkedin />
                </Icon>
                {/* GitHub */}
                <Icon href="/">
                  <AiFillGithub />
                </Icon>
              </Container>
            </div>
          </Container>
        </div>
      </Container>
    </Background>
  );
}

export default Header;