import React from 'react'
import Banner from '../components/Banner'
import Info from '../components/Info'
import ImgSale from '../components/ImgSale'
import NewArrivals from './../components/NewArrivals';


const Home = () => {
  return (
    <>
      <Banner />  
      <Info />
      <ImgSale />
      {/* <NewArrivals />     */}
    </>
  )
}

export default Home