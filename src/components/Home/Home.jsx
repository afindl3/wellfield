import './Home.css';
import tiles from '../../images/tiles/tile-graphic.png';
import Company from './Company/Company';
import Header from './Header/Header';
import Investors from './Investors/Investors';
import Products from './Products/Products';
import Values from './Values/Values';

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
        <Header />

        <Products />

        <Values />

        <Company />

        <Investors />

        <div className="home__graphic-container">
          <img src={tiles} className="home__graphic" alt="Tile graphic" />
        </div>
      </div>

    </>
  );
}

export default Home;