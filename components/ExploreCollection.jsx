import React from 'react'
import Image from 'next/image'

const ExploreCollection = () => {
  return (
    <div className='grid grid-cols-5 gap-4'>
      <div  className='home_product_grid'>

      <div className='w-full md:w-auto flex justify-between home_product_content'>
        <div className='flex justify-between  home_product_content_top'>
            <span className='home_grid_offer'>SALE
              </span>
    <span>Whishlist</span>
        </div>
        <div className='home_product_content_middle'>

        </div>
        <div className='home_product_content_bottom'></div>
      </div>


      </div>
      <div  className='home_product_grid'>2</div>
      <div  className='col-span-3 home_product_grid'>3</div>
      <div  className='col-span-3 home_product_grid'>4</div>
      <div  className='home_product_grid'>5</div>
      <div  className='home_product_grid'>6</div>

      <div>    <button href="/" className='btnBlack'>Read More</button></div>
    </div>
  )
}

export default ExploreCollection