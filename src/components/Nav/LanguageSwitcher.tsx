import { Button } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import { i18n } from '../../../i18n'


type ButtonTypes = "primary" | "default" | "text" | "link" | "ghost" | "dashed"

const LanguageSwitcher = () => {
    const [langName, setLangName] = useState(i18n?.language || "en")
    const changeLanguage = useCallback(
        async (lang: string) => {
            await i18n.changeLanguage(lang)
        },
        [i18n.language],
    )
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

