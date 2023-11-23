"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const heroImages = [
  {
    imgUrl: "/assets/images/hero-1.svg",
    alt: "smartwatch",
  },
  {
    imgUrl: "/assets/images/hero-2.svg",
    alt: "bag",
  },
  {
    imgUrl: "/assets/images/hero-3.svg",
    alt: "lamp",
  },
  {
    imgUrl: "/assets/images/hero-4.svg",
    alt: "air-fryer",
  },
  {
    imgUrl: "/assets/images/hero-5.svg",
    alt: "chair",
  },
];

const HeroCarousel = () => {
  return (
    <div className=" relative sm:px-10 py-5 sm:pt-20 pb-5 max-w-[560px] h-[700px] w-full bg-[#f2f4f7] rounded-[30px] sm:mx-auto">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map((image) => (
          <Image
            key={image.alt}
            src={image.imgUrl}
            alt={image.alt}
            height={240}
            width={240}
            className="object-contain"
          />
        ))}
      </Carousel>

      <Image 
        src="assets/icons/hand-drawn-arrow.svg"
        alt="arrow"
        height={175}
        width={175}
        className="max-xl:hidden absolute -left-[15%] bottom-0"
        />
    </div>
  );
};

export default HeroCarousel;
