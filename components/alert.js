import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;

  background-color: #aaa;
`

const Message = styled.h1`
  color: #222;
`

export default function Alert({ message }) {
  return (
    <Container>
      <Message>{JSON.stringify(message, null, 2)}</Message>
    </Container>
  )
}
