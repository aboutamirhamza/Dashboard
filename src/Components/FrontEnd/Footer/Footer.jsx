import React from 'react'
import FooterLogo from '../../../img/frontend/logo/footerlogo.png'
import Flex from '../../Flex/Flex'
import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className='bg-black'>
        <div className='max-w-primary mx-auto px-6 py-10 font-bona'>
            <div className='flex flex-col gap-6'>
                <div>
                    <img src={FooterLogo} alt="FooterLogo" />
                </div>

                <div className='w-full h-footer-line bg-white rounded-full'></div>

                <Flex className='justify-between extrasmall:flex-col extrasmall:gap-6 lg:flex-row lg:gap-0'>
                    <div><p className='text-white text-base'>© 2024 | Neth BookPoint</p></div>
                    <div><p className='text-section-color text-sm extrasmall:text-center lg:text-left'>Visit our branches in Galle, Kurunegala, Kandy, and Colombo, and register for our online platform to enjoy maximum benefits!</p></div>
                    <div className='flex items-center gap-4 text-white text-base'>
                        <a href="#" className='hover:text-section-color hover:transition-colors'><Facebook /></a>
                        <a href="#" className='hover:text-section-color hover:transition-colors'><Linkedin /></a>
                    </div>
                </Flex>
            </div>

            
        </div>
    </footer>
  )
}

export default Footer