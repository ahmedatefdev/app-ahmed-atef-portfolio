import React from 'react'
import styled from 'styled-components'
import Container from '../../Styled/Container'
import { SecTitle } from '../../Styled/Titles'
import { size, spacing } from '../../styles/vars'
import ExpertiseCard from './ExpertiseCard'

interface Props {
    cards: number[];
    stackTitle: string;
    loading: boolean;
}


const CardsContainer = styled(Container)`
    flex-direction:row;
    flex-wrap: wrap;
    background-color:transparent;
    padding:${spacing.normal};

    @media (max-width: ${size.tablet}){
        padding: ${spacing.extraSmall};
    }
`

const ExpertiseCards = ({ loading, cards, stackTitle }: Props) => {
    return (
        <Container>
            <SecTitle>{stackTitle}</SecTitle>
            <CardsContainer>
                {cards.map((card, i) => <ExpertiseCard loading={loading} key={i} />)}
            </CardsContainer>
        </Container>
    )
}

export default ExpertiseCards
