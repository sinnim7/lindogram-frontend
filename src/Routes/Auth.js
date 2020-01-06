import React, { useState } from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  ${props => props.theme.whiteBox}
`;

export default () => {
  const [action] = useState("logIn");

  return (
    <Wrapper>
      {action === "logIn" ? <Box>Log In</Box> : <Box>Sign Up</Box>}
    </Wrapper>
  );
};
