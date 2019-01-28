import React, { Component } from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import regeneratorRuntime from "regenerator-runtime"; // fun

import Alert from './alert'
import Link from './link'

const delay = duration => new Promise(resolve => setTimeout(resolve, duration))

export default class Prefetch extends Component {
  state = {
    log: ``,
    nextRoute: false
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
            <Link href="#" onClick={ev => {
              ev.preventDefault()

              this.setState({
                nextRoute: true
              })
            }} onMouseOver={this.state.log ? () => {} : async () => {
              this.addLog({ state: `onMouseOver` })
    
              await delay(1000)
    
              this.addLog({ state: `prefetching`, content: `<link rel="prefetch" href="./next-route.html">` })
    
              await delay(1000)
    
              this.addLog({ state: `fetched` })
            }}>
              Hover to prefetch
            </Link>
            <Alert message={this.state.log} />
            </React.Fragment>
          )
        }
      </React.Fragment>
    )
  }
}