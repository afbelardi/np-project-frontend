import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../src/pages/About';


ReactDOM.render(
  <BrowserRouter>
  <Routes>
        <Route path ="/" element={<App />} />
        <Route path ="about" element={<About />} />
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

