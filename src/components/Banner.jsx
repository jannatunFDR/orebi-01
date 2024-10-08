import React from "react";
import BanImg from "../assets/banner.jpg";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          left: "50px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <ul className="onee" style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="twooo"
        style={{
          width: "30px",
          borderRight: "3px solid white",
          padding: "10px 0",
          color: "white",
        }}
      >
        0{i + 1}
      </div>
    ),
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="">
          <Link to="/shop">
            <img src={BanImg} alt="" />
          </Link>
        </div>
        <div className="">
          <Link to="/shop">
            <img src={BanImg} alt="" />
          </Link>
        </div>
        <div className="">
          <Link to="/shop">
            <img src={BanImg} alt="" />
          </Link>
        </div>
        <div className="">
          <Link to="/shop">
            <img src={BanImg} alt="" />
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;