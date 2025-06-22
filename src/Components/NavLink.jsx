import React from 'react'
import { Link } from 'react-router'
import { DynamicIcon } from 'lucide-react/dynamic';


function NavLink({name, path, icon, color}) {
  return (
    <>
   
            <li className='flex gap-2 items-center hover:text-orange-700 hover:transition-colors'>
            <DynamicIcon name={icon} color={color} size={20} />
                <Link to={path} className='font-semibold text-md'>{name}</Link>
            </li>
       
    </>
  )
}

export default NavLink