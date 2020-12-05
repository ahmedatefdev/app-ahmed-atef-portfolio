import React from 'react'
import Articles from '../components/Blog/Articles/Articles'
import MainBlog from '../components/Blog/MainBlog'
import Summary from '../components/Blog/Summary/Summary'
import Footer from '../components/Footer'
import Navbar from '../components/Nav/Navbar'
import Page from '../components/Page'

interface Props {

}

const blog = (props: Props) => {
    return (
        <Page title={"Ahmed Atef Blog"} description={"This Blog contain all the dev articles made by Ahmed Atef "}>
            <Navbar />
            <MainBlog />
            <Footer />
        </Page>
    )
}

export default blog
