
import React, { useState, useMemo } from 'react';
import { SUB_CATEGORIES, COUNTRIES, COLORS, SIZES, PRODUCTS } from '../data/products';

export default function FilterSidebar({ isOpen, onClose, filters, setFilters, totalResults }) {
  // Accordion open/close state management with + / -
  const [openSections, setOpenSections] = useState({
    category: true,
    price: true,
    sizes: false,
    country: false,
    color: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Dynamically calculate category list with counts based on selected mainGroup or all categories
  const categoryListWithCounts = useMemo(() => {
    let categoriesToDisplay = [];

    if (filters.mainGroup && SUB_CATEGORIES[filters.mainGroup]) {
      categoriesToDisplay = SUB_CATEGORIES[filters.mainGroup];
    } else {
      // If no mainGroup selected, combine all sub-categories
      Object.values(SUB_CATEGORIES).forEach((cats) => {
        categoriesToDisplay.push(...cats);
      });
    }

    // Calculate count of items for each category from PRODUCTS
    return categoriesToDisplay.map((catName) => {
      const count = PRODUCTS.filter((p) => {
        const matchMain = filters.mainGroup ? p.mainGroup === filters.mainGroup : true;
        return matchMain && p.category === catName;
      }).length;

      return {
        name: catName,
        count: count,
      };
    });
  }, [filters.mainGroup]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
      />

      {/* Left Side Filter Drawer */}
      <aside className="fixed top-0 left-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-left duration-300">
        
        {/* Drawer Header */}
        <div className="flex justify-between items-center px-6 py-6 border-b border-stone-200">
          <h2 className="font-serif text-3xl font-light tracking-wide text-stone-900">Filters</h2>
          <button 
            onClick={onClose}
            className="p-1 text-stone-500 hover:text-black transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-2 divide-y divide-stone-100">
          
          {/* Dynamic Category Section (Your Provided Categories + Dynamic Counts) */}
          <div className="pt-3">
            <button 
              onClick={() => toggleSection('category')}
              className="w-full flex justify-between items-center py-3 text-stone-800 font-serif text-base tracking-wide"
            >
              <span>Category</span>
              <span className="text-lg font-mono text-stone-700">{openSections.category ? '−' : '+'}</span>
            </button>

            {openSections.category && (
              <div className="pb-4 pt-1 space-y-2.5 font-sans max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {categoryListWithCounts.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      setFilters({ ...filters, category: filters.category === item.name ? '' : item.name });
                    }}
                    className={`w-full text-left text-xs sm:text-sm transition-colors flex items-center justify-between ${
                      filters.category === item.name 
                        ? 'text-black font-semibold' 
                        : 'text-stone-600 hover:text-black'
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="text-stone-400 font-normal">({item.count})</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Price Filter Section */}
          <div className="pt-3">
            <button 
              onClick={() => toggleSection('price')}
              className="w-full flex justify-between items-center py-3 text-stone-800 font-serif text-base tracking-wide"
            >
              <span>Price</span>
              <span className="text-lg font-mono text-stone-700">{openSections.price ? '−' : '+'}</span>
            </button>

            {openSections.price && (
              <div className="pb-4 pt-1 space-y-3 font-sans">
                <input
                  type="range"
                  min="0"
                  max="50000"
                  step="1000"
                  value={filters.maxPrice}
                  onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
                  className="w-full accent-black cursor-pointer"
                />
                <div className="flex items-center justify-between gap-3 text-xs text-stone-700">
                  <div className="border border-stone-300 px-3 py-1.5 flex-1 flex items-center justify-between">
                    <span className="text-stone-400">₹INR</span>
                    <span>0</span>
                  </div>
                  <span className="text-stone-400">to</span>
                  <div className="border border-stone-300 px-3 py-1.5 flex-1 flex items-center justify-between">
                    <span className="text-stone-400">₹INR</span>
                    <span>{filters.maxPrice?.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sizes in Feet Section */}
          <div className="pt-3">
            <button 
              onClick={() => toggleSection('sizes')}
              className="w-full flex justify-between items-center py-3 text-stone-800 font-serif text-base tracking-wide"
            >
              <span>Sizes In Feet</span>
              <span className="text-lg font-mono text-stone-700">{openSections.sizes ? '−' : '+'}</span>
            </button>

            {openSections.sizes && (
              <div className="pb-4 pt-1 grid grid-cols-3 gap-2 font-sans">
                {SIZES.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setFilters({ ...filters, size: filters.size === sz ? '' : sz })}
                    className={`py-1.5 text-xs transition-colors border ${
                      filters.size === sz
                        ? 'bg-stone-900 text-white border-stone-900'
                        : 'bg-white border-stone-200 text-stone-700 hover:border-stone-400'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Country Choice Section */}
          <div className="pt-3">
            <button 
              onClick={() => toggleSection('country')}
              className="w-full flex justify-between items-center py-3 text-stone-800 font-serif text-base tracking-wide"
            >
              <span>Country Choice</span>
              <span className="text-lg font-mono text-stone-700">{openSections.country ? '−' : '+'}</span>
            </button>

            {openSections.country && (
              <div className="pb-4 pt-1 space-y-2 font-sans">
                {COUNTRIES.map((cty) => (
                  <label key={cty} className="flex items-center space-x-2.5 text-xs text-stone-700 cursor-pointer">
                    <input
                      type="radio"
                      name="country"
                      checked={filters.country === cty}
                      onChange={() => setFilters({ ...filters, country: filters.country === cty ? '' : cty })}
                      className="accent-black"
                    />
                    <span>{cty}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Colour Choice Section */}
          <div className="pt-3">
            <button 
              onClick={() => toggleSection('color')}
              className="w-full flex justify-between items-center py-3 text-stone-800 font-serif text-base tracking-wide"
            >
              <span>Colour Choice</span>
              <span className="text-lg font-mono text-stone-700">{openSections.color ? '−' : '+'}</span>
            </button>

            {openSections.color && (
              <div className="pb-4 pt-1 flex flex-wrap gap-2.5 font-sans">
                {COLORS.map((col) => (
                  <button
                    key={col.name}
                    title={col.name}
                    onClick={() => setFilters({ ...filters, color: filters.color === col.name ? '' : col.name })}
                    className={`w-7 h-7 rounded-full border transition-transform ${
                      filters.color === col.name ? 'scale-110 border-black ring-1 ring-black' : 'border-stone-300'
                    }`}
                    style={{ backgroundColor: col.hex }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Reset Filters */}
          <div className="pt-4 pb-2 font-sans">
            <button
              onClick={() => setFilters({ mainGroup: '', category: '', maxPrice: 50000, size: '', country: '', color: '' })}
              className="text-xs text-stone-500 underline hover:text-black transition-colors"
            >
              Reset all filters
            </button>
          </div>

        </div>

        {/* Footer Action Button */}
        <div className="p-6 border-t border-stone-200 bg-white font-serif">
          <button
            onClick={onClose}
            className="w-full py-3.5 bg-stone-900 text-white font-serif text-sm tracking-widest uppercase hover:bg-stone-800 transition-colors shadow-md"
          >
            View results ({totalResults})
          </button>
        </div>

      </aside>
    </>
  );
}