import './MailingList.css';
import wfld from '../../../images/logos/wfld.svg';
import gear from '../../../images/images/gear.svg';

import { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const type = {
  '/': 'gray',
  '/seamless': 'black',
  '/moneyclip': 'white',
}

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

function MailingList() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [bg, setBg] = useState('');
  const buttonRef = useRef();
  const { pathname } = useLocation();

  const handleSubmit = e => {
    let errorMsg = '';
    if (email === '') {
      errorMsg = 'Email required';
    } else if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      errorMsg = 'Please enter a valid email';
    }

    setEmailError(errorMsg);

    if (errorMsg === '') {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "mailing-list", email })
      })
        .then(() => setIsSent(true))
        .catch(error => alert(error));
    }

    buttonRef.current.blur();
    e.preventDefault();
  };

  useEffect(() => {
    setBg(type[pathname])
  }, [pathname]);

  return (
    <div className={`mailing__bg mailing__bg-${bg}`}>
      <Container>
        <Row>
          <Col xs={12} className="text-center">
            <img src={wfld} alt="Wellfield logo" />
            <h2 className={`mailing__heading mailing__heading-${bg} heading2`}>Get investor updates.</h2>

            <form onSubmit={handleSubmit} autoComplete="off">
              <input type="hidden" name="form-name" value="mailing-list" />

              <div className="mailing__form">
                <div style={{ width: "100%" }}>
                  <input
                    style={{ width: "100%" }}
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="random"
                  />
                  {emailError ? <p className="form__error-msg">{emailError}</p> : ''}
                </div>

                <div>
                  <button type="submit" ref={buttonRef} className="button-lg mailing__button">Submit</button>
                </div>

              </div>
            </form>
          </Col>
        </Row>
      </Container>

      {/* <div className="mailing__image-wrapper d-none d-lg-block">
        <img src={gear} alt="Gear" />
      </div> */}
    </ div>
  );
}

export default MailingList;
