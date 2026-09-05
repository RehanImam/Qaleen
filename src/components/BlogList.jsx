import React, { useState, useEffect } from 'react';
import { BLOG_POSTS } from '../data/blogPosts';

const CATEGORIES = [
  { id: 'all', label: 'ALL POSTS' },
  { id: 'buying-guides', label: 'BUYING GUIDES' },
  { id: 'care-and-maintenance', label: 'CARE & MAINTENANCE' },
  { id: 'styling-and-design', label: 'STYLING & DESIGN' },
  { id: 'history-and-craftsmanship', label: 'HISTORY & CRAFTSMANSHIP' }
];

export default function BlogList({ currentCategory, onCategorySelect, onArticleClick, navigateTo }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Scroll to top on mount or category change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentCategory]);

  const activeCategory = currentCategory || 'all';

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const gridPosts = filteredPosts.length > 0 ? filteredPosts.slice(1) : [];

  return (
    <div className="w-full bg-[#F7F2E7] min-h-screen">
      {/* HEADER SECTION */}
      <div className="pt-24 pb-12 px-6 md:px-12 text-center">
        <p className="text-xs tracking-widest text-[#6E1423] font-sans mb-3 uppercase">
          READ & LEARN
        </p>
        <h1 className="text-4xl md:text-5xl font-serif text-[#6E1423] mb-4">
          The <span className="italic text-[#d4af37]">Qaleen</span> Journal
        </h1>
        <p className="text-sm md:text-base text-gray-700 font-sans max-w-2xl mx-auto">
          Design inspiration, care guides, and the stories behind our handcrafted carpets.
        </p>
      </div>

      {/* CATEGORY SELECTOR (Sticky) */}
      <div className="sticky top-[72px] z-30 bg-[#F7F2E7]/90 backdrop-blur-md border-b border-[#6E1423]/10 py-4 mb-8">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-2 overflow-x-auto no-scrollbar">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => onCategorySelect(cat.id === 'all' ? null : cat.id)}
              className={`px-5 py-2 rounded-full text-xs tracking-widest whitespace-nowrap transition-colors border ${
                activeCategory === cat.id
                  ? 'bg-[#6E1423] text-[#F7F2E7] border-[#6E1423]'
                  : 'bg-transparent text-[#6E1423] border-[#6E1423] hover:bg-[#6E1423]/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* HERO POST (If no search term) */}
        {!searchTerm && featuredPost && activeCategory === 'all' && (
          <div 
            className="mb-16 group cursor-pointer"
            onClick={() => onArticleClick(featuredPost.slug)}
          >
            <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden mb-6">
              <img 
                src={featuredPost.heroImage} 
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs tracking-widest text-[#d4af37] font-sans uppercase block mb-3">
                {featuredPost.categoryLabel}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#6E1423] mb-4 group-hover:text-[#8B1A2C] transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-gray-700 font-sans mb-6">
                {featuredPost.excerpt}
              </p>
              <button className="text-xs tracking-widest text-[#6E1423] border-b border-[#6E1423] pb-1 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors">
                READ MORE
              </button>
            </div>
          </div>
        )}

        {/* MAIN LAYOUT: Grid + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT: Grid of Articles */}
          <div className="lg:w-2/3">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-24">
                <p className="text-gray-500 font-sans">No articles found matching your criteria.</p>
                <button 
                  onClick={() => { setSearchTerm(''); onCategorySelect(null); }}
                  className="mt-4 text-[#6E1423] border-b border-[#6E1423] text-xs tracking-widest"
                >
                  CLEAR FILTERS
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {(activeCategory === 'all' && !searchTerm ? gridPosts : filteredPosts).map(post => (
                  <div 
                    key={post.id} 
                    className="group cursor-pointer flex flex-col"
                    onClick={() => onArticleClick(post.slug)}
                  >
                    <div className="aspect-[16/9] w-full overflow-hidden mb-4">
                      <img 
                        src={post.thumbnail} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <span className="text-xs tracking-widest text-[#d4af37] font-sans uppercase block mb-2">
                      {post.categoryLabel}
                    </span>
                    <h3 className="text-xl font-serif text-[#6E1423] mb-3 group-hover:text-[#8B1A2C] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-700 font-sans mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <span className="text-xs font-sans tracking-widest text-gray-400 mt-auto">
                      {post.readTime}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: Sidebar */}
          <div className="lg:w-1/3 space-y-12">
            
            {/* Search */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="SEARCH ARTICLES..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent border-b border-[#6E1423]/30 py-3 text-sm font-sans focus:outline-none focus:border-[#6E1423] placeholder-gray-400"
              />
              <svg className="w-4 h-4 absolute right-0 top-3 text-[#6E1423]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Trending Posts */}
            <div>
              <h4 className="text-sm tracking-widest font-sans text-[#6E1423] border-b border-[#6E1423]/10 pb-3 mb-6">
                TRENDING POSTS
              </h4>
              <div className="space-y-6">
                {BLOG_POSTS.slice(1, 4).map((post, idx) => (
                  <div 
                    key={idx} 
                    className="flex gap-4 cursor-pointer group"
                    onClick={() => onArticleClick(post.slug)}
                  >
                    <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
                      <img 
                        src={post.thumbnail} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] tracking-wider text-[#d4af37] font-sans block mb-1">
                        {post.categoryLabel}
                      </span>
                      <h5 className="text-sm font-serif text-[#6E1423] group-hover:text-[#8B1A2C] leading-snug">
                        {post.title}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Panel */}
            <div className="bg-[#EFE6D8] p-8 text-center border border-[#6E1423]/10">
              <h4 className="text-xl font-serif text-[#6E1423] mb-3">Join the List</h4>
              <p className="text-sm font-sans text-gray-700 mb-6">
                Receive our latest design guides, styling tips, and exclusive access to new arrivals.
              </p>
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-white border border-[#6E1423]/20 px-4 py-3 text-xs tracking-widest mb-4 focus:outline-none focus:border-[#6E1423]"
              />
              <button className="w-full bg-[#6E1423] text-white tracking-widest text-xs py-3 hover:bg-[#8B1A2C] transition-colors">
                SUBSCRIBE
              </button>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
