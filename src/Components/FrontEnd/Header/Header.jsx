import React from 'react'
import Flex from '../../Flex/Flex'
import Logo from '../../../img/frontend/logo/logo.png'
import { Link } from 'react-router'
import { Bell } from 'lucide-react';
import Profile from '../../../img/frontend/profile/profile.png'

function Header() {
  return (
    <header className='bg-bookpoint-header-bg bg-cover bg-bottom py-2'>
        <div className='max-w-primary mx-auto px-4'>
            <Flex className='justify-between extrasmall:flex-col gap-4 py-4 lg:flex-row lg:py-0'>
                <div>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className='flex gap-10 extrasmall:flex-col lg:flex-row'>
                    <Flex>
                    <ul className='flex gap-10 extrasmall:flex-col lg:flex-row'>
                        <li>
                            <Link className='font-bona text-xl text-white' to='/'>Home</Link>
                        </li>
                        <li>
                            <Link className='font-bona text-xl text-white' to='/'>About</Link>
                        </li>
                        <li>
                            <Link className='font-bona text-xl text-white' to='/'>Shop</Link>
                        </li>
                        <li>
                            <Link className='font-bona text-xl text-white' to='/'>Delivery Team</Link>
                        </li>
                        <li>
                            <Link className='font-bona text-xl text-white' to='/'>Sellers</Link>
                        </li>
                    </ul>
                    </Flex>
                    <Flex className='gap-4'>
                        <div className='text-white'><Bell /></div>
                        <div><img src={Profile} alt="Profile" /></div>
                        <div><p className='font-bona text-sm text-white'>user1@bookpoint.com</p></div>
                    </Flex>
                </div>
            </Flex>
        </div>
    </header>
  )
}

export default Header;