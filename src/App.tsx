import "./index.css";

import {
  BACKGROUND_IMG,
  ME,
  MOON_IMG,
  MOUNTAIN_IMG,
  ROAD_IMG,
} from "./utils/image";

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #0a2a43;
  min-height: 2000px;
`;

const Section = styled.div`
  background: #0a2a43;
  position: relative;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, #0a2a43, transparent);
    z-index: 10000;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0a2a43;
    z-index: 10000;
    mix-blend-mode: color;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const BackgroundImage = styled(StyledImage).attrs({
  src: BACKGROUND_IMG,
  alt: "background",
})``;
const MoonImage = styled(StyledImage).attrs({
  src: MOON_IMG,
  alt: "moon",
})``;
const MountainImage = styled(StyledImage).attrs({
  src: MOUNTAIN_IMG,
  alt: "mountain",
})``;
const RoadImage = styled(StyledImage).attrs({
  src: ROAD_IMG,
  alt: "road",
})`
  bottom: 0;
  z-index: 2;
`;
const MeImage = styled(StyledImage).attrs({
  src: ME,
  alt: "me",
})`
  position: absolute;
  top: 200px;
  right: 100px;
  z-index: 1;
  width: 50%;
  height: 50%;
`;
const StyledText = styled.h2`
  position: relative;
  z-index: 1;
  color: #fff;
  font-size: 10em;
  text-align: center;
  width: 100%;

  &:before {
    content: "";
    position: absolute;
    bottom: -80px;
    left: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient(to top, #fff, transparent);
  }
`;

function App() {
  const bg = React.useRef(null);
  const moon = React.useRef(null);
  const mountain = React.useRef(null);
  const road = React.useRef(null);
  const me = React.useRef(null);
  const text = React.useRef(null);
  React.useEffect(() => {
    window.addEventListener("scroll", (): void => {
      const value = window.scrollY;
      console.log(value);

      // @ts-ignore
      bg.current.style.top = `${value * 0.5}px`;
      // @ts-ignore
      moon.current.style.left = `-${value * 0.5}px`;
      // @ts-ignore
      mountain.current.style.top = `${value * 0.2}px`;
      // @ts-ignore
      road.current.style.top = `${value * 0.2}px`;
      // @ts-ignore
      text.current.style.top = `${value * 0.5}px`;
      // @ts-ignore
      me.current.style.top = `${200 + value}px`;
    });
  }, []);
  return (
    <Container>
      <Section>
        <BackgroundImage ref={bg} />
        <MoonImage ref={moon} />
        <MountainImage ref={mountain} />
        <RoadImage ref={road} />
        <StyledText ref={text}>Good night, Ethan</StyledText>
        <MeImage ref={me} />
      </Section>
      <p>Content</p>
    </Container>
  );
}

export default App;
