import React, { useState, useRef } from 'react';

const WHATSAPP_NUMBER = '919905763301';

const createWhatsAppUrl = (message) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

const PROJECTS_DATA = [
  // ==========================================
  // CUSTOM CARPETS
  // ==========================================
  {
    id: 'c1',
    category: 'carpets',
    categoryLabel: 'Custom Carpet',
    title: 'Bespoke Living Room Silk-Wool Carpet',
    location: 'Malabar Hill · Mumbai',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    description:
      'The client required an expansive centerpiece to anchor a sea-facing double-height living room without competing with natural light. We formulated a soft champagne and slate gradient combining handspun New Zealand wool and pure mulberry silk for a subtle directional sheen that changes with the coastal afternoon sun.',
    specs: {
      material: 'Mulberry Silk & NZ Highland Wool',
      size: '16 × 12 ft (Seamless Weave)',
      timeline: '7 Weeks from Dye-Match Approval',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Bespoke Living Room Silk-Wool Carpet — Malabar Hill" and would like to enquire about a similar custom carpet.',
  },
  {
    id: 'c2',
    category: 'carpets',
    categoryLabel: 'Custom Runner',
    title: 'Botanical Heritage Hallway Runner',
    location: 'Bandra West · Mumbai',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=85',
    description:
      'A restored art deco bungalow corridor demanded a durable yet elegant floor runner that respected original terrazzo borders. We hand-tufted a continuous 24-foot runner utilizing natural indigo and madder root plant dyes with an organic low-profile pile that withstands heavy family footfall while dampening corridor echo.',
    specs: {
      material: '100% Hand-Dyed Bikaner Wool',
      size: '24 × 4 ft (Continuous Single Piece)',
      timeline: '4 Weeks Hand-Tufted',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Botanical Heritage Hallway Runner — Bandra West" and would like to enquire about a custom hallway runner.',
  },
  {
    id: 'c3',
    category: 'carpets',
    categoryLabel: 'Custom Carpet',
    title: 'Sculpted High-Low Living Room Carpet',
    location: 'Jubilee Hills · Hyderabad',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=85',
    description:
      'Working closely with the interior architect, we engineered an asymmetrical hand-sheared wool carpet to fit around custom curved Italian sectional seating. Multiple pile heights create tactile topography underfoot, catching soft ambient downlighting and creating warmth across monolithic limestone tiles.',
    specs: {
      material: 'Semi-Worsted Wool & Bamboo Silk',
      size: '18 × 14 ft (Custom Contour Cut)',
      timeline: '6 Weeks Crafting & Hand-Carving',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Sculpted High-Low Living Room Carpet — Jubilee Hills" and would like to enquire about a custom sculpted rug.',
  },
  {
    id: 'c4',
    category: 'carpets',
    categoryLabel: 'Custom Carpet',
    title: 'Tone-on-Tone Penthouse Master Suite Carpet',
    location: 'Golf Links · New Delhi',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
    description:
      'For a peaceful minimalist bedroom retreat, the homeowner wanted cloud-like comfort with zero visual noise. Our master weavers in Bhadohi crafted an ultra-plush 1800-GSM bamboo silk carpet with an organic micro-ribbed border that frames the floating teak bedstead seamlessly.',
    specs: {
      material: 'Pure Bamboo Silk (High Lustre)',
      size: '14 × 10 ft',
      timeline: '5 Weeks Turnaround',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Tone-on-Tone Penthouse Master Suite Carpet — Golf Links" and would like to discuss custom bedroom carpets.',
  },
  {
    id: 'c5',
    category: 'carpets',
    categoryLabel: 'Custom Dhurrie',
    title: 'Dining Pavilion Handwoven Flatweave',
    location: 'Assagao · Goa',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    description:
      'Designed for an open-air verandah dining room subjected to tropical coastal humidity. We wove an organic unbleached wool and natural golden jute flatweave with a reversible geometric border that repels dust, breathes naturally, and accommodates heavy dining chair movement effortlessly.',
    specs: {
      material: 'Organic Golden Jute & Raw Wool',
      size: '12 × 9 ft (Reversible Flatweave)',
      timeline: '3 Weeks Handloom Weave',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Dining Pavilion Handwoven Flatweave — Assagao" and would like to enquire about custom dining dhurries.',
  },
  {
    id: 'c6',
    category: 'carpets',
    categoryLabel: 'Custom Carpet',
    title: 'Contemporary Library Medallion Carpet',
    location: 'Alipore · Kolkata',
    image: 'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?auto=format&fit=crop&w=1200&q=85',
    description:
      'The client wished to reimagine a family 19th-century heirloom motif in modern scale for a walnut-paneled private study. We deconstructed the classical central medallion, rendering it in an oversized monochrome terracotta and bone palette with 120 hand-tied knots per square inch.',
    specs: {
      material: 'Handspun Indian Highland Wool',
      size: '15 × 11 ft',
      timeline: '8 Weeks Hand-Knotted',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Contemporary Library Medallion Carpet — Alipore" and would like to enquire about custom heritage carpets.',
  },
  {
    id: 'c7',
    category: 'carpets',
    categoryLabel: 'Custom Runner',
    title: 'Sweeping Curved Staircase Runner',
    location: 'Koregaon Park · Pune',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
    description:
      'Covering 22 canted marble steps across a winding spiral stair. We templated each riser on-site in Pune before weaving a continuous hand-tufted runner with reinforced latex backing and antiqued solid brass stair rods for a timeless, quiet ascent.',
    specs: {
      material: 'High-Density Wool (Commercial Grade)',
      size: '42 Linear ft × 34 inches',
      timeline: '5 Weeks + On-Site Installation',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Sweeping Curved Staircase Runner — Pune" and would like to enquire about custom staircase runners.',
  },
  {
    id: 'c8',
    category: 'carpets',
    categoryLabel: 'Custom Carpet',
    title: 'Circular Courtyard Medallion Rug',
    location: 'Civil Lines · Jaipur',
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=1200&q=85',
    description:
      'A sun-drenched internal courtyard surrounded by heritage arched verandas required a grounding circular rug. Master artisans in Bhadohi hand-knotted a 10-foot medallion rug inspired by traditional Rajasthani jali filigree using undyed virgin sheep wool.',
    specs: {
      material: '100% Undyed Virgin Highland Wool',
      size: '10 ft Diameter (Seamless Circular Weave)',
      timeline: '6 Weeks Hand-Knotted',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Circular Courtyard Medallion Rug — Jaipur" and would like to enquire about a custom circular rug.',
  },
  {
    id: 'c9',
    category: 'carpets',
    categoryLabel: 'Custom Carpet',
    title: 'Sunken Conversation Pit Custom Rug',
    location: 'Banjara Hills · Hyderabad',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=85',
    description:
      'Engineered specifically for a retro-inspired sunken conversation pit. We measured millimeter tolerances for the multi-tiered floor transitions, crafting a high-density, ultra-cushioned hand-tufted rug with seamless perimeter binding.',
    specs: {
      material: 'Semi-Worsted Wool & Organic Cotton Base',
      size: '15 × 15 ft Octagonal Shape',
      timeline: '5 Weeks Handcrafting',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Sunken Conversation Pit Custom Rug — Hyderabad" and would like to enquire about custom pit rugs.',
  },
  {
    id: 'c10',
    category: 'carpets',
    categoryLabel: 'Custom Dhurrie',
    title: 'Lakefront Verandah Weather-Resistant Rug',
    location: 'Lake Pichola · Udaipur',
    image: 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=1200&q=85',
    description:
      'For a shaded lakefront terrace exposed to misty morning moisture and strong sunlight, we handwove a durable flatweave utilizing solution-dyed natural wool and recycled fibers that resist UV fading and retain their supple texture.',
    specs: {
      material: 'UV-Stabilized Wool & Natural Flax',
      size: '16 × 10 ft Reversible Weave',
      timeline: '4 Weeks Loom Production',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Lakefront Verandah Weather-Resistant Rug — Udaipur" and would like to enquire about verandah rugs.',
  },
  {
    id: 'c11',
    category: 'carpets',
    categoryLabel: 'Custom Carpet',
    title: 'Minimalist Architectural Grid Carpet',
    location: 'Whitefield · Bengaluru',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
    description:
      'A tech entrepreneur modern concrete-and-glass home needed acoustic dampening without heavy ornamentation. We designed a restrained micro-grid carpet with tone-on-tone charcoal sheared accents that absorbs sound while celebrating brutalist architecture.',
    specs: {
      material: 'New Zealand Wool & Bamboo Silk Ribs',
      size: '18 × 12 ft',
      timeline: '6 Weeks Hand-Tufted',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Minimalist Architectural Grid Carpet — Bengaluru" and would like to enquire about a modern grid carpet.',
  },
  {
    id: 'c12',
    category: 'carpets',
    categoryLabel: 'Custom Runner',
    title: 'Heirloom Bedroom Accent Runner Pair',
    location: 'Alipore · Kolkata',
    image: 'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&w=1200&q=85',
    description:
      'A matched pair of bedside runners woven in luminous mulberry silk for an understated colonial bedroom. Delicate ivory palmettes float across a muted sage field, providing an exquisite, soft touch upon waking.',
    specs: {
      material: 'Pure Mulberry Silk on Cotton Warp',
      size: 'Pair of 10 × 3 ft Runners',
      timeline: '5 Weeks Hand-Knotted',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Heirloom Bedroom Accent Runner Pair — Kolkata" and would like to enquire about bedside runners.',
  },

  // ==========================================
  // CUSTOM FRAMES
  // ==========================================
  {
    id: 'f1',
    category: 'frames',
    categoryLabel: 'Custom Framing',
    title: 'Burma Teak Float Frame for Heritage Pichwai',
    location: 'Vasant Vihar · New Delhi',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85',
    description:
      'A rare hand-painted devotional Pichwai on antique cotton required conservation framing that respected delicate frayed selvedges. We created a deep floating teak encasement with hand-finished wax polish, acid-free rag backing, and anti-reflective 99% UV-filtering museum glass.',
    specs: {
      material: 'Reclaimed Burma Teak & Tru Vue Museum Glass',
      size: '5 × 4 ft Framed Dimensions',
      timeline: '10 Days Archival Studio Build',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Burma Teak Float Frame for Heritage Pichwai" and would like to enquire about archival textile framing.',
  },
  {
    id: 'f2',
    category: 'frames',
    categoryLabel: 'Custom Framing',
    title: 'Gold Leaf Miniature Encasements',
    location: 'Cuffe Parade · Mumbai',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85',
    description:
      'A collector private triptych of 18th-century Persian miniatures was brought into our studio. We hand-carved slim hardwood mouldings, applied traditional water-gilded 24k gold leafing with agate burnishing, and lined each mount with natural unbleached tussar silk matting.',
    specs: {
      material: 'Water-Gilded 24k Gold Leaf & Raw Silk Mount',
      size: 'Set of 3 (Each 18 × 14 inches)',
      timeline: '12 Days Artisanal Finishing',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Gold Leaf Miniature Encasements — Cuffe Parade" and would like to enquire about gold leaf framing.',
  },
  {
    id: 'f3',
    category: 'frames',
    categoryLabel: 'Custom Framing',
    title: 'Burnished Brass Grand Architectural Mirror',
    location: 'Sadashivanagar · Bengaluru',
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=1200&q=85',
    description:
      'Crafted for an expansive foyer to reflect ambient morning garden views. We bent and welded solid 3mm architectural brass into a softly rounded arch profile, hand-patinated the metal to a warm antique bronze tone, and encased a premium 6mm beveled silver mirror.',
    specs: {
      material: 'Solid Brass (Hand-Patinated) & 6mm Float Glass',
      size: '7 × 3.5 ft Floor-Standing Arch',
      timeline: '14 Days Metal Crafting & Polishing',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Burnished Brass Grand Architectural Mirror" and would like to enquire about a custom brass frame.',
  },
  {
    id: 'f4',
    category: 'frames',
    categoryLabel: 'Custom Framing',
    title: 'Preservation Shadowbox for Antique Cartography',
    location: 'Boat Club Road · Chennai',
    image: 'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&w=1200&q=85',
    description:
      'An authentic 1740 copperplate map of South Asia on brittle rag paper required specialized stabilization. Our conservator floating-mounted the map onto conservation cotton rag board within a smoked Sheesham shadowbox with hidden perimeter desiccant chambers to prevent tropical foxing.',
    specs: {
      material: 'Smoked Sheesham Wood & Archival Micro-Environment',
      size: '42 × 32 inches',
      timeline: '8 Days Conservation Setup',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Preservation Shadowbox for Antique Cartography" and would like to enquire about antique framing.',
  },
  {
    id: 'f5',
    category: 'frames',
    categoryLabel: 'Custom Framing',
    title: 'Minimalist Bleached Oak Contemporary Gallery Suite',
    location: 'Alibaug Private Villa',
    image: 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=1200&q=85',
    description:
      'A series of 8 architectural monochrome photographs needed a clean, Nordic-inspired presentation for a coastal weekend villa. We milled ultra-slim 15mm solid white oak frames with continuous grain corners and deep 8-ply museum matboards.',
    specs: {
      material: 'Solid European White Oak & 8-Ply Cotton Mats',
      size: 'Suite of 8 Frames (Each 24 × 20 inches)',
      timeline: '7 Days Fabrication',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Minimalist Bleached Oak Contemporary Gallery Suite — Alibaug" and would like to enquire about custom gallery frames.',
  },
  {
    id: 'f6',
    category: 'frames',
    categoryLabel: 'Custom Framing',
    title: 'Dark Wenge Float Frame for Modern Canvas',
    location: 'Defence Colony · New Delhi',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=85',
    description:
      'A heavily textured abstract oil painting on linen required framing that protected edges without concealing paint impasto. We constructed a floating profile with a 12mm air reveal, finished in deep matte ebony wenge stain that lets the artwork float freely inside.',
    specs: {
      material: 'Solid Ashwood with Ebony Wenge Stain',
      size: '6 × 4.5 ft Canvas Float',
      timeline: '6 Days Build & Delivery',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Dark Wenge Float Frame for Modern Canvas" and would like to enquire about canvas floating frames.',
  },
  {
    id: 'f7',
    category: 'frames',
    categoryLabel: 'Custom Framing',
    title: 'Handwoven Ikat Silk Preservation Mount',
    location: 'Banjara Hills · Hyderabad',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    description:
      'An antique Pochampally double-ikat silk textile displayed in a hand-distressed rosewood shadowbox. Sealed with acid-free Japanese Mulberry paper backing and spacer strips to ensure the delicate silk threads never press directly against the glass.',
    specs: {
      material: 'Distressed Indian Rosewood & Tru Vue UV Glass',
      size: '48 × 36 inches',
      timeline: '8 Days Archival Mount',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Handwoven Ikat Silk Preservation Mount — Hyderabad" and would like to enquire about textile preservation framing.',
  },
  {
    id: 'f8',
    category: 'frames',
    categoryLabel: 'Custom Framing',
    title: 'Antique Silver Leaf Fluted Foyer Mirror',
    location: 'Koregaon Park · Pune',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    description:
      'Hand-carved fluted hardwood profile gilded with genuine silver leaf and gently distressed with an antiqued umber wash. The 6mm beveled mirror creates an luminous statement for a sunlit villa entryway.',
    specs: {
      material: 'Silver Leaf, Hardwood & 6mm Beveled Glass',
      size: '6.5 × 3 ft Rectangular Mirror',
      timeline: '10 Days Custom Carving & Gilding',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Antique Silver Leaf Fluted Foyer Mirror — Pune" and would like to enquire about custom mirrors.',
  },
  {
    id: 'f9',
    category: 'frames',
    categoryLabel: 'Custom Framing',
    title: 'Precision Blueprint Triptych Encasements',
    location: 'Bandra Kurla Complex · Mumbai',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=85',
    description:
      'Original 1960s architectural blueprints for a landmark marine project. We encapsulated the ammonia-sensitive cyanotype prints within airtight, non-reactive anodized bronze aluminum mouldings with specialized optical acrylic.',
    specs: {
      material: 'Anodized Bronze Aluminum & Optium Acrylic',
      size: 'Set of 3 (Each 40 × 30 inches)',
      timeline: '7 Days Precision Framing',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Precision Blueprint Triptych Encasements — BKC" and would like to enquire about architectural framing.',
  },
  {
    id: 'f10',
    category: 'frames',
    categoryLabel: 'Custom Framing',
    title: 'Vintage Zari Saree Pallu Shadowbox',
    location: 'Mylapore · Chennai',
    image: 'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?auto=format&fit=crop&w=1200&q=85',
    description:
      'A century-old Kanchipuram wedding saree woven with real gold zari was gently conserved and float-mounted on linen within a deep aged teakwood case, preserving three generations of family heritage.',
    specs: {
      material: 'Reclaimed Solid Teak & Belgian Linen Field',
      size: '52 × 40 inches Deep Shadowbox',
      timeline: '9 Days Textile Conservation',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Vintage Zari Saree Pallu Shadowbox — Chennai" and would like to enquire about heirloom framing.',
  },
  {
    id: 'f11',
    category: 'frames',
    categoryLabel: 'Custom Framing',
    title: 'Brushed Brass Float Casing for Raw Canvas',
    location: 'Golf Course Road · Gurgaon',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=85',
    description:
      'A dramatic 7-foot unprimed linen artwork required an ultra-slim metal encasement that felt architectural and unyielding. We fabricated custom hairline-brushed solid brass L-angle mouldings with hidden internal corner splines.',
    specs: {
      material: 'Architectural Solid Brass (Hairline Brushed)',
      size: '7 × 5 ft Canvas Frame',
      timeline: '11 Days Metal Crafting',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Brushed Brass Float Casing for Raw Canvas — Gurgaon" and would like to enquire about metal float frames.',
  },

  // ==========================================
  // CUSTOM WALL DESIGN
  // ==========================================
  {
    id: 'w1',
    category: 'walls',
    categoryLabel: 'Custom Wall Design',
    title: 'Modular Living Room Curated Gallery Wall',
    location: 'Indiranagar · Bengaluru',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=85',
    description:
      'A client with an eclectic collection of contemporary watercolors, heritage prints, and family photographs sought a cohesive, non-chaotic layout. We modeled full digital scale elevation wall studies, unified the framing profiles in alternating brass and stained oak, and completed laser-guided on-site installation.',
    specs: {
      material: 'Mixed Oak, Brass & Archival Rag Mounts',
      size: '14 × 9 ft Wall Coverage (9 Curated Pieces)',
      timeline: '2 Weeks Consultation & Installation',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Modular Living Room Curated Gallery Wall — Bengaluru" and would like to consult on custom gallery wall design.',
  },
  {
    id: 'w2',
    category: 'walls',
    categoryLabel: 'Custom Wall Design',
    title: 'Hand-Loomed Acoustic Woolen Tapestry Wall',
    location: 'Whitefield · Bengaluru',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
    description:
      'Created for a contemporary media lounge with harsh audio slap-back reverberation caused by floor-to-ceiling glass. We hand-wove a three-dimensional textural wool wall tapestry mounted over high-density acoustic dampening substrate, combining warm visual art with verified NRC 0.85 acoustic absorption.',
    specs: {
      material: 'Virgin Wool, Jute & Acoustic Core Panel',
      size: '12 × 7 ft Suspended Wall Installation',
      timeline: '5 Weeks Loom Weaving & Mounting',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Hand-Loomed Acoustic Woolen Tapestry Wall" and would like to enquire about acoustic wall tapestries.',
  },
  {
    id: 'w3',
    category: 'walls',
    categoryLabel: 'Custom Wall Design',
    title: 'Double-Height Stairwell Salon Wall',
    location: 'Sector 42 · Gurgaon',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85',
    description:
      'Transforming a cavernous 18-foot stairwell void into an immersive storytelling journey. Our team curated 14 architectural lithographs, calibrated custom drop-hang cable hardware, and aligned frame intervals mathematically along the stair pitch so artwork reads naturally as one ascends.',
    specs: {
      material: 'Tempered Glass, Concealed French Cleat Anchors',
      size: '18 ft Vertical Elevation (14-Frame Suite)',
      timeline: '3 Weeks Design, Production & Scaffold Hanging',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Double-Height Stairwell Salon Wall — Gurgaon" and would like to consult on stairwell wall design.',
  },
  {
    id: 'w4',
    category: 'walls',
    categoryLabel: 'Custom Wall Design',
    title: 'Sculptural Lime Plaster & Framed Triptych',
    location: 'Worli · Mumbai',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    description:
      'For a serene sea-view dining room, we unified the entire feature wall. Our artisans applied a fluted, hand-troweled Venetian lime plaster finish behind three large-scale minimalist monochrome canvases, crafting a tranquil dialogue between stone texture and framed art.',
    specs: {
      material: 'Venetian Lime Plaster, Smoked Ashwood Frames',
      size: '16 × 10 ft Full Elevation',
      timeline: '2.5 Weeks Full Installation',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Sculptural Lime Plaster & Framed Triptych — Worli" and would like to enquire about integrated wall finishes.',
  },
  {
    id: 'w5',
    category: 'walls',
    categoryLabel: 'Custom Wall Design',
    title: 'Continuous Tussar Silk Dining Wall Ecosystem',
    location: 'Jubilee Hills · Hyderabad',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
    description:
      'An intimate evening dining alcove lined in hand-spun wild tussar silk panels trimmed with brushed brass shadow beads. We integrated indirect warm cove LED reveals that wash down the raw slub texture, creating radiant atmospheric intimacy.',
    specs: {
      material: 'Handloom Raw Silk Fabric & Architectural Brass Trim',
      size: '20 × 9 ft Wall Covering',
      timeline: '3 Weeks Tailoring & Wall Application',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Continuous Tussar Silk Dining Wall Ecosystem" and would like to enquire about custom textile walls.',
  },
  {
    id: 'w6',
    category: 'walls',
    categoryLabel: 'Custom Wall Design',
    title: 'Executive Study Symmetrical Archive Grid',
    location: 'Connaught Place · New Delhi',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
    description:
      'For a premier legal chambers conference room, we designed a stately 12-frame grid of archival 1920s Lutyens architectural drawings. Precision millimeter tolerances between identical smoked-oak frames create an authoritative, museum-like gravitas.',
    specs: {
      material: 'Smoked Oak, Ultra-Clear Anti-Glare Glass',
      size: '12-Frame Grid (Total 12 × 7 ft)',
      timeline: '10 Days Preparation & Grid Mounting',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Executive Study Symmetrical Archive Grid" and would like to consult on executive wall design.',
  },
  {
    id: 'w7',
    category: 'walls',
    categoryLabel: 'Custom Wall Design',
    title: 'Acoustic Felt & Fluted Oak Boardroom Elevation',
    location: 'Cyber City · Gurgaon',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    description:
      'Engineered for an executive boardroom with excessive video call reverberation. We combined hand-finished fluted natural oak acoustic wall battens with charcoal recycled acoustic felt backing and brushed bronze shadow trims.',
    specs: {
      material: 'Architectural Fluted Oak & NRC 0.90 Acoustic Felt',
      size: '22 × 10 ft Full Elevation',
      timeline: '3 Weeks Precision Build',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Acoustic Felt & Fluted Oak Boardroom Elevation — Gurgaon" and would like to consult on acoustic walls.',
  },
  {
    id: 'w8',
    category: 'walls',
    categoryLabel: 'Custom Wall Design',
    title: 'Three-Story Atrium Suspended Textile Mural',
    location: 'Jubilee Hills · Hyderabad',
    image: 'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?auto=format&fit=crop&w=1200&q=85',
    description:
      'A breathtaking 26-foot vertical hand-knotted wool and mulberry silk textile tapestry designed to cascade through a central glass atrium skylight. Weighted with concealed internal brass battens to hang dead-plumb.',
    specs: {
      material: 'Highland Wool, Mulberry Silk & Concealed Brass Rigging',
      size: '26 × 6 ft Suspended Mural',
      timeline: '7 Weeks Loom Weaving & High-Access Rigging',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Three-Story Atrium Suspended Textile Mural — Hyderabad" and would like to enquire about grand tapestries.',
  },
  {
    id: 'w9',
    category: 'walls',
    categoryLabel: 'Custom Wall Design',
    title: 'Salon Wall of Botanical Lithographs',
    location: 'Civil Lines · Jaipur',
    image: 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=1200&q=85',
    description:
      'An organic salon cluster of 16 hand-colored 19th-century botanical lithographs for an expansive drawing room. We used matched walnut frames with hand-beveled moss green matting that harmonizes with garden views.',
    specs: {
      material: 'Natural Walnut, Tru Vue Glass & Cotton Rag Mats',
      size: '16-Frame Salon Cluster (16 × 8 ft Wall)',
      timeline: '12 Days Curation & Installation',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Salon Wall of Botanical Lithographs — Jaipur" and would like to consult on salon gallery walls.',
  },
  {
    id: 'w10',
    category: 'walls',
    categoryLabel: 'Custom Wall Design',
    title: 'Textured Plaster & Framed Textile Feature Wall',
    location: 'Boat Club Road · Chennai',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=85',
    description:
      'Combining hand-troweled earthen lime plaster with two inset framed vintage Kantha tapestries. The soft mineral plaster catches natural side-lighting, creating a timeless architectural gallery wall.',
    specs: {
      material: 'Earthen Lime Plaster, Teak Frames & Heirloom Kantha',
      size: '18 × 10 ft Feature Wall',
      timeline: '2.5 Weeks On-Site Application',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Textured Plaster & Framed Textile Feature Wall — Chennai" and would like to enquire about plaster feature walls.',
  },
  {
    id: 'w11',
    category: 'walls',
    categoryLabel: 'Custom Wall Design',
    title: 'Master Suite Belgian Linen Wall Cladding',
    location: 'Worli · Mumbai',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
    description:
      'An expansive sea-facing master bedroom wrapped in full-height upholstered Belgian linen panels with recessed smoked walnut reveals. Softens room acoustics while providing an understated luxury hotel feel.',
    specs: {
      material: '100% Belgian Linen, Acoustic Foam & Smoked Walnut',
      size: '24 × 10 ft Full Elevation',
      timeline: '2 Weeks Tailoring & Wall Installation',
    },
    waMessage:
      'Hi Qaleen Bhaiya! I saw your project "Master Suite Belgian Linen Wall Cladding — Worli" and would like to enquire about fabric wall paneling.',
  },
];

const CATEGORIES = [
  { id: 'carpets', label: 'CUSTOM CARPETS' },
  { id: 'frames', label: 'CUSTOM FRAMES' },
  { id: 'walls', label: 'CUSTOM WALL DESIGN' },
];

export default function ProjectPage({ navigateTo }) {
  const [activeCategory, setActiveCategory] = useState('carpets');
  const listTopRef = useRef(null);

  // Filter projects by active tab (all commissions shown continuously)
  const filteredProjects = PROJECTS_DATA.filter(
    (p) => p.category === activeCategory
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="w-full bg-[#faf8f5] text-stone-800 font-serif min-h-screen">
      
      {/* ========================================================================= */}
      {/* A. COMPACT PAGE HEADER                                                    */}
      {/* ========================================================================= */}
      <section className="w-full border-b border-stone-200/80 bg-gradient-to-b from-[#f4ece1]/80 to-[#faf8f5] pt-14 sm:pt-20 pb-12 sm:pb-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/70 border border-stone-200/80 rounded-full shadow-2xs mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5c0612]" />
            <span className="text-[11px] font-sans font-medium tracking-[0.22em] uppercase text-stone-700">
              REAL ROOMS, REAL WORK
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-stone-900 leading-tight">
            Our{' '}
            <span className="italic font-serif text-[#b89047] font-normal">
              Archives
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xs sm:text-sm md:text-base font-sans font-light text-stone-600 tracking-wide max-w-xl mx-auto mt-4 leading-relaxed">
            A look at the bespoke carpets, archival frames, and curated wall ecosystems we’ve brought to life for our clients across India.
          </p>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* B. CATEGORY SELECTOR (Sticky on scroll)                                  */}
      {/* ========================================================================= */}
      <div 
        ref={listTopRef}
        className="sticky top-0 z-20 bg-[#faf8f5]/95 backdrop-blur-md border-b border-stone-200/80 shadow-2xs py-3.5 sm:py-4 transition-all"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          
          {/* Horizontally scrollable pill container on mobile, centered on desktop */}
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`shrink-0 px-5 sm:px-6 py-2.5 text-xs font-sans tracking-[0.16em] uppercase rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#5c0612] text-white font-semibold shadow-sm'
                      : 'bg-white border border-stone-200/80 text-stone-600 hover:text-stone-900 hover:border-stone-300 font-medium'
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

        </div>
      </div>


      {/* ========================================================================= */}
      {/* C. PROJECT LIST                                                           */}
      {/* ========================================================================= */}
      <main className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
        
        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white border border-stone-200/80 p-12 max-w-xl mx-auto shadow-2xs">
            <span className="text-3xl mb-4 block text-[#b89047]">✦</span>
            <h3 className="font-serif text-2xl font-light text-stone-900 mb-2">
              More projects coming soon
            </h3>
            <p className="font-sans text-xs sm:text-sm text-stone-500 font-light max-w-md mx-auto mb-6">
              We are currently documenting newly installed pieces — but we would love to begin crafting yours today.
            </p>
            <a
              href={createWhatsAppUrl("Hi Qaleen Bhaiya! I'd like to consult on a custom project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#5c0612] text-white px-7 py-3 text-xs font-sans font-semibold tracking-widest uppercase hover:bg-stone-900 transition-colors shadow-sm"
            >
              <span>Consult on WhatsApp</span>
              <span>→</span>
            </a>
          </div>
        )}

        {/* List of Projects (All commissions shown continuously on one page) */}
        <div className="space-y-16 sm:space-y-20">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="group flex flex-col md:flex-row items-stretch bg-white border border-stone-200/80 shadow-2xs hover:shadow-md hover:border-stone-300 transition-all duration-300 overflow-hidden"
            >
              
              {/* Left: Project Image (≈45–50% width) */}
              <div className="w-full md:w-[48%] lg:w-[46%] relative overflow-hidden bg-stone-100 min-h-[300px] sm:min-h-[380px] lg:min-h-[420px]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors" />

                {/* Index tag */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-xs border border-stone-200/60 font-sans text-[11px] font-medium text-stone-700 tracking-wider uppercase">
                  #{idx + 1}
                </div>
              </div>

              {/* Right: Project Description & Story (≈50–55% width) */}
              <div className="w-full md:w-[52%] lg:w-[54%] p-6 sm:p-10 lg:p-12 flex flex-col justify-between bg-[#faf8f5]">
                
                <div className="space-y-4">
                  
                  {/* Category Chip & Location */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-block bg-[#f4ece1] text-[#5c0612] text-[10px] font-sans font-semibold tracking-[0.16em] uppercase px-2.5 py-1 border border-[#e8dac7]">
                      {project.categoryLabel}
                    </span>
                    <span className="text-stone-300">·</span>
                    <span className="text-xs font-sans text-stone-500 font-light tracking-wide">
                      {project.location}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal tracking-tight leading-snug group-hover:text-[#5c0612] transition-colors">
                    {project.title}
                  </h2>

                  {/* Storytelling Case-Study Paragraph (40–70 words) */}
                  <p className="font-sans text-xs sm:text-sm font-light text-stone-600 leading-relaxed pt-1">
                    {project.description}
                  </p>

                  {/* Specification Row */}
                  <div className="pt-4 border-t border-stone-200/70 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <span className="block text-[10px] font-sans font-medium text-[#b89047] uppercase tracking-wider">
                        Material & Craft
                      </span>
                      <span className="font-sans text-xs text-stone-700 font-light mt-0.5 block leading-tight">
                        {project.specs.material}
                      </span>
                    </div>

                    <div>
                      <span className="block text-[10px] font-sans font-medium text-[#b89047] uppercase tracking-wider">
                        Dimension / Scope
                      </span>
                      <span className="font-sans text-xs text-stone-700 font-light mt-0.5 block leading-tight">
                        {project.specs.size}
                      </span>
                    </div>

                    <div>
                      <span className="block text-[10px] font-sans font-medium text-[#b89047] uppercase tracking-wider">
                        Turnaround
                      </span>
                      <span className="font-sans text-xs text-stone-700 font-light mt-0.5 block leading-tight">
                        {project.specs.timeline}
                      </span>
                    </div>
                  </div>

                </div>

                {/* WhatsApp Enquiry Link */}
                <div className="pt-8 border-t border-stone-200/50 mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <a
                    href={createWhatsAppUrl(project.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-sans font-semibold tracking-[0.16em] uppercase text-[#5c0612] hover:text-stone-900 hover:underline underline-offset-4 transition-colors group/link"
                  >
                    <span>Enquire about a similar project</span>
                    <span className="transition-transform group-hover/link:translate-x-1">→</span>
                  </a>

                  <span className="text-[11px] font-sans text-stone-400 font-light">
                    Consultation via WhatsApp
                  </span>
                </div>

              </div>

            </article>
          ))}
        </div>


        {/* ========================================================================= */}
        {/* D. BACK TO TOP                                                            */}
        {/* ========================================================================= */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-stone-200/80 flex items-center justify-center">
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-stone-700 hover:text-[#5c0612] uppercase tracking-[0.16em] py-3 px-6 rounded-full bg-white border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-all shadow-2xs cursor-pointer group"
          >
            <span>Back to top</span>
            <span className="w-5 h-5 rounded-full bg-stone-100 group-hover:bg-[#5c0612] group-hover:text-white flex items-center justify-center transition-colors text-[11px]">
              ↑
            </span>
          </button>
        </div>

      </main>

    </div>
  );
}
