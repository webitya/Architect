import React from 'react';
import { Button } from 'antd';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <div className="cta-section">
      <div className="cta-content">
        <h2>Your Dream Property Awaits</h2>
        <p>Discover the finest selection of luxury real estate and start living your dream today. With us, your future home is just a click away.</p>
        <Button className="cta-button">Explore Properties</Button>
      </div>
    </div>
  );
};

export default CallToAction;
