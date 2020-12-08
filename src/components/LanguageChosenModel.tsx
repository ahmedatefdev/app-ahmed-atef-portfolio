import { Modal } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { changeLanguageAction, fetchProjectsAction } from '../redux/actions/actions';
import { LanguageNames } from '../redux/types/ILanguageState';
import IState from '../redux/types/IState';
import { IAppStyledProps } from '../types/IAppStyledProps';


const LangModel = styled(Modal)`
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

interface Props {
    visible: boolean,
    changeLang: (langName: LanguageNames) => void
}
const LanguageChosenModel = ({ visible, changeLang }: Props) => {
    const [langChosen, setLangChosen] = useState(false)
    const setNewLang = useCallback((langName: LanguageNames) => { changeLang(langName); setLangChosen(true); }, [])
    return (
        <>
            <LangModel
                centered
                visible={visible}
                afterClose={() => { if (!langChosen) setNewLang("en") }}
                okText={"العربية"}
                cancelText={"English"}
                onOk={() => setNewLang("ar")}
                onCancel={() => setNewLang("en")}
            >
                <h3 style={{ textAlign: "center" }}> {`What language do you want to browse this site in?`}</h3>
                <h3 style={{ textAlign: "center" }}>{"اي لغة تريد ان تتصفح هذا الموقع بها؟"}</h3>
            </LangModel>
        </ >
    )
}

export default LanguageChosenModel
