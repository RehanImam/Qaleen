// export const CATEGORIES = [
//   "Carpet",
//   "Irregular Shaped Carpets",
//   "Shaggy Carpets",
//   "Jute Carpet & Rugs",
//   "Round Rugs Carpets",
//   "Round Shaggy Carpet",
//   "Solid Carpets",
//   "Irani Carpets",
//   "Modern Abstract",
//   "Traditional Carpets",
//   "Designer Carpets",
//   "Persian Wool Rugs & Carpets",
//   "Dope Carpets",
//   "Hand Knotted Carpets",
//   "Artificial Grass Carpets",
//   "Anime Carpets",
//   "Floral Carpets",
//   "Geometrical Carpets"
// ];

// export const COUNTRIES = ["India", "Iran", "Turkey", "Afghanistan"];
// export const COLORS = [
//   { name: "Cream", hex: "#f5f5dc" },
//   { name: "Burgundy", hex: "#5c0612" },
//   { name: "Navy Blue", hex: "#1e293b" },
//   { name: "Olive Green", hex: "#556b2f" },
//   { name: "Terracotta", hex: "#e07a5f" }
// ];

// export const PRODUCTS = [
//   {
//     id: "1",
//     title: "Xiro Irregular Hand Tufted Carpet & Rug",
//     category: "Irregular Shaped Carpets",
//     price: 14399,
//     originalPrice: 28798,
//     rating: 5,
//     sizes: ["4x6", "5x7", "5x8", "6x7", "6x8", "6x9", "7x8", "7x9", "7x10", "8x9", "8x10", "8x11", "9x12"],
//     country: "India",
//     color: "Burgundy",
//     image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80"
//   },
//   {
//     id: "2",
//     title: "Lushizo Round Hand Tufted Carpet & Rug",
//     category: "Round Rugs Carpets",
//     price: 6300,
//     originalPrice: 12700,
//     rating: 4,
//     sizes: ["4x6", "5x7", "5x8", "6x7"],
//     country: "Turkey",
//     color: "Cream",
//     image: "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=800&q=80"
//   },
//   {
//     id: "3",
//     title: "Coastal Diamond Premium Hand Tufted Carpet",
//     category: "Hand Tufted Carpets",
//     price: 11990,
//     originalPrice: 23980,
//     rating: 5,
//     sizes: ["5x7", "6x9", "8x10"],
//     country: "Iran",
//     color: "Navy Blue",
//     image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80"
//   }
// ];


export const MAIN_GROUPS = ["Carpet", "Prayer Mat", "Door Mat", "Artwork"];

export const SUB_CATEGORIES = {
  "Carpet": [
    "Irregular Shaped Carpets",
    "Shaggy Carpets",
    "Jute Carpet & Rugs",
    "Round Rugs Carpets",
    "Round Shaggy Carpet",
    "Solid Carpets",
    "Irani Carpets",
    "Modern Abstract",
    "Traditional Carpets",
    "Designer Carpets",
    "Persian Wool Rugs & Carpets",
    "Dope Carpets",
    "Hand Knotted Carpets",
    "Artificial Grass Carpets",
    "Anime Carpets",
    "Floral Carpets",
    "Geometrical Carpets"
  ],
  "Prayer Mat": [
    "Velvet Janamaz",
    "Orthopedic Padded Prayer Mat",
    "Turkish Silk Prayer Rug",
    "Travel Foldable Prayer Mat"
  ],
  "Door Mat": [
    "Coir Door Mats",
    "Rubber Anti-Slip Door Mats",
    "Absorbent Microfiber Mats",
    "Designer Welcome Mats"
  ],
  "Artwork": [
    "Handmade Wall Tapestry",
    "Framed Textile Art",
    "Vintage Carpet Art Wall Hanging"
  ]
};

// Exporting CATEGORIES for backward compatibility with Navbar
export const CATEGORIES = SUB_CATEGORIES["Carpet"];

export const COUNTRIES = ["India", "Iran", "Turkey", "Afghanistan"];

export const COLORS = [
  { name: "Cream", hex: "#f5f5dc" },
  { name: "Burgundy", hex: "#5c0612" },
  { name: "Navy Blue", hex: "#1e293b" },
  { name: "Olive Green", hex: "#556b2f" },
  { name: "Terracotta", hex: "#e07a5f" }
];

export const PRODUCTS = [
  {
    id: "1",
    title: "Xiro Irregular Hand Tufted Carpet & Rug",
    mainGroup: "Carpet",
    category: "Irregular Shaped Carpets",
    price: 14399,
    originalPrice: 28798,
    rating: 5,
    sizes: ["4x6", "5x7", "5x8", "6x7", "6x8", "6x9", "7x8", "7x9", "7x10", "8x9", "8x10", "8x11", "9x12"],
    country: "India",
    color: "Burgundy",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "2",
    title: "Lushizo Round Hand Tufted Carpet & Rug",
    mainGroup: "Carpet",
    category: "Round Rugs Carpets",
    price: 6300,
    originalPrice: 12700,
    rating: 4,
    sizes: ["4x6", "5x7", "5x8", "6x7"],
    country: "Turkey",
    color: "Cream",
    image: "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "3",
    title: "Coastal Diamond Premium Hand Tufted Carpet",
    mainGroup: "Carpet",
    category: "Hand Knotted Carpets",
    price: 11990,
    originalPrice: 23980,
    rating: 5,
    sizes: ["5x7", "6x9", "8x10"],
    country: "Iran",
    color: "Navy Blue",
    image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "4",
    title: "Royal Ottoman Turkish Velvet Janamaz",
    mainGroup: "Prayer Mat",
    category: "Turkish Silk Prayer Rug",
    price: 2499,
    originalPrice: 4999,
    rating: 5,
    sizes: ["3x5"],
    country: "Turkey",
    color: "Burgundy",
    image: "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "5",
    title: "Natural Coir Welcome Door Mat",
    mainGroup: "Door Mat",
    category: "Coir Door Mats",
    price: 899,
    originalPrice: 1799,
    rating: 4,
    sizes: ["2x6"],
    country: "India",
    color: "Terracotta",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "6",
    title: "Vintage Handwoven Persian Tapestry Art",
    mainGroup: "Artwork",
    category: "Handmade Wall Tapestry",
    price: 18500,
    originalPrice: 35000,
    rating: 5,
    sizes: ["3x5", "4x5"],
    country: "Iran",
    color: "Olive Green",
    image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80"
  }
];