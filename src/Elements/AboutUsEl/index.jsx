import React from "react";
import { Button, Card, Row, Col, Divider } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons"; // Icons for a luxurious feel
import Layout from "../../Shared/Layout";
import "./AboutUsEl.css";

const AboutUsEl = () => {
  return (
  <>
      {/* Hero Section */}
      <div className="about-hero" style={{backgroundImage:'url("/bgc4.jpg")'}}>
        <h1 className="hero-title">Architect Chadda Associates</h1>
        <p className="hero-subtitle">Delivering Excellence in Modern Architecture and Design</p>
      </div>

      {/* About Us Section */}
      <div className="about-section">
        <div className="about-header">
          <h2 className="about-title">About Us</h2>
          <Divider />
          <p className="about-description">
            With decades of expertise in architecture, we are committed to creating spaces that blend aesthetics and functionality. Our team is dedicated to designing innovative, sustainable solutions for both residential and commercial clients.
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="mission-section">
          <Row justify="center">
            <Col xs={24} lg={16}>
              <h2 className="mission-title">Our Mission</h2>
              <p className="mission-text">
                At Architect Chadda Associates, our mission is to push the boundaries of design while delivering value, sustainability, and innovation. We believe in creating spaces that inspire, connect, and endure the test of time.
              </p>
            </Col>
          </Row>
        </div>

        {/* Luxury Team Section */}
        <div className="team-container">
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12} lg={8}>
              <Card hoverable className="about-card">
                <img src="/bg6.jpg" alt="Team member" className="about-image" />
                <div className="about-card-content">
                  <h3>John Doe</h3>
                  <p>CEO & Founder</p>
                  <p>John leads with a passion for design, building a legacy in modern architectural innovation.</p>
                  <CheckCircleOutlined className="about-icon" />
                </div>
              </Card>
            </Col>

            <Col xs={24} md={12} lg={8}>
              <Card hoverable className="about-card">
                <img src="/bg5.jpg" alt="Team member" className="about-image" />
                <div className="about-card-content">
                  <h3>Jane Smith</h3>
                  <p>Chief Architect</p>
                  <p>Jane brings decades of experience in blending creativity with practicality in design.</p>
                  <CheckCircleOutlined className="about-icon" />
                </div>
              </Card>
            </Col>

            <Col xs={24} md={12} lg={8}>
              <Card hoverable className="about-card">
                <img src="/bg4.jpg" alt="Team member" className="about-image" />
                <div className="about-card-content">
                  <h3>Michael Brown</h3>
                  <p>Design Head</p>
                  <p>Specializing in innovative layouts and sustainable structures, Michael leads our creative team.</p>
                  <CheckCircleOutlined className="about-icon" />
                </div>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Testimonials Section */}
        <div className="testimonial-section">
          <h2 className="testimonial-title">What Our Clients Say</h2>
          <Row justify="center" gutter={[32, 32]}>
            <Col xs={24} lg={10}>
              <Card className="testimonial-card">
                <p className="testimonial-text">
                  "Architect Chadda Associates delivered beyond our expectations. The design was innovative, and the attention to detail was impeccable."
                </p>
                <p className="testimonial-author">- Client Name</p>
              </Card>
            </Col>
            <Col xs={24} lg={10}>
              <Card className="testimonial-card">
                <p className="testimonial-text">
                  "Their team is professional, reliable, and truly understands the needs of their clients. Highly recommended!"
                </p>
                <p className="testimonial-author">- Client Name</p>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Portfolio/Recent Projects Section */}
        <div className="portfolio-section">
          <h2 className="portfolio-title">Recent Projects</h2>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12} lg={8}>
              <Card hoverable cover={<img src="/bg8.jpg" alt="Project 1" />} className="portfolio-card">
                <Card.Meta title="Modern Residential Villa" description="A luxurious residential project with a focus on modern architecture." />
              </Card>
            </Col>

            <Col xs={24} md={12} lg={8}>
              <Card hoverable cover={<img src="/bg2.jpg" alt="Project 2" />} className="portfolio-card">
                <Card.Meta title="Commercial Complex" description="Innovative design for a state-of-the-art commercial space." />
              </Card>
            </Col>

            <Col xs={24} md={12} lg={8}>
              <Card hoverable cover={<img src="/bg1.jpg" alt="Project 3" />} className="portfolio-card">
                <Card.Meta title="Eco-friendly Resort" description="A sustainable and eco-friendly resort design with modern aesthetics." />
              </Card>
            </Col>
          </Row>
        </div>

        {/* Call to Action Section */}
        {/* <div className="about-cta">
          <h2>Want to Learn More?</h2>
          <p>Contact us to explore our services and discover our portfolio.</p>
          <Button type="primary" size="large">Get in Touch</Button>
        </div> */}
      </div>
      </>
  );
};

export default AboutUsEl;
