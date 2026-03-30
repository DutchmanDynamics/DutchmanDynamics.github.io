import * as React from 'react';
import HeaderHero from '../components/HeaderHero';
import Footer from '../components/Footer';
import Resources from '../components/Resources';

const IndexPage = () => (
  <main>
    <HeaderHero />
    <Resources />
    <Footer />
  </main>
);

export const Head = () => <title>Resources</title>;

export default IndexPage;
