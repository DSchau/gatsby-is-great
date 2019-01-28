import React, { Component } from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import regeneratorRuntime from "regenerator-runtime"; // fun

import Link from './link'

const delay = duration => new Promise(resolve => setTimeout(resolve, duration))

const Logs = styled.ul`
  position: fixed;
  bottom: 0;
  display: block;
  margin: 2rem 0;
  padding: 0;
  width: 100%;
`

const Entry = styled.li`
  list-style-type: none;
  font-family: monospace;
  font-size: 32px;
  white-space: pre-line;
`

const LogViewer = ({ logs }) => logs && logs.length > 0 && (
  <Logs>
    {
      logs.slice(-1).map((log, index) => (
        <Entry key={`${log}-${index}`}>{JSON.stringify(log, null, 2)}</Entry>
      ))
    }
  </Logs>
)

export default class Prefetch extends Component {
  state = {
    logs: [],
    nextRoute: false
  }

  addLog(log) {
    this.setState(({ logs }) => {
      return {
        logs: logs.concat(log)
      }
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
            }} onMouseOver={this.state.logs.length > 0 ? () => {} : async () => {
              this.addLog({ state: `onMouseOver` })
    
              await delay(1000)
    
              this.addLog({ state: `prefetching`, content: `<link rel="prefetch" href="./next-route.html">` })
    
              await delay(1000)
    
              this.addLog({ state: `fetched` })
            }}>
              Hover to prefetch
            </Link>
            <LogViewer logs={this.state.logs} />
            </React.Fragment>
          )
        }
      </React.Fragment>
    )
  }
}