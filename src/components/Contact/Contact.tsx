import React from 'react'
import styled from 'styled-components'
import { IAppStyledProps } from '../../types/IAppStyledProps'
import { withTranslation } from '../../../i18n'
import { TFunction } from 'next-i18next'
import { FistCharacterToUppercase } from '../../helper'
import { SectionTitle } from '../../Styled/Titles'
import ContactForm from './ContactForm'
interface Props {
    t: TFunction
}

const ContactContainer = styled.section`
        padding: 3em 0;
        background-color :${({ theme }: IAppStyledProps) => theme.body};

        .container {
            max-width: 1200px;
            margin: 0 auto;

            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .contact-text {
                max-width: 800px;
                margin: 0 auto;
                padding: 0 2em 2em;

                text-align: center;
            }
        }
`

const Contact = ({ t }: Props) => {
    return (
        <ContactContainer>
            <div className="container">
                <div className="contact-text">
                    <SectionTitle>{FistCharacterToUppercase(t("contact"))}</SectionTitle>
                </div>
                <ContactForm />
            </div>
        </ContactContainer >
    )
}

export default withTranslation(["utils", "pages-names"])(Contact)
