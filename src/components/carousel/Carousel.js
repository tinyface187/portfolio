import React, { useState } from "react";
import { Slide } from "./slide/Slide";
import "vanilla-tilt";

import { Container, Sub, Next, Active, Prev } from "./CarouselStyles";

export const Carousel = ({ slides }) => {
  const [state, setState] = useState([2, 1, 0, (slides.length - 1)]);

  function toNext() {
    setState(state.map(element => 
      element === slides.length - 1 ? 0 : element + 1
    ));
  }

  function toPrev() {
    setState(state.map(element => 
      element === 0 ? slides.length - 1 : element - 1
    ));
  }

  return (
    <Container id="carouselContainer">
      <Sub>
        <Slide props={ slides.at(state.at(0)) } />
      </Sub>
      <Next onClick={ toNext }>
        <Slide props={ slides.at(state.at(1)) } />
      </Next>
      <Active>
        <div data-tilt data-tilt-full-page-listening data-tilt-reverse="true" data-tilt-reset="false">
          <Slide props={ slides.at(state.at(2)) } />
        </div>
      </Active>
      <Prev onClick={ toPrev }>
        <Slide props={ slides.at(state.at(3)) } />
      </Prev>
    </Container>
  )
};