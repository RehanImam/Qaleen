// import React from 'react';

// export default function ProductDetail({ product, selectedSize, setSelectedSize, addToCart }) {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 sm:p-10 border border-stone-200 rounded-lg shadow-sm">
//         <div>
//           <img
//             src={product.image}
//             alt={product.title}
//             className="w-full h-[450px] object-cover rounded-lg border border-stone-200"
//           />
//         </div>

//         <div className="space-y-6">
//           <div>
//             <span className="text-xs uppercase tracking-wider text-[#5c0612] font-bold">
//               {product.mainGroup} • {product.category}
//             </span>
//             <h1 className="font-serif text-3xl font-bold text-[#2c221e] mt-1">
//               {product.title}
//             </h1>
//             <div className="flex items-center gap-3 mt-3">
//               <span className="text-2xl font-bold text-[#5c0612]">
//                 Rs. {product.price.toLocaleString()}
//               </span>
//               <span className="line-through text-stone-400 text-sm">
//                 Rs. {product.originalPrice.toLocaleString()}
//               </span>
//             </div>
//           </div>

//           <div>
//             <label className="block text-xs font-semibold uppercase text-stone-700 mb-2">
//               Size: {selectedSize}
//             </label>
//             <div className="flex flex-wrap gap-2">
//               {product.sizes.map((sz) => (
//                 <button
//                   key={sz}
//                   onClick={() => setSelectedSize(sz)}
//                   className={`px-3 py-1.5 text-xs font-medium border rounded transition-all ${
//                     selectedSize === sz
//                       ? 'bg-[#5c0612] text-white border-[#5c0612]'
//                       : 'bg-white border-stone-300 text-stone-700 hover:border-stone-500'
//                   }`}
//                 >
//                   {sz}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="bg-[#faf7f2] border border-amber-200 p-4 rounded-lg flex items-center justify-between">
//             <div>
//               <p className="text-xs font-medium text-stone-800">
//                 Offer Price: <span className="font-bold text-[#5c0612]">Rs. {(product.price * 0.9).toFixed(0)}</span>
//               </p>
//               <p className="text-[10px] text-stone-500">Use code NEW10</p>
//             </div>
//             <span className="bg-[#5c0612] text-white text-[10px] px-2 py-1 uppercase font-bold rounded">
//               10% OFF
//             </span>
//           </div>

//           <button
//             onClick={() => addToCart(product, selectedSize)}
//             className="w-full py-4 bg-stone-900 text-white font-medium text-xs tracking-widest uppercase hover:bg-[#5c0612] transition-colors rounded shadow-lg"
//           >
//             ADD TO CART
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';

export default function ProductDetail({ product, selectedSize, setSelectedSize, addToCart }) {
  // Demo array to show multiple full-size vertical images
  const images = product?.images && product.images.length >= 5
    ? product.images
    : [
        product?.image,
        product?.image,
        product?.image,
        product?.image,
        product?.image,
      ];

  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState('description');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="w-full bg-white font-serif text-stone-800 pb-20 pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT 7 COLUMNS: Sticky Thumbnails + Vertical Stacked Big Images */}
          <div className="lg:col-span-7 flex gap-4 items-start">
            
            {/* Left Vertical Thumbnails (Sticky) */}
            <div className="sticky top-6 w-20 sm:w-24 flex-shrink-0 flex flex-col gap-3 max-h-[85vh] overflow-y-auto no-scrollbar">
              {images.map((img, idx) => (
                <a
                  key={idx}
                  href={`#product-image-${idx}`}
                  className="relative w-full aspect-square bg-stone-100 overflow-hidden border border-stone-200 hover:border-stone-900 transition-all block"
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </a>
              ))}
            </div>

            {/* Main Stacked Big Images List (Scrolls Vertically Downward) */}
            <div className="flex-1 space-y-4">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  id={`product-image-${idx}`}
                  className="w-full bg-stone-100 overflow-hidden shadow-sm"
                >
                  <img
                    src={img}
                    alt={`${product?.title || 'Product'} view ${idx + 1}`}
                    className="w-full h-auto object-cover object-center block"
                  />
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT 5 COLUMNS: Sticky Product Information & Accordions */}
          <div className="lg:col-span-5 space-y-6 lg:pl-6 pt-2 font-serif lg:sticky lg:top-6">
            
            {/* Title & Subtitle */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight">
                {product?.title || 'Sarah'}
              </h1>
              <p className="text-lg sm:text-xl font-light text-stone-600 tracking-wide">
                {product?.subtitle || 'Hand Tufted Woollen Rug'}
              </p>
            </div>

            {/* Pricing Section */}
            <div className="space-y-1 pt-2">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-light text-stone-900">
                  ₹ {product?.price?.toLocaleString('en-IN') || '30,240'}.00
                </span>
                {product?.originalPrice && (
                  <span className="line-through text-stone-400 text-sm font-sans">
                    ₹ {product.originalPrice.toLocaleString('en-IN')}.00
                  </span>
                )}
                <span className="bg-[#5c0612] text-white text-[10px] font-sans font-bold px-2 py-0.5 uppercase tracking-wider rounded-sm">
                  10% OFF
                </span>
              </div>
              <p className="text-[11px] text-stone-400 italic font-sans">(Inclusive of all taxes)</p>
            </div>

            {/* SKU */}
            <div className="text-[11px] text-stone-400 font-sans tracking-wider uppercase pt-1">
              SKU: {product?.sku || '2004670001_8x5'}
            </div>

            {/* TRY IN YOUR SPACE */}
            <div className="pt-2">
              <button className="flex items-center gap-2 text-stone-800 text-xs font-sans tracking-widest uppercase hover:text-black transition-colors">
                <svg className="w-5 h-5 stroke-[1.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <span className="underline underline-offset-4">TRY IN YOUR SPACE</span>
              </button>
            </div>

            {/* Size Selector */}
            <div className="space-y-2 pt-2">
              <label className="block text-xs font-sans text-stone-500 uppercase tracking-wider">
                Size:
              </label>
              <div className="flex flex-wrap gap-2 font-sans">
                {(product?.sizes || ['8x5']).map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize && setSelectedSize(sz)}
                    className={`px-5 py-2.5 text-xs border text-center transition-all ${
                      selectedSize === sz
                        ? 'border-stone-900 bg-white text-stone-900 font-medium ring-1 ring-stone-900'
                        : 'border-stone-300 bg-white text-stone-600 hover:border-stone-500'
                    }`}
                  >
                    <div>{sz} ft</div>
                    <div className="text-[10px] text-stone-400 font-light">244 x 152 cm</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Counter */}
            <div className="pt-2 font-sans">
              <div className="inline-flex items-center border border-stone-200 bg-stone-50">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3.5 py-2 text-stone-600 hover:text-stone-900 transition-colors"
                >
                  −
                </button>
                <span className="px-4 py-2 text-xs font-medium text-stone-800">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3.5 py-2 text-stone-600 hover:text-stone-900 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Full Width Add to Cart Button */}
            <div className="pt-2 font-sans">
              <button
                onClick={() => addToCart && addToCart(product, selectedSize)}
                className="w-full py-4 bg-[#1a1a1a] text-white font-normal text-xs tracking-[0.2em] uppercase hover:bg-black transition-colors shadow-sm"
              >
                Add to cart
              </button>
            </div>

            {/* ACCORDION SECTIONS */}
            <div className="border-t border-stone-200 pt-4 font-sans space-y-0">
              
              {/* DESCRIPTION */}
              <div className="border-b border-stone-200">
                <button
                  onClick={() => toggleSection('description')}
                  className="w-full py-4 flex justify-between items-center text-left text-xs tracking-widest uppercase font-medium text-stone-800 hover:text-black"
                >
                  <span>DESCRIPTION</span>
                  <span className="text-base font-normal">{openSection === 'description' ? '−' : '+'}</span>
                </button>
                {openSection === 'description' && (
                  <div className="pb-4 text-xs font-serif leading-relaxed text-stone-600">
                    {product?.description || 
                      'Sarah is a classical Persian rug from the Panache collection, hand-tufted with cotton and wool yarns from Sardinia. Double medallion motifs anchor the composition, giving it a grand, opulent presence in a rich rust palette.'}
                  </div>
                )}
              </div>

              {/* DESIGN ETHOS */}
              <div className="border-b border-stone-200">
                <button
                  onClick={() => toggleSection('ethos')}
                  className="w-full py-4 flex justify-between items-center text-left text-xs tracking-widest uppercase font-medium text-stone-800 hover:text-black"
                >
                  <span>DESIGN ETHOS</span>
                  <span className="text-base font-normal">{openSection === 'ethos' ? '−' : '+'}</span>
                </button>
                {openSection === 'ethos' && (
                  <div className="pb-4 text-xs font-serif leading-relaxed text-stone-600">
                    Handcrafted by master artisans using traditional weaving methods passed down through generations.
                  </div>
                )}
              </div>

              {/* WHY THIS RUG WORKS FOR YOUR SPACE */}
              <div className="border-b border-stone-200">
                <button
                  onClick={() => toggleSection('whyWorks')}
                  className="w-full py-4 flex justify-between items-center text-left text-xs tracking-widest uppercase font-medium text-stone-800 hover:text-black"
                >
                  <span>WHY THIS RUG WORKS FOR YOUR SPACE</span>
                  <span className="text-base font-normal">{openSection === 'whyWorks' ? '−' : '+'}</span>
                </button>
                {openSection === 'whyWorks' && (
                  <div className="pb-4 text-xs font-serif leading-relaxed text-stone-600">
                    The warm, earth-toned hues complement both modern minimalist interiors and vintage aesthetics seamlessly.
                  </div>
                )}
              </div>

              {/* SHIPPING & DELIVERY */}
              <div className="border-b border-stone-200">
                <button
                  onClick={() => toggleSection('shipping')}
                  className="w-full py-4 flex justify-between items-center text-left text-xs tracking-widest uppercase font-medium text-stone-800 hover:text-black"
                >
                  <span>SHIPPING & DELIVERY</span>
                  <span className="text-base font-normal">{openSection === 'shipping' ? '−' : '+'}</span>
                </button>
                {openSection === 'shipping' && (
                  <div className="pb-4 text-xs font-serif leading-relaxed text-stone-600">
                    Free doorstep shipping across India. Ships within 3-5 business days with insured delivery.
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}