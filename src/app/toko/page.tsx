import React from 'react'
import Image from 'next/image'
const Page = () => {
  return (
    <div>
    <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap w-full mb-20'>
          <div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
            <h1 className='sm:text-3xl text-2xl font-bold title-font mb-2 text-amber-900'>
            Store Bakpia Tugu
            </h1>
          </div>
          <div className='flex px-56 py-5 justify-between'>
          <Image width={1000} height={1000} src='/img/bakpia tugu.jpeg' alt='' />
          </div>
        </div>
        </div>
  </div>
  )
}

export default Page