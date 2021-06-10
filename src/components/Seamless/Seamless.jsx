import './Seamless.css';

import Header from './Header/Header';
import DeFi from './DeFi/DeFi';
import Future from './Future/Future';

import { Helmet } from 'react-helmet';

function Seamless() {
  return (
    <>
      <Helmet>
        <title>Wellfield - Seamless</title>
        <meta name="description"
          content="Building technology that unlocks the future of decentralized finance" />
        <meta property="og:title" content="Wellfield - Home" />
        <meta property="og:description" content="Building technology that unlocks the future of decentralized finance" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wellfield.ca" />
      </Helmet>

      <Header />

      <DeFi />

      <Future />

    </>
  );
}

export default Seamless;