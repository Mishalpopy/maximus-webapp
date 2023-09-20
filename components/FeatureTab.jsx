import React from 'react'
import Image from 'next/image'
const FeatureTab = () => {
  return (
    <div className='bg-white'>
    <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-34 lg:max-w-7xl lg:px-8'>
      <h2 className='text-2xl font-bold tracking-tight text-gray-900'>Customers also purchased</h2>

      <div className='mt-6 grid grid-col-1 gap-x-6 gap-y-10 sm:grid-col-5 lg:grid-col-4 xl:gap-x-8'>
        <div className='group relative'>
          <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
          <Image
          src="/home_product_one.png"
          className='h-full w-full object-cover object-center lg:h-full lg:w-full'
          width={100}
          height={100}
           />
          </div>
          <div className='mt-4 flex justify-between'>
            <div>
              <h3 className='text-sm text-gray-700'>
                <a href='#'>
                  <span aria-hidden="true" className='absolute inset-0'></span>
                  Basic Tee
                </a>
              </h3>
              <p className='mt-1 text-sm text-gray-500'>BLACK</p>
            </div>
          <p className='text-sm font-medium text-gray-900'>$35</p>
          </div>
        </div>
        <div className='group relative'>
          <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
          <Image
          src="/home_product_one.png"
          className='h-full w-full object-cover object-center lg:h-full lg:w-full'
          width={100}
          height={100}
           />
          </div>
          <div className='mt-4 flex justify-between'>
            <div>
              <h3 className='text-sm text-gray-700'>
                <a href='#'>
                  <span aria-hidden="true" className='absolute inset-0'></span>
                  Basic Tee
                </a>
              </h3>
              <p className='mt-1 text-sm text-gray-500'>BLACK</p>
            </div>
          <p className='text-sm font-medium text-gray-900'>$35</p>
          </div>
        </div>
      </div>
      

    </div>
    </div>
  )
}

export default FeatureTab