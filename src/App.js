import React from 'react';
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
