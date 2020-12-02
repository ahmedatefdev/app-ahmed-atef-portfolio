import { TFunction } from 'next-i18next'
import React from 'react'
import styled from 'styled-components'
import { withTranslation } from '../../../i18n'
import { size } from '../../styles/vars'
import { IAppStyledProps } from '../../types/IAppStyledProps'

const IntroTextContainer = styled.div`
      width: 500px;
      margin: 0 30px;
      text-align: center;
      * {
        color: ${({ theme }: IAppStyledProps) => theme.text};
      }
      @media  (max-width: ${size.tablet}){
        width: 300px;
        margin: 0;
      }


      @media   (max-width: 900px) and (orientation: landscape) {
        width: 390px;
        margin: 0;
      }

      h1 {
        font-size: 4.5em;
        line-height: 90px;
        margin-bottom: 12px;
        color: ${({ theme }: IAppStyledProps) => theme.accent};

        @media  (max-width: ${size.tablet}){
          font-size: 3em;
          margin-bottom: 0;
          line-height: 75px;
        }

        @media   (max-width: 900px) and (orientation: landscape) {
          font-size: 3.3em;
          margin: 0;
        }
      }

      h2 {
        font-size: 2.4em;
        margin-bottom: 0.2em;


        @media  (max-width: ${size.tablet}){
          font-size: 1.4em;
        }

        @media   (max-width: 900px) and (orientation: landscape) {
          font-size: 1.4em; 
        }
      }
`


interface Props {
    t: TFunction
}


const IntroText = ({ t }: Props) => {
    return (
        <IntroTextContainer>
            <h1>{t("name")}</h1>
            <h2>{t("developer")}</h2>
        </IntroTextContainer>
    )
}

export default withTranslation("intro")(IntroText)
