import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './CSS/App.css';
import Home from './Component/Home/Home';
function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Routes>
          <Route path='/home' element={<Home />} />   
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
