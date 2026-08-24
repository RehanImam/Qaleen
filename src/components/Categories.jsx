



import React from "react";
import { PRODUCTS, MAIN_GROUPS } from "../data/products";

export default function Categories({ navigateTo }) {
  return (
    <section className="w-full max-w-[1700px] mx-auto px-6 lg:px-12 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
        {MAIN_GROUPS.map((grp, idx) => (
          <div
            key={idx}
            onClick={() => navigateTo("shop", { mainGroup: grp })}
            className="group cursor-pointer flex flex-col"
          >
            {/* Tall Vertical Aspect Ratio Image Container */}
            <div className="w-full aspect-[3/4] overflow-hidden bg-stone-100">
              <img
                src={PRODUCTS[idx % PRODUCTS.length]?.image}
                alt={grp}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Bottom Centered Title (Matching Screenshot) */}
            <div className="pt-4 text-center">
              <span className="font-serif text-base sm:text-lg text-stone-900 tracking-wide font-normal">
                Shop By {grp}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}