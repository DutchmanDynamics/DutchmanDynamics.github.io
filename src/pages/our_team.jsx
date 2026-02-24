import * as React from 'react';

import TeamGeiger from '../components/TeamGeiger';
import TeamDrone from '../components/TeamDrone';
import Experts from '../components/Experts';
import HeaderHero from '../components/HeaderHero';
import Footer from '../components/Footer';

const IndexPage = () => (
  <main>
    <HeaderHero />
    <TeamGeiger />
    <TeamDrone />
    <Experts />

    <Footer />
  </main>
);

export const Head = () => <title>Our Teams</title>;

export default IndexPage;
