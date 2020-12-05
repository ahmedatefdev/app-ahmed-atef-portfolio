import { Skeleton } from 'antd'
import React from 'react'
import styled from 'styled-components'
import CardsContainerModel from '../../Styled/CardsContainer'
import Container from '../../Styled/Container'
import { TitleLoad } from '../../Styled/Titles'

interface Props {

}

const MainContainer = styled(Container)`
    max-width:  900px;
`

const ProjectsStackLoading = (props: Props) => {
    console.log("🚀 ~ file: ProjectsStackLoading.tsx ~ line 32 ~ ProjectsStackLoading ~ ProjectsStackLoading")
    return (
        <MainContainer>
            <TitleLoad>
                <Skeleton active paragraph={{ rows: 0 }} />
            </TitleLoad>
            <CardsContainerModel>
                {Array.from({ length: 5 })
                    .map((num, i) => <Skeleton active loading={true} paragraph={{ rows: 1 }} avatar key={i} />)}
            </CardsContainerModel>
        </MainContainer>
    )
}

export default ProjectsStackLoading
