import React from 'react';

export default function Footer({ navigateTo }) {
  return (
    <footer className="bg-[#2c221e] text-[#faf7f2] border-t border-stone-800">
      {/* Trust / Assurance Strip */}
      <div className="border-b border-stone-800">
        <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: 'Handcrafted in India', sub: 'Hand-tufted by master artisans', d: 'M12 3l2.09 4.26L19 8l-3.5 3.4.83 4.85L12 14.9l-4.33 2.35L8.5 11.4 5 8l4.91-.74L12 3z' },
            { title: 'Free Shipping', sub: 'On all orders over ₹1,999', d: 'M3 7h11v8H3V7zm11 3h4l3 3v2h-7v-5zM7 19a2 2 0 100-4 2 2 0 000 4zm11 0a2 2 0 100-4 2 2 0 000 4z' },
            { title: 'Easy 7-Day Returns', sub: 'Hassle-free & fully insured', d: 'M3 12a9 9 0 109-9 9 9 0 00-6.36 2.64M3 4v5h5' },
            { title: 'Secure Checkout', sub: 'Encrypted, protected payments', d: 'M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3zM9.5 12l1.8 1.8L15 10' },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <svg className="w-5 h-5 shrink-0 mt-0.5 text-[#b89047] stroke-[1.4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={item.d} />
              </svg>
              <div>
                <p className="text-xs sm:text-sm font-sans font-medium text-white">{item.title}</p>
                <p className="text-[11px] sm:text-xs font-sans font-light text-stone-400 mt-0.5">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

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
            <div className="pt-4 space-y-1.5 font-sans text-xs text-stone-400 font-light">
              <p>Bhadohi, Uttar Pradesh, India</p>
              <p><a href="mailto:hello@qaleenbhaiya.com" className="hover:text-white transition-colors">hello@qaleenbhaiya.com</a></p>
              <p><a href="tel:+919905763301" className="hover:text-white transition-colors">+91 99057 63301</a></p>
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 text-left">
            
            {/* SHOP Column */}
            <div className="space-y-4">
              <h4 className="text-xs font-sans font-medium tracking-[0.2em] text-[#b89047] uppercase">
                SHOP
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm font-sans font-light text-stone-300">
                <li><button type="button" onClick={() => navigateTo && navigateTo('shop')} className="hover:text-white transition-colors text-left">All Rugs</button></li>
                <li><button type="button" onClick={() => navigateTo && navigateTo('shop', { mainGroup: 'Carpet' })} className="hover:text-white transition-colors text-left">Carpet</button></li>
                <li><button type="button" onClick={() => navigateTo && navigateTo('shop', { mainGroup: 'Prayer Mat' })} className="hover:text-white transition-colors text-left">Prayer Mat</button></li>
                <li><button type="button" onClick={() => navigateTo && navigateTo('custom')} className="text-[#e2b86b] hover:text-white font-medium transition-colors text-left flex items-center gap-1.5"><span>Bespoke & Custom</span><span className="text-[10px] bg-[#5c0612] px-1.5 py-0.5 rounded text-white tracking-wider">NEW</span></button></li>
                <li><button type="button" onClick={() => navigateTo && navigateTo('project')} className="hover:text-white transition-colors text-left">Projects</button></li>
                <li><button type="button" onClick={() => navigateTo && navigateTo('shop', { mainGroup: 'Artwork' })} className="hover:text-white transition-colors text-left">Artwork</button></li>
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

        {/* Divider above copyright + legal links */}
        <div className="w-full border-t border-stone-800 mt-12 sm:mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© 2026 Qaleen Bhaiya. All Rights Reserved.</p>
          <div className="flex items-center gap-5 font-light">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}