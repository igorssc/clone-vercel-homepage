import styled, { keyframes } from 'styled-components'

const colorCycle = keyframes`
  0%,
  55% {
    filter: brightness(0);
  }

  11%,
  33% {
    filter: none;
  }
`

export const FeaturedTitle = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  > h2 {
    font-size: 10rem;
    font-weight: 800;
    letter-spacing: -0.5rem;
    line-height: 10rem;
    padding: 0 0.42rem;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: brightness(0);
    animation-name: ${colorCycle};
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  & > h2:nth-child(1) {
    background-image: linear-gradient(90deg, #007cf0, #00dfd8);
  }

  & > h2:nth-child(2) {
    background-image: linear-gradient(90deg, #7928ca, #ff0080);
    animation-delay: 3.33s;
  }

  & > h2:nth-child(3) {
    background-image: linear-gradient(90deg, #ff4d4d, #f9cb28);
    animation-delay: 6.66s;
  }
`
