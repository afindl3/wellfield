import './Home.css';
import applicationsTile from '../../images/tiles/applications.png';
import blockchainTile from '../../images/tiles/blockchain.png';
import protocolsTile from '../../images/tiles/protocols.png';
import Company from './Company/Company';
import Header from './Header/Header';
import Investors from './Investors/Investors';
import Products from './Products/Products';
import Values from './Values/Values';
import MailingList from '../Shared/MailingList/MailingList';

import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';

function Home() {
  const [loadTiles, setLoadTiles] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadTiles(true)
    }, 800)
  }, []);

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
        {
          loadTiles &&
          <>
            <img src={blockchainTile} className="home__tile home__blockchain-tile" alt="Blockchain tile" />
            <img src={protocolsTile} className="home__tile home__protocols-tile" alt="Protocols tile" />
            <img src={applicationsTile} className="home__tile home__applications-tile" alt="Applications tile" />
          </>
        }

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