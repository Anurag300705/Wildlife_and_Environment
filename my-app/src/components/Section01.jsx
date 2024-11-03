import React from 'react';
import './Section01.css';
import Abc from '../assets/image.jpg'

const Section01 = () => {
  return (
    <div className="section-container">  
      <div className="img"><img src={Abc} alt="Sanctuary Map" className="section-image" /></div>
      <div className="section-text">
        <p>The Ministry of Tourism (MOT) of India oversees the promotion and development of wildlife sanctuaries. Its website provides comprehensive information on various sanctuaries across the country, detailing their unique flora and fauna, visitor guidelines, and conservation efforts. This resource aids tourists in planning eco-friendly and educational trips.</p>
      </div>
    </div>
  );
};

export default Section01;
