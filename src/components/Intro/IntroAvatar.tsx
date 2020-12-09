import React from 'react'
import styled from 'styled-components'
import { size, spacing } from '../../styles/vars'
import avatar from "../../img/logo.png"
import { IAppStyledProps } from '../../types/IAppStyledProps'
// import per from "/images/per23.png"
// const per = require('../../img/per23.png');

const IntroAvatarContainer = styled.div`
      width: 350px;
      height:350px;
      position: relative;
      border-radius: 50%;
      padding:${spacing.normal};
      text-align:center;
      
      display:flex;
      justify-content: center;
      align-items: center;
      
      background-color:#d9e4dd;
      overflow:hidden;
      border: 2px solid ${({ theme }: IAppStyledProps) => theme.darkerAccent};
      transition:all 0.2s ease-in-out;
      filter:drop-shadow(0 0 5px ${({ theme }: IAppStyledProps) => theme.accent} );
      
      &:hover{
         filter:drop-shadow(0 0 10px ${({ theme }: IAppStyledProps) => theme.accent} );
      }

      img{
        position:absolute;
        /* top:18.2%; */
        /* left:14.5%; */
        bottom: 0;
        right: 14px;
        width: 18rem;
      }

      @media  (max-width:768px) {
        width: 20rem;
        height:20rem;
         img {
          width: 16rem;
        }
      }

      @media  (max-width: ${size.tablet}){
        width: 18rem;
        height: 18rem;
        img {
          margin: 0;
          width: 14rem;
        }
      }

      @media   (max-width: 900px) and (orientation: landscape) {
        width: 22rem;
        height:22rem;
        img {
          margin: 0;
          width: 18rem;
        }
      }

`

const IntroAvatar = () => {
  return (
    <IntroAvatarContainer>
      <img src={"/per23.png"} alt="Ahmed Avatar" />
    </IntroAvatarContainer>
  )
}

export default IntroAvatar
