import './Future.css';
import liquidity from '../../../images/icons/liquidity.svg';
import security from '../../../images/icons/security.svg';

import { useLayoutEffect, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Future() {
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
    <div className={slideIn && `mc-future__card-slide--${props.type}`}>
      <div className={`mc-future__card mc-future__card--${props.type}`}>
        <img src={props.image} />
        <div className="mc-future__card-body-container">
          <h3 className="mc-future__card-title heading4">{props.title}</h3>
          <p className="mc-future__card-body p1">{props.body}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mc-future__bg">
      <Container>
        <Row>
          <Col xs={12}><h2 className="mc-future__heading heading2">How does MoneyClip contribute to the future of finance?</h2></Col>
        </Row>

        <Row>
          <div ref={slideRef}></div>
          <Col xs={12} lg={6}>
            <Card
              image={liquidity}
              title='The ultimate trading wallet.'
              body='MoneyClip links your bank to blockchain and gives you regulated access to the world’s best DeFi solutions.'
              type='left'
            />
          </Col>
          <Col xs={12} lg={6}>
            <Card
              image={security}
              title='All-in-one solution for DeFi products.'
              body='Savings, borrowing, merchant solutions: one app for every financial product on the ETH blockchain ecosystem.  '
              type='right'
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Future;
