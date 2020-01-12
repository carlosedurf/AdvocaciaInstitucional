import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes';

import './App.css';

import Header from "./components/partials/Header";
import Footer from './components/partials/Footer';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header/>
          <Routes/>
        <Footer/>
      </BrowserRouter>
    );
  }
}

export default App;
