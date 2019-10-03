import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProduktContextProvider, { ProduktContext } from './Context/ProduktContext';
import RejserContextProvider, { RejserContext } from './Context/RejserContext';
import Home from './Components/PAGES/Home';
import Dykkerudstyr from './Components/PAGES/Dykkerudstyr';
import Dykkerrejser from './Components/PAGES/Dykkerrejser';
import Dykkerkurser from './Components/PAGES/Dykkerkurser';
import Kontakt from './Components/PAGES/Kontakt';
import OmOs from './Components/PAGES/Omos';
import Navbar from './Components/Navbar/Navbar';
import Produkt from './Components/Produkter/Produkt';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';



function App(props) {


  return (
    <ProduktContextProvider>
      <RejserContextProvider>
        <BrowserRouter>

        <div>

          <Navbar />

          <Route exact path="/" component={Home} />
          <Route exact path="/dykkerudstyr" component={Dykkerudstyr} />
          <Route exact path="/produkt/:produktid" component={Produkt} />
          <Route exact path="/dykkerrejser" component={Dykkerrejser} />
          <Route exact path="/dykkerkurser" component={Dykkerkurser} />
          <Route exact path="/kontakt" component={Kontakt} />
          <Route exact path="/omos" component={OmOs} />
          <Route exact path="/login" component={Login} />

          <Footer />
          
        </div>

        </BrowserRouter>
      </RejserContextProvider>
    </ProduktContextProvider>

  )
}

export default App

