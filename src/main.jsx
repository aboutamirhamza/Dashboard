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


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<AdminLayout />}>
            <Route path='/dashboard/home' element={<HomeDashboard />} />
            <Route path='/dashboard/about' element={<About />} />
            <Route path='/dashboard/books' element={<Books />} />
        </Route>

        <Route path='/' element={<FrontendLayout />}>
            {/* <Route index element={<Home />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
