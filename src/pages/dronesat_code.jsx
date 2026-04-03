import * as React from 'react';
import HeaderHero from '../components/HeaderHero';
import DroneSatCode from '../components/DroneSatCode';
import Footer from '../components/Footer';

const IndexPage = () => (
  <main>
    <HeaderHero />
    <DroneSatCode />
    <Footer />
  </main>
);

export const Head = () => <title>Drone Sat Code</title>;

export default IndexPage;
