


// import React from 'react';
// import { MAIN_GROUPS, SUB_CATEGORIES, COUNTRIES, COLORS } from '../data/products';

// export default function FilterSidebar({ filters, setFilters }) {
//   const SIZES = ["2x6", "3x5", "4x5", "4x6", "5x6", "5x7", "5x8", "6x7", "6x8", "6x9", "7x8", "8x10"];

//   const currentSubCategories = filters.mainGroup ? (SUB_CATEGORIES[filters.mainGroup] || []) : [];

//   const handleMainGroupChange = (e) => {
//     const selectedGroup = e.target.value;
//     setFilters({
//       ...filters,
//       mainGroup: selectedGroup,
//       category: ''
//     });
//   };

//   return (
//     <aside className="w-full md:w-64 bg-white p-5 border border-stone-200 rounded-lg shadow-sm space-y-6 text-stone-800">
      
//       {/* Main Collection Filter */}
//       {/* <div>
//         <h3 className="font-serif font-semibold text-lg border-b border-stone-200 pb-2 mb-3 text-[#2c221e]">
//           Main Collection
//         </h3>
//         <select
//           value={filters.mainGroup}
//           onChange={handleMainGroupChange}
//           className="w-full p-2 border border-stone-300 rounded focus:ring-[#5c0612] focus:border-[#5c0612] text-xs font-semibold bg-stone-50"
//         >
//           <option value="">All Collections</option>
//           {MAIN_GROUPS.map((grp) => (
//             <option key={grp} value={grp}>{grp}</option>
//           ))}
//         </select>
//       </div> */}

//       {/* Sub Category Filter */}
//       <div>
//         <h3 className="font-serif font-semibold text-lg border-b border-stone-200 pb-2 mb-3 text-[#2c221e]">
//           Category
//         </h3>
//         <select
//           value={filters.category}
//           onChange={(e) => setFilters({ ...filters, category: e.target.value })}
//           disabled={!filters.mainGroup && currentSubCategories.length === 0}
//           className="w-full p-2 border border-stone-300 rounded focus:ring-[#5c0612] focus:border-[#5c0612] text-xs disabled:bg-stone-100 disabled:text-stone-400"
//         >
//           <option value="">
//             {filters.mainGroup ? `All ${filters.mainGroup} Categories` : "Select Collection First"}
//           </option>
//           {currentSubCategories.map((cat, idx) => (
//             <option key={idx} value={cat}>{cat}</option>
//           ))}
//         </select>
//       </div>

//       {/* Price Slider */}
//       <div>
//         <h3 className="font-serif font-semibold text-lg border-b border-stone-200 pb-2 mb-3 text-[#2c221e]">
//           Price Filter
//         </h3>
//         <input
//           type="range"
//           min="0"
//           max="50000"
//           step="1000"
//           value={filters.maxPrice}
//           onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
//           className="w-full accent-[#5c0612]"
//         />
//         <div className="flex justify-between text-xs text-stone-600 mt-2 font-medium">
//           <span>Rs. 0</span>
//           <span>Rs. {filters.maxPrice.toLocaleString()}</span>
//         </div>
//       </div>

//       {/* Sizes in Feet */}
//       <div>
//         <h3 className="font-serif font-semibold text-lg border-b border-stone-200 pb-2 mb-3 text-[#2c221e]">
//           Sizes In Feet
//         </h3>
//         <div className="grid grid-cols-3 gap-2">
//           {SIZES.map((sz) => (
//             <button
//               key={sz}
//               onClick={() => setFilters({ ...filters, size: filters.size === sz ? '' : sz })}
//               className={`py-1 text-xs rounded border transition-colors ${
//                 filters.size === sz
//                   ? 'bg-[#5c0612] text-white border-[#5c0612]'
//                   : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-stone-400'
//               }`}
//             >
//               {sz}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Country Choice */}
//       <div>
//         <h3 className="font-serif font-semibold text-lg border-b border-stone-200 pb-2 mb-3 text-[#2c221e]">
//           Country Choice
//         </h3>
//         <div className="space-y-1.5">
//           {COUNTRIES.map((cty) => (
//             <label key={cty} className="flex items-center space-x-2 text-xs cursor-pointer">
//               <input
//                 type="radio"
//                 name="country"
//                 checked={filters.country === cty}
//                 onChange={() => setFilters({ ...filters, country: filters.country === cty ? '' : cty })}
//                 className="accent-[#5c0612]"
//               />
//               <span>{cty}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Colour Choice */}
//       <div>
//         <h3 className="font-serif font-semibold text-lg border-b border-stone-200 pb-2 mb-3 text-[#2c221e]">
//           Colour Choice
//         </h3>
//         <div className="flex flex-wrap gap-2">
//           {COLORS.map((col) => (
//             <button
//               key={col.name}
//               title={col.name}
//               onClick={() => setFilters({ ...filters, color: filters.color === col.name ? '' : col.name })}
//               className={`w-7 h-7 rounded-full border-2 transition-transform ${
//                 filters.color === col.name ? 'scale-110 border-[#5c0612]' : 'border-stone-300'
//               }`}
//               style={{ backgroundColor: col.hex }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Reset Filter Button */}
//       <button
//         onClick={() => setFilters({ mainGroup: '', category: '', maxPrice: 50000, size: '', country: '', color: '' })}
//         className="w-full py-2 bg-stone-100 text-stone-700 text-xs font-medium rounded hover:bg-stone-200 transition-colors uppercase"
//       >
//         Reset Filters
//       </button>

//     </aside>
//   );
// }



import React from 'react';
import { MAIN_GROUPS, SUB_CATEGORIES, COUNTRIES, COLORS } from '../data/products';

export default function FilterSidebar({ filters, setFilters }) {
  const SIZES = ["2x6", "3x5", "4x5", "4x6", "5x6", "5x7", "5x8", "6x7", "6x8", "6x9", "7x8", "8x10"];

  const currentSubCategories = filters.mainGroup ? (SUB_CATEGORIES[filters.mainGroup] || []) : [];

  const handleMainGroupChange = (e) => {
    const selectedGroup = e.target.value;
    setFilters({
      ...filters,
      mainGroup: selectedGroup,
      category: ''
    });
  };

  return (
    /* h-fit and self-start prevents the sidebar from stretching down with the grid height */
    <aside className="w-full md:w-64 h-fit self-start bg-white p-5 border border-stone-200 rounded-lg shadow-sm space-y-6 text-stone-800">
      
      {/* Sub Category Filter */}
      <div>
        <h3 className="font-serif font-semibold text-lg border-b border-stone-200 pb-2 mb-3 text-[#2c221e]">
          Category
        </h3>
        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          disabled={!filters.mainGroup && currentSubCategories.length === 0}
          className="w-full p-2 border border-stone-300 rounded focus:ring-[#5c0612] focus:border-[#5c0612] text-xs disabled:bg-stone-100 disabled:text-stone-400"
        >
          <option value="">
            {filters.mainGroup ? `All ${filters.mainGroup} Categories` : "Select Collection First"}
          </option>
          {currentSubCategories.map((cat, idx) => (
            <option key={idx} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Price Slider */}
      <div>
        <h3 className="font-serif font-semibold text-lg border-b border-stone-200 pb-2 mb-3 text-[#2c221e]">
          Price Filter
        </h3>
        <input
          type="range"
          min="0"
          max="50000"
          step="1000"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
          className="w-full accent-[#5c0612]"
        />
        <div className="flex justify-between text-xs text-stone-600 mt-2 font-medium">
          <span>Rs. 0</span>
          <span>Rs. {filters.maxPrice.toLocaleString()}</span>
        </div>
      </div>

      {/* Sizes in Feet */}
      <div>
        <h3 className="font-serif font-semibold text-lg border-b border-stone-200 pb-2 mb-3 text-[#2c221e]">
          Sizes In Feet
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {SIZES.map((sz) => (
            <button
              key={sz}
              onClick={() => setFilters({ ...filters, size: filters.size === sz ? '' : sz })}
              className={`py-1 text-xs rounded border transition-colors ${
                filters.size === sz
                  ? 'bg-[#5c0612] text-white border-[#5c0612]'
                  : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-stone-400'
              }`}
            >
              {sz}
            </button>
          ))}
        </div>
      </div>

      {/* Country Choice */}
      <div>
        <h3 className="font-serif font-semibold text-lg border-b border-stone-200 pb-2 mb-3 text-[#2c221e]">
          Country Choice
        </h3>
        <div className="space-y-1.5">
          {COUNTRIES.map((cty) => (
            <label key={cty} className="flex items-center space-x-2 text-xs cursor-pointer">
              <input
                type="radio"
                name="country"
                checked={filters.country === cty}
                onChange={() => setFilters({ ...filters, country: filters.country === cty ? '' : cty })}
                className="accent-[#5c0612]"
              />
              <span>{cty}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Colour Choice */}
      <div>
        <h3 className="font-serif font-semibold text-lg border-b border-stone-200 pb-2 mb-3 text-[#2c221e]">
          Colour Choice
        </h3>
        <div className="flex flex-wrap gap-2">
          {COLORS.map((col) => (
            <button
              key={col.name}
              title={col.name}
              onClick={() => setFilters({ ...filters, color: filters.color === col.name ? '' : col.name })}
              className={`w-7 h-7 rounded-full border-2 transition-transform ${
                filters.color === col.name ? 'scale-110 border-[#5c0612]' : 'border-stone-300'
              }`}
              style={{ backgroundColor: col.hex }}
            />
          ))}
        </div>
      </div>

      {/* Reset Filter Button */}
      <button
        onClick={() => setFilters({ mainGroup: '', category: '', maxPrice: 50000, size: '', country: '', color: '' })}
        className="w-full py-2 bg-stone-100 text-stone-700 text-xs font-medium rounded hover:bg-stone-200 transition-colors uppercase border border-stone-200"
      >
        Reset Filters
      </button>

    </aside>
  );
}