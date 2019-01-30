import React from 'react'
import styled from 'styled-components'

const Container = styled.span`
  display: inline-block;
  font-size: ${props => `${props.size}px`};
`

export default function Emoji({ ariaLabel, children, size, ...rest }) {
  return <Container role="img" aria-label={ariaLabel} size={size} {...rest}>{children}</Container>
}
