
// import { useState } from 'react';
// import Navbar from './components/Navbar';

// import { PRODUCTS } from './data/products';
// import Categories from './components/Categories';
// import ShopView from './components/ShopView';
// import ProductDetail from './components/ProductDetail';
// import CartDrawer from './components/CartDrawer';
// import Footer from './components/Footer';
// import Breadcrumb from './components/Breadcrumb';

// export default function App() {
//   const [currentPage, setCurrentPage] = useState('home');
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState('4x6');
//   const [cart, setCart] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const [filters, setFilters] = useState({
//     mainGroup: '',
//     category: '',
//     maxPrice: 50000,
//     size: '',
//     country: '',
//     color: ''
//   });

//   const navigateTo = (page, params = {}) => {
//     setCurrentPage(page);
//     if (params.mainGroup) {
//       setFilters((prev) => ({ ...prev, mainGroup: params.mainGroup, category: '' }));
//     } else if (params.category) {
//       setFilters((prev) => ({ ...prev, category: params.category }));
//     }
//     if (params.product) {
//       setSelectedProduct(params.product);
//       setSelectedSize(params.product.sizes[0] || '4x6');
//     }
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const addToCart = (product, size) => {
//     const itemToAdd = { ...product, selectedSize: size };
//     setCart((prev) => [...prev, itemToAdd]);
//     setIsCartOpen(true);
//   };

//   // Filter products logic
//   const filteredProducts = PRODUCTS.filter((p) => {
//     if (filters.mainGroup && p.mainGroup !== filters.mainGroup) return false;
//     if (filters.category && p.category !== filters.category) return false;
//     if (p.price > filters.maxPrice) return false;
//     if (filters.size && !p.sizes.includes(filters.size)) return false;
//     if (filters.country && p.country !== filters.country) return false;
//     if (filters.color && p.color !== filters.color) return false;
//     return true;
//   });

//   return (
//     <div className="min-h-screen bg-white font-sans text-stone-800 flex flex-col relative">

//       {/* Header Navbar */}
//       <Navbar
//         cartCount={cart.length} 
//         onOpenCart={() => setIsCartOpen(true)} 
//         navigateTo={navigateTo} 
//       />

//       {/* Main Content Area */}
//       <main className="flex-1 w-full bg-white">

//         {/* HOME PAGE */}
//         {currentPage === 'home' && (
//           <div className="bg-white">
//             {/* HERO BANNER - Full Top-to-Bottom Bleed Coverage */}
//             <section className="relative w-full h-screen flex items-center justify-start overflow-hidden bg-stone-900 text-white">

//               {/* Image starting directly from the top */}
//               <div className="absolute inset-0 z-0">
//                 <img 
//                   src="https://d3o59fu9acgbkr.cloudfront.net/jrc2021/home/master/2026/8/3/jrc-desktop-banner-8-3-2026-3-56-49-PM.jpg" 
//                   alt="Qaleen Bhaiya Background" 
//                   className="w-full h-full object-cover object-center"
//                 />
//                 <div className="absolute inset-0 bg-black/25" />
//               </div>

//               {/* Slider Left Arrow */}
//               <button 
//                 className="absolute left-6 z-20 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-black flex items-center justify-center transition-all shadow-md"
//                 aria-label="Previous Slide"
//               >
//                 <svg className="w-5 h-5 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>

//               {/* Slider Right Arrow */}
//               <button 
//                 className="absolute right-6 z-20 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-black flex items-center justify-center transition-all shadow-md"
//                 aria-label="Next Slide"
//               >
//                 <svg className="w-5 h-5 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>

//               {/* Hero Overlay Text */}
//               <div className="relative z-10 w-full px-10 md:px-16 pt-32">
//                 <div className="max-w-xl space-y-4">
//                   <p className="text-sm font-light tracking-wide text-stone-200">
//                     Your patio, monsoon ready
//                   </p>

//                   <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-normal tracking-[0.08em] uppercase text-white leading-tight">
//                     OUTDOOR RUGS
//                   </h1>

//                   <div className="pt-2">
//                     <button 
//                       onClick={() => navigateTo('shop')}
//                       className="bg-white text-stone-900 px-7 py-2.5 text-xs font-semibold tracking-wider uppercase hover:bg-stone-100 transition-colors shadow-sm"
//                     >
//                       SHOP NOW
//                     </button>
//                   </div>
//                 </div>
//               </div>

//             </section>

//             <Categories navigateTo={navigateTo}/>
//           </div>
//         )}

//         {/* SHOP PAGE */}
//         {currentPage === 'shop' && (
//           <div className="pt-44 bg-white">
//             <Breadcrumb
//               currentPage={currentPage} 
//               selectedProduct={selectedProduct} 
//               navigateTo={navigateTo} 
//             />
//             <ShopView
//               filters={filters} 
//               setFilters={setFilters} 
//               filteredProducts={filteredProducts} 
//               navigateTo={navigateTo} 
//             />
//           </div>
//         )}

//         {/* PRODUCT DETAIL PAGE */}
//         {currentPage === 'productDetail' && selectedProduct && (
//           <div className="pt-44 bg-white">
//             <Breadcrumb
//               currentPage={currentPage} 
//               selectedProduct={selectedProduct} 
//               navigateTo={navigateTo} 
//             />
//             <ProductDetail
//               product={selectedProduct} 
//               selectedSize={selectedSize} 
//               setSelectedSize={setSelectedSize} 
//               addToCart={addToCart}
//             />
//           </div>
//         )}

//       </main>

//       {/* CART DRAWER */}
//       <CartDrawer
//         isOpen={isCartOpen} 
//         onClose={() => setIsCartOpen(false)} 
//         cart={cart} 
//       />

//       <Footer/>
//     </div>
//   );
// }

import { useState } from 'react';
import Navbar from './components/Navbar';
import { PRODUCTS } from './data/products';
import Categories from './components/Categories';
import LifestyleBanner from './components/LifestyleBanner';
import Bestsellers from './components/Bestsellers';
import ValueProps from './components/ValueProps';
import InstagramFeed from './components/InstagramFeed';
import NewsletterBand from './components/NewsletterBand';
import ShopView from './components/ShopView';
import ProductDetail from './components/ProductDetail';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import Breadcrumb from './components/Breadcrumb';
import CustomPage from './components/CustomPage';
import ProjectPage from './components/ProjectPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('4x6');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [filters, setFilters] = useState({
    mainGroup: '',
    category: '',
    maxPrice: 50000,
    size: '',
    country: '',
    color: ''
  });

  const navigateTo = (page, params = {}) => {
    setCurrentPage(page);
    if (params.mainGroup) {
      setFilters((prev) => ({ ...prev, mainGroup: params.mainGroup, category: '' }));
    } else if (params.category) {
      setFilters((prev) => ({ ...prev, category: params.category }));
    }
    if (params.product) {
      setSelectedProduct(params.product);
      setSelectedSize(params.product.sizes ? params.product.sizes[0] : '4x6');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (product, size) => {
    const itemToAdd = { ...product, selectedSize: size };
    setCart((prev) => [...prev, itemToAdd]);
    setIsCartOpen(true);
  };

  const filteredProducts = PRODUCTS.filter((p) => {
    if (filters.mainGroup && p.mainGroup.toLowerCase() !== filters.mainGroup.toLowerCase()) return false;
    if (filters.category && !p.category.toLowerCase().includes(filters.category.toLowerCase()) && !p.title.toLowerCase().includes(filters.category.toLowerCase())) return false;
    if (filters.subCategory && !p.title.toLowerCase().includes(filters.subCategory.toLowerCase()) && !p.category.toLowerCase().includes(filters.subCategory.toLowerCase())) return false;
    if (p.price > filters.maxPrice) return false;
    if (filters.size && !p.sizes.includes(filters.size) && !p.sizes.some(s => s.toLowerCase().includes(filters.size.toLowerCase()))) return false;
    if (filters.country && !p.country.toLowerCase().includes(filters.country.toLowerCase())) return false;
    if (filters.color && !p.color.toLowerCase().includes(filters.color.toLowerCase())) return false;
    if (filters.search && !p.title.toLowerCase().includes(filters.search.toLowerCase()) && !p.category.toLowerCase().includes(filters.search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#faf8f5] font-sans text-stone-800 flex flex-col relative">

      {/* Header Navbar */}
      <Navbar
        currentPage={currentPage}
        cartCount={cart.length}
        onOpenCart={() => setIsCartOpen(true)}
        navigateTo={navigateTo}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full bg-[#faf8f5]">

        {/* HOME PAGE */}
        {currentPage === 'home' && (
          <div className="bg-[#faf8f5]">
            {/* HERO BANNER */}
            <section className="relative w-full h-screen flex items-center justify-start overflow-hidden bg-stone-900 text-white">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://d3o59fu9acgbkr.cloudfront.net/jrc2021/home/master/2026/8/3/jrc-desktop-banner-8-3-2026-3-56-49-PM.jpg"
                  alt="Qaleen Bhaiya Background"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/25" />
              </div>

              <button
                className="absolute left-6 z-20 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-black flex items-center justify-center transition-all shadow-md"
                aria-label="Previous Slide"
              >
                <svg className="w-5 h-5 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                className="absolute right-6 z-20 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-black flex items-center justify-center transition-all shadow-md"
                aria-label="Next Slide"
              >
                <svg className="w-5 h-5 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="relative z-10 w-full px-10 md:px-16 pt-32">
                <div className="max-w-xl space-y-4">
                  <p className="text-sm font-light tracking-wide text-stone-200">
                    Your patio, monsoon ready
                  </p>
                  <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-normal tracking-[0.08em] uppercase text-white leading-tight">
                    OUTDOOR RUGS
                  </h1>
                  <div className="pt-2">
                    <button
                      onClick={() => navigateTo('shop')}
                      className="bg-white text-stone-900 px-7 py-2.5 text-xs font-semibold tracking-wider uppercase hover:bg-stone-100 transition-colors shadow-sm"
                    >
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Categories */}
            <Categories navigateTo={navigateTo} />

            {/* ➕ BANNER 1 — Lifestyle inspiration banner */}
            <LifestyleBanner navigateTo={navigateTo} />

            {/* Bestsellers */}
            <Bestsellers navigateTo={navigateTo} />

            {/* ➕ SECTION — "Why Qaleen Bhaiya" value props */}
            <ValueProps />

            {/* ➕ SECTION — "Seen on Instagram" social feed */}
            <InstagramFeed />

            {/* ➕ BANNER 2 — Newsletter / CTA band */}
            <NewsletterBand />
          </div>
        )}

        {/* CUSTOM BESPOKE SERVICES PAGE */}
        {currentPage === 'custom' && (
          <div className="bg-[#faf8f5]">
            <Breadcrumb
              currentPage={currentPage}
              selectedProduct={selectedProduct}
              navigateTo={navigateTo}
            />
            <CustomPage navigateTo={navigateTo} />
          </div>
        )}

        {/* PROJECT PORTFOLIO PAGE */}
        {currentPage === 'project' && (
          <div className="bg-[#faf8f5]">
            <Breadcrumb
              currentPage={currentPage}
              selectedProduct={selectedProduct}
              navigateTo={navigateTo}
            />
            <ProjectPage navigateTo={navigateTo} />
          </div>
        )}

        {/* SHOP PAGE */}
        {currentPage === 'shop' && (
          <div className="bg-[#faf8f5]">
            <Breadcrumb
              currentPage={currentPage}
              selectedProduct={selectedProduct}
              navigateTo={navigateTo}
            />
            <ShopView
              filters={filters}
              setFilters={setFilters}
              filteredProducts={filteredProducts}
              navigateTo={navigateTo}
            />
          </div>
        )}

        {/* PRODUCT DETAIL PAGE */}
        {currentPage === 'productDetail' && selectedProduct && (
          <div className="bg-[#faf8f5]">
            <Breadcrumb
              currentPage={currentPage}
              selectedProduct={selectedProduct}
              navigateTo={navigateTo}
            />
            <ProductDetail
              product={selectedProduct}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              addToCart={addToCart}
            />
          </div>
        )}

      </main>

      {/* CART DRAWER */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
      />

      <Footer navigateTo={navigateTo} />
    </div>
  );
}