import { Modal, notification } from 'antd'
import { WithTranslation } from 'next-i18next';
import React, { useCallback, useState } from 'react'
import styled from 'styled-components';
import { withTranslation } from '../../i18n';
import { LanguageNames } from '../redux/types/ILanguageState';
import { IAppStyledProps } from '../types/IAppStyledProps';


const LangModel = styled(Modal)`
    width: 95vw;

    .ant-modal-body{
        background-color: ${({ theme }: IAppStyledProps) => theme.body};
        *{
            color:${({ theme }: IAppStyledProps) => theme.text}
        }
    }
    
    .ant-modal-header{
        background-color: ${({ theme }: IAppStyledProps) => theme.body};

        .ant-modal-title{
        color:${({ theme }: IAppStyledProps) => theme.text}
        }
    }

    .ant-modal-footer{
        background-color:${({ theme }: IAppStyledProps) => theme.body};
        display:flex;
        align-items:center;
        justify-content:center;
    }
`

interface Props extends WithTranslation {
    visible: boolean,
    changeLang: (langName: LanguageNames) => void
}
const LanguageChosenModel = ({ changeLang, t }: Props) => {
    const [langChosen, setLangChosen] = useState(null)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [visible, setVisible] = useState(true)


    const Notification = useCallback(() => {
        // const message = langChosen === "ar" ? "اللغة الحالية (العربيه)" : "Current language is (English)";
        const description = langChosen === "ar" ? "يمكنك تغيير اللغة في أي وقت من شريط التنقل" : "you can change the language anytime from the nav bar"
        notification.open({
            message: "",
            description,
            duration: 3,
            style: { backgroundColor: "#1F1F1F", color: "white" }
        });
    }, [langChosen])
    const setNewLang = useCallback((langName: LanguageNames) => { setLangChosen(langName); setShowSuccessMessage(true); setVisible(false); }, [])
    return (
        <>
            <LangModel
                centered
                visible={visible}
                afterClose={() => {
                    changeLang(langChosen || "en");
                }}
                okText={"العربية"}
                cancelText={"English"}
                onOk={() => setNewLang("ar")}
                onCancel={() => setNewLang("en")}
            >
                <h3 style={{ textAlign: "center" }}> {`What language do you want to browse this site in?`}</h3>
                <h3 style={{ textAlign: "center" }}>{"اي لغة تريد ان تتصفح هذا الموقع بها؟"}</h3>
                {showSuccessMessage && Notification()}
            </LangModel>
        </ >
    )
}

export default withTranslation("utils")(LanguageChosenModel)
