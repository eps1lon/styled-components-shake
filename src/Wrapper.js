import React from "react";
import styled from "styled-components";

export default function Wrapper() {
  // side-effect free module even if styled has side-effects
  const Component = styled.div``;
  return <Component />;
}
