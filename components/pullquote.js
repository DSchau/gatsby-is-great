import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import theme from 'gatsby-mdx-theme'

import { StarOrnament } from "./ornaments"

const PullquoteRoot = styled.blockquote`
  border: 1px solid #ebddf2;
  border-radius: 8px;
  background-color: white;
  color: ${theme.colors.heading};
  font-size: ${props => props.fontSize}px;
  font-weight: bold;
  line-height: 2;
  padding: 2rem 3rem;
  position: relative;
  text-align: left;
  margin: 2.5rem 0;
  /* needed for overriding typography.js style "p *:last-child {"" */
  p > & {
    margin: 2.5rem 0;
  }
  @media only screen and (min-width: 768px) {
    line-height: 1.7;
    margin: 2.5rem -3.5rem;
    padding: 2.8rem 3.5rem;
    p > & {
      margin: 2.5rem -3.5rem;
    }
  }
`

const Citation = styled.cite`
  display: block;
  font-style: italic;
  font-weight: normal;
  margin-top: 1rem;
  text-align: right;
`

const ExternalLink = styled.a`
  color: inherit;
`

ExternalLink.defaultProps = {
  target: '_blank',
  rel: 'noopener noreferer'
}

const Star = styled(StarOrnament)`
  position: absolute;
  ${props => css`
    ${props.color && `fill: ${props.color};`}
    ${typeof props.top !== `undefined` && `top: ${props.top};`}
    ${typeof props.left !== `undefined` && `left: ${props.left};`}
    ${typeof props.right !== `undefined` && `right: ${props.right};`}
    ${typeof props.bottom !== `undefined` && `bottom: ${props.bottom};`}
    height: ${props.size};
    width: ${props.size};
  `}
`

const variants = [`A`, `B`, `C`]
let instancesCounter = -1

const Pullquote = ({ cite, citation = cite, children, href, fontSize = 32 }) => {
  instancesCounter += 1
  const className = `variant${variants[instancesCounter % variants.length]}`

  let author = null
  // #gross
  if (citation) {
    author = <Citation>&mdash; {citation}</Citation>
    author = href ? <ExternalLink href={href}>{author}</ExternalLink> : author
  }

  return (
    <PullquoteRoot className={className} fontSize={fontSize}>
      {children}
      {author}
      <Star color="#ffdf37" top="5%" left="-10%" size="20%" />
      <Star color="#73fff7" top="-7.5%" left="7.5%" size="15%" />
      <Star color="#ec1818" bottom="-5%" right="15%" size="10%" />
    </PullquoteRoot>
  )
}

Pullquote.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Pullquote