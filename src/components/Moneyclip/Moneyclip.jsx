import './Moneyclip.css';
import DeFi from './DeFi/DeFi';
import Future from './Future/Future';
import Header from './Header/Header';
import Part from './Part/Part';
import MailingList from '../Shared/MailingList/MailingList';
import moneyclipStackAnimation from '../../lotties/moneyclip/full-images/moneyclip-stack.json';

import lottie from 'lottie-web';
import { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet';

function Moneyclip() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [playAnimation, setPlayAnimation] = useState(false);
  const [stackAnimation, setStackAnimation] = useState(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrollPosition(window.scrollY);

      const topPosition = animationRef.current.offsetTop;
      if (topPosition < (window.scrollY + 300)) {
        setPlayAnimation(true);
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

        <DeFi scrollPosition={scrollPosition} />

        <Future scrollPosition={scrollPosition} />

        <div ref={animationRef}></div>
        <Part scrollPosition={scrollPosition} />

        <div id="moneyclip__stack-animation" />

        <MailingList scrollPosition={scrollPosition} />
      </div>
    </>
  );
}

export default Moneyclip;