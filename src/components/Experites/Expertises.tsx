import React, { useState } from 'react'
import styled from 'styled-components'
import { TFunction } from 'next-i18next'
import { withTranslation } from '../../../i18n'
import { size, spacing } from '../../styles/vars'
import ExpertiseCard from './ExpertiseCard'
import { IAppStyledProps } from '../../types/IAppStyledProps'
import { Switch } from 'antd'
import ExpertiseCards from './ExpertiseCards'
import LoadingExpertiseCards from './LoadingExpertiseCards'

interface Props {
    t: TFunction
}

const ExpertisesContainer = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    flex-wrap: nowrap;
    align-items:center;
    justify-content:center;
    background-color: ${({ theme }: IAppStyledProps) => theme.darkerAccent};
    filter: drop-shadow(0px 0px 5px ${({ theme }: IAppStyledProps) => theme.accent});
    padding: ${spacing.extraLarge};

    @media (max-width: ${size.tablet}){
        padding: ${spacing.normal};
    }
`

const Title = styled.h1`
        color: ${({ theme }: IAppStyledProps) => theme.text};

`

const Expertises = ({ t }: Props) => {
    const [loading, setLoading] = useState(true)

    const cards: { cards: number[], stackTitle: string }[] = [{ cards: [1, 1, 2], stackTitle: "tit1" }, { cards: [1, 2, 5, 22, 3], stackTitle: "tit1" },]
    return (
        <ExpertisesContainer>
            <Switch onChange={(e) => {
                setLoading(!loading)
            }
            } />
            <Title >{t("experiences")}</Title>
            {
                loading ? Array.from({ length: 3 }).map((num, i) => <LoadingExpertiseCards />
                ) :
                    cards.map(({ cards, stackTitle }, i) =>
                        <ExpertiseCards cards={cards} loading={loading} stackTitle={stackTitle} />
                    )
            }
        </ExpertisesContainer>
    )
}

export default withTranslation("pages-names")(Expertises)
