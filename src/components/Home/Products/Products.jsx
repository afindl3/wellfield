import './Products.css';
import application from '../../../images/tiles/application.png';
import protocol from '../../../images/tiles/protocol.png';
import rightWhite from '../../../images/icons/chevron-right-white.png';
import rightBlack from '../../../images/icons/chevron-right-black.png';

import { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Products() {
  const [slideIn, setSlideIn] = useState(false);
  const slideRef = useRef(null)

  useLayoutEffect(() => {
    const topPosition = slideRef.current.getBoundingClientRect().top;
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      if (topPosition < scrollPosition) {
        setSlideIn(true);
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, []);

  const Card = (props) => (
    <div className={slideIn && `products__card-slide--${props.type}`}>
      <div className={`products__card products__card--${props.type}`} >
        <span className={`products__card-eyebrow products__card-eyebrow--${props.type}`}>{props.eyebrow}</span>
        <h3 className={`products__card-title heading2 products__card-title--${props.type}`}>{props.title}</h3>

        <div style={{ position: 'relative' }}>
          <div className="products__button-wrapper">
            <button className={`d-none d-md-block button-lg products__button--${props.type}`}>{props.cta}</button>
            <button className={`d-md-none button-sm products__button--${props.type}`}>{props.cta}</button>
          </div>

          <p className={`products__card-body p1 products__card-body--${props.type}`}>{props.body}</p>

          <Link to={`${props.eyebrow.toLowerCase()}`} className="link">
            <span className={`heading5 ${props.type === 'left' ? 'white' : 'black'}`}>
              Learn More <img src={props.type === 'left' ? rightWhite : rightBlack} style={{ marginLeft: 8 }} alt="Chevron right" />
            </span>
          </Link>

          <div className="products__img-wrapper">
            <img src={props.type === 'left' ? protocol : application} className="products__img"
              alt={props.type === 'left' ? 'Protocol tile' : 'Application tile'} />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="products__bg">
      <Container>
        <Row>
          <Col xs={12}>
            <h2 className="products__heading heading3">Our products eliminate the need for third parties, whether traditional banks or crypto exchanges, and give individuals full control over their assets.</h2>
          </Col>
        </Row>
        <Row>
          <div ref={slideRef}></div>
          <Col xs={12} lg={6}>
            <Card
              eyebrow='Seamless'
              title='Permissionless, unstoppable cross-blockchain trading'
              cta='Launching 2022'
              body='Use Bitcoin across blockchains—without giving up control of your keys.'
              type='left'
            />
          </Col>
          <Col xs={12} lg={6}>
            <Card
              eyebrow='MoneyClip'
              title='Simplified access to the world of DeFi.'
              cta='Launching Fall 2021'
              body='Link your bank to blockchain and enjoy regulated access to the world’s best DeFi options.'
              type='right'
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Products;
