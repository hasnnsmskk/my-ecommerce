import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ShopPage from './ShopPage';
import ProductDetailPage from './ProduckDetailPage';
import ContactPage from './ContactPage';
import Teampage from './TeamPage';
import AboutUsPage from "./AboutUsPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product" element={<ProductDetailPage />} />
        <Route path="/product/contact" element={<ContactPage />} /> {/* Yeni eklenen rota */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/team" element={<Teampage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
