import { Switch } from 'antd'
import { TFunction } from 'next-i18next'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { i18n, withTranslation } from '../../../i18n'
import { FistCharacterToUppercase } from '../../helper'
import { fetchProjectsAction } from '../../redux/actions/actions'
import IState from '../../redux/types/IState'
import { SectionTitle } from '../../Styled/Titles'
import Project from './Project'
import { ProjectsContainer } from './ProjectsContainer'
import ProjectsStack from './ProjectsStack'
import ProjectsStackLoading from './ProjectsStackLoading'

interface Props {
    t: TFunction
}

const Projects = ({ t }: Props) => {
    const dispatch = useDispatch()
    const { stacksWithProjects, stacksWithProjectsLoading: loading } = useSelector((state: IState) => state.project)

    useEffect(() => {
        dispatch(fetchProjectsAction())
    }, [])

    return (
        <ProjectsContainer>
            <SectionTitle>{FistCharacterToUppercase(t("projects"))}</SectionTitle>
            {
                loading ? Array.from({ length: 2 }).map((num, i) =>
                    <ProjectsStackLoading key={i} />
                ) :
                    stacksWithProjects === null || stacksWithProjects === undefined || stacksWithProjects.length <= 0 ?
                        <SectionTitle>Nothing to Show</SectionTitle> :
                        stacksWithProjects
                            .filter((stack) => stack.projects.length > 0)
                            .map(({ projects, stackTranslations }, i) => {
                                const stackTitle =
                                    stackTranslations.find((trans, i) => trans.language.short_name.toLowerCase() === i18n.language?.toLowerCase())
                                return (<ProjectsStack projects={projects} stackTitle={stackTitle?.name || "Stack Title translation not found"} key={i} />)
                            }
                            )
            }
        </ProjectsContainer>
    )
}

export default withTranslation("pages-names")(Projects)
