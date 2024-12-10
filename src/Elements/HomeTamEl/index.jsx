import React, { useState } from "react";
import { Card, Modal, Button } from "antd";
import "./HomeTeamEl.css";

const teamData = [
  {
    name: "John Doe",
    title: "Chief Architect",
    description: "John has over 15 years of experience in designing luxury homes.",
    imageUrl: "/bgc1.jpg",
    details: "John Doe has led numerous high-end projects across the world. His expertise lies in sustainable and innovative design, which has garnered him numerous awards in the architecture field."
  },
  {
    name: "Jane Smith",
    title: "Lead Interior Designer",
    description: "Jane specializes in creating harmonious and stylish interiors.",
    imageUrl: "/bgc1.jpg",
    details: "With 10+ years of experience, Jane has an innate understanding of interior aesthetics. Her designs blend functionality and elegance, catering to modern clients seeking beauty and comfort."
  }, 
  {
    name: "John Doe",
    title: "Chief Architect",
    description: "John has over 15 years of experience in designing luxury homes.",
    imageUrl: "/bgc1.jpg",
    details: "John Doe has led numerous high-end projects across the world. His expertise lies in sustainable and innovative design, which has garnered him numerous awards in the architecture field."
  },
  {
    name: "Jane Smith",
    title: "Lead Interior Designer",
    description: "Jane specializes in creating harmonious and stylish interiors.",
    imageUrl: "/bgc1.jpg",
    details: "With 10+ years of experience, Jane has an innate understanding of interior aesthetics. Her designs blend functionality and elegance, catering to modern clients seeking beauty and comfort."
  },
  // Add more team members
];

const HomeTeamEl = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const showModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className="team-section">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-grid">
        {teamData.map((member, index) => (
          <Card
            key={index}
            hoverable
            className="team-card"
            cover={<img alt={member.name} src={member.imageUrl}/>}
            onClick={() => showModal(member)}
          >
            <Card.Meta
              title={member.name}
              description={member.title}
            />
          </Card>
        ))}
      </div>

      {selectedMember && (
        <Modal
          title={selectedMember.name}
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
        >
          <img
            src={selectedMember.imageUrl}
            alt={selectedMember.name}
            className="modal-image" 
          />
          <h3>{selectedMember.title}</h3>
          <p>{selectedMember.description}</p>
          <p>{selectedMember.details}</p>
          <Button type="primary" onClick={handleCancel}>
            Close
          </Button>
        </Modal>
      )}
    </div>
  );
};

export default HomeTeamEl;
