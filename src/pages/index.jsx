import * as React from 'react';
import Header from '../components/Header';
import TitleCard from '../components/TitleCard';
import Button from '../components/Button';
import HeaderWithCardsGeneral from '../components/HeaderWithCardsGeneral';

const IndexPage = () => (
  <main>
    <Header />
    <TitleCard />
    <HeaderWithCardsGeneral />
  </main>
);

export const Head = () => <title>CanSat Kajmunk 25/26</title>;

export default IndexPage;
