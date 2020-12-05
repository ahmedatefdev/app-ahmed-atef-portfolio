import { Skeleton } from 'antd'
import React from 'react'
import styled from 'styled-components'
import CardsContainer from '../../Styled/CardsContainer'
import Container from '../../Styled/Container'
import { TitleLoad } from '../../Styled/Titles'

const SkeletonContainer = styled.div`
    width: 150px ;
    height: 150px;
`
const LoadingExpertiseCards = () => {
    return (
        <Container>
            <TitleLoad>
            </TitleLoad>
            <CardsContainer>
                {Array.from({ length: 5 }).map((num, i) =>
                    <SkeletonContainer key={i}><Skeleton active loading={true} paragraph={{ rows: 1 }} avatar /></SkeletonContainer>)}
            </CardsContainer>
        </Container>
    )
}

export default LoadingExpertiseCards
