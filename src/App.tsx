import React from 'react';
import './App.css';
import rawData from './services/AppData';
import Header from './componenets/Header/Header';
import Content from './componenets/Content/Content';
import Footer from './componenets/Footer/Footer';
import SiteContext from './models/SiteContext';
import { useLocation } from "react-router-dom";

function App() {

  const location = useLocation().pathname;

  const isHome = () => {
    if( location === '/' || location === '/home' ) {
      return true;
    }
    return false;
  };

  return (
    <SiteContext.Provider value={rawData}>
      <div className="App">
        <Header />
        <Content showPanel={isHome()} />
        <Footer />
      </div>
    </SiteContext.Provider>
  );
}

export default App;
