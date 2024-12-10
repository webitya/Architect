import React from 'react';
import { Tabs } from 'antd';
import './MissionVision.css';

const { TabPane } = Tabs;

const MissionVision = () => {
  return (
    <div className="mission-vision-container">
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Mission" key="1">
          <div className="tab-content">
            <h2>Our Mission</h2>
            <p>
              Our mission is to redefine luxury real estate by offering 
              unparalleled services and exceptional properties that meet the 
              highest standards of quality and innovation.
            </p>
          </div>
        </TabPane>
        <TabPane tab="Vision" key="2">
          <div className="tab-content">
            <h2>Our Vision</h2>
            <p>
              Our vision is to lead the industry as the most trusted real 
              estate brand, providing our clients with dream homes and 
              extraordinary experiences that last a lifetime.
            </p>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default MissionVision;
