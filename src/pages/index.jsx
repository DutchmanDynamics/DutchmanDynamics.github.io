import * as React from 'react';
import Header from '../components/Header';
import TitleCard from '../components/TitleCard';
import Button from '../components/Button';

const IndexPage = () => (
  <main>
    <Header />
    <TitleCard />
    <Button />
  </main>
);

export const Head = () => <title>CanSat Kajmunk 25/26</title>;

export default IndexPage;
