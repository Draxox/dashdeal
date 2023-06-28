import React, { useState } from "react";
import Slider from "react-slick";
// import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "@mui/material";
import { ChevronRightSharp, ChevronLeftSharp } from "@mui/icons-material";

import Image1 from "../assets/images/slider/dollar-gill-6AoKh0msXoU-unsplash.jpg";
import Image2 from "../assets/images/slider/lance-reis-gGQxcnWraNE-unsplash.jpg";
import Image3 from "../assets/images/slider/mohamed-nohassi-TkqUXYtWwN8-unsplash.jpg";
import Image4 from "../assets/images/slider/pmv-chamara-5eH5JYgA2hw-unsplash.jpg";
import Image5 from "../assets/images/slider/pmv-chamara-CeQiQxNNdUM-unsplash.jpg";
import Image6 from "../assets/images/slider/adam-winger-t4oVP2xFMJ8-unsplash.jpg";
import Image7 from "../assets/images/slider/alexander-andrews-BX4Q0gojWAs-unsplash.jpg";
import Image8 from "../assets/images/slider/c-d-x-PDX_a_82obo-unsplash.jpg";
import Image9 from "../assets/images/slider/christian-mackie-6BJu73-UJpg-unsplash.jpg";
import Image10 from "../assets/images/slider/domino-164_6wVEHfI-unsplash.jpg";
import Image11 from "../assets/images/slider/j-luis-esquivel-ArGvQkA7iOw-unsplash.jpg";
import Image12 from "../assets/images/slider/project-290-Q-raIe-gAOo-unsplash.jpg";
import Image13 from "../assets/images/slider/rachit-tank-2cFZ_FB08UM-unsplash.jpg";
import Image14 from "../assets/images/slider/roam-in-color-RryFk4n-vOs-unsplash.jpg";
import Image15 from "../assets/images/slider/samantha-gades-gKjLLN1T8HQ-unsplash.jpg";
import Image16 from "../assets/images/slider/ashkan-forouzani-sUlR4Iul-9c-unsplash.jpg";
import Image17 from "../assets/images/slider/chuttersnap-4JHMt29fvj8-unsplash.jpg";
import Image18 from "../assets/images/slider/deanna-alys-6LBBOwkPzyQ-unsplash.jpg";
import Image19 from "../assets/images/slider/ehimetalor-akhere-unuabona-okTqiC9Xqho-unsplash.jpg";
import Image20 from "../assets/images/slider/lefteris-kallergis-j1GiPlvSGWI-unsplash.jpg";
import Image21 from "../assets/images/slider/markus-spiske-5UJbKYUjFCk-unsplash.jpg";
import Image22 from "../assets/images/slider/aaina-sharma-rI2MXeP6sss-unsplash.jpg";
import Image23 from "../assets/images/slider/anshuman-anand-ioLKwmXqCfg-unsplash.jpg";
import Image24 from "../assets/images/slider/atakan-narman-TMUQWi4UOUM-unsplash.jpg";
import Image25 from "../assets/images/slider/rebekah-yip-wMT0oiL5XjA-unsplash.jpg";
import Image26 from "../assets/images/slider/rebekah-yip-c2NALeX2wNk-unsplash.jpg";
import Image27 from "../assets/images/slider/martin-garrido-cVUPic1cbd4-unsplash.jpg";
import Image28 from "../assets/images/slider/kenny-eliason-bE3_aFt85Y8-unsplash.jpg";
import Image29 from "../assets/images/slider/jakob-owens-BmH09wAkJa8-unsplash.jpg";
// import Image30 from "../assets/images/slider/habib-dadkhah-S0B-pmGjdVA-unsplash.jpg";
// import Image31 from "../assets/images/slider/frankie-VghbBAYqUJ0-unsplash.jpg";
import Image32 from "../assets/images/slider/eliott-van-buggenhout-ALf_DGUsgro-unsplash.jpg";
import Image33 from "../assets/images/slider/davide-boscolo-gz9njd0zYbQ-unsplash.jpg";
import Image34 from "../assets/images/slider/ayrus-hill-wI9aSTf8Hwo-unsplash.jpg";
const slides = [
  {
    url: Image1,
  },
  {
    url: Image2,
  },
  {
    url: Image3,
  },
  {
    url: Image4,
  },
  {
    url: Image5,
  },
  {
    url: Image6,
  },
  {
    url: Image7,
  },
  {
    url: Image8,
  },
  {
    url: Image9,
  },
  {
    url: Image10,
  },
  {
    url: Image11,
  },
  {
    url: Image12,
  },
  {
    url: Image13,
  },
  {
    url: Image14,
  },
  {
    url: Image15,
  },
  {
    url: Image16,
  },
  {
    url: Image17,
  },
  {
    url: Image18,
  },
  {
    url: Image19,
  },
  {
    url: Image20,
  },
  {
    url: Image21,
  },
  {
    url: Image22,
  },
  {
    url: Image23,
  },
  {
    url: Image24,
  },
  {
    url: Image25,
  },
  {
    url: Image26,
  },
  {
    url: Image27,
  },
  {
    url: Image28,
  },
  {
    url: Image29,
  },
  // {
  //   url: Image30,
  // },
  // {
  //   url: Image31,
  // },
  {
    url: Image32,
  },
  {
    url: Image33,
  },
  {
    url: Image34,
  },
];

//arrow key component
const ArrowKey = ({ direction, onClick }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return direction === "right" ? (
    <div
      className="arrow"
      style={{
        display: "flex",
        height: "25%",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.2)",
        transform: "translate(0 , -50%)",
        right: 0,
        top: "50%",
        position: "absolute",
        zIndex: 1,
        color: "white",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <ChevronRightSharp sx={{ fontSize: isSmallScreen ? "1.5rem" : "2rem" }} />
    </div>
  ) : (
    <div
      className="arrow"
      style={{
        display: "flex",
        height: "25%",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.2)",
        transform: "translate(0 , -50%)",
        left: 0,
        top: "50%",
        position: "absolute",
        zIndex: 1,
        color: "white",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <ChevronLeftSharp sx={{ fontSize: isSmallScreen ? "1.5rem" : "2rem" }} />
    </div>
  );
};
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  //previousArrow
  const goToPrevious = () => {
    const newState = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newState);
  };

  //nextArrow
  const goToNext = () => {
    const newState = (currentIndex + 1) % slides.length;
    setCurrentIndex(newState);
  };

  const settings = {
    prevArrow: <ArrowKey direction="left" onClick={goToPrevious} />,
    nextArrow: <ArrowKey direction="right" onClick={goToNext} />,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <img
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            className="Img"
            key={index}
            src={slide.url || slide}
            loading="lazy"
            alt={`Slide ${index}`}
          ></img>
        ))}
      </Slider>
    </>
  );
};

export default Carousel;
