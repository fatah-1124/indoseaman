import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import '../assets/global.css'
import Navbar from './Navbar.jsx'

createRoot(document.getElementById('navbar')).render(
  <StrictMode>
    <Navbar />
  </StrictMode>,
)
