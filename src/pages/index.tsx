import React from 'react';
import Navbar from '../components/Nav/Navbar';
import Intro from '../components/intro';
import Expertises from '../components/Experites/Expertises';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

interface Props { }

const HomePage = (props: Props) => {
  return (
    <>
      <Navbar />
      <Intro />
      <Expertises />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
