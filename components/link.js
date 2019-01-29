import styled from 'styled-components'

import Button from './button'

const Link = styled(Button.withComponent(`a`))(props => ({
  cursor: `pointer`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: props.justifyContent || `center`,
  textDecoration: `none`,
  ...props.large && {
    fontSize: `64px`
  }
}))

Link.defaultProps = {
  target: `_blank`,
  rel: `noopener noreferer`
}

export default Link
