import React from "react";
import { PRODUCTS, MAIN_GROUPS } from "../data/products";

export default function Categories({ navigateTo }) {
  return (
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
            onClick={() => navigateTo("shop", { mainGroup: grp })}
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
  );
}