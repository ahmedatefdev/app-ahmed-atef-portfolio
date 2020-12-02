import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Nav/Navbar';
import ProjectPage from '../components/Projects/ProjectPage/ProjectPage';

interface Props { }

const Project = (props: Props) => {
    return (
        <>
            <Navbar />
            <ProjectPage />
            <Footer />
        </>
    );
};

export default Project;
