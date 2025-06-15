import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  Home from './Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './Layout/Layout.jsx'
import About from './Pages/About.jsx'
import Books from './Pages/Books.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/books' element={<Books />} />
            
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
