import './Team.css';
import avatar from '../../../images/people/avatar.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Card = (props) => (
  <div className={`team__card team__card--${props.index}`}>
    <div>
      <img src={props.avatar} alt="Headshot" />
    </div>
    <span className="team__card-name heading5">{props.name}</span>
    <span className="team__card-title heading6">{props.title}</span>
    <p className="p2 mb-0">{props.bio}</p>
  </div>
);

function Team() {
  return (
    <>
      <div className="team__bg">
        <Container>
          <Row>
            <Col xs={12}><h2 className="team__heading heading1">Our Team</h2></Col>
          </Row>

          <Row>
            <Col xs={12} sm={6} lg={4}>
              <Card
                avatar={avatar}
                name='Name Here'
                title='Job Title, Investors'
                bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque vitae pulvinar ullamcorper arcu cursus urna. Sit neque, ultrices euismod etiam. Ultrices eu nec porta fermentum et.'
                index='1'
              />
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <Card
                avatar={avatar}
                name='Name Here'
                title='Job Title, Investors'
                bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque vitae pulvinar ullamcorper arcu cursus urna. Sit neque, ultrices euismod etiam. Ultrices eu nec porta fermentum et.'
                index='2'
              />
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <Card
                avatar={avatar}
                name='Name Here'
                title='Job Title, Investors'
                bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque vitae pulvinar ullamcorper arcu cursus urna. Sit neque, ultrices euismod etiam. Ultrices eu nec porta fermentum et.'
                index='3'
              />
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <Card
                avatar={avatar}
                name='Name Here'
                title='Job Title, Investors'
                bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque vitae pulvinar ullamcorper arcu cursus urna. Sit neque, ultrices euismod etiam. Ultrices eu nec porta fermentum et.'
                index='4'
              />
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <Card
                avatar={avatar}
                name='Name Here'
                title='Job Title, Investors'
                bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque vitae pulvinar ullamcorper arcu cursus urna. Sit neque, ultrices euismod etiam. Ultrices eu nec porta fermentum et.'
                index='5'
              />
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <Card
                avatar={avatar}
                name='Name Here'
                title='Job Title, Investors'
                bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque vitae pulvinar ullamcorper arcu cursus urna. Sit neque, ultrices euismod etiam. Ultrices eu nec porta fermentum et.'
                index='6'
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Team;
