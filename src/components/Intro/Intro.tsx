import React from "react"
import styled from "styled-components"
import { IAppStyledProps } from "../../types/IAppStyledProps"

import pat3 from '../../img/pattern11.png'
import { size } from "../../styles/vars"
import IntroAvatar from "./IntroAvatar"
import IntroText from "./IntroText"

const IntroContainer = styled.div`
    width: 100%;
    padding: 125px 20px;
    min-height: calc(100vh - 55px);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    background-blend-mode: multiply;
    background-image: url(${pat3});
    background-color: ${({ theme }: IAppStyledProps) => theme.body};
    filter:brightness(120%) contrast(110%) drop-shadow(0px 0px 5px ${({ theme }: IAppStyledProps) => theme.accent});
    
    @media  (max-width: ${size.tablet}){
      padding: 125px 0;

      flex-direction: column-reverse;
      justify-content: center;
      text-align: center;
    }

    @media (max-width: 900px) and (orientation: landscape) {
      flex-direction: row;
    }
`


const Intro = () => (
  <IntroContainer>
    <IntroText />
    <IntroAvatar />
  </IntroContainer>
)

export default (Intro)
