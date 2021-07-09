import './Seamless.css';
import Header from './Header/Header';
import DeFi from './DeFi/DeFi';
import Future from './Future/Future';
import Part from './Part/Part';
import Tools from './Tools/Tools';
import MailingList from '../Shared/MailingList/MailingList';
import seamlessStackAnimation from '../../lotties/seamless/full-images/seamless-stack.json';

import lottie from 'lottie-web';
import { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet';

function Seamless() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [playAnimation, setPlayAnimation] = useState(false);
  const [stackAnimation, setStackAnimation] = useState(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrollPosition(window.scrollY + window.innerHeight);

      const topPosition = animationRef.current.offsetTop;
      if (topPosition < (window.scrollY + 300)) {
        setPlayAnimation(true);
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!document.getElementById('seamless__stack-animation').hasChildNodes()) {
      const stack = lottie.loadAnimation({
        container: document.querySelector("#seamless__stack-animation"),
        animationData: seamlessStackAnimation,
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
        <title>Wellfield - Seamless</title>
        <meta name="description"
          content="Building technology that unlocks the future of decentralized finance" />
        <meta property="og:title" content="Wellfield - Seamless" />
        <meta property="og:description" content="Building technology that unlocks the future of decentralized finance" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wellfield.ca" />
      </Helmet>

      <div className="seamless__container">
        <Header />

        <DeFi scrollPosition={scrollPosition} />

        <Future scrollPosition={scrollPosition} />

        <div ref={animationRef}></div>
        <Tools scrollPosition={scrollPosition} />

        <div id="seamless__stack-animation" />

        <Part scrollPosition={scrollPosition} />

        <MailingList />
      </div>
    </>
  );
}

export default Seamless;