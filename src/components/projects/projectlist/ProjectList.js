import React, { useEffect, useState } from "react";
import Card from "./card/Card";

import { Container, Grid, Title } from "./ProjectListStyles";

const ProjectList = ({ projects, setState, setOpen }) => {
  const [state, changeState] = useState(0);
  useEffect(() => {
    setState(projects.at(state));
  }, [state])

  return (
    <Container>
      <Title>Projects</Title>
      <Grid>
        {
          projects.map((item, index) => <Card props={item} setStateIndex={changeState} setOpen={setOpen} key={index} />)
        }
      </Grid>
    </Container>
  )
}

export default ProjectList;