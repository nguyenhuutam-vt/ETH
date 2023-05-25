import { Card } from 'components/Card/Card';
import './App.css';
// import styled from 'styled-components';
// import { useState } from 'react';
// import { Counter2 } from 'components/Counter';
import { Button } from 'components/Button';
import { Routes, Route } from 'react-router-dom';
import Home from 'Container/Home/Home';
import About from 'Container/About/About';
import Login from 'Container/Login/Login';
import NotFoundPage from 'Container/NotFound/NotFoundPage';

function App() {

  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
  
    
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='*' element={<NotFoundPage/>}/>
   </Routes>
  );
}

export default App;
