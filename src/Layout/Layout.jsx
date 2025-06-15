import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../Components/Sidebar'

function Layout() {
  return (
    <div className='flex'>
      <div className='w-1/6'><Sidebar /></div>
      <main className='w-full'><Outlet /></main>
    </div>
  )
}

export default Layout