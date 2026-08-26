import React from "react";
import { PRODUCTS, MAIN_GROUPS } from "../data/products";

export default function Categories({ navigateTo }) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 md:py-14 bg-white">
      
      {/* Top Header Section */}
      <div className="text-center mb-8 md:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-[0.2em] uppercase">
          SHOP BY CATEGORY
        </h2>
        <div className="w-12 h-[2px] bg-stone-800 mx-auto mt-3 mb-2"></div>
        <p className="text-xs sm:text-sm font-light text-stone-500 tracking-widest uppercase">
          Explore Our Handcrafted Collections
        </p>
      </div>

      {/* 
        LAYOUT:
        - Mobile View: Horizontal Carousel / Scroll (flex flex-nowrap overflow-x-auto)
        - Laptop View: Exact 2 Boxes per Row (md:grid-cols-2)
      */}
      <div className="flex md:grid flex-nowrap md:grid-cols-2 gap-5 md:gap-8 overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory pb-4 md:pb-0">
        {MAIN_GROUPS.map((grp, idx) => (
          <div
            key={idx}
            onClick={() => navigateTo("shop", { mainGroup: grp })}
            className="group cursor-pointer flex-shrink-0 w-[85vw] sm:w-[55vw] md:w-full snap-start flex flex-col"
          >
            {/* Reduced Height: aspect-[16/10] laptop ke liye & aspect-[16/11] phone scroll ke liye */}
            <div className="w-full aspect-[16/11] sm:aspect-[16/10] overflow-hidden bg-stone-100 relative rounded-xs">
              <img
                src={PRODUCTS[idx % PRODUCTS.length]?.image}
                alt={grp}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Category Title */}
            <div className="pt-3.5 text-center">
              <span className="font-serif text-base sm:text-lg md:text-xl text-stone-900 tracking-[0.12em] uppercase font-medium border-b-2 border-transparent group-hover:border-stone-900 transition-all pb-1 inline-block">
                {grp}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}