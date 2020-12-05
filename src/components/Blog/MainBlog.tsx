import { TFunction, WithTranslation } from 'next-i18next'
import React from 'react'
import { withTranslation } from '../../../i18n'
import { SectionTitle } from '../../Styled/Titles'
import Articles from './Articles/Articles'
import { MainBlogContainer } from './styles/MainBlogContainer'
import Summaries from './Summary/Summaries'

interface Props extends WithTranslation {
    t: TFunction
}

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
