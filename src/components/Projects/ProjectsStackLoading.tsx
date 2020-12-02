import { Skeleton } from 'antd'
import React from 'react'
import CardsContainer from '../../Styled/CardsContainer'
import Container from '../../Styled/Container'
import { TitleLoad } from '../../Styled/Titles'

interface Props {

}

const ProjectsStackLoading = (props: Props) => {
    return (
        <Container>
            <TitleLoad>
                <Skeleton active paragraph={{ rows: 0 }} />
            </TitleLoad>
            <CardsContainer>
                {Array.from({ length: 5 })
                    .map((num, i) => <Skeleton active loading={true} paragraph={{ rows: 1 }} avatar />)}
            </CardsContainer>
        </Container>
    )
}

export default ProjectsStackLoading
