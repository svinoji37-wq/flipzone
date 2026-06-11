import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { products, CATEGORIES } from '../data/mockData';
import ProductCard from '../components/ProductCard';

const CATEGORY_COVERS: Record<string, string> = {
  'Fashion': 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800',
  'Jewelry': 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
  'Electronics': 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800',
  'Home & Living': 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800',
  'Beauty': 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800'
};

const Home = () => {
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-70"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-indigo-600 text-white text-sm font-bold mb-6 tracking-widest uppercase">
              Premium Shopping Experience
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              The Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Lifestyle</span> Destination
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Explore our vast collection of high-end fashion, cutting-edge electronics, and exquisite jewelry. 
              Quality and style delivered directly to you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-700 transition-all flex items-center group shadow-xl shadow-indigo-500/30">
                Shop All Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/shop?category=Electronics" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                Tech Deals
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Curated Categories</h2>
            <p className="text-gray-500 text-lg">Handpicked selections across all your favorite departments</p>
          </div>
          <Link to="/shop" className="text-indigo-600 font-bold flex items-center hover:underline group">
            Explore Everything <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {CATEGORIES.map((cat) => (
            <motion.div
              key={cat}
              whileHover={{ y: -12 }}
              className="relative h-80 rounded-[2rem] overflow-hidden group cursor-pointer shadow-xl"
            >
              <img 
                src={CATEGORY_COVERS[cat]} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt={cat}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-white font-bold text-2xl mb-1">{cat}</h3>
                <Link to={`/shop?category=${cat}`} className="text-indigo-300 text-sm font-bold flex items-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  Browse Now <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: 'Free Shipping', desc: 'On orders over $100', color: 'bg-blue-50 text-blue-600' },
              { icon: ShieldCheck, title: 'Secure Payment', desc: '100% protected checkout', color: 'bg-green-50 text-green-600' },
              { icon: RefreshCw, title: 'Easy Returns', desc: '30-day return policy', color: 'bg-purple-50 text-purple-600' },
              { icon: Zap, title: 'Fast Delivery', desc: 'Within 3-5 business days', color: 'bg-orange-50 text-orange-600' },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className={`p-4 rounded-2xl mb-4 ${feature.color}`}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">{feature.title}</h4>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm">Best Sellers</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4">Trending Now</h2>
          <div className="h-1.5 w-24 bg-indigo-600 mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
