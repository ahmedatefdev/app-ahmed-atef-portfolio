import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Nav/Navbar'
import Page from '../components/Page'
import Projects from '../components/Projects/Projects'

interface Props {

}

const projects = ({ }: Props) => {
    return (
        <Page title={"Projects Made by Ahmed Atef"} >
            <Navbar />
            <Projects />
            <Footer />
        </Page>
    )
}

export default projects
