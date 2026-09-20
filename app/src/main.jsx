import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { SpecsList } from './pages/SpecsList.jsx'
import { SpecsDetail } from './pages/SpecsDetail.jsx'
import { Offers } from './pages/Offers.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/specs" element={<SpecsList />} />
        <Route path="/specs/:modelId" element={<SpecsDetail />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
