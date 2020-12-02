import React from 'react'
import Articles from '../components/Blog/Articles/Articles'
import MainBlog from '../components/Blog/MainBlog'
import Summary from '../components/Blog/Summary/Summary'
import Footer from '../components/Footer'
import Navbar from '../components/Nav/Navbar'

interface Props {

}

const blog = (props: Props) => {
    return (
        <>
            <Navbar />
            <MainBlog />
            <Footer />
        </>
    )
}

export default blog
