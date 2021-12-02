import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
//import Product from './pages/Product/Product';
//import Investors from './pages/Investors/Investors';
//import Tech from './pages/Tech/Tech';
//import Founder from './pages/Founder/Founder';
//import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        {/* <Route path='/Product' exact component={Product} />
        <Route path='/Investors' exact component={Investors} />
        <Route path='/Tech' exact component={Tech} />
        <Route path='/Founder' exact component={Founder} />
        <Route path='/sign-up' exact component={SignUp} />  */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;