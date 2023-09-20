"use client"
import React from 'react'
import { useState } from 'react';
import Marquee from "react-fast-marquee";
const ShopFor = () => {

  return (
    <div className='shopfor'>
      <button className='btnWhite'>
        Read More
      </button>
      <p className='section_subHeading'>Explore Our</p>
      <h2 className='section_heading'>BESTSELLERS</h2>
      <p className='section_descr'>
      Check outer exclusive line Saint Maximus.
      </p>
      <div className='section_quote_loop'>
					FOR  ALL THE TRENDSETTERS & GO GETTERS.				</div>

          <Marquee speed={150}
          direction="right" 
          

           >
          <p className='section_quote_loop'>FOR  ALL THE TRENDSETTERS & GO GETTERS.</p>
          </Marquee>
    
    <div className='section_quote_desc'>
    Our brand trumpets your comfort in a way that suits your liking. We envision to prioritize your likes and dislikes so as to weave the stories of your happiness using the wefts and warps of comfort and personalized fashion. You own your style through our masterpieces, and we provide you with our signature, i.e. fashionable comfort.						
    </div>
    <div className='section_quote_sign'>
    Brian  Maximus
    </div>

    </div>
  )
}

export default ShopFor