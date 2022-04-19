import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Show from '../src/pages/Show';
import Favorites from '../src/pages/Favorites';


ReactDOM.render(
  <BrowserRouter>
  <Routes>
        <Route path ="/" element={<App />} />
        <Route path ="park/:id" element={<Show/>} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

