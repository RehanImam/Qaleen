import React from 'react';

export default function ProductDetail({ product, selectedSize, setSelectedSize, addToCart }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 sm:p-10 border border-stone-200 rounded-lg shadow-sm">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[450px] object-cover rounded-lg border border-stone-200"
          />
        </div>

        <div className="space-y-6">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#5c0612] font-bold">
              {product.mainGroup} • {product.category}
            </span>
            <h1 className="font-serif text-3xl font-bold text-[#2c221e] mt-1">
              {product.title}
            </h1>
            <div className="flex items-center gap-3 mt-3">
              <span className="text-2xl font-bold text-[#5c0612]">
                Rs. {product.price.toLocaleString()}
              </span>
              <span className="line-through text-stone-400 text-sm">
                Rs. {product.originalPrice.toLocaleString()}
              </span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-stone-700 mb-2">
              Size: {selectedSize}
            </label>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((sz) => (
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
                Offer Price: <span className="font-bold text-[#5c0612]">Rs. {(product.price * 0.9).toFixed(0)}</span>
              </p>
              <p className="text-[10px] text-stone-500">Use code NEW10</p>
            </div>
            <span className="bg-[#5c0612] text-white text-[10px] px-2 py-1 uppercase font-bold rounded">
              10% OFF
            </span>
          </div>

          <button
            onClick={() => addToCart(product, selectedSize)}
            className="w-full py-4 bg-stone-900 text-white font-medium text-xs tracking-widest uppercase hover:bg-[#5c0612] transition-colors rounded shadow-lg"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}