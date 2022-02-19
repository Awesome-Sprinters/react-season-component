import styled, { css, keyframes } from "styled-components"

interface ImgPositionProps {
  x: string
  y: string
  animation: string
  duration: number
  iteration: number
}

const leftToRight = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(0);
  }
`

const rightToLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
`

const topToBottom = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(0);
  }
`

const bottomToTop = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0);
  }
`

const imgPositionStyle = ({
  x,
  y,
  animation,
  duration,
  iteration,
}: ImgPositionProps) => css`
  position: absolute;
  top: ${y === "top" ? "0" : y === "bottom" ? "100%" : "50%"};
  left: ${x === "left" ? "0" : x === "right" ? "100%" : "50%"};
  animation: ${getKeyframes(animation)} ${duration}s linear ${iteration};
`

export const Container = styled.div`
  ${imgPositionStyle};
`
function getKeyframes(param: string) {
  switch (param) {
    case "left-to-right":
      return leftToRight
    case "right-to-left":
      return rightToLeft
    case "top-to-bottom":
      return topToBottom
    case "bottom-to-top":
      return bottomToTop
  }
}
