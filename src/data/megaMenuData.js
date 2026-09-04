// Mega Menu Data Configuration for Qaleen Bhaiya Header Navigation

export const CARPET_MEGA_MENU = {
  id: 'carpet',
  title: 'Carpet',
  groups: [
    {
      title: 'By Origin',
      items: [
        'Indian Carpets',
        'Turkish Carpets',
        'Irani / Persian Carpets',
      ],
    },
    {
      title: 'By Style',
      items: [
        'Traditional / Oriental',
        'Contemporary / Modern',
        'Transitional',
        'Abstract',
      ],
    },
    {
      title: 'By Material',
      items: [
        'Wool',
        'Silk',
        'Bamboo Silk',
        'Viscose',
        'Jute',
        'Polyester & Acrylic',
        'Wool & Silk',
        'Wool & Viscose',
        'Wool & Bamboo Silk',
        'Wool & Jute',
      ],
    },
    {
      title: 'By Construction',
      items: [
        'Hand Knotted',
        'Hand Tufted',
      ],
    },
    {
      title: 'By Shape',
      items: [
        'Round',
        'Bedside Runners',
        'Irregular Shaped',
      ],
    },
    {
      title: 'By Room',
      items: [
        'Living Room',
        'Bed Room',
        'Dining Room',
        'Corridors',
      ],
    },
    {
      title: 'By Size',
      items: [
        '5x3 FT',
        '6x4 FT',
        '8x5 FT',
        '9x6 FT',
        '10x8 FT',
        '12x9 FT',
      ],
    },
    {
      title: 'Colour',
      isColorGroup: true,
      items: [
        { name: 'White / Ivory', swatch: '#fbfbf7', border: '#dcd8cc' },
        { name: 'Beige', swatch: '#d8c5ad' },
        { name: 'Black', swatch: '#1a1a1a' },
        { name: 'Grey', swatch: '#858688' },
        { name: 'Brown', swatch: '#6b4423' },
        { name: 'Blue', swatch: '#244b7a' },
        { name: 'Red', swatch: '#9e2a2b' },
        { name: 'Green', swatch: '#3d5a45' },
        { name: 'Yellow', swatch: '#d4a342' },
        { name: 'Orange', swatch: '#c86432' },
        { name: 'Pink', swatch: '#d98c9f' },
        {
          name: 'Multicolor',
          swatch: 'linear-gradient(135deg, #e0564c 0%, #f1b342 30%, #56a36c 60%, #3e73b2 100%)'
        },
      ],
    },
  ],
};

export const PRAYER_MAT_MEGA_MENU = {
  id: 'prayer mat',
  title: 'Prayer Mat',
  groups: [
    {
      title: 'By Origin',
      items: [
        'Turkish Prayer Mats',
        'Kashmiri Prayer Mats',
        'Syrian Prayer Mats',
        'Chinese Prayer Mats',
      ],
    },
    {
      title: 'By Style & Collection',
      items: [
        'Rawdah Inspired',
        'Couple Prayer Mats',
        'Kohinoor Collection',
      ],
    },
    {
      title: 'By Material',
      items: [
        'Viscose',
        'Polyester',
        'Bamboo Silk',
      ],
    },
    {
      title: 'By Construction & Finish',
      items: [
        'Digital Printed',
        'Foil Printed',
        'Hand Tufted',
        'Normal / Standard Finish',
      ],
    },
    {
      title: 'By Shape',
      items: [
        'Dome Shaped',
        'Rectangular',
      ],
    },
    {
      title: 'By Size',
      items: [
        'Adult',
        'Kids',
      ],
    },
    {
      title: 'By Weight',
      items: [
        'Lightweight',
        'Heavyweight',
      ],
    },
  ],
};

export const MEGA_MENU_REGISTRY = {
  'carpet': CARPET_MEGA_MENU,
  'prayer mat': PRAYER_MAT_MEGA_MENU,
  'artworks': null,   // Pluggable for future
  'custom': null,     // Pluggable for future
  'project': null,
  'blog': null,
};
