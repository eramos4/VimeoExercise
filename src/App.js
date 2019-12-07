import React from 'react';
import logo from './logo.svg';
import './App.css'
import flexContainer from './homepage.js'
import bottomContainer from './bottom.js'
import carousel from './carousel.js'

function App() {
  return (
    <div className="App">
      {carousel()}
      {flexContainer()}
      {bottomContainer()}
      
    </div>
  );
}

export default App;
