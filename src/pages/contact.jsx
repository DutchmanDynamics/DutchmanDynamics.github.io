import * as React from 'react';
import HeaderHero from '../components/HeaderHero';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const IndexPage = () => (
  <main>
    <HeaderHero />
    <Contact />
    <Footer />
  </main>
);

export const Head = () => <title>Contact</title>;

export default IndexPage;
