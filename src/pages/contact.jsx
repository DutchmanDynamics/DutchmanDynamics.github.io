import * as React from 'react';
import HeaderHero from '../components/HeaderHero';
import Contact from '../components/Contact';

const IndexPage = () => (
  <main>
    <HeaderHero />
    <Contact />
  </main>
);

export const Head = () => <title>Contact</title>;

export default IndexPage;
