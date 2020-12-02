import { Skeleton } from 'antd'
import React from 'react'
import CardsContainer from '../../Styled/CardsContainer'
import Container from '../../Styled/Container'
import { TitleLoad } from '../../Styled/Titles'
import ExpertiseCard from './ExpertiseCard'



const LoadingExpertiseCards = () => {
    return (
        <Container>
            <TitleLoad>
                <Skeleton active paragraph={{ rows: 0 }} />
            </TitleLoad>
            <CardsContainer>
                {Array.from({ length: 5 }).map((num, i) => <ExpertiseCard loading={true} key={i} />)}
            </CardsContainer>
        </Container>
    )
}

export default LoadingExpertiseCards
