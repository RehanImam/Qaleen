import React, { useEffect } from 'react';
import Bestsellers from './Bestsellers';

export default function BlogArticle({ article, navigateTo, onBack }) {
  // Scroll to top when article mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) return null;

  return (
    <div className="w-full bg-[#F7F2E7] min-h-screen pb-24">
      {/* Navigation Bar */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <button 
          onClick={onBack}
          className="group flex items-center text-xs tracking-widest text-[#6E1423] font-sans hover:text-[#8B1A2C] transition-colors uppercase"
        >
          <svg className="w-4 h-4 mr-2 transform transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to Blog
        </button>
      </div>

      {/* Hero Header */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-12">
        <div className="flex items-center justify-center gap-4 text-xs tracking-widest text-gray-500 font-sans uppercase mb-6">
          <span className="text-[#d4af37]">{article.categoryLabel}</span>
          <span>•</span>
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#6E1423] leading-tight mb-8">
          {article.title}
        </h1>
      </div>

      {/* Full Width Hero Image */}
      <div className="w-full max-w-6xl mx-auto px-0 sm:px-6 mb-16">
        <div className="aspect-[21/9] md:aspect-[16/9] w-full overflow-hidden sm:rounded-sm">
          <img 
            src={article.heroImage} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-[700px] mx-auto px-6 font-sans text-gray-800 text-lg leading-[1.7] space-y-8">
        {article.content.map((block, index) => {
          if (block.type === 'paragraph') {
            return (
              <p key={index}>
                {block.text}
              </p>
            );
          }
          
          if (block.type === 'heading') {
            return (
              <h2 key={index} className="font-serif text-3xl text-[#6E1423] mt-16 mb-6">
                {block.text}
              </h2>
            );
          }
          
          if (block.type === 'quote') {
            return (
              <blockquote key={index} className="border-l-2 border-[#d4af37] pl-8 py-2 my-12">
                <p className="font-serif italic text-2xl text-[#d4af37] leading-relaxed">
                  "{block.text}"
                </p>
              </blockquote>
            );
          }
          
          return null;
        })}

        {/* WhatsApp CTA */}
        <div className="mt-20 pt-12 border-t border-[#6E1423]/20 text-center">
          <h3 className="font-serif text-2xl text-[#6E1423] mb-4">
            Need Expert Advice for Your Space?
          </h3>
          <p className="text-base text-gray-600 mb-6">
            Share photos of your room with our design team for personalized carpet recommendations.
          </p>
          <button 
            onClick={() => navigateTo('custom')}
            className="inline-block bg-green-600 text-white font-sans text-xs tracking-widest px-8 py-4 rounded-full uppercase hover:bg-green-700 transition-colors"
          >
            Chat with us on WhatsApp
          </button>
        </div>
      </div>

      {/* Shop the Look */}
      <div className="mt-24 bg-white border-t border-[#6E1423]/10">
        <div className="max-w-7xl mx-auto pt-8">
          <div className="text-center mb-[-40px]">
             <h3 className="font-serif text-3xl text-[#6E1423]">Shop the Look</h3>
          </div>
          <Bestsellers navigateTo={navigateTo} />
        </div>
      </div>

    </div>
  );
}
