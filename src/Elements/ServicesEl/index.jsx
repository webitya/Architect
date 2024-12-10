import React from 'react';

import Slider from "react-slick"; // Importing carousel library
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./ServicesEl.css"; // Linking the updated external CSS

const testimonials = [
  { quote: "Architect Chadda Associates delivered beyond our expectations.", author: "Raj" },
  { quote: "The design was innovative, and the attention to detail was impeccable.", author: "Meera" },
  { quote: "We are extremely happy with the services provided by this firm.", author: "Amit" }
];

const ServicesEl = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section relative flex flex-col justify-center items-center w-full h-[400px]">
        <img src="./bgc5.jpg" alt="Background" className="bgi-services absolute inset-0 w-full h-full object-cover z-[-1]" />
        <div className="hero-content relative z-10 flex flex-col justify-center items-center text-center">
          <p className="hero-subtitle text-lg">WE PROPOSE</p>
          <h2 className="hero-title text-4xl md:text-8xl">Best Services</h2>
        </div>
      </div>

      {/* Transform Knowledge Section */}
      <div className="transform-knowledge-section flex flex-col md:flex-row items-center justify-evenly p-8 space-y-8 md:space-y-0">
        <img src="./bg21.jpg" alt="Knowledge" className="knowledge-img" />
        <div className="transform-knowledge max-w-3xl">
          <h2 className="knowledge-title text-3xl md:text-4xl">Transform knowledge into creative potential.</h2>
          <p className="knowledge-text text-lg mt-4">
            The company principle of Prague is the collective conception. From the very beginning, the practice has believed in the virtues of exchange, crossing ideas, common effort, shared knowledge, and enthusiasm.
          </p>
        </div>
      </div>

      {/* Services Cards Section */}
      <div className="services-cards relative flex flex-col items-center py-16">
        <img src="/bg3.jpg" alt="Background" className="bgi-services absolute inset-0 w-full h-full object-cover z-[-1]" />
        <div className="text-center mb-10">
          <span className="text-lg services_under_cards">Services</span>
          <h4 className="section-title text-3xl md:text-6xl">This is what we do.</h4>
        </div>

        <div className="cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="card p-6 hover:shadow-lg transform hover:rotate-1 transition duration-500">
            <img src="/bg23.jpg" alt="Architect design" className="card-image" />
            <h1 className="card-title">Beautiful Architect Design</h1>
            <p className="card-description">Our master plans provide a comprehensive look at where an organization is today.</p>
            <button className="card-button">Read</button>
          </div>

          {/* Card 2 */}
          <div className="card p-6 hover:shadow-lg transform hover:rotate-1 transition duration-500">
            <img src="/bg24.jpg" alt="Architect design" className="card-image" />
            <h1 className="card-title">Creative Building Design</h1>
            <p className="card-description">We focus on bringing creativity and function together in each project and services.</p>
            <button className="card-button">Read</button>
          </div>

          {/* Card 3 */}
          <div className="card p-6 hover:shadow-lg transform hover:rotate-1 transition duration-500">
            <img src="/bg5.jpg" alt="Residential Design" className="card-image" />
            <h1 className="card-title">Residential and interior Design</h1>
            <p className="card-description">We design homes and interiors that are not only luxurious but also sustainable.</p>
            <button className="card-button">Read</button>
          </div>

          {/* Card 4 */}
          <div className="card p-6 hover:shadow-lg transform hover:rotate-1 transition duration-500">
            <img src="/bg6.jpg" alt="Commercial Design" className="card-image" />
            <h1 className="card-title">Commercial Design and business</h1>
            <p className="card-description">Our commercial and business designs focus on both aesthetics and functionality.</p>
            <button className="card-button">Read</button>
          </div>
        </div>
      </div>

      {/* Testimonials Section with Centered Carousel */}
      <div className="testimonials-section py-16 bg-gray-50">
        <div className="text-center mb-10">
          <h5 className="text-lg">TESTIMONIALS</h5>
          <h1 className="section-title text-5xl">They love us.</h1>
        </div>
        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonials-box text-center p-4">
                <p className="text-lg mb-4">{testimonial.quote}</p>
                <h4 className="testimonial-author text-xl">{`- ${testimonial.author}`}</h4>
              </div>
            ))}
          </Slider>
        </div>
      </div>
  </>
  );
};

export default ServicesEl;
