import React, { useEffect, useState } from 'react'
import { TFunction } from 'next-i18next'
import { i18n, withTranslation } from '../../../i18n'
import { Switch } from 'antd'
import ExpertiseCards from './ExpertiseCards'
import LoadingExpertiseCards from './LoadingExpertiseCards'
import { SectionTitle } from '../../Styled/Titles'
import { FistCharacterToUppercase } from '../../helper'
import { useDispatch, useSelector } from 'react-redux'
import { fetchExpertisesAction } from '../../redux/actions/actions'
import { ExpertisesContainer } from './ExpertisesContainer'
import IState from '../../redux/types/IState'

interface Props {
    t: TFunction
}

const Expertises = ({ t }: Props) => {
    const dispatch = useDispatch()
    const { stacksWithExpertises, stacksWithExpertisesLoading: loading } = useSelector((state: IState) => state.expertise)

    useEffect(() => {
        dispatch(fetchExpertisesAction())
    }, [])
    return (
        <ExpertisesContainer>
            <SectionTitle >{FistCharacterToUppercase(t("experiences"))}</SectionTitle>
            {
                loading ?
                    Array.from({ length: 3 }).map((num, i) => <LoadingExpertiseCards key={i} />)
                    :
                    stacksWithExpertises.length <= 0 ?
                        <SectionTitle>Nothing to Show</SectionTitle>
                        :
                        stacksWithExpertises
                            .filter((exp) => exp.experiences.length > 0)
                            .map(({ experiences, stackTranslations }, i) => {
                                const stackTitle = stackTranslations.find(
                                    (trans, i) => trans.language.short_name.toLowerCase() === i18n.language?.toLowerCase())
                                return (<ExpertiseCards experiences={experiences} stackTitle={stackTitle?.name || "Stack Title translation not found"} key={i} />)
                            })
            }
        </ExpertisesContainer>
    )
}

export default withTranslation("pages-names")(Expertises)
