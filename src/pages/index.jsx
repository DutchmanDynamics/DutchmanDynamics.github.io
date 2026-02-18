import * as React from 'react';
import Header from '../components/Header';
import HeaderWithCardsGeneral from '../components/HeaderWithCardsGeneral';
import HeroSection from '../components/HeroSection';

const IndexPage = () => (
  <main>
    <HeroSection />
    <HeaderWithCardsGeneral />
  </main>
);

export const Head = () => <title>CanSat Kajmunk 25/26</title>;

export default IndexPage;
