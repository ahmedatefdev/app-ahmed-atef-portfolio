import { TFunction, WithTranslation } from 'next-i18next'
import React from 'react'
import styled from 'styled-components'
import { withTranslation } from '../../../i18n'
import { FistCharacterToUppercase } from '../../helper'
import { FormError, FormGroup, RequiredStar } from '../../Styled/Form'
import { size, spacing } from '../../styles/vars'
import { IAppStyledProps } from '../../types/IAppStyledProps'
import pattern from '../../img/pattern11.png'


const ContactFormContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        padding: 20px 40px;
        border-radius: 5px;
        background-blend-mode: multiply;
        background-image: url(${pattern});
        background-color: ${({ theme }: IAppStyledProps) => theme.darkerAccent};
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
        @media (max-width: ${size.tablet}) {
            padding: 20px ${spacing.extraSmall};
        }

        p {
            font-size: 1.3em;
        }



    button,
    input[type="reset"] {
        background-color:  ${({ theme }: IAppStyledProps) => theme.accent};
        border: 2px solid  ${({ theme }: IAppStyledProps) => theme.accent};
        border-radius: 2px;
        box-sizing: border-box;
        color:  ${({ theme }: IAppStyledProps) => theme.text};
        cursor: pointer;
        font-size: 16px;
        padding: 15px 0;
        margin-top: 15px;
        width: 100%;
        transition: all 0.2s ease-in-out;

        &:hover {
            filter:brightness(120%) contrast(120%);
        }
    }
`


interface Props extends WithTranslation {
    t: TFunction
}

const ContactForm = ({ t }: Props) => {
    return (
        <ContactFormContainer>
            <form
                method="post"
                netlify-honeypot="bot-field"
                data-netlify="true"
                name="contact"
            >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <FormGroup>
                    <input type="text" name="name" id="name" required />
                    <label><RequiredStar />{FistCharacterToUppercase(t("name"))}</label>
                    <FormError visible={true}>{t("name-error")}</FormError>
                </FormGroup>
                <FormGroup>
                    <input type="text" name="email" id="email" required />
                    <label><RequiredStar />{FistCharacterToUppercase(t("email"))}</label>
                    <FormError visible={true}>{t("email-error")}</FormError>
                </FormGroup>
                <FormGroup>
                    <input type="text" name="subject" id="subject" required />
                    <label><RequiredStar />{FistCharacterToUppercase(t("subject"))}</label>
                    <FormError visible={true}>{t("subject-error")}</FormError>
                </FormGroup>
                <FormGroup>
                    <textarea name="message" id="message" rows={5} required />
                    <label><RequiredStar />{FistCharacterToUppercase(t("message"))}</label>
                    <FormError visible={true}>{t("message-error")}</FormError>
                </FormGroup>
                <button type="submit">Send</button>
                <input type="reset" value="Clear" />
            </form>
        </ContactFormContainer>

    )
}

export default withTranslation(["utils", "pages-names"])(ContactForm)
