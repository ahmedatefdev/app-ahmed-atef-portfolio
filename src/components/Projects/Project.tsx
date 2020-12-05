import Link from 'next/link'
import React, { useMemo } from 'react'
import { i18n } from '../../../i18n'
import ProjectModel from '../../models/Project'
import InfoCard from '../../Styled/InfoCard'

interface Props {
    data: ProjectModel
}

const Project = ({ data: project }: Props) => {
    const { projectTranslations, images, } = project
    const title = useMemo(() => {
        return projectTranslations.find((trans) => trans.language.short_name === i18n.language)
    }, [projectTranslations, i18n.language])
    return (
        <Link href={`project/${project.id}`} >
            <div>
                <InfoCard
                    imageUrl={images[Math.floor(Math.random() * images.length)]?.url || "https://i.imgur.com/7oeQZQa.png"}
                    title={title?.name || "Project Title translation not found"}
                />
            </div>
        </Link >
    )
}

export default Project
