import React, { useState } from "react";
import { Modal, Button, Tooltip } from "antd";
import { HeartOutlined, CommentOutlined, MailOutlined } from "@ant-design/icons";
import "tailwindcss/tailwind.css";
import Chart from "react-apexcharts";

const galleryImages = [
  {
    src: "/bg18.jpg",
    title: "Luxury Villa",
    description: "Modern luxury villa with stunning views.",
  },
  {
    src: "/bg19.jpg",
    title: "Skyline Apartment",
    description: "High-rise apartments in the heart of the city.",
  },
  {
    src: "/bg20.jpg",
    title: "Cozy Cottage",
    description: "Beautiful cottage with rustic charm.",
  }
];

const ProjectGallery = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleOpenModal = (image) => {
    setCurrentImage(image);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  // Luxurious chart options with gold theme and interior features focus
  const chartOptions = {
    options: {
      chart: {
        id: "interior-chart",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: ["Lighting", "Furniture", "Flooring", "Paint", "Artwork", "Accessories"],
        labels: {
          style: {
            colors: "#d4af37", // Gold color for labels
            fontSize: "14px",
            fontWeight: "bold",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#d4af37",
            fontSize: "14px",
            fontWeight: "bold",
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        theme: "dark",
      },
      colors: ["#d4af37"], // Gold color for bars
      grid: {
        borderColor: "#333",
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["#d4af37"],
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
          endingShape: "rounded",
        },
      },
    },
    series: [
      {
        name: "Investment",
        data: [80, 90, 60, 70, 85, 75], // Example data related to luxurious interior elements
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-10">Project Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => handleOpenModal(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition-transform"
              />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Tooltip title="Like">
                  <Button
                    shape="circle"
                    icon={<HeartOutlined className="text-white text-xl" />}
                    className="bg-red-500 hover:bg-red-600 border-none"
                  />
                </Tooltip>
                <Tooltip title="Comment">
                  <Button
                    shape="circle"
                    icon={<CommentOutlined className="text-white text-xl" />}
                    className="bg-blue-500 hover:bg-blue-600 border-none"
                  />
                </Tooltip>
              </div>
            </div>
          ))}
        </div>

        <Modal
          title={currentImage?.title}
          visible={isModalVisible}
          onCancel={handleCloseModal}
          footer={null}
          centered
          width={800}
        >
          <div className="flex flex-col items-center">
            <img
              src={currentImage?.src}
              alt={currentImage?.title}
              className="w-full h-64 object-cover mb-6 rounded-lg shadow-lg"
            />
            <p className="text-gray-600 mb-6 text-lg">{currentImage?.description}</p>

            <div className="w-full">
              <Chart
                options={chartOptions.options}
                series={chartOptions.series}
                type="bar"
                height={200}
              />
            </div>

            <div className="flex justify-between w-full mt-6">
              <Button
                type="primary"
                shape="round"
                icon={<MailOutlined />}
                className="bg-gold hover:bg-dark-gold"
              >
                Contact Us Now
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ProjectGallery;
