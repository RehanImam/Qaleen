// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import FilterSidebar from './components/FilterSidebar';
// import { PRODUCTS, CATEGORIES } from './data/products';

// export default function App() {
//   const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'shop' | 'productDetail'
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState('4x6');
//   const [cart, setCart] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const [filters, setFilters] = useState({
//     category: '',
//     maxPrice: 50000,
//     size: '',
//     country: '',
//     color: ''
//   });

//   const navigateTo = (page, params = {}) => {
//     setCurrentPage(page);
//     if (params.category) setFilters((prev) => ({ ...prev, category: params.category }));
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

//       {/* Navigation Breadcrumb / Link Indicator */}
//       <div className="bg-stone-100 border-b border-stone-200 py-2 px-4 sm:px-8 text-xs text-stone-500">
//         <span className="hover:underline cursor-pointer" onClick={() => navigateTo('home')}>Home</span>
//         {currentPage !== 'home' && (
//           <>
//             <span className="mx-2">/</span>
//             <span className="hover:underline cursor-pointer" onClick={() => navigateTo('shop')}>Shop Collections</span>
//           </>
//         )}
//         {currentPage === 'productDetail' && selectedProduct && (
//           <>
//             <span className="mx-2">/</span>
//             <span className="text-stone-800 font-medium">{selectedProduct.title}</span>
//           </>
//         )}
//       </div>

//       {/* Main Content Areas */}
//       <main className="flex-1">
        
//         {/* PAGE 1: HOME PAGE */}
//         {currentPage === 'home' && (
//           <div>
//             {/* Hero Banner Section */}
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
//                   src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1000&q=80" 
//                   alt="Qaleen Collection" 
//                   className="rounded-lg shadow-xl object-cover w-full h-[400px]"
//                 />
//               </div>
//             </section>

//             {/* Category Showcase Section */}
//             <section className="max-w-7xl mx-auto px-4 py-16">
//               <div className="text-center mb-10">
//                 <span className="text-xs uppercase tracking-widest text-[#5c0612] font-semibold">
//                   Made For Your Mood
//                 </span>
//                 <h2 className="font-serif text-3xl sm:text-4xl text-[#2c221e] mt-2">
//                   Rugs with a little <span className="italic">more personality.</span>
//                 </h2>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//                 {CATEGORIES.slice(0, 4).map((cat, idx) => (
//                   <div 
//                     key={idx} 
//                     onClick={() => navigateTo('shop', { category: cat })}
//                     className="group cursor-pointer bg-white rounded-lg overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all"
//                   >
//                     <img 
//                       src={PRODUCTS[idx % PRODUCTS.length].image} 
//                       alt={cat} 
//                       className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
//                     />
//                     <div className="p-4 flex justify-between items-center">
//                       <span className="font-serif text-sm font-semibold text-stone-800 uppercase tracking-wide">
//                         {cat}
//                       </span>
//                       <span>↗</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           </div>
//         )}

//         {/* PAGE 2: SHOP / COLLECTION LISTING PAGE */}
//         {currentPage === 'shop' && (
//           <div className="max-w-7xl mx-auto px-4 py-10">
//             <div className="flex flex-col md:flex-row gap-8">
              
//               {/* Left Side Filter */}
//               <FilterSidebar filters={filters} setFilters={setFilters} />

//               {/* Right Side Products Grid */}
//               <div className="flex-1">
//                 <div className="flex justify-between items-center mb-6 border-b border-stone-200 pb-4">
//                   <h2 className="font-serif text-2xl text-[#2c221e]">
//                     Carpet Collection ({filteredProducts.length})
//                   </h2>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {filteredProducts.map((product) => (
//                     <div 
//                       key={product.id}
//                       onClick={() => navigateTo('productDetail', { product })}
//                       className="bg-white border border-stone-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all group"
//                     >
//                       <div className="overflow-hidden h-64">
//                         <img 
//                           src={product.image} 
//                           alt={product.title} 
//                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                         />
//                       </div>
//                       <div className="p-4 space-y-2">
//                         <h3 className="font-serif font-semibold text-sm text-stone-900 group-hover:text-[#5c0612] transition-colors">
//                           {product.title}
//                         </h3>
//                         <div className="flex items-center gap-2">
//                           <span className="font-bold text-[#5c0612] text-sm">
//                             Rs. {product.price.toLocaleString()}
//                           </span>
//                           <span className="line-through text-stone-400 text-xs">
//                             Rs. {product.originalPrice.toLocaleString()}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//             </div>
//           </div>
//         )}

//         {/* PAGE 3: PRODUCT DETAIL PAGE */}
//         {currentPage === 'productDetail' && selectedProduct && (
//           <div className="max-w-6xl mx-auto px-4 py-12">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 sm:p-10 border border-stone-200 rounded-lg shadow-sm">
              
//               {/* Product Image */}
//               <div>
//                 <img 
//                   src={selectedProduct.image} 
//                   alt={selectedProduct.title} 
//                   className="w-full h-[450px] object-cover rounded-lg border border-stone-200"
//                 />
//               </div>

//               {/* Product Info & Size Selection */}
//               <div className="space-y-6">
//                 <div>
//                   <h1 className="font-serif text-3xl font-bold text-[#2c221e]">
//                     {selectedProduct.title}
//                   </h1>
//                   <div className="flex items-center gap-3 mt-3">
//                     <span className="text-2xl font-bold text-[#5c0612]">
//                       Rs. {selectedProduct.price.toLocaleString()}
//                     </span>
//                     <span className="line-through text-stone-400 text-sm">
//                       Rs. {selectedProduct.originalPrice.toLocaleString()}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Size Selector */}
//                 <div>
//                   <label className="block text-xs font-semibold uppercase text-stone-700 mb-2">
//                     Size: {selectedSize}
//                   </label>
//                   <div className="flex flex-wrap gap-2">
//                     {selectedProduct.sizes.map((sz) => (
//                       <button
//                         key={sz}
//                         onClick={() => setSelectedSize(sz)}
//                         className={`px-3 py-1.5 text-xs font-medium border rounded transition-all ${
//                           selectedSize === sz
//                             ? 'bg-[#5c0612] text-white border-[#5c0612]'
//                             : 'bg-white border-stone-300 text-stone-700 hover:border-stone-500'
//                         }`}
//                       >
//                         {sz}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Discount Banner */}
//                 <div className="bg-[#faf7f2] border border-amber-200 p-4 rounded-lg flex items-center justify-between">
//                   <div>
//                     <p className="text-xs font-medium text-stone-800">
//                       Offer Price: <span className="font-bold text-[#5c0612]">Rs. {(selectedProduct.price * 0.9).toFixed(0)}</span>
//                     </p>
//                     <p className="text-[10px] text-stone-500">Use code NEW10</p>
//                   </div>
//                   <span className="bg-[#5c0612] text-white text-[10px] px-2 py-1 uppercase font-bold rounded">
//                     10% OFF
//                   </span>
//                 </div>

//                 {/* Add to Cart Button */}
//                 <button
//                   onClick={() => addToCart(selectedProduct, selectedSize)}
//                   className="w-full py-4 bg-stone-900 text-white font-medium text-xs tracking-widest uppercase hover:bg-[#5c0612] transition-colors rounded shadow-lg"
//                 >
//                   ADD TO CART
//                 </button>
//               </div>

//             </div>
//           </div>
//         )}

//       </main>

//       {/* WHATSAPP CART DRAWER / OVERLAY */}
//       {isCartOpen && (
//         <div className="fixed inset-0 z-50 bg-black/50 flex justify-end">
//           <div className="bg-white w-full max-w-md h-full p-6 flex flex-col justify-between shadow-2xl">
//             <div>
//               <div className="flex justify-between items-center border-b pb-4">
//                 <h3 className="font-serif text-xl font-bold text-[#2c221e]">Shopping Bag</h3>
//                 <button onClick={() => setIsCartOpen(false)} className="text-xl font-bold">✕</button>
//               </div>

//               <div className="mt-4 space-y-4 max-h-[60vh] overflow-y-auto">
//                 {cart.length === 0 ? (
//                   <p className="text-center text-stone-500 py-10 text-sm">Your bag is empty.</p>
//                 ) : (
//                   cart.map((item, index) => (
//                     <div key={index} className="flex gap-4 border-b pb-3 items-center">
//                       <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
//                       <div className="flex-1 text-xs">
//                         <h4 className="font-semibold text-stone-800">{item.title}</h4>
//                         <p className="text-stone-500">Size: {item.selectedSize}</p>
//                         <p className="font-bold text-[#5c0612] mt-1">Rs. {item.price.toLocaleString()}</p>
//                       </div>
//                     </div>
//                   ))
//                 )}
//               </div>
//             </div>

//             {/* WhatsApp Order Action */}
//             {cart.length > 0 && (
//               <div className="border-t pt-4 space-y-3">
//                 <a
//                   href={generateWhatsAppMessage()}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-full bg-emerald-600 text-white py-3 rounded flex items-center justify-center gap-2 font-medium text-xs uppercase tracking-wider hover:bg-emerald-700 transition-colors shadow-md"
//                 >
//                   Order via WhatsApp (+91 9905763301)
//                 </a>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Footer */}
//       <footer className="bg-[#2c221e] text-[#faf7f2] py-8 text-center text-xs border-t border-stone-800">
//         <p>© 2026 Qaleen Bhaiya. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// }









// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import FilterSidebar from './components/FilterSidebar';
// import { PRODUCTS, CATEGORIES } from './data/products';

// export default function App() {
//   const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'shop' | 'productDetail'
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState('4x6');
//   const [cart, setCart] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const [filters, setFilters] = useState({
//     category: '',
//     maxPrice: 50000,
//     size: '',
//     country: '',
//     color: ''
//   });

//   const navigateTo = (page, params = {}) => {
//     setCurrentPage(page);
//     if (params.category) setFilters((prev) => ({ ...prev, category: params.category }));
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

//       {/* Navigation Breadcrumb / Link Indicator */}
//       <div className="bg-stone-100 border-b border-stone-200 py-2 px-4 sm:px-8 text-xs text-stone-500">
//         <span className="hover:underline cursor-pointer" onClick={() => navigateTo('home')}>Home</span>
//         {currentPage !== 'home' && (
//           <>
//             <span className="mx-2">/</span>
//             <span className="hover:underline cursor-pointer" onClick={() => navigateTo('shop')}>Shop Collections</span>
//           </>
//         )}
//         {currentPage === 'productDetail' && selectedProduct && (
//           <>
//             <span className="mx-2">/</span>
//             <span className="text-stone-800 font-medium">{selectedProduct.title}</span>
//           </>
//         )}
//       </div>

//       {/* Main Content Areas */}
//       <main className="flex-1">
        
//         {/* PAGE 1: HOME PAGE */}
//         {currentPage === 'home' && (
//           <div>
//             {/* Hero Banner Section */}
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
//                   src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1000&q=80" 
//                   alt="Qaleen Collection" 
//                   className="rounded-lg shadow-xl object-cover w-full h-[400px]"
//                 />
//               </div>
//             </section>

//             {/* Category Showcase Section */}
//             <section className="max-w-7xl mx-auto px-4 py-16">
//               <div className="text-center mb-10">
//                 <span className="text-xs uppercase tracking-widest text-[#5c0612] font-semibold">
//                   Made For Your Mood
//                 </span>
//                 <h2 className="font-serif text-3xl sm:text-4xl text-[#2c221e] mt-2">
//                   Rugs with a little <span className="italic">more personality.</span>
//                 </h2>
//               </div>

//               {/* Mobile me grid-cols-2 (ek row me 2 images) aur Desktop par md:grid-cols-4 */}
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
//                 {CATEGORIES.slice(0, 4).map((cat, idx) => (
//                   <div 
//                     key={idx} 
//                     onClick={() => navigateTo('shop', { category: cat })}
//                     className="group cursor-pointer bg-white rounded-lg overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col"
//                   >
//                     <img 
//                       src={PRODUCTS[idx % PRODUCTS.length].image} 
//                       alt={cat} 
//                       className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
//                     />
//                     <div className="p-3 sm:p-4 flex justify-between items-center mt-auto">
//                       <span className="font-serif text-xs sm:text-sm font-semibold text-stone-800 uppercase tracking-wide">
//                         {cat}
//                       </span>
//                       <span className="text-xs sm:text-base">↗</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           </div>
//         )}

//         {/* PAGE 2: SHOP / COLLECTION LISTING PAGE */}
//         {currentPage === 'shop' && (
//           <div className="max-w-7xl mx-auto px-4 py-10">
//             <div className="flex flex-col md:flex-row gap-8">
              
//               {/* Left Side Filter */}
//               <FilterSidebar filters={filters} setFilters={setFilters} />

//               {/* Right Side Products Grid */}
//               <div className="flex-1">
//                 <div className="flex justify-between items-center mb-6 border-b border-stone-200 pb-4">
//                   <h2 className="font-serif text-2xl text-[#2c221e]">
//                     Carpet Collection ({filteredProducts.length})
//                   </h2>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {filteredProducts.map((product) => (
//                     <div 
//                       key={product.id}
//                       onClick={() => navigateTo('productDetail', { product })}
//                       className="bg-white border border-stone-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all group"
//                     >
//                       <div className="overflow-hidden h-64">
//                         <img 
//                           src={product.image} 
//                           alt={product.title} 
//                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                         />
//                       </div>
//                       <div className="p-4 space-y-2">
//                         <h3 className="font-serif font-semibold text-sm text-stone-900 group-hover:text-[#5c0612] transition-colors">
//                           {product.title}
//                         </h3>
//                         <div className="flex items-center gap-2">
//                           <span className="font-bold text-[#5c0612] text-sm">
//                             Rs. {product.price.toLocaleString()}
//                           </span>
//                           <span className="line-through text-stone-400 text-xs">
//                             Rs. {product.originalPrice.toLocaleString()}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//             </div>
//           </div>
//         )}

//         {/* PAGE 3: PRODUCT DETAIL PAGE */}
//         {currentPage === 'productDetail' && selectedProduct && (
//           <div className="max-w-6xl mx-auto px-4 py-12">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 sm:p-10 border border-stone-200 rounded-lg shadow-sm">
              
//               {/* Product Image */}
//               <div>
//                 <img 
//                   src={selectedProduct.image} 
//                   alt={selectedProduct.title} 
//                   className="w-full h-[450px] object-cover rounded-lg border border-stone-200"
//                 />
//               </div>

//               {/* Product Info & Size Selection */}
//               <div className="space-y-6">
//                 <div>
//                   <h1 className="font-serif text-3xl font-bold text-[#2c221e]">
//                     {selectedProduct.title}
//                   </h1>
//                   <div className="flex items-center gap-3 mt-3">
//                     <span className="text-2xl font-bold text-[#5c0612]">
//                       Rs. {selectedProduct.price.toLocaleString()}
//                     </span>
//                     <span className="line-through text-stone-400 text-sm">
//                       Rs. {selectedProduct.originalPrice.toLocaleString()}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Size Selector */}
//                 <div>
//                   <label className="block text-xs font-semibold uppercase text-stone-700 mb-2">
//                     Size: {selectedSize}
//                   </label>
//                   <div className="flex flex-wrap gap-2">
//                     {selectedProduct.sizes.map((sz) => (
//                       <button
//                         key={sz}
//                         onClick={() => setSelectedSize(sz)}
//                         className={`px-3 py-1.5 text-xs font-medium border rounded transition-all ${
//                           selectedSize === sz
//                             ? 'bg-[#5c0612] text-white border-[#5c0612]'
//                             : 'bg-white border-stone-300 text-stone-700 hover:border-stone-500'
//                         }`}
//                       >
//                         {sz}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Discount Banner */}
//                 <div className="bg-[#faf7f2] border border-amber-200 p-4 rounded-lg flex items-center justify-between">
//                   <div>
//                     <p className="text-xs font-medium text-stone-800">
//                       Offer Price: <span className="font-bold text-[#5c0612]">Rs. {(selectedProduct.price * 0.9).toFixed(0)}</span>
//                     </p>
//                     <p className="text-[10px] text-stone-500">Use code NEW10</p>
//                   </div>
//                   <span className="bg-[#5c0612] text-white text-[10px] px-2 py-1 uppercase font-bold rounded">
//                     10% OFF
//                   </span>
//                 </div>

//                 {/* Add to Cart Button */}
//                 <button
//                   onClick={() => addToCart(selectedProduct, selectedSize)}
//                   className="w-full py-4 bg-stone-900 text-white font-medium text-xs tracking-widest uppercase hover:bg-[#5c0612] transition-colors rounded shadow-lg"
//                 >
//                   ADD TO CART
//                 </button>
//               </div>

//             </div>
//           </div>
//         )}

//       </main>

//       {/* WHATSAPP CART DRAWER / OVERLAY */}
//       {isCartOpen && (
//         <div className="fixed inset-0 z-50 bg-black/50 flex justify-end">
//           <div className="bg-white w-full max-w-md h-full p-6 flex flex-col justify-between shadow-2xl">
//             <div>
//               <div className="flex justify-between items-center border-b pb-4">
//                 <h3 className="font-serif text-xl font-bold text-[#2c221e]">Shopping Bag</h3>
//                 <button onClick={() => setIsCartOpen(false)} className="text-xl font-bold">✕</button>
//               </div>

//               <div className="mt-4 space-y-4 max-h-[60vh] overflow-y-auto">
//                 {cart.length === 0 ? (
//                   <p className="text-center text-stone-500 py-10 text-sm">Your bag is empty.</p>
//                 ) : (
//                   cart.map((item, index) => (
//                     <div key={index} className="flex gap-4 border-b pb-3 items-center">
//                       <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
//                       <div className="flex-1 text-xs">
//                         <h4 className="font-semibold text-stone-800">{item.title}</h4>
//                         <p className="text-stone-500">Size: {item.selectedSize}</p>
//                         <p className="font-bold text-[#5c0612] mt-1">Rs. {item.price.toLocaleString()}</p>
//                       </div>
//                     </div>
//                   ))
//                 )}
//               </div>
//             </div>

//             {/* WhatsApp Order Action */}
//             {cart.length > 0 && (
//               <div className="border-t pt-4 space-y-3">
//                 <a
//                   href={generateWhatsAppMessage()}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-full bg-emerald-600 text-white py-3 rounded flex items-center justify-center gap-2 font-medium text-xs uppercase tracking-wider hover:bg-emerald-700 transition-colors shadow-md"
//                 >
//                   Order via WhatsApp (+91 9905763301)
//                 </a>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Footer */}
//       <footer className="bg-[#2c221e] text-[#faf7f2] py-8 text-center text-xs border-t border-stone-800">
//         <p>© 2026 Qaleen Bhaiya. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// }





import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FilterSidebar from './components/FilterSidebar';
import { PRODUCTS, MAIN_GROUPS } from './data/products';

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
      <div className="bg-stone-100 border-b border-stone-200 py-2 px-4 sm:px-8 text-xs text-stone-500">
        <span className="hover:underline cursor-pointer" onClick={() => navigateTo('home')}>Home</span>
        {currentPage !== 'home' && (
          <>
            <span className="mx-2">/</span>
            <span className="hover:underline cursor-pointer" onClick={() => navigateTo('shop')}>Shop Collections</span>
          </>
        )}
        {currentPage === 'productDetail' && selectedProduct && (
          <>
            <span className="mx-2">/</span>
            <span className="text-stone-800 font-medium">{selectedProduct.title}</span>
          </>
        )}
      </div>

      {/* Main Content Areas */}
      <main className="flex-1">
        
        {/* HOME PAGE */}
        {currentPage === 'home' && (
          <div>
            {/* Hero Banner */}
            <section className="relative bg-[#faf7f2] py-16 px-6 lg:px-12 flex flex-col md:flex-row items-center border-b border-stone-200">
              <div className="md:w-1/2 space-y-6">
                <span className="text-xs uppercase tracking-widest text-[#5c0612] font-semibold">
                  The Qaleen Edit • 2026
                </span>
                <h1 className="font-serif text-4xl sm:text-6xl text-[#2c221e] leading-tight">
                  Make room for <br /><span className="italic font-light">beautiful.</span>
                </h1>
                <p className="text-stone-600 text-sm max-w-md">
                  Statement rugs, quiet corners and everything in between. Designed to make ordinary rooms feel a little more like you.
                </p>
                <button 
                  onClick={() => navigateTo('shop')}
                  className="bg-[#5c0612] text-white px-8 py-3 uppercase text-xs tracking-widest hover:bg-[#42040d] transition-all shadow-md"
                >
                  Shop The Collection →
                </button>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <img 
                  src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1000&q=80" 
                  alt="Qaleen Collection" 
                  className="rounded-lg shadow-xl object-cover w-full h-[400px]"
                />
              </div>
            </section>

            {/* 4 Main Categories Showcase */}
            <section className="max-w-7xl mx-auto px-4 py-16">
              <div className="text-center mb-10">
                <span className="text-xs uppercase tracking-widest text-[#5c0612] font-semibold">
                  Browse Collections
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#2c221e] mt-2">
                  Explore by <span className="italic">category.</span>
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {MAIN_GROUPS.map((grp, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => navigateTo('shop', { mainGroup: grp })}
                    className="group cursor-pointer bg-white rounded-lg overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col"
                  >
                    <img 
                      src={PRODUCTS[idx % PRODUCTS.length]?.image} 
                      alt={grp} 
                      className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="p-3 sm:p-4 flex justify-between items-center mt-auto">
                      <span className="font-serif text-xs sm:text-sm font-semibold text-stone-800 uppercase tracking-wide">
                        {grp}
                      </span>
                      <span className="text-xs sm:text-base">↗</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* SHOP PAGE */}
        {currentPage === 'shop' && (
          <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row gap-8">
              
              <FilterSidebar filters={filters} setFilters={setFilters} />

              <div className="flex-1">
                <div className="flex justify-between items-center mb-6 border-b border-stone-200 pb-4">
                  <h2 className="font-serif text-2xl text-[#2c221e]">
                    {filters.mainGroup ? `${filters.mainGroup} Collection` : 'All Collections'} ({filteredProducts.length})
                  </h2>
                </div>

                {filteredProducts.length === 0 ? (
                  <div className="text-center py-16 bg-white rounded-lg border border-stone-200">
                    <p className="text-stone-500 text-sm">No products found matching the selected filters.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <div 
                        key={product.id}
                        onClick={() => navigateTo('productDetail', { product })}
                        className="bg-white border border-stone-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all group"
                      >
                        <div className="overflow-hidden h-64">
                          <img 
                            src={product.image} 
                            alt={product.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4 space-y-2">
                          <div className="text-[10px] uppercase font-semibold text-[#5c0612] tracking-wider">
                            {product.category}
                          </div>
                          <h3 className="font-serif font-semibold text-sm text-stone-900 group-hover:text-[#5c0612] transition-colors">
                            {product.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-[#5c0612] text-sm">
                              Rs. {product.price.toLocaleString()}
                            </span>
                            <span className="line-through text-stone-400 text-xs">
                              Rs. {product.originalPrice.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {/* PRODUCT DETAIL PAGE */}
        {currentPage === 'productDetail' && selectedProduct && (
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 sm:p-10 border border-stone-200 rounded-lg shadow-sm">
              
              <div>
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.title} 
                  className="w-full h-[450px] object-cover rounded-lg border border-stone-200"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#5c0612] font-bold">
                    {selectedProduct.mainGroup} • {selectedProduct.category}
                  </span>
                  <h1 className="font-serif text-3xl font-bold text-[#2c221e] mt-1">
                    {selectedProduct.title}
                  </h1>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="text-2xl font-bold text-[#5c0612]">
                      Rs. {selectedProduct.price.toLocaleString()}
                    </span>
                    <span className="line-through text-stone-400 text-sm">
                      Rs. {selectedProduct.originalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-stone-700 mb-2">
                    Size: {selectedSize}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.sizes.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`px-3 py-1.5 text-xs font-medium border rounded transition-all ${
                          selectedSize === sz
                            ? 'bg-[#5c0612] text-white border-[#5c0612]'
                            : 'bg-white border-stone-300 text-stone-700 hover:border-stone-500'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-[#faf7f2] border border-amber-200 p-4 rounded-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-stone-800">
                      Offer Price: <span className="font-bold text-[#5c0612]">Rs. {(selectedProduct.price * 0.9).toFixed(0)}</span>
                    </p>
                    <p className="text-[10px] text-stone-500">Use code NEW10</p>
                  </div>
                  <span className="bg-[#5c0612] text-white text-[10px] px-2 py-1 uppercase font-bold rounded">
                    10% OFF
                  </span>
                </div>

                <button
                  onClick={() => addToCart(selectedProduct, selectedSize)}
                  className="w-full py-4 bg-stone-900 text-white font-medium text-xs tracking-widest uppercase hover:bg-[#5c0612] transition-colors rounded shadow-lg"
                >
                  ADD TO CART
                </button>
              </div>

            </div>
          </div>
        )}

      </main>

      {/* WHATSAPP CART DRAWER */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex justify-end">
          <div className="bg-white w-full max-w-md h-full p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex justify-between items-center border-b pb-4">
                <h3 className="font-serif text-xl font-bold text-[#2c221e]">Shopping Bag</h3>
                <button onClick={() => setIsCartOpen(false)} className="text-xl font-bold">✕</button>
              </div>

              <div className="mt-4 space-y-4 max-h-[60vh] overflow-y-auto">
                {cart.length === 0 ? (
                  <p className="text-center text-stone-500 py-10 text-sm">Your bag is empty.</p>
                ) : (
                  cart.map((item, index) => (
                    <div key={index} className="flex gap-4 border-b pb-3 items-center">
                      <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                      <div className="flex-1 text-xs">
                        <h4 className="font-semibold text-stone-800">{item.title}</h4>
                        <p className="text-stone-500">Size: {item.selectedSize}</p>
                        <p className="font-bold text-[#5c0612] mt-1">Rs. {item.price.toLocaleString()}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {cart.length > 0 && (
              <div className="border-t pt-4 space-y-3">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 text-white py-3 rounded flex items-center justify-center gap-2 font-medium text-xs uppercase tracking-wider hover:bg-emerald-700 transition-colors shadow-md"
                >
                  Order via WhatsApp (+91 9905763301)
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#2c221e] text-[#faf7f2] py-8 text-center text-xs border-t border-stone-800">
        <p>© 2026 Qaleen Bhaiya. All Rights Reserved.</p>
      </footer>
    </div>
  );
}