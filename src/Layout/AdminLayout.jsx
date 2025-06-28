import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../Components/Sidebar'

function AdminLayout() {
  return (
    <div className='flex extrasmall:flex-col extrasmall:gap-4 lg:flex-row lg:gap-0'>
      <div className='w-1/6 min-h-screen extrasmall:w-full extrasmall:min-h-0 lg:w-1/6 lg:min-h-screen'><Sidebar /></div>
      <main className='w-full'><Outlet /></main>
    </div>
  )
}

export default AdminLayout