import * as React from 'react';
import HeaderHero from '../components/HeaderHero';
import BentoGeigerTop from '../components/BentoGeigerTop';
import Footer from '../components/Footer';
import TechSpecsGeiger from '../components/TechSpecsGeiger';

const IndexPage = () => (
  <main>
    <HeaderHero />
    <BentoGeigerTop />
    <TechSpecsGeiger />

    <Footer />
  </main>
);

export const Head = () => <title>Geiger Sat</title>;

export default IndexPage;
