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
  const containerMaxWidth = isSevenCols ? 'max-w-[1240px]' : 'max-w-[1340px]';
  const gridColsClass = isSevenCols
    ? 'grid-cols-2 sm:grid-cols-4 lg:grid-cols-7'
    : 'grid-cols-2 sm:grid-cols-4 xl:grid-cols-8';

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full left-0 w-full bg-[#faf8f5] shadow-2xl border-t border-stone-200/80 z-40 animate-in fade-in slide-in-from-top-1 duration-200"
    >
      {/* Centered, compact container keeping all category columns close together */}
      <div className={`w-full ${containerMaxWidth} mx-auto px-6 sm:px-8 py-8 sm:py-10`}>

        {/* Columns centered and tightly spaced */}
        <div className={`grid ${gridColsClass} gap-x-4 lg:gap-x-5 xl:gap-x-6 gap-y-8 text-left`}>
          {menuData.groups.map((group) => (
            <div key={group.title} className="flex flex-col space-y-2.5 min-w-0">

              {/* Group Heading: Serif, Category label with subtle underline divider */}
              <h4 className="font-serif text-[13.5px] lg:text-[14px] font-medium text-stone-900 tracking-tight pb-2 border-b border-stone-200/80 select-none whitespace-nowrap overflow-hidden text-ellipsis">
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

                        <span className="group-hover:translate-x-0.5 transition-transform duration-150 whitespace-nowrap">
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

      </div>

      {/* Subtle bottom accent bar */}
      <div className="h-[2px] w-full bg-gradient-to-r from-stone-200 via-stone-300 to-stone-200 opacity-60" />
    </div>
  );
}
