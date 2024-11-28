// App.jsx

import React from 'react';
import Card from './photosubmitcomponents/photosubmitcard.jsx';

const Photography = () => {
  return (
    <div className="app-container">
      <h1 className="mycardcomponent">My Card Component</h1>
      <div className="card-container">
        <Card />
      </div>
    </div>
  );
};

export default Photography;
