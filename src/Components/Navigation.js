import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Editmoney from './Editmoney';
import Home from './Home';
import Savemoney from './Savemoney';
import Header from '../Header';

function Navigation() {
  return (
    <div>
      <Header></Header>
<Router>
          <Routes>


          <Route exact path='/' element={<Home/>}>
            </Route>

          <Route exact path='/hello' element={<Savemoney/>}>
            </Route>

            <Route exact path='/edit/:id' element={<Editmoney/>}>
            </Route>

            
          </Routes>
        </Router>
        
    </div>
  )
}

export default Navigation;