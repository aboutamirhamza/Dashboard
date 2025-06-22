import React from 'react';
import { AiFillDashboard } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import NavLink  from './NavLink';
import { House } from 'lucide-react';
import { Book } from 'lucide-react';
import { User } from 'lucide-react';

function Navbar() {

    const navigation = [
        {
            id:1,
            name:"Dashboard",
            path:'/',
            icon: "house",
            color:"red",
        },
        {
            id:2,
            name:"About",
            path:'/about',
            icon: "user",
            color:"blue"
        },
        {
            id:3,
            name:"Books",
            path:'/books',
            icon: "book",
            color:"blue",
        },
    ]

  return (
    <>
    <div>
        <nav className='px-10 flex flex-col gap-3 list-none'>

                {
                    navigation.map(itemNav => (
                        <NavLink key={itemNav.id} name={itemNav.name} path={itemNav.path} icon={itemNav.icon} color={itemNav.color} />
                    ))
                }
        </nav>
    </div>
    </>
  )
}

export default Navbar