import './Home.css';
import Company from './Company/Company';
import Header from './Header/Header';
import Investors from './Investors/Investors';
import Products from './Products/Products';
import Values from './Values/Values';
import MailingList from '../Shared/MailingList/MailingList';
import TileAnimations from './TileAnimations/TileAnimations';

import { Helmet } from 'react-helmet';

function Home() {
  return (
    <>
      <Helmet>
        <title>Wellfield - Home</title>
        <meta name="description"
          content="Building technology that unlocks the future of decentralized finance" />
        <meta property="og:title" content="Wellfield - Home" />
        <meta property="og:description" content="Building technology that unlocks the future of decentralized finance" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wellfield.ca" />
      </Helmet>

      <div className="home__container">
        <TileAnimations />

        <Header />

        <Products />

        <Values />

        <Company />

        <Investors />

        <MailingList />
      </div>

    </>
  );
}

export default Home;