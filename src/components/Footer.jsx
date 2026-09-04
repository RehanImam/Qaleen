import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#2c221e] text-[#faf7f2] border-t border-stone-800">
      {/* Rich Footer Content Above Copyright */}
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16 pt-16 sm:pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand Info */}
          <div className="md:col-span-5 lg:col-span-4 text-left space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl text-white tracking-tight font-normal">
              Qaleen Bhaiya
            </h3>
            <p className="font-serif text-sm sm:text-base text-stone-300 font-light leading-relaxed max-w-sm">
              Rugs for rooms with personality.
            </p>
            <p className="font-sans text-xs text-stone-400 font-light leading-relaxed max-w-sm pt-2">
              Heirloom rugs, carpets, and prayer mats hand-tufted by master artisans across India. Crafted to ground spaces with timeless warmth.
            </p>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 text-left">
            
            {/* SHOP Column */}
            <div className="space-y-4">
              <h4 className="text-xs font-sans font-medium tracking-[0.2em] text-[#b89047] uppercase">
                SHOP
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm font-sans font-light text-stone-300">
                <li><a href="#all-rugs" className="hover:text-white transition-colors">All Rugs</a></li>
                <li><a href="#carpet" className="hover:text-white transition-colors">Carpet</a></li>
                <li><a href="#prayer-mat" className="hover:text-white transition-colors">Prayer Mat</a></li>
                <li><a href="#door-mat" className="hover:text-white transition-colors">Door Mat</a></li>
                <li><a href="#artwork" className="hover:text-white transition-colors">Artwork</a></li>
              </ul>
            </div>

            {/* HELP Column */}
            <div className="space-y-4">
              <h4 className="text-xs font-sans font-medium tracking-[0.2em] text-[#b89047] uppercase">
                HELP
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm font-sans font-light text-stone-300">
                <li><a href="#shipping" className="hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#returns" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#faqs" className="hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>

            {/* FOLLOW Column */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h4 className="text-xs font-sans font-medium tracking-[0.2em] text-[#b89047] uppercase">
                FOLLOW
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm font-sans font-light text-stone-300">
                <li>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Instagram</span>
                    <span className="text-[10px] text-stone-500">↗</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://pinterest.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Pinterest</span>
                    <span className="text-[10px] text-stone-500">↗</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Facebook</span>
                    <span className="text-[10px] text-stone-500">↗</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider above existing copyright line */}
        <div className="w-full border-t border-stone-800 mt-12 sm:mt-16 pt-8 text-center text-xs text-stone-400">
          <p>© 2026 Qaleen Bhaiya. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;