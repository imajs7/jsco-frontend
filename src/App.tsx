import React from 'react';
import './App.css';
import Header from './componenets/Header/Header';
import Content from './componenets/Content/Content';
import Footer from './componenets/Footer/Footer';
import { useLocation } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

function App() {

  const location = useLocation().pathname;

  const isHome = () => {
    if( location === '/' || location === '/home' ) {
      return true;
    }
    return false;
  };

  return (
      <div className="App">
        <Header />
        <Content showPanel={isHome()} />
        <Footer />
        <ScrollToTop width="16" height="16" smooth={true} />
      </div>
  );
}

export default App;
