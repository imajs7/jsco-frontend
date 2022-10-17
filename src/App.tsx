import React from 'react';
import './App.css';
import getSiteInfo from './services/fetchData';
import Header from './componenets/Header/Header';
import Content from './componenets/Content/Content';
import Footer from './componenets/Footer/Footer';
import SiteContext from './models/SiteContext';
import { useLocation } from "react-router-dom";

function App() {

  const location = useLocation().pathname;
  const data = async () => {
    return await getSiteInfo();
  }

  const isHome = () => {
    if( location === '/' || location === '/home' ) {
      return true;
    }
    return false;
  };

  return (
    <SiteContext.Provider value={ data() as any }>
      <div className="App">
        <Header />
        <Content showPanel={isHome()} />
        <Footer />
      </div>
    </SiteContext.Provider>
  );
}

export default App;
