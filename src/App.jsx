import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ShopPage from './ShopPage';
import ProductDetailPage from './ProduckDetailPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product" element={<ProductDetailPage />} /> {/* Ürün Detay Sayfası */}
      </Routes>
    </Router>
  );
}

export default App;
