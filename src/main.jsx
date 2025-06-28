import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  Home from './Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import AdminLayout from './Layout/AdminLayout.jsx'
import HomeDashboard from './Pages/Home.jsx'
import Books from './Pages/Books.jsx'
import About from './Pages/About.jsx'
import FrontendLayout from './Layout/FrontendLayout.jsx'
import SettingsPage from './Pages/SettingsPage.jsx'
import LogoutPage from './Pages/LogoutPage.jsx'
import ShopNow from './Pages/FrontEnd/ShopNow.jsx'
import HomePage from './Pages/FrontEnd/HomePage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<AdminLayout />}>
            <Route path='/dashboard/home' element={<HomeDashboard />} />
            <Route path='/dashboard/about' element={<About />} />
            <Route path='/dashboard/books' element={<Books />} />
            <Route path='/dashboard/settings' element={<SettingsPage />} />
            <Route path='/dashboard/logout' element={<LogoutPage />} />
        </Route>

        <Route path='/' element={<FrontendLayout />}>
        <Route index element={<HomePage />} /> 
            <Route path='home/shop' element={<ShopNow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
