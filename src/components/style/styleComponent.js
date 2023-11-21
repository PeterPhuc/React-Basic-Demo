import React from "react";
import styled from 'styled-components';
class StyledComponentDemo extends React.Component {
    render() {
      return (
        <Wrapper>
          <Title>
            Hello World, this is my first styled component!
          </Title>
        </Wrapper>
      )
    }
  }
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;
export default StyledComponentDemo;
