import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { IAppStyledProps } from '../../types/IAppStyledProps'
import { TFunction, WithTranslation } from 'next-i18next'
import { SectionTitle } from '../../Styled/Titles'
import ContactForm from './ContactForm'
import { message } from 'antd'
import axios from '../../helper/axios'
import { Method } from 'axios'
import { withTranslation } from '../../../i18n'
interface Props extends WithTranslation {
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

    const submitForm =
        useCallback(
            (ev: React.FormEvent<HTMLFormElement>) => {
                ev.preventDefault()
                const form = ev.currentTarget
                const data = new FormData(form)
                axios.request({
                    method: form.method as Method,
                    url: form.action,
                    data: data
                })
                    .then((val) => {
                        form.reset()
                        message.info(t("message-sent"));
                    })
                    .catch((val) => {
                        console.error("🚀 ~ submitForm val", val)
                        message.info(t("message-not-sent"));
                    }).finally(() => { })
            }, [])

    return (
        <ContactContainer>
            <div className="container">
                <div className="contact-text">
                    <SectionTitle>{t("contact-me")}</SectionTitle>
                </div>
                <ContactForm submitForm={submitForm} />
            </div>
        </ContactContainer >
    )
}

export default withTranslation("utils")(Contact)
