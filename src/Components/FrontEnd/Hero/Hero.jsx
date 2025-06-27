import React from 'react'

function Hero() {
  return (
    <section>
        <div className='bg-bookpoint-hero-bg bg-cover bg-center h-screen py-48'>
            <div className='max-w-primary mx-auto flex flex-col gap-8 items-center font-bona'>
                <h3 className='text-5xl font-bold bg-gold-radial bg-clip-text text-transparent px-6 extrasmall:text-4xl text-center md:text-center md:text-5xl lg'>The Book Lover's Dreamland Awaits!</h3>
                <p className='text-white text-center text-lg px-64 extrasmall:px-6 lg:px-64'>Welcome to the ultimate book lover's paradise! Join our community and contribute to the ever-evolving library of stories, where every book has a chance to inspire someone new.</p>
                <div className='flex gap-2 border border-hero-color rounded-md'>
                    <input type="search" name="" id="" placeholder='Search a Book' className='bg-transparent px-8 py-5 outline-none text-white' />
                    <button className='text-white bg-hero-color rounded-md px-8 py-2'>Search</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero