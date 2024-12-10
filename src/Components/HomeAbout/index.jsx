import React, { useState } from 'react';
import { Modal } from 'antd';
import './HomeAboutUs.css';

const HomeAboutUs = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const images = [
    '/bg15.jpg',
    '/bg16.jpg',
    '/bg17.jpg',
    '/bg18.jpg'
  ];

  // Function to open the modal with the selected image
  const openModal = (index) => {
    setCurrentImage(images[index]);
    setIsModalVisible(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="about-us-section grid md:grid-cols-2 gap-5">
      <div className="about-us-text">
        <h2>About Us</h2>
        <p>
          We are a leading real estate company committed to offering luxury properties
          and delivering extraordinary services. Our team consists of experts who
          understand your needs and work tirelessly to make your dreams a reality.
        </p>
        <p>
          With years of experience in the real estate market, we ensure that every property
          we present is of the highest quality and meets the standards of luxury and excellence.
        </p>
      </div>

      <div className="about-us-images">
        {images.map((src, index) => (
          <div key={index} className="image-quarter" onClick={() => openModal(index)}>
            <img src={src} alt={`Quarter ${index + 1}`} />
          </div>
        ))}
      </div>

      <Modal visible={isModalVisible} footer={null} onCancel={closeModal} centered>
        <img src={currentImage} alt="Selected" style={{ width: '100%' }} />
      </Modal>
    </div>
  );
};

export default HomeAboutUs;
