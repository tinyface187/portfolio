import React from "react";
import Card from "./card/Card";

import { Container, Grid, Title } from "./ProjectListStyles";

const ProjectList = ({ projects }) => {

  return (
    <Container>
      <Title>Projects</Title>
      <Grid>
        {
          projects.map((item, index) => <Card props={item} key={index} />)
        }
      </Grid>
    </Container>
  )
}

export default ProjectList;