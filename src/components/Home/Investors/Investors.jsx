import './Investors.css';
import avatar from '../../../images/people/avatar.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Card = (props) => (
  <div className={`investors__card investors__card--${props.index}`}>
    <div>
      <img src={props.avatar} alt="Headshot" />
    </div>
    <span className="investors__card-name heading5">{props.name}</span>
    <span className="investors__card-title heading6">{props.title}</span>
    <p className="p2 mb-0">{props.bio}</p>
  </div>
);

function Investors() {
  return (
    <>
      <div className="investors__bg">
        <div className="investors__horizontal" />
        <Container>
          <Row>
            <Col xs={12}><span className="heading5 dark-grey">Tagline here</span></Col>
            <Col xs={12}><h2 className="investors__heading heading1">Our Investors</h2></Col>
          </Row>

          <Row>
            <Col xs={12} md={6} lg={3}>
              <Card
                avatar={avatar}
                name='Name Here'
                title='Job Title, Investors'
                bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque vitae pulvinar ullamcorper arcu cursus urna. Sit neque, ultrices euismod etiam. Ultrices eu nec porta fermentum et.'
                index='1'
              />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card
                avatar={avatar}
                name='Name Here'
                title='Job Title, Investors'
                bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque vitae pulvinar ullamcorper arcu cursus urna. Sit neque, ultrices euismod etiam. Ultrices eu nec porta fermentum et.'
                index='2'
              />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card
                avatar={avatar}
                name='Name Here'
                title='Job Title, Investors'
                bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque vitae pulvinar ullamcorper arcu cursus urna. Sit neque, ultrices euismod etiam. Ultrices eu nec porta fermentum et.'
                index='3'
              />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card
                avatar={avatar}
                name='Name Here'
                title='Job Title, Investors'
                bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque vitae pulvinar ullamcorper arcu cursus urna. Sit neque, ultrices euismod etiam. Ultrices eu nec porta fermentum et.'
                index='4'
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Investors;
