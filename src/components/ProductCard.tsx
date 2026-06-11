import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
          <Link to={`/product/${product.id}`} className="p-3 bg-white rounded-full text-gray-900 hover:bg-indigo-600 hover:text-white transition-colors shadow-lg">
            <Eye className="h-5 w-5" />
          </Link>
          <button 
            onClick={() => addToCart(product)}
            className="p-3 bg-white rounded-full text-gray-900 hover:bg-indigo-600 hover:text-white transition-colors shadow-lg"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-indigo-600 text-xs font-bold rounded-full uppercase tracking-wider">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-5">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center space-x-1 mb-3">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-gray-600">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviews} reviews)</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <button 
            onClick={() => addToCart(product)}
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            + Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
