import './Tools.css';
import trade from '../../../images/icons/trade.svg';
import dbtc from '../../../images/icons/dbtc.svg';
import borrow from '../../../images/icons/borrow.svg';
import stake from '../../../images/icons/stake.svg';

import { useLayoutEffect, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Values() {
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
    <div className={slideIn ? `tools__card-slide--${props.index}` : ''}>
      <div className={`tools__card tools__card--${props.index}`}>
        <img src={props.icon} alt={`${props.title} icon`} />
        <h5 className="tools__card-title heading5">{props.title}</h5>
        <p className="p2 mb-0">{props.body}</p>
      </div>
    </div>
  );

  return (
    <div className="tools__bg">
      <Container>
        <Row>
          <Col xs={12}>
            <h1 className="tools__heading heading1">Suite of Tools</h1>
            <h3 className="tools__paragraph heading3">Protocols and apps that link together any blockchain.</h3>
          </Col>
        </Row>
        <Row>
          <div ref={slideRef}></div>
          <Col xs={12} sm={6} lg={3}>
            <Card
              icon={trade}
              title='Trade'
              body='Permissionless, unstoppable cross-blockchain trading.'
              index='1'
            />
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Card
              icon={dbtc}
              title='DBTC'
              body='A truly decentralized Bitcoin and Ethereum pairing.'
              index='2'
            />
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Card
              icon={borrow}
              title='Borrow'
              body='We empower borrowers to lend to themselves—no application, low interest, negligible fees.'
              index='3'
            />
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Card
              icon={stake}
              title='Derivatives'
              body='We enable truly decentralized futures and other financial products.'
              index='4'
            />
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default Values;
