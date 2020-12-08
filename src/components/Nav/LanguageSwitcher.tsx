import { Button } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { i18n } from '../../../i18n'
import { changeLanguageAction } from '../../redux/actions/actions'


type ButtonTypes = "primary" | "default" | "text" | "link" | "ghost" | "dashed"

const LanguageSwitcher = () => {
    const [langName, setLangName] = useState(i18n?.language || "en")
    const dispatch = useDispatch()
    const changeLang = useCallback((lang: string) => { dispatch(changeLanguageAction(lang)); }, [])

    const changeLanguage = useCallback(
        async (lang: string) => {
            await i18n.changeLanguage(lang)
            changeLang(lang)
        }, [i18n.language])

    useEffect(() => { setLangName(i18n.language) }, [i18n.language])

    const ChangeTypeByLanguage = useCallback(
        (langName: string, languageToCheckBy: "ar" | "en"): ButtonTypes =>
            langName === languageToCheckBy ? "primary" : "dashed", [])

    return (
        <Button.Group size="small">
            <Button
                style={langName !== "en" ? { backgroundColor: "gray", color: "white" } : {}}
                onClick={() => { changeLanguage("en") }}
                type={ChangeTypeByLanguage(langName, "en")}
            >English</Button>
            <Button
                style={langName !== "ar" ? { backgroundColor: "gray", color: "white" } : {}}
                onClick={() => { changeLanguage("ar") }}
                type={ChangeTypeByLanguage(langName, "ar")}
            >العربية</Button>
        </Button.Group >
    )

}

export default LanguageSwitcher

