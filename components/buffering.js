import React from 'react'
import styled, { keyframes } from 'styled-components'
import { MdPlayArrow } from 'react-icons/md'

const bufferAnim = keyframes`
  from {
    transform: scaleX(0);
  } to {
    transform: scaleX(1);
  }
`

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
`

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50vh;
  width: 50vw;
  background-color: #222;
  outline: 10px solid black;

  position: relative;
`

const Line = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 5vh;

  background-color: white;
  transform-origin: left;
  transform: scaleX(0);

  .animating & {
    animation: ${bufferAnim} ${props => props.duration} linear;
    animation-fill-mode: both;
  }
`

const Play = styled(MdPlayArrow)`
  .animating & {
    animation: ${pulse} 1s ease-in-out;
    animation-delay: ${props => props.duration};
    animation-fill-mode: both;
  }
`

export default class Buffering extends React.Component {
  state = {
    className: ``
  }

  setClassName() {
    this.setState({
      className: `animating`
    })
  }

  render() {
    const ANIMATION_DURATION = '3s'
    return (
      <Box className={this.state.className} onMouseOver={() => this.setClassName()}>
        <Play className="play-button" color="white" size="15vw" duration={ANIMATION_DURATION} />
        <Line className="line" duration={ANIMATION_DURATION} />
      </Box>
    )
  }
}