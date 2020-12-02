import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Nav/Navbar'
import Projects from '../components/Projects/Projects'

interface Props {

}

const projects = ({ }: Props) => {
    return (
        <>
            <Navbar />
            <Projects />
            <Footer />
        </>
    )
}

export default projects
