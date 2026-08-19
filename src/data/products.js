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

export const SIZES = ["2x6", "3x5", "4x5", "4x6", "5x7", "5x8", "6x7", "6x8", "6x9", "7x8", "7x9", "7x10", "8x9", "8x10", "8x11", "9x12"];

// Helper array of high quality curated Unsplash Rug/Carpet Images
const IMAGES = [
  "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=800&q=80"
];

const prefixes = ["Royal", "Imperial", "Grand", "Luxury", "Handcrafted", "Heritage", "Artisan", "Silk", "Vintage", "Modern", "Classic", "Premium", "Opulent", "Elite"];

// Dynamic products generator to guarantee high density for every filter combination
const generateAllProducts = () => {
  const items = [];
  let idCounter = 1;

  // Generate dense datasets for each Main Group & Sub-Category
  Object.keys(SUB_CATEGORIES).forEach((mainGroup) => {
    const subCats = SUB_CATEGORIES[mainGroup];

    subCats.forEach((subCat) => {
      // Loop through every country to ensure 10+ items per country/category combo
      COUNTRIES.forEach((country) => {
        COLORS.forEach((colorObj, colorIdx) => {
          const prefix = prefixes[(idCounter + colorIdx) % prefixes.length];
          
          // Determine price range based on category
          let basePrice = 12000;
          if (mainGroup === "Prayer Mat") basePrice = 2500;
          if (mainGroup === "Door Mat") basePrice = 850;
          if (mainGroup === "Artwork") basePrice = 18000;

          const price = basePrice + (idCounter * 17) % 15000;
          const originalPrice = price + 3500 + ((idCounter * 23) % 8000);
          const rating = (idCounter % 2 === 0) ? 5 : 4;
          
          // Provide multiple sizes per item so size filter works seamlessly
          const sizeList = (mainGroup === "Prayer Mat" || mainGroup === "Door Mat")
            ? ["6x8", "6x9", "7x8", "7x10", "8x10", "9x12"]
            : ["2x6", "3x5", "4x5","4x6", "5x7", "5x8", "6x7" ];

          items.push({
            id: String(idCounter),
            title: `${prefix} ${country} ${subCat}`,
            mainGroup: mainGroup,
            category: subCat,
            price: price,
            originalPrice: originalPrice,
            rating: rating,
            sizes: sizeList,
            country: country,
            color: colorObj.name,
            image: IMAGES[(idCounter - 1) % IMAGES.length]
          });

          idCounter++;
        });
      });
    });
  });

  return items;
};

export const PRODUCTS = generateAllProducts();