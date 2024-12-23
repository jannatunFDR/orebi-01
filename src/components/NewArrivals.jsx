import React, { useContext } from 'react'
import Container from './Container'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Arrivalcomponents from './Arrivalcomponents';
import { ApiData } from './ContextApi';
import { Link } from 'react-router-dom';
import { GoArrowRight,GoArrowLeft } from "react-icons/go";


function SampleNextArrow(props) {
    const { onClick,className } = props;
    return (
      <div
        className="h-[40px] w-[40px] rounded-full absolute translate-y-[-50%] cursor-pointer left-0 top-[50%] bg-[gray] leading-[40px] text-center"
        onClick={onClick}
      > <GoArrowLeft className='inline-block'/></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick,className } = props;
    return (
      <div
        className="h-[40px] w-[40px] rounded-full absolute translate-y-[-50%] cursor-pointer right-0 top-[50%] bg-[gray] leading-[40px] text-center"
        onClick={onClick}
      ><GoArrowRight className='inline-block'/></div>
    );
  }

const NewArrivals = () => {
    let data = useContext(ApiData)
    const settings = {
        infinite: true,
        autoplay:true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }
  return (
    <section>
        <Container className="relative">
            <h2 className='text-[#262626] font-bold text-[39px] font-sans'>New Arrivals</h2>
                <Slider {...settings}>
                {data.map((item)=>(
                <Link to="/shop">
                <Arrivalcomponents item={item}/>
                </Link>
                ))}
                </Slider>
         
        </Container>
    </section>
  )
}

export default NewArrivals