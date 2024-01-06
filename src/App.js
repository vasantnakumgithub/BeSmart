import React from 'react';
import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom';
import './App.css';

import Hero from '../src/Components/Hero/Hero';
import Home from './Components/Home/Home';

const App = () => {
  return (
    <>
      <Router>
        <Home/>
        <Routes>
          <Route path='/' element={<Hero/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
