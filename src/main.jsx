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
            <Route path='home' element={<HomeDashboard />} />
            <Route path='about' element={<About />} />
            <Route path='books' element={<Books />} />
            <Route path='settings' element={<SettingsPage />} />
            <Route path='logout' element={<LogoutPage />} />
        </Route>

        <Route path='/' element={<FrontendLayout />}>
            <Route index element={<HomePage />} /> 
            <Route path='shop' element={<ShopNow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
