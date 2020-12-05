import React from 'react'
import styled from 'styled-components'
import Experience from '../../models/Experience'
import Container from '../../Styled/Container'
import { SecTitle } from '../../Styled/Titles'
import { size, spacing } from '../../styles/vars'
import ExpertiseCard from './ExpertiseCard'

interface Props {
    experiences: Experience[];
    stackTitle: string;
}


const CardsContainer = styled(Container)`
    padding:${spacing.normal};
    max-width: 1100px;
    flex-direction:row;
    flex-wrap: wrap;
    background-color:transparent;
    
    @media (max-width: ${size.tablet}){
        padding: ${spacing.extraSmall};
    }
`
const StackTitle = styled(SecTitle)`
    text-align:center;
    margin-top:${spacing.small};
    font-size:2rem;
    filter:brightness(110%) contrast(110%);
`

const ExpertiseCards = ({ experiences, stackTitle }: Props) => {
    return (
        <Container>
            <StackTitle>{stackTitle}</StackTitle>
            <CardsContainer>
                {experiences.map((experience, i) => <ExpertiseCard experience={experience} key={i} />)}
            </CardsContainer>
        </Container>
    )
}

export default ExpertiseCards
