import './Products.css';
import application from '../../../images/tiles/application-cut.png';
import protocol from '../../../images/tiles/protocol-cut.png';
import rightWhite from '../../../images/icons/chevron-right-white.svg';
import rightBlack from '../../../images/icons/chevron-right-black.svg';
import fullControlAnmiation from '../../../lotties/home/circles/full-control.json';
import ourProductsAnimation from '../../../lotties/home/underlines/our-products.json';

import lottie from 'lottie-web';
import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Card = ({ type, eyebrow, title, cta, body, slideIn, history }) => (
  <div className={`products__card products__card--${type} ${slideIn ? `products__card-slide--${type}` : ''}`}
    onClick={() => history.push(eyebrow.toLowerCase())}>
    <div>
      <span className={`products__card-eyebrow products__card-eyebrow--${type}`}>{eyebrow}</span>
      <h3 className={`products__card-title heading2 products__card-title--${type}`}>{title}</h3>
    </div>


    <div style={{ position: 'relative' }}>
      <div className="products__button-wrapper">
        <button className={`d-none d-md-block button-lg products__button--${type}`}>{cta}</button>
        <button className={`d-md-none button-sm products__button--${type}`}>{cta}</button>
      </div>

      <p className={`products__card-body p1 products__card-body--${type}`}>{body}</p>

      <Link to={`${eyebrow.toLowerCase()}`} className="link">
        <span className={`heading5 ${type === 'left' ? 'white' : 'black'}`}>
          Learn More <img src={type === 'left' ? rightWhite : rightBlack} style={{ marginLeft: 8 }} alt="Chevron right" />
        </span>
      </Link>

      <div className="products__img-wrapper">
        <img src={type === 'left' ? protocol : application} className="products__img"
          alt={type === 'left' ? 'Protocol tile' : 'Application tile'} />
      </div>
    </div>
  </div>
);

function Products() {
  const history = useHistory();
  const [slideIn, setSlideIn] = useState(false);
  const slideRef = useRef(null)

  useEffect(() => {
    const topPosition = slideRef.current.getBoundingClientRect().top;
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      if (topPosition < scrollPosition) {
        setSlideIn(true);
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, []);

  useEffect(() => {
    if (slideIn) {
      setTimeout(() => {
        lottie.loadAnimation({
          container: document.querySelector("#products__full-control-animation"),
          animationData: fullControlAnmiation,
          loop: false,
          rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
        });
        lottie.loadAnimation({
          container: document.querySelector("#products__products-animation"),
          animationData: ourProductsAnimation,
          loop: false,
          rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
        });
      }, 1000)
    }
  }, [slideIn]);

  return (
    <div className="products__bg-color">
      <div className="products__bg">
        <div className="products__horizontal products__horizontal1" />
        <div className="products__horizontal products__horizontal2" />
        <Container>
          <Row>
            <Col xs={12}>
              <div style={{ position: 'relative' }}>
                <h2 className="products__heading heading3 d-none d-md-block">Our products eliminate the need for third parties, whether traditional banks or crypto exchanges, and give individuals full control over their assets.</h2>
                <h2 className="products__heading heading3 d-md-none">Our products eliminate the need for third parties, whether traditional banks or crypto exchanges, <br></br>and give individuals <br></br>full control over their assets.</h2>
                <div id="products__full-control-animation" />
                <div id="products__products-animation" />
              </div>
            </Col>
          </Row>
          <Row>
            <div ref={slideRef}></div>
            <Col xs={12} lg={6}>
              <Card
                eyebrow='Seamless'
                title='Permissionless, unstoppable cross-blockchain trading'
                cta='Launching 2022'
                body='Use Bitcoin across blockchains???without giving up control of your keys.'
                type='left'
                slideIn={slideIn}
                history={history}
              />
            </Col>
            <Col xs={12} lg={6}>
              <Card
                eyebrow='MoneyClip'
                title='Simplified access to the world of DeFi.'
                cta='Launching Fall 2021'
                body='Link your bank to blockchain and enjoy regulated access to the world???s best DeFi options.'
                type='right'
                slideIn={slideIn}
                history={history}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Products;
