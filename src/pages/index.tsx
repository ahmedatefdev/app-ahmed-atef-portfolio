import React from 'react';
import Navbar from '../components/Nav/Navbar';
import Intro from '../components/intro';
import Expertises from '../components/Experites/Expertises';

interface Props { }

const HomePage = (props: Props) => {
  return (
    <>
      <Navbar />
      <Intro />
      <Expertises />
    </>
  );
};

export default HomePage;
