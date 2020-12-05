import React, { useMemo } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Nav/Navbar';
import ProjectPage from '../../components/Projects/ProjectPage/ProjectPage';
import { useRouter } from 'next/router'
import Page from '../../components/Page';
import { useSelector } from 'react-redux';
import IState from '../../redux/types/IState';
import { i18n } from '../../../i18n';


const Project = () => {
    const router = useRouter()
    const { projectid: projectId } = router.query
    const { project } = useSelector((state: IState) => state.project)

    const projectTranslation = useMemo(() => project?.projectTranslations?.find((trans) => trans?.language?.short_name?.toLowerCase() === i18n.language?.toLowerCase()), [project, i18n.language])

    return (
        <Page title={projectTranslation?.name || "Ahmed Atef Project"} description={projectTranslation?.md_description || "Ahmed Atef Project Description"}>
            <Navbar />
            <ProjectPage projectId={(projectId) as string} />
            <Footer />
        </Page>
    );
};

export default Project;
