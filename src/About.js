import React, { useContext } from 'react'
import HeroSection from './HeroSection'
import Navbar from './Navbar'
import { AppContext } from './context/Productcontext'
function About() {
  const myname=useContext(AppContext);
  const data={
    name:'Constrction Ecommerce'
  }
  return (
    <div>
  
      {/* {myname} */}
  <HeroSection mydata={data}></HeroSection>
    </div>
  );
}

export default About
