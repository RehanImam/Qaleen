import React, { useState, useEffect, useRef } from 'react';
import MegaMenu from './MegaMenu';
import { MEGA_MENU_REGISTRY } from '../data/megaMenuData';

export default function Navbar({ currentPage = 'home', cartCount, onOpenCart, navigateTo }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileAccordion, setOpenMobileAccordion] = useState({
    carpet: true, // Carpet expanded by default in mobile menu
  });
  const [openMobileSubGroup, setOpenMobileSubGroup] = useState({});

  const headerRef = useRef(null);
  const triggerRefs = useRef({});
  const enterTimeoutRef = useRef(null);
  const leaveTimeoutRef = useRef(null);

  const isHome = currentPage === 'home';
  // Solid white/cream on all pages other than home; dynamic on home based on scroll, hover, search, or active mega menu
  const isNavbarWhite = !isHome || isScrolled || isHovered || isSearchOpen || Boolean(activeMegaMenu);

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

  // ESC key listener: closes mega menu and returns focus to trigger
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeMegaMenu) {
        const currentSlug = activeMegaMenu;
        setActiveMegaMenu(null);
        if (triggerRefs.current[currentSlug]) {
          triggerRefs.current[currentSlug].focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeMegaMenu]);

  // Click outside to close mega menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setActiveMegaMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Custom Categories List - mapped to exact mainGroups used by the home screen
  const navCategories = [
    { name: 'CARPET', slug: 'carpet', mainGroup: 'Carpet' },
    { name: 'PRAYER MAT', slug: 'prayer mat', mainGroup: 'Prayer Mat' },
    { name: 'ARTWORKS', slug: 'artworks', mainGroup: 'Artwork' },
    { name: 'CUSTOM', slug: 'custom', mainGroup: 'Custom' },
    { name: 'ARCHIVES', slug: 'project' },
    { name: 'BLOG', slug: 'blog' },
  ];

  // Hover Intent handlers
  const handleTriggerEnter = (slug) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    if (MEGA_MENU_REGISTRY[slug]) {
      enterTimeoutRef.current = setTimeout(() => {
        setActiveMegaMenu(slug);
      }, 120); // ~120ms hover-intent delay
    } else {
      // If hovered over a category without mega menu, close current mega menu after short delay
      enterTimeoutRef.current = setTimeout(() => {
        setActiveMegaMenu(null);
      }, 120);
    }
  };

  const handleTriggerLeave = () => {
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
      enterTimeoutRef.current = null;
    }
    leaveTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 200); // ~200ms close delay
  };

  const handlePanelEnter = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
  };

  const handlePanelLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 200);
  };

  // Direct Click handler: Navigates immediately to custom landing page or category page
  const handleTriggerClick = (item) => {
    setActiveMegaMenu(null);
    if (item.slug === 'custom') {
      navigateTo('custom');
    } else if (item.slug === 'project') {
      navigateTo('project');
    } else if (item.mainGroup) {
      navigateTo('shop', { mainGroup: item.mainGroup });
    } else {
      navigateTo('shop', { category: item.slug });
    }
  };

  const handleMegaItemClick = (label, groupTitle, menuSlug) => {
    const slug = menuSlug || activeMegaMenu || 'carpet';
    setActiveMegaMenu(null);
    setIsMobileMenuOpen(false);
    navigateTo('shop', { 
      search: label, 
      category: slug,
      mainGroup: slug === 'prayer mat' ? 'Prayer Mat' : 'Carpet'
    });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigateTo('shop', { search: searchQuery });
      setIsSearchOpen(false);
    }
  };

  const toggleMobileAccordion = (slug) => {
    setOpenMobileAccordion((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  const toggleMobileSubGroup = (groupTitle) => {
    setOpenMobileSubGroup((prev) => ({
      ...prev,
      [groupTitle]: !prev[groupTitle],
    }));
  };

  return (
    <header 
      ref={headerRef}
      className={`w-full z-50 transition-all duration-300 ${
        isHome ? 'fixed top-0 left-0' : 'sticky top-0'
      }`}
    >
      {/* 1. Top Announcement Bar */}
      <div className="bg-[#5c0612] text-white text-xs py-2 text-center font-medium tracking-wide w-full">
        Free shipping on orders over ₹1,999 • Easy 7-day returns
      </div>

      {/* 2. Main Navbar */}
      <div 
        onMouseEnter={() => {
          if (isHome) setIsHovered(true);
        }}
        onMouseLeave={() => {
          if (isHome) setIsHovered(false);
        }}
        className={`w-full relative transition-all duration-300 ${
          isNavbarWhite 
            ? 'bg-[#faf8f5] text-stone-900 shadow-xs border-b border-stone-200/50' 
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent text-white'
        }`}
      >
        <div className="w-full px-6 lg:px-12 py-3.5 sm:py-4">
          
          {/* SINGLE ROW: Logo Far Left - Navigation Links Center - Icons Far Right */}
          <div className="flex items-center justify-between gap-4">
            
            {/* Left group: Mobile Hamburger (mobile only) + Logo */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-1 transition-colors ${
                  isNavbarWhite ? 'text-stone-800' : 'text-white'
                }`}
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              {/* 1. Logo Far Left */}
              <div 
                onClick={() => {
                  setActiveMegaMenu(null);
                  setIsMobileMenuOpen(false);
                  navigateTo('home');
                }} 
                className="cursor-pointer flex items-baseline font-serif text-2xl sm:text-3xl tracking-tight select-none shrink-0"
              >
                <span className={`font-normal ${isNavbarWhite ? 'text-stone-900' : 'text-white'}`}>
                  Qaleen
                </span>
                <span className={`italic ml-1.5 font-light ${isNavbarWhite ? 'text-[#5c0612]' : 'text-amber-200'}`}>
                  Bhaiya
                </span>
              </div>
            </div>

            {/* 2. Navigation Links Centered in the Same Row */}
            <nav className="hidden md:flex items-center justify-center flex-1 mx-4 gap-6 lg:gap-8 xl:gap-10 text-[11px] lg:text-[12px] tracking-[0.2em] font-medium uppercase">
              {navCategories.map((item) => {
                const hasMega = Boolean(MEGA_MENU_REGISTRY[item.slug]);
                const isMenuOpen = activeMegaMenu === item.slug;

                return (
                  <button
                    key={item.slug}
                    ref={(el) => (triggerRefs.current[item.slug] = el)}
                    onClick={() => handleTriggerClick(item)}
                    onMouseEnter={() => handleTriggerEnter(item.slug)}
                    onMouseLeave={handleTriggerLeave}
                    aria-expanded={hasMega ? isMenuOpen : undefined}
                    aria-haspopup={hasMega ? 'true' : undefined}
                    className={`${
                      isNavbarWhite 
                        ? isMenuOpen ? 'text-[#5c0612]' : 'text-stone-700 hover:text-[#5c0612]' 
                        : isMenuOpen ? 'text-white' : 'text-stone-200 hover:text-white'
                    } transition-colors relative py-1 group shrink-0 outline-none focus-visible:ring-1 focus-visible:ring-[#5c0612]`}
                  >
                    {item.name}

                    {/* Underline indicator: active when menu is open or on hover */}
                    <span 
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-[#5c0612] transition-all duration-300 ${
                        isMenuOpen ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </button>
                );
              })}
            </nav>

            {/* 3. Action Icons Far Right: Search, Wishlist/Heart, Account, Bag/Cart */}
            <div className="flex items-center space-x-5 sm:space-x-6 shrink-0">
              
              {/* Search Icon */}
              <button 
                onClick={() => {
                  setIsSearchOpen(!isSearchOpen);
                  setActiveMegaMenu(null);
                }}
                className="hover:opacity-75 transition-opacity" 
                title="Search"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Wishlist / Heart Icon */}
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

              {/* Bag / Cart */}
              <button 
                onClick={onOpenCart} 
                className="relative hover:opacity-75 transition-opacity flex items-center gap-1.5"
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
            <div className="w-full mt-3 pt-3 border-t border-stone-200/80 transition-all duration-300">
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

        </div>

        {/* 3. Reusable Desktop Mega Menu Panel */}
        <MegaMenu
          menuData={activeMegaMenu ? MEGA_MENU_REGISTRY[activeMegaMenu] : null}
          isOpen={Boolean(activeMegaMenu && MEGA_MENU_REGISTRY[activeMegaMenu])}
          onMouseEnter={handlePanelEnter}
          onMouseLeave={handlePanelLeave}
          onItemClick={handleMegaItemClick}
        />

      </div>

      {/* 4. Responsive Mobile Drawer with Accordion */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#faf8f5] border-t border-stone-200/80 shadow-2xl max-h-[80vh] overflow-y-auto px-6 py-6 text-left">
          <ul className="space-y-4">
            {navCategories.map((item) => {
              const megaData = MEGA_MENU_REGISTRY[item.slug];

              if (!megaData) {
                return (
                  <li key={item.slug} className="border-b border-stone-200/60 pb-3">
                    <button
                      type="button"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        if (item.slug === 'custom') {
                          navigateTo('custom');
                        } else if (item.slug === 'project') {
                          navigateTo('project');
                        } else if (item.mainGroup) {
                          navigateTo('shop', { mainGroup: item.mainGroup });
                        } else {
                          navigateTo('shop', { category: item.slug });
                        }
                      }}
                      className="text-stone-800 hover:text-[#5c0612] text-xs tracking-[0.2em] font-medium uppercase block w-full text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                );
              }

              // Accordion for items with mega menu data (e.g. CARPET, PRAYER MAT)
              const isAccordionOpen = Boolean(openMobileAccordion[item.slug]);

              return (
                <li key={item.slug} className="border-b border-stone-200/60 pb-3">
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        if (item.mainGroup) {
                          navigateTo('shop', { mainGroup: item.mainGroup });
                        } else {
                          navigateTo('shop', { category: item.slug });
                        }
                      }}
                      className="text-stone-800 hover:text-[#5c0612] text-xs tracking-[0.2em] font-semibold uppercase py-1 text-left flex-1"
                    >
                      <span>{item.name}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleMobileAccordion(item.slug)}
                      className="p-1 text-stone-500 hover:text-stone-800"
                      aria-label={`Toggle ${item.name} sub-menu`}
                    >
                      <svg 
                        className={`w-4 h-4 text-stone-500 transition-transform duration-200 ${
                          isAccordionOpen ? 'rotate-180' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {/* Sub-groups Accordion */}
                  {isAccordionOpen && (
                    <div className="mt-3 pl-2 space-y-3 pt-2 border-t border-stone-200/50">
                      {megaData.groups.map((group) => {
                        const isGroupOpen = Boolean(openMobileSubGroup[group.title]);

                        return (
                          <div key={group.title} className="border-b border-stone-200/40 pb-2">
                            <button
                              type="button"
                              onClick={() => toggleMobileSubGroup(group.title)}
                              className="w-full flex items-center justify-between text-stone-900 font-serif text-[13px] py-1 text-left"
                            >
                              <span>{group.title}</span>
                              <span className="text-stone-400 text-xs font-mono">
                                {isGroupOpen ? '−' : '+'}
                              </span>
                            </button>

                            {isGroupOpen && (
                              <ul className="pl-3 py-2 space-y-2">
                                {group.items.map((subItem, sIdx) => {
                                  const isColor = group.isColorGroup && typeof subItem === 'object';
                                  const label = isColor ? subItem.name : subItem;

                                  return (
                                    <li key={sIdx}>
                                      <button
                                        type="button"
                                        onClick={() => handleMegaItemClick(label, group.title, item.slug)}
                                        className="flex items-center text-xs text-stone-600 hover:text-[#5c0612] font-light py-0.5 text-left w-full"
                                      >
                                        {isColor && (
                                          <span
                                            className="w-2.5 h-2.5 rounded-full mr-2 shrink-0 border border-stone-300"
                                            style={{
                                              background: subItem.swatch,
                                              borderColor: subItem.border || 'rgba(0,0,0,0.1)',
                                            }}
                                          />
                                        )}
                                        <span>{label}</span>
                                      </button>
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}