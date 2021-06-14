import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Disclaimer from './components/Disclaimer/Disclaimer';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home';
import Moneyclip from './components/Moneyclip/Moneyclip';
import NavBar from './components/Shared/NavBar/NavBar';
import Seamless from './components/Seamless/Seamless';
import ScrollToTop from './components/Shared/ScrollToTop';
import Privacy from './components/Privacy/Privacy';
import ErrorPage from './components/404/404';

import { Helmet } from 'react-helmet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const structuredDataJson = {
  "@context": "http://schema.org",
  "@type": "Organization",
  "name": "Wellfield",
  "url": "https://www.wellfield.ca",
  // TODO: Add social handles and address
};

function App() {
  return (
    <>
      <Helmet>
        <script className='structured-data-list' type="application/ld+json">{JSON.stringify(structuredDataJson)}</script>
      </Helmet>

      <BrowserRouter>
        <ScrollToTop />

        <div className='app'>
          <NavBar />

          <Switch>
            <Route exact component={Home} path='/' />
            <Route exact component={Seamless} path='/seamless' />
            <Route exact component={Moneyclip} path='/moneyclip' />
            <Route exact component={About} path='/about' />
            <Route exact component={Contact} path='/contact' />
            <Route exact component={Disclaimer} path='/disclaimer' />
            <Route exact component={Privacy} path='/privacy' />
            <Route component={ErrorPage} />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
