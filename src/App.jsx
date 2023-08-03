import React, { useState } from "react";
import styled from "styled-components";
import Show from "./Components/Show";
import Navbar from "./Components/Navbar/Navbar";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  /* background-color: #000000; */
`;
const Section = styled.div`
  height: 50vh;
  position: relative;
  margin-top: 0;
  top: 11vh;
  scroll-behavior: smooth;
  /* background-color: #e8f1f1; */
  width: 100%;
  scroll-snap-type: y mandatory;
  scrollbar-width: none; //that is for fire fox
  &::-webkit-scrollbar {
    // for other browser
    display: none;
  }
`;
const App = () => {
  return (
    <Container>
      <Navbar />
      <Section>
        <Show />
      </Section>
    </Container>
  );
};

export default App;
