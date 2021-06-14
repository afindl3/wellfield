import DeFi from './DeFi/DeFi';
import Future from './Future/Future';
import Header from './Header/Header';
import Part from './Part/Part';
import MailingList from '../Shared/MailingList/MailingList';

import { Helmet } from 'react-helmet';

function Moneyclip() {
  return (
    <>
      <Helmet>
        <title>Wellfield - Moneyclip</title>
        <meta name="description"
          content="Building technology that unlocks the future of decentralized finance" />
        <meta property="og:title" content="Wellfield - Moneyclip" />
        <meta property="og:description" content="Building technology that unlocks the future of decentralized finance" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wellfield.ca" />
      </Helmet>

      <Header />

      <DeFi />

      <Future />

      <Part />

      <MailingList />
    </>
  );
}

export default Moneyclip;