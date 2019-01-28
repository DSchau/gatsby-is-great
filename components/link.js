import styled from 'styled-components'

import Button from './button'

const Link = styled(Button.withComponent(`a`))({
  textDecoration: `none`
})

Link.defaultProps = {
  target: `_blank`,
  rel: `noopener noreferer`
}

export default Link
