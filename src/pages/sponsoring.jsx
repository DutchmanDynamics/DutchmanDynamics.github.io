import * as React from 'react';
import HeaderHero from '../components/HeaderHero';
import Footer from '../components/Footer';
import Sponsors from '../components/Sponsors';

const IndexPage = () => (
  <main>
    <HeaderHero />
    <Sponsors />
    <Footer />
  </main>
);

export const Head = () => <title>Sponsoring</title>;

export default IndexPage;
