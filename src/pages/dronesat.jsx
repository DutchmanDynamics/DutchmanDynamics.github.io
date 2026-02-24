import * as React from 'react';
import HeaderHero from '../components/HeaderHero';
import BentoDroneTop from '../components/BentoDroneTop';
import TechSpecsDrone from '../components/TechSpecsDrone';
import Footer from '../components/Footer';

const IndexPage = () => (
  <main>
    <HeaderHero />
    <BentoDroneTop />
    <TechSpecsDrone />
    <Footer />
  </main>
);

export const Head = () => <title>Drone Sat</title>;

export default IndexPage;
