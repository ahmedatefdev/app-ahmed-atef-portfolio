import { WithTranslation } from 'next-i18next'
import React from 'react'
import { withTranslation } from '../../i18n'
import Footer from '../components/Footer'
import Navbar from '../components/Nav/Navbar'
import Page from '../components/Page'
import Projects from '../components/Projects/Projects'

interface Props extends WithTranslation {

}

const projects = ({ t }: Props) => {
    return (
        <Page title={`${t("name")} ${t("projects")}`}>
            <Navbar />
            <Projects />
            <Footer />
        </Page>
    )
}

export default withTranslation("pages-names")(projects)
