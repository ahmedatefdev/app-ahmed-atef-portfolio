import React from 'react';
import Navbar from '../components/Nav/Navbar';
import Intro from '../components/Intro/Intro';
import Expertises from '../components/Expertises/Expertises';
import Footer from '../components/Footer';
import Contact from '../components/Contact/Contact';
import Page from '../components/Page';
import SectionNav from '../components/Intro/SectionNav';
import { withTranslation } from '../../i18n';
import { WithTranslation } from 'next-i18next';

interface Props extends WithTranslation { }

const HomePage = ({ t }: Props) => {
  return (
    <Page title={`${t("name")} ${t("home")}`} >
      <Navbar />
      <Intro />
      <SectionNav />
      <Expertises />
      <Contact />
      <Footer />
    </Page>
  );
};

export default withTranslation("pages-names")(HomePage);
