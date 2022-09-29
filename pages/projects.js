import React, { useEffect, useState } from "react";
import Header from "../src/components/projects/header/Header";
import { BsChevronBarRight, BsChevronBarLeft } from "react-icons/bs";
import ProjectList from "../src/components/projects/projectlist/ProjectList";

import { Container, Backdrop, Sidebar, SbIcon, Shadow, SidebarBg } from "../styles/ProjectStyles";
import { Background } from "../styles/globalStyles";

import ProjectsJSON from "../public/projects.json";
import PopOut from "../src/components/projects/popout/PopOut";


const Projects = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(ProjectsJSON.at(0));

  useEffect(() => {
    const Right =  document.getElementById("sideBarClosed");
    const Left = document.getElementById("sideBarOpen");
    const popOut = document.getElementById("popOut");
    if (open) {
      Right.style.display = "none";
      Left.style.display = "block";
      popOut.style.display = "block";
    } else {
      Right.style.display = "block";
      Left.style.display = "none";
      popOut.style.display = "none";
    }
  }, [open])

  return (
    <>
    <Background />
      <Container>
        <Header />
        <Backdrop>
          <SidebarBg>
            <Sidebar>
              <PopOut project={ current }/>
              <SbIcon onClick={() => {
                setOpen(!open);
              }}>
                <BsChevronBarRight id="sideBarClosed" />
                <BsChevronBarLeft id="sideBarOpen" style={{ display: "none" }}/>
              </SbIcon>
            </Sidebar>
          </SidebarBg>

          <ProjectList projects={ProjectsJSON} setState={setCurrent} setOpen={setOpen} />
        </Backdrop>
      </Container>
      <Shadow />
    </>
  )
}

export default Projects;