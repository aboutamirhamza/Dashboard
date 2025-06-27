import React from 'react'
import { Link } from 'react-router'
import { DynamicIcon } from 'lucide-react/dynamic';


function NavLink({name, path, icon, color, linked}) {
  return (
    <>
   
            <li className='flex gap-2 items-center hover:text-orange-700 hover:transition-colors'>
            <DynamicIcon name={icon} color={color} size={20} />
                <Link to={path} element={linked} className='font-semibold text-md font-inter text-sm'>{name}</Link>
            </li>
       
    </>
  )
}

export default NavLink