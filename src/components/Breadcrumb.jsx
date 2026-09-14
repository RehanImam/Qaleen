import React from 'react';

export default function Breadcrumb({ currentPage, selectedProduct, navigateTo }) {
  return (
    <div className="bg-surface/60 border-b border-line py-2.5 px-4 sm:px-8 text-xs text-muted">
      <span className="hover:underline cursor-pointer" onClick={() => navigateTo('home')}>
        Home
      </span>
      {currentPage === 'custom' && (
        <>
          <span className="mx-2">/</span>
          <span className="text-ink font-medium">
            Bespoke Custom Services
          </span>
        </>
      )}
      {currentPage === 'project' && (
        <>
          <span className="mx-2">/</span>
          <span className="text-ink font-medium">
            Projects
          </span>
        </>
      )}
      {currentPage === 'blog' && (
        <>
          <span className="mx-2">/</span>
          <span className="text-ink font-medium">
            Journal
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
          <span className="text-ink font-medium">{selectedProduct.title}</span>
        </>
      )}
    </div>
  );
}