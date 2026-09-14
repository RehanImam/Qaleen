import React, { useEffect } from 'react';

export default function CartDrawer({ isOpen, onClose, cart }) {
  // Close on Escape while the drawer is open.
  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose && onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const itemCount = cart.length;
  const subtotal = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label="Shopping bag">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 qb-animate-fade-in"
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div className="relative bg-[#faf8f5] w-full max-w-md h-full flex flex-col shadow-2xl qb-animate-slide-in-right">

        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-stone-200/80">
          <div className="flex items-baseline gap-2">
            <h3 className="font-serif text-xl font-normal text-[#2c221e]">Shopping Bag</h3>
            <span className="text-xs font-sans text-stone-500 tracking-wide">
              ({itemCount} {itemCount === 1 ? 'item' : 'items'})
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close cart"
            className="p-1.5 text-stone-500 hover:text-stone-900 transition-colors rounded-full hover:bg-stone-200/60"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        {itemCount === 0 ? (
          /* Empty state */
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center gap-5">
            <div className="w-16 h-16 rounded-full bg-stone-200/60 flex items-center justify-center">
              <svg className="w-7 h-7 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div className="space-y-1.5">
              <p className="font-serif text-lg text-stone-800">Your bag is empty</p>
              <p className="font-sans text-xs text-stone-500 leading-relaxed max-w-[16rem]">
                Explore our handcrafted carpets, prayer mats and artworks to add your first piece.
              </p>
            </div>
            <button
              onClick={onClose}
              className="mt-2 bg-[#5c0612] text-white px-7 py-3 text-xs font-sans font-semibold tracking-[0.2em] uppercase hover:bg-[#4a0510] transition-colors shadow-sm"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Line items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 custom-scrollbar">
              {cart.map((item, index) => (
                <div key={index} className="flex gap-4 border-b border-stone-200/70 pb-4 items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-sm border border-stone-200 shrink-0"
                  />
                  <div className="flex-1 min-w-0 text-xs font-sans">
                    <h4 className="font-medium text-stone-800 truncate">{item.title}</h4>
                    <p className="text-stone-500 mt-0.5">Size: {item.selectedSize}</p>
                    <p className="font-semibold text-[#5c0612] mt-1.5">Rs. {item.price.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer: subtotal + checkout */}
            <div className="border-t border-stone-200/80 px-6 py-5 space-y-4 bg-[#faf8f5]">
              <div className="flex items-center justify-between">
                <span className="font-sans text-xs uppercase tracking-[0.18em] text-stone-500">Subtotal</span>
                <span className="font-serif text-lg font-medium text-stone-900">Rs. {subtotal.toLocaleString()}</span>
              </div>
              <p className="font-sans text-[11px] text-stone-400">
                Shipping and taxes calculated at checkout.
              </p>

              <button
                type="button"
                disabled
                className="w-full bg-[#5c0612] text-white py-3.5 text-xs font-sans font-semibold uppercase tracking-[0.2em] shadow-sm cursor-not-allowed opacity-95"
              >
                Proceed to Checkout
              </button>

              {/* Honest notice: no real checkout/payment yet */}
              <div className="flex items-center justify-center gap-2 text-[11px] font-sans text-stone-500">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b89047]" />
                <span>Checkout launching soon</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
