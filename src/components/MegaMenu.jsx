import React from 'react';

export default function MegaMenu({
  menuData,
  isOpen,
  onMouseEnter,
  onMouseLeave,
  onItemClick,
}) {
  if (!menuData || !isOpen) return null;

  const isSevenCols = menuData.groups.length === 7;
  const hasFeatured = Boolean(menuData.featured);
  // Widen the container when a featured tile is present so the columns keep their width.
  const containerMaxWidth = isSevenCols
    ? (hasFeatured ? 'max-w-[1500px]' : 'max-w-[1240px]')
    : (hasFeatured ? 'max-w-[1600px]' : 'max-w-[1340px]');
  const gridColsClass = isSevenCols
    ? 'grid-cols-2 sm:grid-cols-4 lg:grid-cols-7'
    : 'grid-cols-2 sm:grid-cols-4 xl:grid-cols-8';

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full left-0 w-full bg-[#faf8f5] shadow-2xl border-t border-stone-200/80 z-40 qb-animate-slide-down"
    >
      {/* Centered, compact container keeping all category columns close together */}
      <div className={`w-full ${containerMaxWidth} mx-auto px-6 sm:px-8 py-8 sm:py-10`}>

       <div className="flex gap-6 lg:gap-8">
        {/* Columns centered and tightly spaced */}
        <div className={`flex-1 min-w-0 grid ${gridColsClass} gap-x-4 lg:gap-x-5 xl:gap-x-6 gap-y-8 text-left`}>
          {menuData.groups.map((group) => (
            <div key={group.title} className="flex flex-col space-y-2.5 min-w-0">

              {/* Group Heading: Serif, Category label with subtle underline divider */}
              <h4 className="font-serif text-[13.5px] lg:text-[14px] font-medium text-stone-900 tracking-tight pb-2 border-b border-stone-200/80 select-none leading-snug">
                {group.title}
              </h4>

              {/* Sub-links list */}
              <ul className="space-y-1.5 pt-0.5">
                {group.items.map((item, idx) => {
                  const isColor = group.isColorGroup && typeof item === 'object';
                  const label = isColor ? item.name : item;

                  return (
                    <li key={idx}>
                      <button
                        type="button"
                        onClick={() => onItemClick && onItemClick(label, group.title, menuData.id)}
                        className="group flex items-center text-left text-[11.5px] lg:text-[12px] text-stone-600 hover:text-[#5c0612] font-light transition-colors py-0.5 w-full cursor-pointer"
                      >
                        {/* Color Swatch Dot if Colour Group */}
                        {isColor && (
                          <span
                            className="w-2.5 h-2.5 rounded-full mr-1.5 shrink-0 border border-stone-300/80 transition-transform group-hover:scale-110"
                            style={{
                              background: item.swatch,
                              borderColor: item.border || 'rgba(0,0,0,0.1)',
                            }}
                          />
                        )}

                        <span className="group-hover:translate-x-0.5 transition-transform duration-150 leading-snug">
                          {label}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

            </div>
          ))}
        </div>

        {/* Featured collection tile on the right */}
        {menuData.featured && (
          <button
            type="button"
            onClick={() =>
              onItemClick &&
              onItemClick(menuData.featured.searchLabel || menuData.featured.title, 'Featured', menuData.id)
            }
            className="hidden lg:block group relative shrink-0 w-56 xl:w-64 self-stretch min-h-[280px] overflow-hidden rounded-sm text-left cursor-pointer"
          >
            <img
              src={menuData.featured.image}
              alt={menuData.featured.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
            <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
              <p className="text-[10px] font-sans font-medium tracking-[0.22em] uppercase text-[#e2b86b] mb-1.5">
                {menuData.featured.eyebrow}
              </p>
              <h5 className="font-serif text-lg xl:text-xl font-normal leading-tight">
                {menuData.featured.title}
              </h5>
              {menuData.featured.subtitle && (
                <p className="text-[11px] font-sans font-light text-stone-200 mt-1">
                  {menuData.featured.subtitle}
                </p>
              )}
              <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-sans font-semibold tracking-[0.14em] uppercase">
                {menuData.featured.ctaLabel}
                <svg className="w-3.5 h-3.5 stroke-[2] transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </button>
        )}
       </div>

      </div>

      {/* Subtle bottom accent bar */}
      <div className="h-[2px] w-full bg-gradient-to-r from-stone-200 via-stone-300 to-stone-200 opacity-60" />
    </div>
  );
}
