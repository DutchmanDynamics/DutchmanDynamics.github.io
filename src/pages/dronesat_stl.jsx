import * as React from 'react';
import HeaderHero from '../components/HeaderHero';
import DroneSatSTL from '../components/DroneSatStl';
import Footer from '../components/Footer';

const IndexPage = () => (
  <main>
    <HeaderHero />
    <DroneSatSTL />
    <Footer />
  </main>
);

export const Head = () => <title>Drone Sat STL</title>;

export default IndexPage;
