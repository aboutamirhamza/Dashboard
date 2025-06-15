import React from 'react';
import Logo from '../img/logo/Logo.png';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import SidebarUserDetails from './SidebarUserDetails';

function Sidebar() {
  return (
    <>
        <div>
            <div className='flex flex-col justify-between bg-gray-200 min-h-screen'>
                
                <div>
                    <div className='flex flex-col gap-4'>
                        <div className='px-16 py-7'>
                            <img src={Logo} alt="" />
                        </div>

                        <div><SearchBar rounded={true} /></div>

                        <div><Navbar /></div>
                    </div>
                </div>

                <div><SidebarUserDetails /></div>
            </div>
        </div>
    </>
  )
}

export default Sidebar