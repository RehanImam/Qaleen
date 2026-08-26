

import React, { useState, useEffect } from 'react';

export default function Navbar({ cartCount, onOpenCart, navigateTo }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Scroll listener to activate white navbar on page scroll down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom Categories List
  const navCategories = [
    { name: 'CARPET', slug: 'carpet' },
    { name: 'PRAYER MAT', slug: 'prayer mat' },
    { name: 'ARTWORKS', slug: 'artworks' },
    { name: 'CUSTOM', slug: 'custom' },
    { name: 'PROJECT', slug: 'project' },
    { name: 'BLOG', slug: 'blog' },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigateTo('shop', { search: searchQuery });
      setIsSearchOpen(false);
    }
  };

  const isNavbarWhite = isScrolled || isHovered || isSearchOpen;

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      
      {/* 1. Top Announcement Bar */}
      <div className="bg-[#5c0612] text-white text-xs py-2 text-center font-medium tracking-wide w-full">
        Free shipping on orders over ₹1,999 • Easy 7-day returns
      </div>

      {/* 2. Main Navbar */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`w-full transition-all duration-300 ${
          isNavbarWhite 
            ? 'bg-white text-stone-900 shadow-sm' 
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent text-white'
        }`}
      >
        <div className="w-full px-6 lg:px-16 py-3">
          
          {/* TOP ROW: Logo Left & Action Icons Right */}
          <div className="flex items-center justify-between h-14">
            
            {/* Logo Left */}
            <div 
              onClick={() => navigateTo('home')} 
              className="cursor-pointer flex items-baseline font-serif text-2xl sm:text-3xl tracking-tight select-none"
            >
              <span className="font-extrabold">Qaleen</span>
              <span className={`italic ml-1 font-light ${isNavbarWhite ? 'text-[#5c0612]' : 'text-amber-200'}`}>
                Bhaiya
              </span>
            </div>

            {/* Right Icons: Search, Heart, Account, Bag */}
            <div className="flex items-center space-x-6">
              
              {/* Search Icon Button */}
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="hover:opacity-75 transition-opacity" 
                title="Search"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Wishlist Icon */}
              <button className="hover:opacity-75 transition-opacity hidden sm:block" title="Wishlist">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>

              {/* Account Icon */}
              <button className="hover:opacity-75 transition-opacity hidden sm:block" title="Account">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* Cart Drawer Toggle Button */}
              <button 
                onClick={onOpenCart} 
                className="relative hover:opacity-75 transition-opacity"
                title="Cart"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-[#5c0612] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

            </div>

          </div>

          {/* SLIDE-DOWN SEARCH BAR */}
          {isSearchOpen && (
            <div className="w-full my-3 py-3 border-y border-stone-200/80 transition-all duration-300">
              <form onSubmit={handleSearchSubmit} className="max-w-3xl mx-auto flex items-center gap-3">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search for rugs, carpets, prayer mats..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-full bg-stone-100 text-stone-900 text-sm tracking-wider px-4 py-2 border border-transparent outline-none focus:outline-none focus:border-transparent focus:ring-0 transition-colors rounded-xs"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs uppercase"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-[#5c0612] text-white px-5 py-2 text-xs font-bold tracking-wider uppercase hover:bg-stone-800 transition-colors rounded-xs"
                >
                  Search
                </button>

                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="text-stone-500 hover:text-stone-900 p-1"
                  title="Close Search"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </form>
            </div>
          )}

          {/* BOTTOM ROW: Navigation Categories */}
          <nav className="hidden md:flex items-center justify-center gap-8 lg:gap-12 w-full pt-2 pb-1 text-[12px] lg:text-[13px] tracking-[0.2em] font-medium uppercase">
            {navCategories.map((item) => (
              <button
                key={item.slug}
                onClick={() => navigateTo('shop', { category: item.slug })}
                className="hover:text-[#5c0612] transition-colors relative py-1 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#5c0612] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

        </div>

      </div>
    </header>
  );
}