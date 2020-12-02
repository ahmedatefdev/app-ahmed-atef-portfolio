import React from 'react'
import styled from 'styled-components'
import { size } from '../../styles/vars'
import avatar from "../../img/logo.png"

const IntroAvatarContainer = styled.div`
      width: 13rem;
      text-align:center;
      display:flex;
      justify-content: center;
      align-items: center;

      img{
          width: 225px;
      }

      @media  (max-width:768px) {
        width: 12rem;
      }

      @media  (max-width: ${size.tablet}){
        width: 8rem;
        img {
          margin: 0;
        }
      }

      @media   (max-width: 900px) and (orientation: landscape) {
        width: 8rem;

        img {
          margin: 0;
        }
      }

`

const IntroAvatar = () => {
    return (
        <IntroAvatarContainer>
            <img src={avatar} alt="Ahmed Avatar" />
        </IntroAvatarContainer>
    )
}

export default IntroAvatar
