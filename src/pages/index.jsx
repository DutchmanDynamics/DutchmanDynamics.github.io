import * as React from 'react';
import HeaderWithCardsGeneral from '../components/HeaderWithCardsGeneral';
import HeroSection from '../components/HeroSection';
import Stats from '../components/Stats';

const IndexPage = () => (
  <main>
    <HeroSection />
    <HeaderWithCardsGeneral />
    <Stats />
  </main>
);

export const Head = () => <title>CanSat Kajmunk 25/26</title>;

export default IndexPage;
