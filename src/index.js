import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Profiles from './pages/Profiles';
import './styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path ='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/profiles' element={<Profiles />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

