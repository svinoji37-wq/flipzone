import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X, LogOut } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { CATEGORIES } from '../data/mockData';

const Navbar = () => {
  const { totalItems } = useCart();
  const { user, logout, isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              FLIPZON
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Shop All</Link>
            {CATEGORIES.slice(0, 3).map(cat => (
              <Link key={cat} to={`/shop?category=${cat}`} className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
                {cat}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <Search className="h-5 w-5 text-gray-500 cursor-pointer hover:text-indigo-600" />
            </div>
            
            <Link to="/cart" className="relative group">
              <ShoppingCart className="h-6 w-6 text-gray-600 group-hover:text-indigo-600 transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                  {totalItems}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-700">Hi, {user?.name.split(' ')[0]}</span>
                <button onClick={logout} className="p-2 text-gray-600 hover:text-red-600 transition-colors">
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <Link to="/login" className="flex items-center space-x-1 px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
                <User className="h-4 w-4" />
                <span className="font-medium">Login</span>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-4">
          <Link to="/shop" className="block text-gray-600 font-medium">Shop All</Link>
          {CATEGORIES.map(cat => (
            <Link key={cat} to={`/shop?category=${cat}`} className="block text-gray-600 font-medium">{cat}</Link>
          ))}
          <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
            <Link to="/cart" className="flex items-center space-x-2 text-gray-600">
              <ShoppingCart className="h-5 w-5" />
              <span>Cart ({totalItems})</span>
            </Link>
            {isAuthenticated ? (
              <button onClick={logout} className="text-red-600 font-medium">Logout</button>
            ) : (
              <Link to="/login" className="text-indigo-600 font-medium">Login</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
