import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import carousal_img1 from '../images/c_img3.jpg';
import carousal_img2 from '../images/c_img3.jpg';
import carousal_img3 from '../images/c_img3.jpg';

const CarouselComponent: React.FC = () => {
  const carouselImages = [carousal_img1, carousal_img2, carousal_img3];
  return (
    <>      
      {/* <div className="max-h-full h-screen flex items-center justify-center">      
        <div className="max-w-full w-full"> */}
          <Carousel>
            {carouselImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index + 1}`} style={{ width: '90%', height: '90%' }} />
              </div>
            ))}
          </Carousel>
        {/* </div>
      </div> */}
    </>
  );


};

/*
const CarouselComponent: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-screen-lg">
        <div className="flex flex-col sm:flex-row">
          <img src={carousal_img1} alt="Image 1" className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 h-auto" />
          <img src={carousal_img2} alt="Image 2" className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 h-auto" />
          <img src={carousal_img3} alt="Image 2" className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 h-auto" />
         
        </div>
      </div>
    </div>
  );
};
*/
export default CarouselComponent;
