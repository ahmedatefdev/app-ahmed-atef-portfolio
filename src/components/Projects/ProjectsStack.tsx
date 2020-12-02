import React from 'react'
import styled from 'styled-components'
import Container from '../../Styled/Container'
import { size, spacing } from '../../styles/vars'
import Project from './Project'
import pat1 from '../../img/pattern11.png'
import { IAppStyledProps } from '../../types/IAppStyledProps'
import { withTranslation } from '../../../i18n'
import { TFunction, WithTranslation } from 'next-i18next'
import { FistCharacterToUppercase } from '../../helper'

interface Props extends WithTranslation {
    t: TFunction
    projects: number[]
    loading: boolean
    stackTitle: string
}


const ProjectsContainer = styled.div`
    width: 100%;
    margin-bottom: 50px;
    padding: 5em 0;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    background-blend-mode: multiply;
    background-image: url(${pat1});
    background-color: ${({ theme }: IAppStyledProps) => theme.body};

    color: ${({ theme }: IAppStyledProps) => theme.text};

    h1 {
        font-size: 3.8em;
        color: ${({ theme }: IAppStyledProps) => theme.text};
    }


    .work-container {
        width: 85%;
        height: 100%;
        
        text-align: center;

        .projects {
            width: 100%;
            display: flex;
            flex-direction:row;
            flex-wrap:wrap;
            justify-content:space-around;

            align-items:center;
            margin:0;
            
            @media (max-width: ${size.tablet}){
                flex-direction:column;
                flex-wrap:nowrap;
            }
        }
    }
`

const ProjectsStack = ({ t, loading, projects, stackTitle }: Props) => {
    const project: { page: string, title: string, image: string } =
        { title: "title1", page: "/", image: "ph1" };

    return (
        <ProjectsContainer>
            <div className="work-container">
                <h1>{FistCharacterToUppercase(stackTitle)}</h1>
                <div className="projects">
                    {projects.map((projects, i) => (
                        <Project loading={loading} key={i} data={project} />
                    ))}
                </div>
            </div>
        </ProjectsContainer>
    )
}

export default withTranslation(["pages-names", "utils"])(ProjectsStack)
