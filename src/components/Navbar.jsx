import React, { useState } from 'react';
import { CATEGORIES } from '../data/products';

export default function Navbar({ cartCount, onOpenCart, navigateTo }) {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#faf7f2] border-b border-amber-900/10 shadow-sm">
      {/* Top Banner */}
      <div className="bg-[#5c0612] text-[#faf7f2] text-xs py-1.5 text-center font-light tracking-wide">
        Free shipping on orders over ₹1,999 • Easy 7-day returns
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            onClick={() => navigateTo('home')} 
            className="cursor-pointer flex items-baseline font-serif text-2xl sm:text-3xl tracking-tight text-[#2c221e]"
          >
            <span className="font-bold">Qaleen</span>
            <span className="italic ml-1 font-light text-[#5c0612]">Bhaiya</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8 items-center text-sm tracking-wider uppercase font-medium text-stone-700">
            <button 
              onClick={() => navigateTo('home')} 
              className="hover:text-[#5c0612] transition-colors"
            >
              Shop
            </button>

            {/* Category Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setShowCategories(!showCategories)}
                className="hover:text-[#5c0612] transition-colors flex items-center gap-1 uppercase"
              >
                Categories ▾
              </button>

              {showCategories && (
                <div 
                  className="absolute left-0 mt-3 w-[600px] bg-white border border-stone-200 rounded-lg shadow-2xl p-6 grid grid-cols-2 gap-3 z-50 text-xs font-sans capitalize tracking-normal"
                  onMouseLeave={() => setShowCategories(false)}
                >
                  {CATEGORIES.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        navigateTo('shop', { category: cat });
                        setShowCategories(false);
                      }}
                      className="text-left px-2 py-1.5 hover:bg-amber-50 hover:text-[#5c0612] rounded transition-colors text-stone-800 font-medium"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button 
              onClick={() => navigateTo('shop')} 
              className="hover:text-[#5c0612] transition-colors"
            >
              Our Story
            </button>
          </nav>

          {/* Right Action Icons & Bag */}
          <div className="flex items-center space-x-5 text-stone-700">
            <button 
              onClick={onOpenCart} 
              className="flex items-center gap-2 bg-[#5c0612] text-white px-4 py-2 rounded-full hover:bg-[#42040d] transition-all text-xs tracking-wider uppercase"
            >
              <span>Bag</span>
              <span className="bg-white text-[#5c0612] font-bold rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartCount}
              </span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}