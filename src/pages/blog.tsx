import { WithTranslation } from 'next-i18next'
import React from 'react'
import { withTranslation } from '../../i18n'
import Articles from '../components/Blog/Articles/Articles'
import MainBlog from '../components/Blog/MainBlog'
import Summary from '../components/Blog/Summary/Summary'
import Footer from '../components/Footer'
import Navbar from '../components/Nav/Navbar'
import Page from '../components/Page'

interface Props extends WithTranslation {

}

const blog = ({ t }: Props) => {
    return (
        <Page title={`${t("name")} ${t("blog")}`} description={"This Blog contain all the dev articles made by Ahmed Atef "}>
            <Navbar />
            <MainBlog />
            <Footer />
        </Page>
    )
}

export default withTranslation("pages-names")(blog)
