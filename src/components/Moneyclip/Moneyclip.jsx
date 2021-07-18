import './Moneyclip.css';
import Header from './Header/Header';
import DeFi from './DeFi/DeFi';
import Future from './Future/Future';
import Part from './Part/Part';
import MailingList from '../Shared/MailingList/MailingList';
import moneyclipStackAnimation from '../../lotties/moneyclip/full-images/moneyclip-stack.json';

import lottie from 'lottie-web';
import { useEffect, useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import { Helmet } from 'react-helmet';

function Moneyclip() {
  const [playAnimation, setPlayAnimation] = useState(false);
  const [stackAnimation, setStackAnimation] = useState(null);

  useEffect(() => {
    if (!document.getElementById('moneyclip__stack-animation').hasChildNodes()) {
      const stack = lottie.loadAnimation({
        container: document.querySelector("#moneyclip__stack-animation"),
        animationData: moneyclipStackAnimation,
        loop: false,
        autoplay: false,
        rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
      });
      setStackAnimation(stack);
    }
    if (playAnimation && stackAnimation) {
      stackAnimation.play()
    }
  }, [playAnimation, stackAnimation]);

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

      <div className="moneyclip__container">
        <Header />

        <DeFi />

        <Future />

        <div id="moneyclip__stack-animation" />
        <ScrollTrigger onEnter={() => setPlayAnimation(true)}>
          <Part />
        </ScrollTrigger>

        <MailingList />
      </div>
    </>
  );
}

export default Moneyclip;