import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HelloWorld from './components/HelloWorld';
import Header from './components/Header';

ReactDOM.render(
    <div>
      <Header />
      <HelloWorld />
    </div>,
    document.getElementById('app')
);