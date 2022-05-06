import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Button from './components/Button';
import Footer from './components/Footer';
import Header from './components/Header';
// import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from './pages/Home';
import Profiles from './pages/Profiles';
import './styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path ='/' element={<Home />} />
        {/* <Route path='/blog' element={<Blog />} /> */}
        <Route path='/profiles' element={<Profiles />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Button classButton='rdv-doctolib fixed' />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

