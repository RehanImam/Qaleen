

import React, { useState } from 'react';

export default function Navbar({ cartCount, onOpenCart, navigateTo }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  // Custom Categories List
  const navCategories = [
    { name: 'CARPET', slug: 'carpet' },
    { name: 'PRAYER MAT', slug: 'prayer mat' },
    { name: 'ARTWORKS', slug: 'artworks' },
    { name: 'CUSTOM', slug: 'custom' },
    { name: 'PROJECT', slug: 'project' },
    { name: 'BLOG', slug: 'blog' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* 1. Top Announcement Bar */}
      <div className="bg-[#5c0612] text-white text-xs py-2 text-center font-medium tracking-wide w-full">
        Free shipping on orders over ₹1,999 • Easy 7-day returns
      </div>

      {/* 2. Main High-Navbar (Border Removed) */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`w-full transition-all duration-300 ${
          isHovered 
            ? 'bg-white text-black shadow-md' 
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent text-white'
        }`}
      >
        <div className="w-full px-8 lg:px-16 py-4">
          
          {/* TOP ROW: Logo - Tall Search Bar - Right Icons */}
          <div className="flex items-center justify-between h-20 mb-3">
            
            {/* Logo Left */}
            <div 
              onClick={() => navigateTo('home')} 
              className="cursor-pointer flex items-baseline font-serif text-3xl sm:text-4xl tracking-tight select-none"
            >
              <span className="font-extrabold">Qaleen</span>
              <span className={`italic ml-1.5 font-light ${isHovered ? 'text-[#5c0612]' : 'text-amber-200'}`}>
                Bhaiya
              </span>
            </div>

            {/* Center Search Bar */}
            <div className="flex-1 max-w-2xl mx-12 hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full bg-transparent border text-sm tracking-wider px-5 py-3 pr-20 outline-none transition-colors ${
                    isHovered 
                      ? 'border-black text-black placeholder-stone-600' 
                      : 'border-white/70 text-white placeholder-stone-200'
                  }`}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
                  <svg className="w-5 h-5 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <svg className="w-5 h-5 opacity-90 border border-current p-0.5 rounded-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <circle cx="12" cy="13" r="3" strokeWidth="1.8" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Icons: Heart, Account, Bag */}
            <div className="flex items-center space-x-7">
              <button className="hover:opacity-75 transition-opacity" title="Wishlist">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>

              <button className="hover:opacity-75 transition-opacity" title="Account">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              <button 
                onClick={onOpenCart} 
                className="relative hover:opacity-75 transition-opacity"
                title="Cart"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-[#5c0612] text-white text-[10px] font-bold rounded-full w-4.5 h-4.5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

          </div>

          {/* BOTTOM ROW: Clean Navigation without bottom border */}
          <nav className="hidden md:flex items-center justify-between w-full pt-3 pb-2 text-[13px] tracking-[0.25em] font-semibold uppercase">
            {navCategories.map((item) => (
              <button
                key={item.slug}
                onClick={() => navigateTo('shop', { category: item.slug })}
                className="hover:opacity-70 transition-opacity"
              >
                {item.name}
              </button>
            ))}
          </nav>

        </div>
      </div>
    </header>
  );
}