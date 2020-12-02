import { Switch } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'
import { size, spacing } from '../../styles/vars'
import { IAppStyledProps } from '../../types/IAppStyledProps'
import Project from './Project'
import ProjectsStack from './ProjectsStack'
import ProjectsStackLoading from './ProjectsStackLoading'

interface Props {

}

const ProjectsContainer = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    flex-wrap: nowrap;
    align-items:center;
    justify-content:center;
    background-color: ${({ theme }: IAppStyledProps) => theme.body};

    @media (max-width: ${size.tablet}){
        padding: ${spacing.normal};
    }    
`
const Projects = ({ }: Props) => {
    const [loading, setLoading] = useState(false)

    const cards: { cards: number[], stackTitle: string }[] = [{ cards: [1, 1, 2], stackTitle: "tit1" }, { cards: [1, 2, 5, 22, 3], stackTitle: "tit1" },]
    return (
        <ProjectsContainer>
            <Switch onChange={(e) => {
                setLoading(!loading)
            }
            } />
            {
                loading ? Array.from({ length: 3 }).map((num, i) =>
                    <ProjectsStackLoading key={i} />
                ) :
                    cards.map(({ cards, stackTitle }, i) =>
                        <ProjectsStack projects={cards} loading={loading} stackTitle={stackTitle} key={i} />
                    )
            }
        </ProjectsContainer>
    )
}

export default Projects
