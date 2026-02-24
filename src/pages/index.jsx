import * as React from 'react';
import HeaderWithCardsGeneral from '../components/HeaderWithCardsGeneral';
import HeroSection from '../components/HeroSection';
import Stats from '../components/Stats';
import Footer from '../components/Footer';
import SponsorsIndex from '../components/SponsorsIndex';
import Donate from '../components/Donate';

const IndexPage = () => (
  <main>
    <HeroSection />
    <HeaderWithCardsGeneral />
    <Stats />
    <SponsorsIndex />
    <Donate />
    <Footer />
  </main>
);

export const Head = () => <title>CanSat Kajmunk 25/26</title>;

export default IndexPage;
