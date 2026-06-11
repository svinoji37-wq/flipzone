import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-white">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={
                  <div className="min-h-[60vh] flex flex-col items-center justify-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">404</h2>
                    <p className="text-gray-500 mb-8">Page not found</p>
                    <Link to="/" className="px-8 py-3 bg-indigo-600 text-white rounded-full font-bold">Go Home</Link>
                  </div>
                } />
              </Routes>
            </main>
            <footer className="bg-gray-900 text-white py-12 mt-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">FLIPZON</h3>
                    <p className="text-gray-400">Your one-stop destination for premium lifestyle products. Quality, style, and value delivered to your doorstep.</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-4">Shop</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li><Link to="/shop?category=Fashion" className="hover:text-white transition-colors">Fashion</Link></li>
                      <li><Link to="/shop?category=Electronics" className="hover:text-white transition-colors">Electronics</Link></li>
                      <li><Link to="/shop?category=Jewelry" className="hover:text-white transition-colors">Jewelry</Link></li>
                      <li><Link to="/shop" className="hover:text-white transition-colors">Browse All</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-4">Support</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-4">Newsletter</h4>
                    <p className="text-gray-400 mb-4">Get 10% off your first order!</p>
                    <div className="flex">
                      <input type="email" placeholder="Email" className="bg-gray-800 border-none rounded-l-lg px-4 py-2 w-full focus:ring-1 focus:ring-indigo-500" />
                      <button className="bg-indigo-600 px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors">Join</button>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                  © 2025 Flipzon E-commerce. All rights reserved.
                </div>
              </div>
            </footer>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
