import { TFunction, WithTranslation } from 'next-i18next'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { i18n, withTranslation } from '../../../i18n'
import { FistCharacterToUppercase } from '../../helper'
import { FormError, FormGroup, RequiredStar } from '../../Styled/Form'
import { CheckFormData } from './CheckFormData'
import { ContactFormContainer } from './ContactFormContainer'
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();


interface Props extends WithTranslation {
    t: TFunction
    submitForm: (e: React.FormEvent<HTMLFormElement>) => void
}

export const errorsDefault = {
    name: false,
    email: false,
    subject: false,
    message: false,
}
const ContactForm = ({ t, submitForm }: Props) => {
    const [error, setError] = useState(errorsDefault)
    const [isRight, setIsRight] = useState(i18n?.language === "ar" || false)
    useEffect(() => { setIsRight(i18n?.language === "ar" || false) }, [i18n, i18n.language])


    const CheckData = useCallback(
        (ev: React.FormEvent<HTMLFormElement>) => {
            ev.preventDefault()
            const newErrors = CheckFormData(ev.currentTarget)
            if (!Object.values(newErrors).some((error) => error)) submitForm(ev)
            setError(newErrors)
        }, [])

    const labelStyle = useMemo(() => ({
        left: isRight ? "unset" : 0,
        right: isRight ? 0 : "unset"
    }), [isRight])

    return (
        <ContactFormContainer>
            <form
                onSubmit={CheckData}
                action={publicRuntimeConfig.MAIL_HOST_URL}
                method="POST"
                name="contact"
            >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <FormGroup >
                    <input type="text" name="name" id="name" />
                    <label style={labelStyle}><RequiredStar />{FistCharacterToUppercase(t("name"))}</label>
                    <FormError visible={error.name}>{t("name-error")}</FormError>
                </FormGroup>
                <FormGroup >
                    <input type="text" name="email" id="email" />
                    <label style={labelStyle}><RequiredStar />{FistCharacterToUppercase(t("email"))}</label>
                    <FormError visible={error.email}>{t("email-error")}</FormError>
                </FormGroup>
                <FormGroup >
                    <input type="text" name="subject" id="subject" />
                    <label style={labelStyle}><RequiredStar />{FistCharacterToUppercase(t("subject"))}</label>
                    <FormError visible={error.subject}>{t("subject-error")}</FormError>
                </FormGroup>
                <FormGroup >
                    <textarea name="message" id="message" rows={5} />
                    <label style={labelStyle}><RequiredStar />{FistCharacterToUppercase(t("message"))}</label>
                    <FormError visible={error.message}>{t("message-error")}</FormError>
                </FormGroup>
                <button type="submit">{t("sent")}</button>
                <input type="reset" value={t("clear") as string} />
            </form>
        </ContactFormContainer>

    )
}

export default withTranslation(["utils"])(ContactForm)

