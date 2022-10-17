import React from 'react';
import './App.css';
import Header from './componenets/Header/Header';
import Content from './componenets/Content/Content';
import Footer from './componenets/Footer/Footer';
import getSiteData from './services/fetchData';
import { useLocation } from "react-router-dom";
import SiteContext from './models/SiteContext';

function App() {

  const location = useLocation().pathname;

  const isHome = () => {
    if( location === '/' || location === '/home' ) {
      return true;
    }
    return false;
  };

  async function getHelper() {
    try {
      const data = await getSiteData();
      console.log( data );
      return data;
    } catch( error ) {
        console.log( error as Error );
    }
  }

  return (
    <SiteContext.Provider value={ getHelper() }>

      <div className="App">
        <Header />
        <Content showPanel={isHome()} />
        <Footer />
      </div>

    </SiteContext.Provider>
  );
}

export default App;
