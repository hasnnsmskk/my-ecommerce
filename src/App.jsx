import { useState } from 'react'
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from "./HomePage"
import ShopPage from "./ShopPage"
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
