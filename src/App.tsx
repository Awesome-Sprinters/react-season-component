import React from "react";
import { Season } from "./lib";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Season>
        <button>test</button>
      </Season>
    </Container>
  );
}

export default App;

// 사용자 중심에서 생각하기

const Container = styled.nav``;
