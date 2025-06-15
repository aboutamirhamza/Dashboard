import React from 'react';
import Profile from '../img/profile/profile.jpg';
import NavLink from './NavLink';
import { IoIosSettings } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";

function SidebarUserDetails() {

    const userDetails = {
        name:"Amir Hamza",
        img:Profile,
        email:"amirhamzashuvokhan@gmail.com",
        role:"Admin"
    }
  return (
    <>
        <div className='flex flex-col gap-3 px-6 py-6'>
            <div className='flex gap-4 items-center'>
                <div>
                    <img src={userDetails.img} alt="profile" className='w-12 h-w-12 rounded-full' />
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-xl font-bold'>{userDetails.name}</h3>
                    <p className='bg-orange-400 rounded-full text-center'>{userDetails.role}</p>
                </div>
            </div>

            <div>
                <NavLink name="Settings" path="/settings" icon={<IoIosSettings />} />
            </div>
            <div>
                <NavLink name="Logout" path="/settings" icon={<IoIosLogOut />} />
            </div>
        </div>
    </>
  )
}

export default SidebarUserDetails