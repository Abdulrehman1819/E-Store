import React from 'react'
import FeaturedProducts from './components/FeaturedProducts'
import Footer from './components/Footer'
import HeroSection from './HeroSection'
import Navbar from './Navbar'
import Ser from './Ser'
function Home() {
  const data={
    name:'Constrction Store'
  }
  return (
    <div className='data-theme-light bg-base-100'>
      <>
      <HeroSection mydata={data}/>
      <FeaturedProducts></FeaturedProducts>
      <Ser></Ser>
      <Footer></Footer>
      </>
  
    </div>
  );
}

export default Home
