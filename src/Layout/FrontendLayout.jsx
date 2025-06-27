import React from 'react'
import { Outlet } from 'react-router';

function FrontendLayout() {
  return (
    <div><Outlet /></div>
  )
}

export default FrontendLayout;