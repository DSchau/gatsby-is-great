import styled from 'styled-components'
import theme from 'gatsby-mdx-theme'

const Button = styled.button([], {
  backgroundColor: theme.colors.heading,
  color: `white`,
  fontSize: `32px`,
  padding: `1rem 2rem`,
  borderRadius: 0,
  border: `none`
})

export default Button
