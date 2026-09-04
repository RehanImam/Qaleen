import React, { useState, useMemo } from 'react';
import { CARPET_MEGA_MENU, PRAYER_MAT_MEGA_MENU } from '../data/megaMenuData';

export default function FilterSidebar({ isOpen, onClose, filters, setFilters, totalResults }) {
  // Active collection context from page (e.g. 'Carpet', 'Prayer Mat')
  const activeCollection = filters.mainGroup || 'Carpet';

  // Retrieve active mega menu groups based on selected collection
  const activeMegaMenu = useMemo(() => {
    const groupName = activeCollection.toLowerCase();
    if (groupName.includes('prayer')) {
      return PRAYER_MAT_MEGA_MENU;
    }
    // Default to Carpet mega menu
    return CARPET_MEGA_MENU;
  }, [activeCollection]);

  // Accordion open/close state for each group
  const [openSections, setOpenSections] = useState({
    price: true,
    'By Origin': true,
    'By Style': true,
    'By Style & Collection': true,
    'By Material': false,
    'By Construction': false,
    'By Construction & Finish': false,
    'By Shape': false,
    'By Room': false,
    'By Size': false,
    'By Weight': false,
    'Colour': true,
  });

  const toggleSection = (title) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const handleSubCategorySelect = (itemLabel) => {
    // If clicking the currently selected subCategory, toggle it off
    if (filters.subCategory === itemLabel || filters.category === itemLabel) {
      setFilters((prev) => ({ ...prev, subCategory: '', category: '' }));
    } else {
      setFilters((prev) => ({ ...prev, subCategory: itemLabel, category: itemLabel }));
    }
  };

  const handleColorSelect = (colorName) => {
    if (filters.color === colorName) {
      setFilters((prev) => ({ ...prev, color: '' }));
    } else {
      setFilters((prev) => ({ ...prev, color: colorName }));
    }
  };

  const handleSizeSelect = (sizeLabel) => {
    if (filters.size === sizeLabel) {
      setFilters((prev) => ({ ...prev, size: '' }));
    } else {
      setFilters((prev) => ({ ...prev, size: sizeLabel }));
    }
  };

  const clearAllFilters = () => {
    setFilters((prev) => ({
      ...prev,
      category: '',
      subCategory: '',
      maxPrice: 50000,
      size: '',
      country: '',
      color: '',
      search: '',
    }));
  };

  // Count active filters (excluding the page collection itself)
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.subCategory || filters.category) count++;
    if (filters.size) count++;
    if (filters.color) count++;
    if (filters.maxPrice < 50000) count++;
    return count;
  }, [filters]);

  // Price slider percentage for gradient fill
  const pricePercent = Math.min(100, Math.max(0, ((filters.maxPrice || 50000) / 50000) * 100));

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/45 backdrop-blur-[2px] z-50 transition-opacity animate-in fade-in duration-300"
      />

      {/* Slide-In Drawer */}
      <aside className="fixed top-0 left-0 h-full w-full max-w-md bg-[#faf8f5] z-50 shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-left duration-300 border-r border-stone-200/80">
        
        {/* Drawer Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-stone-200/80 bg-[#faf8f5]">
          <div className="flex items-center gap-2.5">
            <div>
              <span className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#b89047] font-semibold">
                {activeCollection}
              </span>
              <h2 className="font-serif text-2xl font-normal tracking-tight text-stone-900 leading-tight">
                Filter & Refine
              </h2>
            </div>
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#5c0612] text-white text-[10px] font-bold flex items-center justify-center font-sans self-center ml-1">
                {activeFilterCount}
              </span>
            )}
          </div>

          <div className="flex items-center gap-4">
            {activeFilterCount > 0 && (
              <button
                onClick={clearAllFilters}
                className="text-xs font-sans text-stone-500 hover:text-[#5c0612] underline transition-colors cursor-pointer"
              >
                Clear all
              </button>
            )}
            <button 
              onClick={onClose}
              className="p-1.5 text-stone-500 hover:text-stone-900 transition-colors rounded-full hover:bg-stone-200/60 cursor-pointer"
              aria-label="Close filters"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 divide-y divide-stone-200/60 custom-scrollbar">
          
          {/* Active Filters Quick Chips */}
          {activeFilterCount > 0 && (
            <div className="pb-3 pt-1">
              <div className="flex flex-wrap gap-1.5">
                {(filters.subCategory || filters.category) && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#5c0612]/10 text-[#5c0612] text-xs rounded-full font-sans">
                    {filters.subCategory || filters.category}
                    <button 
                      onClick={() => setFilters((prev) => ({ ...prev, subCategory: '', category: '' }))}
                      className="hover:text-black cursor-pointer font-bold"
                    >
                      ×
                    </button>
                  </span>
                )}
                {filters.size && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-stone-200/70 text-stone-800 text-xs rounded-full font-sans">
                    {filters.size}
                    <button 
                      onClick={() => setFilters((prev) => ({ ...prev, size: '' }))}
                      className="hover:text-black cursor-pointer font-bold"
                    >
                      ×
                    </button>
                  </span>
                )}
                {filters.color && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-stone-200/70 text-stone-800 text-xs rounded-full font-sans">
                    {filters.color}
                    <button 
                      onClick={() => setFilters((prev) => ({ ...prev, color: '' }))}
                      className="hover:text-black cursor-pointer font-bold"
                    >
                      ×
                    </button>
                  </span>
                )}
                {filters.maxPrice < 50000 && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-stone-200/70 text-stone-800 text-xs rounded-full font-sans">
                    Under ₹{filters.maxPrice.toLocaleString()}
                    <button 
                      onClick={() => setFilters((prev) => ({ ...prev, maxPrice: 50000 }))}
                      className="hover:text-black cursor-pointer font-bold"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Elevated Price Slider Bar */}
          <div className="pt-4">
            <button 
              type="button"
              onClick={() => toggleSection('price')}
              className="w-full flex justify-between items-center py-2 text-stone-900 font-serif text-[15px] font-medium tracking-tight text-left"
            >
              <span>Price Range</span>
              <span className="text-stone-400 text-xs font-mono">
                {openSections.price ? '−' : '+'}
              </span>
            </button>

            {openSections.price && (
              <div className="pt-2 pb-3 space-y-3.5">
                
                {/* Price Display Boxes */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white border border-stone-200 px-3.5 py-2">
                    <span className="block text-[10px] font-sans text-stone-400 tracking-wider uppercase">Minimum</span>
                    <span className="font-serif text-sm text-stone-900 font-medium">₹0</span>
                  </div>
                  <div className="bg-white border border-stone-200 px-3.5 py-2 text-right">
                    <span className="block text-[10px] font-sans text-stone-400 tracking-wider uppercase">Maximum</span>
                    <span className="font-serif text-sm text-[#5c0612] font-semibold">
                      ₹{filters.maxPrice?.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Styled Slider Bar */}
                <div className="relative pt-1">
                  <input
                    type="range"
                    min="1000"
                    max="50000"
                    step="1000"
                    value={filters.maxPrice || 50000}
                    onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
                    style={{
                      background: `linear-gradient(to right, #5c0612 0%, #5c0612 ${pricePercent}%, #e7e5e4 ${pricePercent}%, #e7e5e4 100%)`,
                    }}
                    className="w-full luxury-slider cursor-pointer outline-none"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 font-sans mt-1">
                    <span>₹1,000</span>
                    <span>₹25,000</span>
                    <span>₹50,000+</span>
                  </div>
                </div>

                {/* Quick Price Preset Chips */}
                <div className="flex items-center gap-1.5 pt-1">
                  {[
                    { label: 'Under ₹5k', val: 5000 },
                    { label: 'Under ₹15k', val: 15000 },
                    { label: 'Under ₹30k', val: 30000 },
                    { label: 'All', val: 50000 },
                  ].map((preset) => (
                    <button
                      key={preset.val}
                      type="button"
                      onClick={() => setFilters({ ...filters, maxPrice: preset.val })}
                      className={`text-[10px] font-sans px-2.5 py-1 border transition-all cursor-pointer ${
                        filters.maxPrice === preset.val
                          ? 'border-[#5c0612] text-[#5c0612] bg-[#5c0612]/5 font-semibold'
                          : 'border-stone-200 text-stone-600 hover:border-stone-400 bg-white'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>

              </div>
            )}
          </div>

          {/* 3. Dynamic Mega Menu Categories & Subcategories */}
          {activeMegaMenu?.groups?.map((group) => {
            const isOpen = Boolean(openSections[group.title]);
            const isColorGroup = group.isColorGroup;
            const isSizeGroup = group.title.toLowerCase().includes('size');

            return (
              <div key={group.title} className="pt-3">
                <button
                  type="button"
                  onClick={() => toggleSection(group.title)}
                  className="w-full flex justify-between items-center py-2 text-stone-900 font-serif text-[15px] font-medium tracking-tight text-left cursor-pointer"
                >
                  <span>{group.title}</span>
                  <span className="text-stone-400 text-xs font-mono">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-1.5 pb-2">
                    
                    {/* A. Colour Group (Color Circles) */}
                    {isColorGroup ? (
                      <div className="grid grid-cols-3 gap-2 pt-1">
                        {group.items.map((item, idx) => {
                          const colName = typeof item === 'object' ? item.name : item;
                          const swatch = typeof item === 'object' ? item.swatch : '#ccc';
                          const isSelected = filters.color?.toLowerCase() === colName.toLowerCase();

                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => handleColorSelect(colName)}
                              className={`flex items-center gap-2 p-1.5 border text-left transition-all cursor-pointer ${
                                isSelected
                                  ? 'border-[#5c0612] bg-[#5c0612]/5 text-[#5c0612] font-medium'
                                  : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                              }`}
                            >
                              <span
                                className="w-3.5 h-3.5 rounded-full shrink-0 border border-stone-300 shadow-2xs"
                                style={{ background: swatch }}
                              />
                              <span className="text-[11px] font-sans truncate">{colName}</span>
                            </button>
                          );
                        })}
                      </div>
                    ) : isSizeGroup ? (
                      /* B. Size Group (Pill Buttons) */
                      <div className="grid grid-cols-3 gap-1.5 pt-1 font-sans">
                        {group.items.map((sz, idx) => {
                          const isSelected = filters.size === sz;
                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => handleSizeSelect(sz)}
                              className={`py-1.5 px-2 text-[11px] text-center border transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#5c0612] text-white border-[#5c0612] font-medium shadow-xs'
                                  : 'bg-white border-stone-200 text-stone-700 hover:border-stone-400'
                              }`}
                            >
                              {sz}
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      /* C. Standard Category & Subcategory List */
                      <ul className="space-y-1 pt-1 max-h-52 overflow-y-auto pr-2 custom-scrollbar">
                        {group.items.map((itemLabel, idx) => {
                          const isSelected =
                            filters.subCategory === itemLabel ||
                            filters.category === itemLabel;

                          return (
                            <li key={idx}>
                              <button
                                type="button"
                                onClick={() => handleSubCategorySelect(itemLabel)}
                                className={`w-full flex items-center justify-between text-left py-1.5 px-2 text-xs font-sans transition-colors cursor-pointer rounded-xs ${
                                  isSelected
                                    ? 'bg-[#5c0612]/10 text-[#5c0612] font-semibold'
                                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/60'
                                }`}
                              >
                                <span className="flex items-center gap-2">
                                  <span
                                    className={`w-3 h-3 rounded-xs border flex items-center justify-center transition-colors ${
                                      isSelected
                                        ? 'border-[#5c0612] bg-[#5c0612] text-white'
                                        : 'border-stone-300 bg-white'
                                    }`}
                                  >
                                    {isSelected && (
                                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                      </svg>
                                    )}
                                  </span>
                                  <span>{itemLabel}</span>
                                </span>
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    )}

                  </div>
                )}
              </div>
            );
          })}

        </div>

        {/* Footer Action Button */}
        <div className="p-5 border-t border-stone-200/80 bg-[#faf8f5] space-y-2">
          <button
            onClick={onClose}
            className="w-full py-3.5 bg-[#5c0612] text-white font-sans text-xs tracking-[0.2em] uppercase hover:bg-stone-900 transition-colors shadow-md cursor-pointer font-semibold"
          >
            Apply & View Results ({totalResults})
          </button>
          {activeFilterCount > 0 && (
            <button
              onClick={clearAllFilters}
              className="w-full text-center text-xs text-stone-500 hover:text-stone-900 font-sans tracking-wide py-1 transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          )}
        </div>

      </aside>
    </>
  );
}