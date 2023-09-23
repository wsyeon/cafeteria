import React from "react";
import Lunch from "./Lunch";
import styled from "styled-components";

const App = () => {
  return (
    <Div>
      <Lunch />
    </Div>
  );
};

export default App;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2ebeb;
`;
