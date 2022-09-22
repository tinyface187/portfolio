import React, { useState } from "react";
import Header from "../src/components/projects/header/Header";
import { BsChevronBarRight, BsChevronBarLeft } from "react-icons/bs";
import ProjectList from "../src/components/projects/projectlist/ProjectList";

import { Container, Backdrop, Sidebar, SbIcon, Shadow, SidebarBg } from "../styles/ProjectStyles";
import { Background } from "../styles/globalStyles";

import ProjectsJSON from "../public/projects.json";


const Projects = () => {
  const [open, setOpen] = useState(true);

  function toggleOpen() {
    const Right =  document.getElementById("sideBarClosed");
    const Left = document.getElementById("sideBarOpen");
    setOpen(!open);
    if (open) {
      Right.style.display = "none";
      Left.style.display = "block";
    } else {
      Right.style.display = "block";
      Left.style.display = "none";
    }
  }

  return (
    <>
    <Background />
      <Container>
        <Header />
        <Backdrop>
          <SidebarBg>
            <Sidebar>
              <SbIcon onClick={toggleOpen}>
                <BsChevronBarRight id="sideBarClosed" />
                <BsChevronBarLeft id="sideBarOpen" style={{ display: "none" }}/>
              </SbIcon>
            </Sidebar>
          </SidebarBg>

          <ProjectList projects={ProjectsJSON} />
        </Backdrop>
      </Container>
      <Shadow />
    </>
  )
}

export default Projects;