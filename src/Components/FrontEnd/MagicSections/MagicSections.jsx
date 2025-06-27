import React from 'react'
import Flex from '../../Flex/Flex'
import Magic from '../../../img/frontend/sectionimage/magic.jpg'

function MagicSections() {
  return (
    <section className='bg-black'>
        <div className='max-w-primary mx-auto py-28 px-6 font-bona'>
            <Flex className='gap-6 px-6 extrasmall:flex-col lg:flex-row'>
                <div className='w-1/2 extrasmall:w-full lg:w-1/2'>
                    <img src={Magic} alt="Magic" />
                </div>
                <div className='w-1/2 flex flex-col gap-10 mt-6 extrasmall:w-full'>
                  <h3 className='text-white text-4xl font-bold leading-10 pr-52 extrasmall:pr-0 lg:pr-52'>Your favourite <span className='text-section-color'>Reads Are Here!</span></h3>
                  <p className='text-white text-xl text-justify'>Buy your favorite books online with ease! Enjoy exclusive offers and discounts on selected titles. Dive into our collection and find special deals that make reading more affordable. Shop now and unlock more savings with every purchase!</p>
                  <div className='grid grid-cols-3 gap-16'>
                    <div>
                      <h3 className='text-section-color text-4xl'>800+</h3>
                      <p className='text-section-color text-base'>Book Listing</p>
                    </div>
                    <div>
                      <h3 className='text-section-color text-4xl'>1K+</h3>
                      <p className='text-section-color text-base'>Registered Members</p>
                    </div>
                    <div>
                      <h3 className='text-section-color text-4xl'>50+</h3>
                      <p className='text-section-color text-base'>Branch Count</p>
                    </div>
                  </div>
                  <button className='text-white text-base px-8 py-4 border border-section-color rounded-md w-fit hover:border-none hover:bg-section-color hover:transition-colors'>Explore More</button>
                </div>
            </Flex>
        </div>
    </section>
  )
}

export default MagicSections