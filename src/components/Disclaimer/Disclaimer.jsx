import './Disclaimer.css';
import scroll from '../../images/icons/scroll-to-bottom.svg';

import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Disclaimer() {
  return (
    <>
      <Helmet>
        <title>Wellfield - Disclaimer</title>
        <meta name="description"
          content="Building technology that unlocks the future of decentralized finance" />
        <meta property="og:title" content="Wellfield - Disclaimer" />
        <meta property="og:description" content="Building technology that unlocks the future of decentralized finance" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wellfield.ca/disclaimer" />
      </Helmet>

      <div className="disclaimer__bg1">
        <div className="disclaimer__horizontal" />
        <Container>
          <Row>
            <Col xs={12}>

              <div className="text-center">
                <h2 className="heading5 orange">Wellfield</h2>
                <h2 className="disclaimer__heading heading1">Disclaimer</h2>
                <img src={scroll} alt="Scroll to bottom" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="disclaimer__bg2">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="disclaimer__body">
                <p className="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat in platea elementum mauris faucibus. Donec aliquet etiam scelerisque dolor, morbi. Ultrices ut imperdiet urna, mauris semper dictum in ut. Rutrum fermentum tempor amet, lacus sit malesuada adipiscing elit. Sed eget pharetra egestas urna.</p>
                <p className="p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat in platea elementum mauris faucibus. Donec aliquet etiam scelerisque dolor, morbi. Ultrices ut imperdiet urna, mauris semper dictum in ut. Rutrum fermentum tempor amet, lacus sit malesuada adipiscing elit. Sed eget pharetra egestas urna. At massa libero varius enim adipiscing et. Arcu, ornare tellus sem nullam sit augue amet, donec. Sed tellus magnis velit nunc.</p>
                <p className="p2">Quis urna risus, ut adipiscing neque in cum morbi tincidunt. Ante id faucibus libero vitae leo enim pharetra, pharetra. Quisque aenean turpis cursus venenatis. In et faucibus sit consectetur. At ac adipiscing nisi, vitae diam tellus odio. Nisl luctus non tempus consequat, semper. Nunc gravida risus nec ligula. Nunc at pulvinar feugiat vulputate aliquet dui at eleifend. Risus, donec tempor lacus aliquam diam duis. Integer nisl, fames pretium nec. Massa commodo sapien elementum quisque ultricies. Eu in iaculis tellus vivamus et, sit. Tincidunt aliquam risus diam tempus. Viverra cras congue scelerisque habitasse magna diam tortor felis. Neque ultricies pellentesque tellus elementum nec.</p>
                <p className="p2">Dolor semper amet nec, ultrices euismod eget scelerisque ultricies posuere. A malesuada proin ut accumsan turpis. Libero sed a sagittis, etiam fusce pellentesque lorem. Eu porttitor vitae auctor laoreet a eget amet. Malesuada tincidunt ipsum nibh quis arcu ullamcorper ultricies at. Nec gravida enim tincidunt lacus, viverra aliquam aliquet neque, enim.</p>
                <p className="p2">Donec venenatis, aliquet pulvinar dui, id nibh a. Dignissim amet phasellus praesent eu non ipsum morbi. Cras nec proin dictum pellentesque semper praesent odio. Vulputate viverra purus sagittis elit nulla urna mattis cras. Aliquet neque facilisi id erat. Tortor, ullamcorper quam ultrices purus dolor viverra id.</p>
                <p className="p2">Faucibus sem at amet dictum maecenas dictumst hac etiam convallis. Aliquet orci massa tincidunt vitae nulla. Eu quis neque tempus ante enim purus tempor, nunc ultrices. Eu bibendum ornare urna, sit. Sapien lectus et dignissim eget consectetur iaculis mattis at. Ut porta hendrerit id dictum egestas pellentesque porta morbi hendrerit. Mauris integer tincidunt orci sollicitudin vel sed tristique.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Disclaimer;