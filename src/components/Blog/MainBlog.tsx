import { TFunction, WithTranslation } from 'next-i18next'
import React from 'react'
import styled from 'styled-components'
import { withTranslation } from '../../../i18n'
import { SectionTitle } from '../../Styled/Titles'
import { IAppStyledProps } from '../../types/IAppStyledProps'
import Articles from './Articles/Articles'
import Summaries from './Summary/Summaries'

interface Props extends WithTranslation {
    t: TFunction
}

const MainBlogContainer = styled.div`
    width: 100%;
    
    display:flex;
    flex-direction:column;
    flex-wrap:nowrap;
    justify-content:center;
    align-items:center;

    background-color: ${({ theme }: IAppStyledProps) => theme.body};
`
const MainBlog = ({ t }: Props) => {
    return (
        <MainBlogContainer>
            <SectionTitle>
                {t("summary-title")}
            </SectionTitle>
            <Summaries />
            <SectionTitle>
                {t("articles")}
            </SectionTitle>
            <Articles />
        </MainBlogContainer>
    )
}

export default withTranslation(["blog"])(MainBlog)
