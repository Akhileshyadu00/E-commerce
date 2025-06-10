import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slides } from "../Context/Slides";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
  };

  

  return (
    <div className="relative w-full max-w-screen-xl mx-auto py-6">
      <Slider {...settings}>
        {Slides.map((slide) => (
          <div key={slide.id} className="px-2">
            <div className="relative bg-white rounded-lg overflow-hidden shadow-md h-100 ">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
                <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
                <p className="text-sm md:text-base mb-4 max-w-md">
                  {slide.description}
                </p>
                <button 
                onClick={() => {}}
                className="px-5 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition">
                Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
