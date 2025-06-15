import React from 'react'
import { Link } from 'react-router'

function NavLink({name, path, icon}) {
  return (
    <>
   
            <li className='flex gap-2 items-center hover:text-orange-700 hover:transition-colors'>
            {icon}
                <Link to={path} className='font-semibold text-md'>{name}</Link>
            </li>
       
    </>
  )
}

export default NavLink