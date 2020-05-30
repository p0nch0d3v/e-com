import React from 'react';
import logo from '../logo.svg';
import appcss from './App.module.css';
import Button from 'react-bootstrap/Button';
import Header from '../navigation/Header/Header';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from '../components/About/About';
import Home from '../components/Home/Home';

function App() {
  return (
    <div className="container-fluid">
        <BrowserRouter>
          <Header></Header>
          <div className="mt-5">
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About}/>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
