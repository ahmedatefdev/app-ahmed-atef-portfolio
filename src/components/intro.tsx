import { TFunction } from "next-i18next"
import React from "react"
import styled from "styled-components"
import { withTranslation } from "../../i18n"
import avatar from "../img/logo.png"
import { IAppStyledProps } from "../types/IAppStyledProps"
interface Props {
  t: TFunction
}

import pat3 from '../img/pattern11.png'

const MainContainer = styled.div`
    display: flex;
    padding: 125px 20px;
    width: 100%;
    background-blend-mode: multiply;
    background-image: url(${pat3}) ;
    background-color: ${({ theme }: IAppStyledProps) => theme.body} ;
    filter:brightness(120%) contrast(110%);
`
const IntroContainer = styled.div`
   width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width:  1140px) {
      flex-direction: column-reverse;
      justify-content: center;
      text-align: center;
    }

    @media only screen and (min-width: 900px) and (orientation: landscape) {
      flex-direction: row;
    }
`
const IntroText = styled.div`
      width: 500px;
      margin: 0 30px;
      text-align: center;
      * {
        color: ${({ theme }: IAppStyledProps) => theme.text};
      }
      @media  (min-width: 480) {
        width: 350px;
        margin: 0;
      }

      @media  (min-width: 320px) {
        width: 325px;
      }

      @media only screen and (min-width: 900px) and (orientation: landscape) {
        width: 390px;
        margin: 0;
      }

      h1 {
        font-size: 4.5em;
        line-height: 90px;
        margin-bottom: 12px;
        color: ${({ theme }: IAppStyledProps) => theme.accent};
        @media  (min-width: 480px) {
          font-size: 3.4em;
          margin-bottom: 0;
        }

        @media  (min-width: 320px) {
          font-size: 3em;
          line-height: 75px;
        }

        @media only screen and (min-width: 900px) and (orientation: landscape) {
          font-size: 3.3em;
          margin: 0;
        }
      }

      h2 {
        font-size: 2.4em;
        margin-bottom: 0.2em;

        @media  (min-width:480px) {
          font-size: 1.6em;
        }

        @media  (min-width: 320px) {
          font-size: 1.4em;
        }

        @media only screen and (min-width: 900px) and (orientation: landscape) {
          font-size: 1.4em;
        }
      }
`
const IntroAvatar = styled.div`
      width: 13rem;
      text-align:center;
      display:flex;
      justify-content: center;
      align-items: center;

      img{
          width:250px;
      }

      @media  (min-width:768px) {
        width: 12rem;
      }

      @media  (min-width:480px) {
        width: 8rem;
        img {
          margin: 0;
        }
      }

      @media only screen and (min-width: 900px) and (orientation: landscape) {
        width: 8rem;

        img {
          margin: 0;
        }
      }

`
const Intro = ({ t }: Props) => (
  <MainContainer>
    <IntroContainer>
      <IntroText>
        <h1>{t("name")}</h1>
        <h2>Web Developer</h2>
      </IntroText>
      <IntroAvatar>
        <img src={avatar} alt="Ahmed Avatar" />
      </IntroAvatar>
    </IntroContainer>
  </MainContainer>
)

export default withTranslation("intro")(Intro)
