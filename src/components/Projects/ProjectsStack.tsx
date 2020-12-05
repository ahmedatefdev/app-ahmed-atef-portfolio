import React from 'react'
import Container from '../../Styled/Container'
import { spacing } from '../../styles/vars'
import Project from './Project'
import { withTranslation } from '../../../i18n'
import { TFunction, WithTranslation } from 'next-i18next'
import { FistCharacterToUppercase } from '../../helper'
import ProjectModel from '../../models/Project'
import { ProjectsContainer } from './ProjectsContainer.1'

interface Props {
    projects: ProjectModel[]
    stackTitle: string
}


const ProjectsStack = ({ projects, stackTitle }: Props) => {


    return (
        <ProjectsContainer>
            <div className="work-container">
                <h1>{FistCharacterToUppercase(stackTitle)}</h1>
                <div className="projects">
                    {projects.map((project, i) => (
                        <Project key={i} data={project} />
                    ))}
                </div>
            </div>
        </ProjectsContainer>
    )
}

export default ProjectsStack
