import { useState } from 'react'
import "./App.css"
import { BrowserRouter as Router, Route, Routes, createBrowserRouter } from 'react-router-dom'
import HomePage from '../src/pages/HomePage'
import ShopPage from './pages/ShopPage'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </Router>
  )
}

export default App
