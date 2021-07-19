import './Timeline.css';
import checkmarkFilled from '../../../images/icons/checkmark-filled.svg';
import checkmarkEmpty from '../../../images/icons/checkmark-empty.svg';
import timelineScroll from '../../../images/icons/timeline-scroll.svg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const date = new Date();
const currentYear = date.getFullYear();

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 4,
    partialVisibilityGutter: 30
  },
  desktop: {
    breakpoint: { max: 1199.98, min: 992 },
    items: 3,
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: { max: 991.98, min: 768 },
    items: 2,
    partialVisibilityGutter: 60
  },
  mobile: {
    breakpoint: { max: 767.98, min: 0 },
    items: 1,
    partialVisibilityGutter: 100
  }
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <div className="timeline__scroll--left">
      <img src={timelineScroll} onClick={() => onClick()} className="rotateimg180" alt="Previous" />
    </div>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <div className="timeline__scroll--right">
      <img src={timelineScroll} onClick={() => onClick()} alt="Next" />
    </div>
  );
};

const Card = ({ year, item1, item2 }) => (
  <div className="timeline__card">
    <div className={`timeline__button-wrapper ${Number(year) === currentYear ? 'timeline__button-wrapper--black' : ''}`}>
      {console.log(year, ' vs ', currentYear)}
      <button className={`button-lg ${Number(year) === currentYear ? 'timeline__button--black' : 'timeline__button'}`}>
        {year}
      </button>
    </div>

    <ul className="timeline__list">
      <li className="timeline__list-item">
        <img src={year >= currentYear ? checkmarkEmpty : checkmarkFilled}
          alt={year >= currentYear ? 'Unchecked checkmark' : 'Checked checkmark'}
          className="timeline__checkmark"
        />
        <p className="p1 mb-0">{item1}</p>
      </li>
      {
        item2 &&
        <li className="timeline__list-item">
          <img src={year >= currentYear ? checkmarkEmpty : checkmarkFilled}
            alt={year >= currentYear ? 'Unchecked checkmark' : 'Checked checkmark'}
            className="timeline__checkmark"
          />
          <p className="p1 mb-0">{item2}</p>
        </li>
      }
    </ul>
  </div>
);

function Timeline() {
  return (
    <div className="timeline__bg">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h2 className="timeline__heading heading1">Our Timeline</h2>
          </Col>
        </Row>
      </Container>

      <div className="timeline__container">
        <Carousel
          responsive={responsive}
          partialVisible={true}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          <Card
            year='2018'
            item1='Research & Develop'
            item2='Provisional Patents'
          />
          <Card
            year='2019'
            item1='External Reviews'
            item2='Improve Performance'
          />
          <Card
            year='2020'
            item1='Prototype & More Patents'
            item2='Deployment & Validation'
          />
          <Card
            year='2021'
            item1='Launching MoneyClip'
            item2='Launching DeFi Bitcoin Protocols'
          />
          <Card
            year='2022'
            item1='Launching Seamless Decentralized Exchange'
          />
        </Carousel>
      </div>
    </div>
  );
}

export default Timeline;
