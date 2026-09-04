import React from 'react';

export default function Breadcrumb({ currentPage, selectedProduct, navigateTo }) {
  return (
    <div className="bg-[#f5efe6] border-b border-stone-200/70 py-2 px-4 sm:px-8 text-xs text-stone-500">
      <span className="hover:underline cursor-pointer" onClick={() => navigateTo('home')}>
        Home
      </span>
      {currentPage !== 'home' && (
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
          <span className="text-stone-800 font-medium">{selectedProduct.title}</span>
        </>
      )}
    </div>
  );
}