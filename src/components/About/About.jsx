import './About.css';
import Header from './Header/Header';
import Team from './Team/Team';
import Timeline from './Timeline/Timeline';
import Join from './Join/Join';
import Location from './Location/Location';

import { Helmet } from 'react-helmet';

function About() {
  return (
    <>
      <Helmet>
        <title>Wellfield - About us</title>
        <meta name="description"
          content="Building technology that unlocks the future of decentralized finance" />
        <meta property="og:title" content="Wellfield - About us" />
        <meta property="og:description" content="Building technology that unlocks the future of decentralized finance" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wellfield.ca/about" />
      </Helmet>

      <Header />
      <Team />
      <Timeline />
      <Join />
      <Location />
    </>
  );
}

export default About;