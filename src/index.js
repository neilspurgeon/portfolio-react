import React from 'react';
import { render } from 'react-snapshot';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import 'sharedStyles/index.css';

render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root'));
