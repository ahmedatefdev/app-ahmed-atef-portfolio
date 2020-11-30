import React from 'react'
import styled from 'styled-components'
import pattern from '../img/pattern11.png'
import { IAppStyledProps } from '../types/IAppStyledProps'
import { size, spacing } from '../styles/vars'
import { Popover, Tooltip } from 'antd'
import { withTranslation } from '../../i18n'
import { TFunction } from 'next-i18next'
import { keyframes } from 'styled-components'
import { FistLetterToUppercase } from '../helper'
import { FormError, FormGroup, RequiredStar } from '../Styled/Form'
interface Props {
    t: TFunction
}

const ContactContainer = styled.section`
        padding: 3em 0;
        background-color :${({ theme }: IAppStyledProps) => theme.body};

        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            max-width: 1200px;
            margin: 0 auto;

            .contact-text {
                max-width: 800px;
                text-align: center;
                padding: 0 2em 2em;
                margin: 0 auto;

                h1 {
                    font-size: 3.8em;
                    color:${({ theme }: IAppStyledProps) => theme.text};
                }
            }
        }
`
const ContactForm = styled.div`
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
            padding: 20px 20px;
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


const Contact = ({ t }: Props) => {
    return (
        <ContactContainer>
            <div className="container">
                <div className="contact-text">
                    <h1>Contact Me</h1>
                </div>
                <ContactForm>
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
                            <label><RequiredStar />{FistLetterToUppercase(t("name"))}</label>
                            <FormError visible={true}>{t("name-error")}</FormError>
                        </FormGroup>
                        <FormGroup>
                            <input type="text" name="email" id="email" required />
                            <label><RequiredStar />{FistLetterToUppercase(t("email"))}</label>
                            <FormError visible={true}>{t("email-error")}</FormError>
                        </FormGroup>
                        <FormGroup>
                            <input type="text" name="subject" id="subject" required />
                            <label><RequiredStar />{FistLetterToUppercase(t("subject"))}</label>
                            <FormError visible={true}>{t("subject-error")}</FormError>
                        </FormGroup>
                        <FormGroup>
                            <textarea name="message" id="message" rows={5} required />
                            <label><RequiredStar />{FistLetterToUppercase(t("message"))}</label>
                            <FormError visible={true}>{t("message-error")}</FormError>
                        </FormGroup>
                        <button type="submit">Send</button>
                        <input type="reset" value="Clear" />
                    </form>
                </ContactForm>
            </div>
        </ContactContainer >
    )
}

export default withTranslation("utils")(Contact)
