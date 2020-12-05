import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { i18n } from '../../../../i18n'
import IState from '../../../redux/types/IState'
import ExpertiseCards from './ExpertisesContainer'
import ImagesCarousel from './ImagesCarousel'
import ProjectLinks from './ProjectLinks'


const FullProjectPageDetails = () => {
    const { project } = useSelector((state: IState) => state.project)
    const { images, experiences, links, projectTranslations, } = project

    const projectTranslation =
        projectTranslations.find((trans) => trans.language.short_name.toLowerCase() === i18n.language?.toLowerCase())

    const siteUrl = useMemo(() => links.find((link) => link.name.toLowerCase().includes("site")), links)
    const codeUlr = useMemo(() => links.find((link) => link.name.toLowerCase().includes("code")), links)

    return (
        <>
            {/* <ProjectsNavbar PerviousProjectLink={PerviousProjectLink} nextProjectLink={nextProjectLink} /> */}
            <h1>{projectTranslation.name}</h1>
            <ImagesCarousel imagesURLS={images.map((image) => image?.url)} />
            { (siteUrl || codeUlr) && <ProjectLinks siteUrl={siteUrl?.url} codeUlr={codeUlr?.url} />}
            <p className="md-description">
                <ReactMarkdown plugins={[gfm]} children={`${projectTranslation.md_description}`} />
            </p>
            <ExpertiseCards experiences={experiences} />
        </>
    )
}

export default FullProjectPageDetails
