import React from 'react';

export default function Breadcrumb({ currentPage, selectedProduct, navigateTo }) {
  return (
    <div className="bg-[#f5efe6]/60 border-b border-stone-200/70 py-2 px-4 sm:px-8 text-xs text-stone-500">
      <span className="hover:underline cursor-pointer" onClick={() => navigateTo('home')}>
        Home
      </span>
      {currentPage === 'custom' && (
        <>
          <span className="mx-2">/</span>
          <span className="text-stone-800 font-medium">
            Bespoke Custom Services
          </span>
        </>
      )}
      {currentPage === 'project' && (
        <>
          <span className="mx-2">/</span>
          <span className="text-stone-800 font-medium">
            Our Projects
          </span>
        </>
      )}
      {currentPage === 'shop' && (
        <>
          <span className="mx-2">/</span>
          <span className="hover:underline cursor-pointer" onClick={() => navigateTo('shop')}>
            Shop Collections
          </span>
        </>
      )}
      {currentPage === 'productDetail' && selectedProduct && (
        <>
          <span className="mx-2">/</span>
          <span className="hover:underline cursor-pointer" onClick={() => navigateTo('shop')}>
            Shop Collections
          </span>
          <span className="mx-2">/</span>
          <span className="text-stone-800 font-medium">{selectedProduct.title}</span>
        </>
      )}
    </div>
  );
}