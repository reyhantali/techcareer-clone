// rafce
import React from "react";
import { Carousel } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2Fluxoft_hackathon_1112x412_3468c22c84%2Fluxoft_hackathon_1112x412_3468c22c84.png&w=1200&q=100"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2F2024_duyurular_1112x412_ccf8c238f3%2F2024_duyurular_1112x412_ccf8c238f3.png&w=1200&q=100"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2FTR_1112_412_de17b90249%2FTR_1112_412_de17b90249.png&w=1200&q=100"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2FBanner_TR_1112_412_6c2ce3564b%2FBanner_TR_1112_412_6c2ce3564b.png&w=1200&q=100"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2F1112_412_47abc9d7c5%2F1112_412_47abc9d7c5.png&w=1200&q=100"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2Fsenior_aday_tecrubeli_yazilimci_2630787120%2Fsenior_aday_tecrubeli_yazilimci_2630787120.png&w=1200&q=100"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2FTwitch_1112_412_1_de33d89d8e%2FTwitch_1112_412_1_de33d89d8e.png&w=1200&q=100"
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2F1112_412_11289c189f%2F1112_412_11289c189f.png&w=1200&q=100"
              alt="Second slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2F1112_412_2_cd52574011%2F1112_412_2_cd52574011.png&w=1200&q=100"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <div id="bg-img1">
          <img
            src="https://www.techcareer.net/assets/images/call-to-actions/home/shape-dots.svg"
            alt=""
          />
        </div>
        <div id="bg-img2">
          <img
            src="https://www.techcareer.net/assets/images/call-to-actions/home/kesik-yan-cizgi.svg"
            alt=""
          />
        </div>
      </div>
      <div className="hero-custom-bg"></div>
    </div>
  );
};

export default Hero;
