import { AlignCenterOutlined } from '@ant-design/icons'
import { Skeleton } from 'antd'
import React from 'react'
import styled from 'styled-components'
import Container from '../../Styled/Container'
import { size, spacing } from '../../styles/vars'
import ExpertiseCard from './ExpertiseCard'



const CardsContainer = styled(Container)`
    flex-direction:row;
    flex-wrap: wrap;
    background-color:transparent;
    padding:${spacing.normal};

    @media (max-width: ${size.tablet}){
        padding: ${spacing.extraSmall};
    }
`
const TitleLoad = styled.div`
    width: 50%;
`
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
