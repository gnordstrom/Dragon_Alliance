import React from 'react';
// Routes
import routes from '../routes.js';
// Stylesheet - use scss
import './App.css';

const App = () => {
  return (
    <div className="main-wrapper">
      <div>
        { routes }
      </div>
    </div>
  );
};

export default App;