import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './HomeGallery.css';

const Gallery = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/bg1.jpg", "/bg2.jpg", "/bg3.jpg", "/bg4.jpg", 
    "/bg5.jpg", "/bg6.jpg", "/bg7.jpg", "/bg8.jpg",
  ];

  // Open the modal with the selected image
  const openModal = (index) => {
    setCurrentImage(index);
    setIsModalVisible(true);
  };

  // Close the modal
  const closeModal = () => setIsModalVisible(false);

  // Previous image in modal
  const prevImage = () => setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  // Next image in modal
  const nextImage = () => setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    
    <>
    <div className="luxury-title text-center w-full">Gallery</div>

    <div className="gallery">
      {images.map((src, index) => (
        <div key={index} className="gallery-item" onClick={() => openModal(index)}>
          <img src={src} alt={`Gallery item ${index + 1}`} className="gallery-image" />
        </div>
      ))}

      <Modal
        visible={isModalVisible}
        onCancel={closeModal}
        footer={null}
        className="gallery-modal"
        centered
      >
        <div className="modal-content">
          <Button onClick={prevImage} className="nav-button prev-button">
            <LeftOutlined />
          </Button>
          <img src={images[currentImage]} alt={`Gallery item ${currentImage + 1}`} className="modal-image" />
          <Button onClick={nextImage} className="nav-button next-button">
            <RightOutlined />
          </Button>
        </div>
      </Modal>
    </div>
    </>
  );
};

export default Gallery;
