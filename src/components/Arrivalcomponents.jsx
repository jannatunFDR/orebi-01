import React from 'react'
import ArrImg from '../assets/arr01.png'
import { FaHeart } from "react-icons/fa";
import { DiGitCompare } from "react-icons/di";
import { FaShoppingCart } from "react-icons/fa";


const Arrivalcomponents = () => {
  return (
    <div className="w-[24%]">
        <div className="">
         <div className="">
            <div className="relative group overflow-hidden">
                <img src={ArrImg} alt="" />
                <ul className='bg-white absolute left-0 h-[130px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] py-2 text-end pr-4'>
                    <li className='py-2'>Add to Wish List<FaHeart className='inline-block'/></li>
                    <li className='py-2'>Compare<DiGitCompare className='inline-block'/></li>
                    <li className='py-2'>Add to Cart<FaShoppingCart className='inline-block'/></li>
                </ul>
            </div>
            
         </div>
         <div className="flex justify-between">
                <div className="">
                    <h3 className='font-bold font-sans text-[#262626] text-[18px]'>Basic Crew Neck Tee</h3>
                    <h4 className='font-normal font-sans text-[#262626] text-[16px]'>Black</h4>
                </div>
                <p className='font-normal font-sans text-[#767676] text-[16px]'>$44.00</p>
            </div>
        </div>
    </div>
  )
}

export default Arrivalcomponents