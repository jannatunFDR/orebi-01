import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Imgoneee from "../assets/oneeeee.png"
import ImgTwo from "../assets/img-two.png"
import ImgThree from "../assets/img-three.png"

const ImgSale = () => {
  return (
    <section className='py-[30px]'>
        <Container>
        <Flex>
          <div className="justify-between w-[49%] mt-1">
                <div className="">
                    <img className='w-[100%]' src={Imgoneee} alt="" />
                </div>
            </div>
            <div className="w-[49%]">
                <div className="">
                    <img src={ImgTwo} alt="" />
                </div>
                <div className="lg:mt-8 mt-[15px]">
                    <img src={ImgThree} alt="" />
                </div>
            </div>
        </Flex>
     </Container>
    </section>
  )
}

export default ImgSale