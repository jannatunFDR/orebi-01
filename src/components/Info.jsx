import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaCarSide } from "react-icons/fa6";
import { AiOutlineReload } from "react-icons/ai";



const Info = () => {
  return (
    <Container>
                <Flex className="justify-between pb-4 items-center">
                    <div className=" flex items-center">
                        <div className=" ">
                            <span className='font-dm text-[#262626] font-bold lg:text-[24px]   text-[12px] pr-2'>2</span> 
                            <span className='font-dm text-[#6D6D6D] font-normal lg:text-[16px] text-[10px]'>Two years warranty</span>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center">
                            <FaCarSide />
                            <span className='font-dm text-[#6D6D6D] font-normal lg:text-[16px] text-[10px] ml-2'>Free shipping</span>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center">
                            <AiOutlineReload />
                            <span className='font-dm text-[#6D6D6D] font-normal lg:text-[16px] text-[10px] ml-2'>Free shipping</span>
                        </div>
                    </div>
                </Flex>
            </Container>
  )
}

export default Info