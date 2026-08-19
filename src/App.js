// import  { useState } from 'react';
// import Navbar from './components/Navbar';
// import FilterSidebar from './components/FilterSidebar';
// import { PRODUCTS, MAIN_GROUPS } from './data/products';
// import Categories from './components/Categories';
// import ShopView from './components/ShopView';
// import ProductDetail from './components/ProductDetail';
// import CartDrawer from './components/CartDrawer';
// import Footer from './components/Footer';
// import Breadcrumb from './components/Breadcrumb';

// export default function App() {
//   const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'shop' | 'productDetail'
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

//   const generateWhatsAppMessage = () => {
//     const phoneNumber = "9905763301";
//     let message = "Hello Qaleen Bhaiya, I want to order the following items:\n\n";
//     let total = 0;

//     cart.forEach((item, index) => {
//       message += `${index + 1}. ${item.title}\n   Size: ${item.selectedSize}\n   Price: Rs. ${item.price.toLocaleString()}\n\n`;
//       total += item.price;
//     });

//     message += `Total Amount: Rs. ${total.toLocaleString()}`;
//     return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
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
//     <div className="min-h-screen bg-[#faf7f2] font-sans text-stone-800 flex flex-col">
//       <Navbar
//         cartCount={cart.length} 
//         onOpenCart={() => setIsCartOpen(true)} 
//         navigateTo={navigateTo} 
//       />

//       {/* Navigation Breadcrumb */}
//       <Breadcrumb
//         currentPage={currentPage} 
//         selectedProduct={selectedProduct} 
//         navigateTo={navigateTo} 
//       />

//       {/* Main Content Areas */}
//       <main className="flex-1">
        
//         {/* HOME PAGE */}
//         {currentPage === 'home' && (
//           <div>
//             {/* Hero Banner */}
//             <section className="relative bg-[#faf7f2] py-16 px-6 lg:px-12 flex flex-col md:flex-row items-center border-b border-stone-200">
//               <div className="md:w-1/2 space-y-6">
//                 <span className="text-xs uppercase tracking-widest text-[#5c0612] font-semibold">
//                   The Qaleen Edit • 2026
//                 </span>
//                 <h1 className="font-serif text-4xl sm:text-6xl text-[#2c221e] leading-tight">
//                   Make room for <br /><span className="italic font-light">beautiful.</span>
//                 </h1>
//                 <p className="text-stone-600 text-sm max-w-md">
//                   Statement rugs, quiet corners and everything in between. Designed to make ordinary rooms feel a little more like you.
//                 </p>
//                 <button 
//                   onClick={() => navigateTo('shop')}
//                   className="bg-[#5c0612] text-white px-8 py-3 uppercase text-xs tracking-widest hover:bg-[#42040d] transition-all shadow-md"
//                 >
//                   Shop The Collection →
//                 </button>
//               </div>
//               <div className="md:w-1/2 mt-8 md:mt-0">
//                 <img 
//                   src="https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=1200&q=85" 
//                   alt="Qaleen Collection" 
//                   className="rounded-lg shadow-xl object-cover w-full h-[400px]"
//                 />
//               </div>
//             </section>

//             {/* 4 Main Categories Showcase */}
//            <Categories navigateTo={navigateTo}/>
//           </div>
//         )}

//         {/* SHOP PAGE */}
//         {currentPage === 'shop' && (
//           <ShopView
//             filters={filters} 
//             setFilters={setFilters} 
//             filteredProducts={filteredProducts} 
//             navigateTo={navigateTo} 
//           />
//         )}

//         {/* PRODUCT DETAIL PAGE */}
//         {currentPage === 'productDetail' && selectedProduct && (
//           <ProductDetail
//             product={selectedProduct} 
//             selectedSize={selectedSize} 
//             setSelectedSize={setSelectedSize} 
//             addToCart={addToCart}
          
//           />
       
//         )}

//       </main>

//       {/* WHATSAPP CART DRAWER */}
//       <CartDrawer
//         isOpen={isCartOpen} 
//         onClose={() => setIsCartOpen(false)} 
//         cart={cart} 
//       />

//       {/* Footer */}
//      <Footer/>
//     </div>
//   );
// }


import { useState } from 'react';
import Navbar from './components/Navbar';
import FilterSidebar from './components/FilterSidebar';
import { PRODUCTS, MAIN_GROUPS } from './data/products';
import Categories from './components/Categories';
import ShopView from './components/ShopView';
import ProductDetail from './components/ProductDetail';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import Breadcrumb from './components/Breadcrumb';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'shop' | 'productDetail'
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
      setSelectedSize(params.product.sizes[0] || '4x6');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (product, size) => {
    const itemToAdd = { ...product, selectedSize: size };
    setCart((prev) => [...prev, itemToAdd]);
    setIsCartOpen(true);
  };

  const generateWhatsAppMessage = () => {
    const phoneNumber = "9905763301";
    let message = "Hello Qaleen Bhaiya, I want to order the following items:\n\n";
    let total = 0;

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.title}\n   Size: ${item.selectedSize}\n   Price: Rs. ${item.price.toLocaleString()}\n\n`;
      total += item.price;
    });

    message += `Total Amount: Rs. ${total.toLocaleString()}`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  // Filter products logic
  const filteredProducts = PRODUCTS.filter((p) => {
    if (filters.mainGroup && p.mainGroup !== filters.mainGroup) return false;
    if (filters.category && p.category !== filters.category) return false;
    if (p.price > filters.maxPrice) return false;
    if (filters.size && !p.sizes.includes(filters.size)) return false;
    if (filters.country && p.country !== filters.country) return false;
    if (filters.color && p.color !== filters.color) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#faf7f2] font-sans text-stone-800 flex flex-col">
      <Navbar
        cartCount={cart.length} 
        onOpenCart={() => setIsCartOpen(true)} 
        navigateTo={navigateTo} 
      />

      {/* Navigation Breadcrumb */}
      <Breadcrumb
        currentPage={currentPage} 
        selectedProduct={selectedProduct} 
        navigateTo={navigateTo} 
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        
        {/* HOME PAGE */}
        {currentPage === 'home' && (
          <div>
            {/* HERO BANNER - Exact Design Matching Mobile & Laptop Screenshots */}
            <section className="relative w-full min-h-[85vh] md:min-h-[90vh] flex items-center justify-start overflow-hidden bg-stone-900 text-white">
              {/* Background Image with Dark Gradient Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=2000&q=90" 
                  alt="Qaleen Hero Background" 
                  className="w-full h-full object-cover object-center"
                />
                {/* Vignette & Contrast Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30 md:from-black/85 md:via-black/40 md:to-transparent" />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Text Content Overlay */}
              <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 md:py-20 flex flex-col justify-center">
                <div className="max-w-xl space-y-5 sm:space-y-6">
                  {/* Category Tagline */}
                  <span className="block text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-stone-300">
                    THE QALEEN EDIT • 2026
                  </span>

                  {/* Headline */}
                  <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.08] tracking-tight text-white drop-shadow-sm">
                    Make room <br />
                    <span className="italic font-light">for beautiful.</span>
                  </h1>

                  {/* Subtext */}
                  <p className="text-stone-300 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-md">
                    Statement rugs, quiet corners and everything in between. Designed to make ordinary rooms feel a little more like you.
                  </p>

                  {/* Action Button */}
                  <div className="pt-2">
                    <button 
                      onClick={() => navigateTo('shop')}
                      className="group inline-flex items-center gap-4 bg-[#f5f0eb] text-stone-900 px-6 sm:px-8 py-3.5 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-white transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
                    >
                      <span>SHOP THE COLLECTION</span>
                      <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">↗</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Desktop Only: Scroll Indicator (As seen in Screenshot 2) */}
              <div className="hidden md:flex absolute bottom-8 right-12 z-10 items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-stone-300/80 font-medium">
                <span>SCROLL TO EXPLORE</span>
                <span className="animate-bounce">↓</span>
              </div>
            </section>

            {/* 4 Main Categories Showcase */}
            <Categories navigateTo={navigateTo}/>
          </div>
        )}

        {/* SHOP PAGE */}
        {currentPage === 'shop' && (
          <ShopView
            filters={filters} 
            setFilters={setFilters} 
            filteredProducts={filteredProducts} 
            navigateTo={navigateTo} 
          />
        )}

        {/* PRODUCT DETAIL PAGE */}
        {currentPage === 'productDetail' && selectedProduct && (
          <ProductDetail
            product={selectedProduct} 
            selectedSize={selectedSize} 
            setSelectedSize={setSelectedSize} 
            addToCart={addToCart}
          />
        )}

      </main>

      {/* WHATSAPP CART DRAWER */}
      <CartDrawer
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart} 
      />

      {/* Footer */}
      <Footer/>
    </div>
  );
}