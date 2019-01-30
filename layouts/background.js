import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;

  padding: 32px;

  @media only screen and (min-width: 768px) {
    padding: 128px;
  }

  background-color: ${props => props.backgroundColor};
`

export default function Background(color) {
  return ({ children }) => (
    <Container backgroundColor={color}>{children}</Container>
  )
}