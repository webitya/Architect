import React from "react";
import { Card, Carousel, Tag, Row, Col } from "antd";
import { EnvironmentOutlined, DollarOutlined, HomeOutlined } from "@ant-design/icons";
import "tailwindcss/tailwind.css";

const projects = [
  {
    title: "Luxury Villa, Goa",
    description: "A premium beachfront villa with modern amenities.",
    price: "$1,500,000",
    location: "Goa, India",
    images: [
      "/bg9.jpg",
      "/bg10.jpg",
      "/bg11.jpg"
    ]
  },
  {
    title: "Skyline Apartments",
    description: "High-rise apartments offering breathtaking views and luxury.",
    price: "$900,000",
    location: "Mumbai, India",
    images: [
      "/bg12.jpg",
      "/bg13.jpg",
      "/bg14.jpg"
    ]
  },
  {
    title: "Modern Office Tower",
    description: "State-of-the-art office space with eco-friendly design.",
    price: "$4,000,000",
    location: "Bangalore, India",
    images: [
      "/bg15.jpg",
      "/bg16.jpg",
      "/bg17.jpg"
    ]
  }
];

const OurProjects = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-10">Our Projects</h1>
        <Row gutter={[16, 16]}>
          {projects.map((project, index) => (
            <Col xs={24} md={12} lg={8} key={index}>
              <Card
                className="shadow-lg"
                hoverable
                cover={
                  <Carousel autoplay>
                    {project.images.map((image, idx) => (
                      <img key={idx} src={image} alt={`Project Image ${idx}`} className="object-cover h-64 w-full"/>
                    ))}
                  </Carousel>
                }
              >
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <Tag color="gold" className="text-lg">
                    <DollarOutlined /> {project.price}
                  </Tag>
                  <Tag color="blue" className="text-lg">
                    <EnvironmentOutlined /> {project.location}
                  </Tag>
                </div>
                <div className="mt-4">
                  <Tag color="green" className="text-base">
                    <HomeOutlined /> Real Estate
                  </Tag>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default OurProjects;
