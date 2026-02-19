import * as React from 'react';
import HeaderHero from '../components/HeaderHero';
import BentoGeigerTop from '../components/BentoGeigerTop';

const IndexPage = () => (
  <main>
    <HeaderHero />
    <BentoGeigerTop />
  </main>
);

export const Head = () => <title>Geiger Sat</title>;

export default IndexPage;
