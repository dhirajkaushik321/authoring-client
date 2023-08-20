import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import carousal_img1 from '../images/carousal_educationWebsite.jpg';
import carousal_img2 from '../images/carousal_educationWebsite2.jpg';
import carousal_img3 from '../images/carousal_educationWebsite3.jpg';

const CarouselComponent: React.FC = () => {
  return (
    <div className="mt-20 border-2 border-black p-4 rounded-md">
    <Carousel >
      <div>
        <img src={carousal_img1} alt="Slide 1" />
      </div>
      <div>
        <img src={carousal_img2} alt="Slide 2" />
      </div>
      <div>
        <img src={carousal_img3} alt="Slide 3" />
      </div>
    </Carousel>
    </div>
  );
};

export default CarouselComponent;
