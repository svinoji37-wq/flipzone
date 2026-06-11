import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, ArrowLeft, ShieldCheck, Truck, RefreshCw, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from '../data/mockData';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = useMemo(() => products.find(p => p.id === id), [id]);
  
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-indigo-600 font-bold flex items-center">
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-500 hover:text-indigo-600 transition-colors mb-8 font-medium"
      >
        <ArrowLeft className="mr-2 h-5 w-5" /> Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100 border border-gray-100 shadow-xl"
        >
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 left-6">
            <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-indigo-600 text-sm font-bold rounded-full shadow-sm">
              {product.category}
            </span>
          </div>
        </motion.div>

        {/* Info Section */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="text-sm font-bold text-yellow-700">{product.rating}</span>
              </div>
              <span className="text-sm text-gray-400">({product.reviews} verified reviews)</span>
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">{product.name}</h1>
            <p className="text-3xl font-bold text-indigo-600">${product.price.toFixed(2)}</p>
          </div>

          <div className="prose prose-indigo mb-8">
            <p className="text-gray-600 text-lg leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="space-y-4 mb-10">
            <div className="flex items-center text-gray-700">
              <div className="h-2 w-2 rounded-full bg-green-500 mr-3" />
              <span className="font-medium">In Stock ({product.stock} units available)</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Check className="h-5 w-5 text-indigo-600 mr-3" />
              <span>Free delivery on orders over $100</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button 
              onClick={() => addToCart(product)}
              className="flex-1 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
            <button className="flex-1 bg-white border-2 border-gray-200 text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg hover:border-indigo-600 hover:text-indigo-600 transition-all">
              Buy Now
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100">
            <div className="text-center">
              <div className="bg-indigo-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <ShieldCheck className="h-6 w-6 text-indigo-600" />
              </div>
              <p className="text-xs font-bold text-gray-900">1 Year Warranty</p>
            </div>
            <div className="text-center">
              <div className="bg-green-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <RefreshCw className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-xs font-bold text-gray-900">30 Day Returns</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Truck className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-xs font-bold text-gray-900">Fast Shipping</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-gray-900">You May Also Like</h2>
            <Link to={`/shop?category=${product.category}`} className="text-indigo-600 font-bold hover:underline">
              View Category
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
