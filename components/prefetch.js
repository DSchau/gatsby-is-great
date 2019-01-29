import React, { Component } from 'react'
import styled, { css, keyframes } from 'styled-components'
import regeneratorRuntime from "regenerator-runtime"; // fun
import Loader from 'react-loader-spinner'
import { MdCheckCircle } from 'react-icons/md'

import Link from './link'

const delay = duration => new Promise(resolve => setTimeout(resolve, duration))

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const anim = css`
  animation: ${fadeIn} 0.5s ease-in-out;
`

const Spacer = styled.span`
  display: inline-block;
  height: 64px;
  width: 64px;
  padding-left: 1rem;
`

const FadeIn = styled.span`
  display: block;

  ${anim}
`

export default class Prefetch extends Component {
  state = {
    log: {},
    nextRoute: false
  }

  renderStatus(status) {
    const { state } = status
    switch (state) {
      case 'onMouseOver':
      case 'prefetching':
        return <Loader css={anim} type="Oval" color="white" height={64} width={64} />
      case 'fetched':
        return <FadeIn key="fetched"><MdCheckCircle size={64} style={{ marginLeft: 0 }} /></FadeIn>
      default:
        return null
    }
  }

  addLog(log) {
    this.setState({
      log
    })
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.nextRoute ? (
            <h1>The next route. Instantly!</h1>
          ) : (
            <React.Fragment>
            <Link href="#" large={true} onClick={ev => {
              ev.preventDefault()

              this.setState({
                nextRoute: true
              })
            }} onMouseOver={this.state.log.state ? () => {} : async () => {
              this.addLog({ state: `onMouseOver` })
    
              await delay(1000)
    
              this.addLog({ state: `prefetching`, content: `<link rel="prefetch" href="./next-route.html">` })
    
              await delay(2000)
    
              this.addLog({ state: `fetched` })
            }}>
              Hover to prefetch <Spacer>{this.renderStatus(this.state.log)}</Spacer>
            </Link>
            </React.Fragment>
          )
        }
      </React.Fragment>
    )
  }
}