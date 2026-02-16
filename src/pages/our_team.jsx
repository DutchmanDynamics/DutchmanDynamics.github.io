import * as React from 'react';
import Header from '../components/Header';
import TeamGeiger from '../components/TeamGeiger';
import TeamDrone from '../components/TeamDrone';
import Experts from '../components/Experts';
const IndexPage = () => (
  <main>
    <Header />
    <TeamGeiger />
    <TeamDrone />
    <Experts />
  </main>
);

export const Head = () => <title>Our Team</title>;

export default IndexPage;
