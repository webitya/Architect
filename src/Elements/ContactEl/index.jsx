import React from "react";
import { Card, Col, Row } from "antd";
import "./ContactEl.css";

const cardData = [
  {
    title: "Mobile No.",
    content: "9693245941",
  },
  {
    title: "Email",
    content: "webitya@gmail.com",
  },
  {
    title: "Address",
    content: "Ganga Nagar Harmu Ranchi Near Naman Vidya School",
  },
];

const ContactEl = () => {
  return (
    <div className="contact-section">
      {/* Banner Section */}
      <div
        className="bg-cover bg-center h-64 flex justify-center items-center text-white  luxury-banner"
        // style={{ backgroundImage: `url(./bgc1.jpg)` }}
      >
        <div className="text-center">
          <h2 className="text-6xl tracking-wide pt-4 font-serif lets-connect">Let’s Connect</h2>
        </div>
      </div>

      {/* Contact Cards Section */}
      <div className="luxury-contact-container py-10">
        <Row gutter={[32, 32]} justify="center">
          {cardData.map((item, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card hoverable className="luxury-contact-card">
                <h4 className="luxury-contact-heading">{item.title}</h4>
                <p className="luxury-contact-text">{item.content}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Google Map */}
      <div className="luxury-map-container p-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d234397.3314396204!2d85.30328010000001!3d23.371631999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1726506618098!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="luxury-map-iframe"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactEl;
