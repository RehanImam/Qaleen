import React, { useState } from 'react';

const WHATSAPP_NUMBER = '919905763301';

const createWhatsAppUrl = (message) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export default function CustomPage({ navigateTo }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeLightbox, setActiveLightbox] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToProcess = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // WhatsApp Messages per prompt specs
  const generalMessage = "Hi Qaleen Bhaiya! I'd like to enquire about a custom order.";
  const carpetMessage = "Hi! I'm interested in a custom carpet — could someone help me with sizing and design options?";
  const frameMessage = "Hi! I'm interested in a custom frame — could someone guide me through materials and sizes?";
  const wallMessage = "Hi! I'd like a consultation for custom wall design for my space.";

  const services = [
    {
      id: '01',
      tag: '01 · BESPOKE WEAVING',
      title: 'Carpets Woven to Your Room',
      subtitle: 'From intimate bedside runners to grand architectural palace sizes.',
      description:
        'Every room has distinct acoustics, lighting, and floor dimensions. We weave carpets tailored millimeter-perfect to your sanctuary. Choose from hand-knotted, hand-tufted, or flat-weave constructions with handspun highland wool, pure mulberry silk, bamboo silk, or organic jute.',
      highlights: [
        'Custom sizing up to 24 × 16 ft seamless single weave',
        'Physical yarn pom-pom & color strike-off swatches',
        '4 to 8 weeks turnaround by master weavers in Bhadohi & Kashmir',
      ],
      image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=85',
      ctaText: 'Chat About Custom Carpets',
      waMessage: carpetMessage,
      reverse: false,
    },
    {
      id: '02',
      tag: '02 · ARCHIVAL FRAMING',
      title: 'Frames Built Around Your Art',
      subtitle: 'Custom mouldings, museum glass, and hand-finished profiles.',
      description:
        'Art should never be compromised by generic store-bought sizes. Our master framers craft artisanal encasements for original canvas paintings, Persian miniature art, heritage textiles, mirrors, and collector memorabilia. Each frame balances structural longevity with aesthetic balance.',
      highlights: [
        'Solid Teakwood, Sheesham, burnished brass, and hand-applied gold leafing',
        'Museum-grade 99% UV-filtering anti-reflective conservation glass',
        'Custom acid-free multi-ply matboards and floating shadowbox depths',
      ],
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85',
      ctaText: 'Chat About Custom Frames',
      waMessage: frameMessage,
      reverse: true,
    },
    {
      id: '03',
      tag: '03 · SPATIAL ARCHITECTURE',
      title: 'Walls Designed, Not Decorated',
      subtitle: 'Holistic spatial styling, acoustic tapestries, and gallery walls.',
      description:
        'Move beyond ordinary wall art. Our spatial design team collaborates with you or your architect to compose complete wall ecosystems: hand-loomed wall tapestries, modular framed gallery compositions, and textured sculptural surfaces engineered specifically for your ceiling height and natural lighting.',
      highlights: [
        'Complimentary virtual 2D/3D wall elevation scale renders',
        'Curated acoustic textile panels & grand textile installations',
        'End-to-end installation guidance and white-glove delivery',
      ],
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
      ctaText: 'Chat About Wall Design',
      waMessage: wallMessage,
      reverse: false,
    },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Consult on WhatsApp',
      desc: 'Send us room photos, rough dimensions, or your moodboard. An artisan design consultant connects directly with you.',
    },
    {
      num: '02',
      title: 'Design Concept',
      desc: 'We generate to-scale digital renders, recommend fibers and frame profiles, and courier physical yarn/finish swatches.',
    },
    {
      num: '03',
      title: 'Handcrafted',
      desc: 'Master artisans in Bhadohi or our custom wood studio handcraft your piece with time-honored heritage techniques.',
    },
    {
      num: '04',
      title: 'Delivered & Installed',
      desc: 'Insured doorstep delivery across India with seamless tracking, white-glove packaging, and installation support.',
    },
  ];

  const galleryProjects = [
    {
      title: 'Oversized Silk & Wool Living Room Carpet',
      location: 'Penthouse · New Delhi',
      category: 'Custom Carpet · 16×12 ft',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Solid Teak Float Frame for Heritage Kashmiri Textile',
      location: 'Private Villa · Mumbai',
      category: 'Custom Framing · Museum Glass',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Modular Dining Room Gallery Wall Ecosystem',
      location: 'Duplex Residence · Bengaluru',
      category: 'Custom Wall Design',
      image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Geometric Hand-Tufted Runner with Custom Dye Match',
      location: 'Boutique Retreat · Goa',
      category: 'Custom Runner · 22×4 ft',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Burnished Brass & Gold Leaf Beveled Mirror Encasement',
      location: 'Heritage Suite · Jaipur',
      category: 'Custom Framing',
      image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Hand-Loomed Woolen Acoustic Tapestry Wall',
      location: 'Architect Studio · Hyderabad',
      category: 'Custom Wall Installation',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=900&q=80',
    },
  ];

  const faqs = [
    {
      q: 'What is the minimum order size or budget for custom orders?',
      a: 'There is no minimum order constraint. We handcraft everything from compact 2×3 ft accent bedside rugs or single art frames to seamless 22×16 ft grand hall carpets and complete residential gallery wall collections.',
    },
    {
      q: 'What are the typical turnaround timelines?',
      a: 'Custom frames are typically hand-finished and dispatched within 7–10 business days. Hand-tufted carpets require approximately 3–4 weeks, while high-knot count hand-knotted heirloom carpets take 6–10 weeks depending on size and intricate knot density.',
    },
    {
      q: 'Where do you deliver and provide installation support?',
      a: 'We offer fully insured, complimentary doorstep delivery across India. For major metropolitan regions including Delhi NCR, Mumbai, Bengaluru, Hyderabad, and Kolkata, personalized white-glove installation support can be scheduled.',
    },
    {
      q: 'How do I ensure the carpet colors match my existing furniture and lighting?',
      a: 'We eliminate all guesswork. In addition to precision digital scale mockups, we courier physical dyed yarn pom-poms (swatches) directly to your home so you can inspect the fibers under your rooms natural and artificial light before weaving starts.',
    },
    {
      q: 'Can I transform my own artwork, sketch, or family heirloom into a carpet or frame?',
      a: 'Absolutely. Our design studio regularly translates architectural blueprints, client artwork, photography, or heirloom patterns into traditional master weaver graphs (naksha) for carpet weaving, or creates bespoke archival display cases for sentimental treasures.',
    },
  ];

  return (
    <div className="w-full bg-[#faf8f5] text-stone-800 font-serif">
      
      {/* ========================================================================= */}
      {/* A. HERO BANNER                                                            */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center justify-start overflow-hidden bg-stone-900 text-white">
        
        {/* Full-bleed workshop/artisan background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1594040226829-7f251ab46d80?auto=format&fit=crop&w=2000&q=85"
            alt="Artisans handcrafting custom carpets and bespoke pieces"
            className="w-full h-full object-cover object-center transform scale-102 transition-transform duration-1000"
          />
          {/* Subtle gradient overlay matching homepage hero */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/35" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32">
          <div className="max-w-2xl space-y-6">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-xs border border-white/20 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b89047]" />
              <span className="text-[11px] sm:text-xs font-sans font-medium tracking-[0.22em] uppercase text-stone-200">
                BESPOKE · MADE FOR YOUR SPACE
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.08]">
              Custom, Made{' '}
              <span className="italic font-serif text-[#d4af37] font-normal">
                for You
              </span>
            </h1>

            {/* Supporting Copy (under 20 words) */}
            <p className="text-sm sm:text-base md:text-lg font-light text-stone-200/90 tracking-wide font-sans leading-relaxed max-w-lg">
              Tailor-made carpets, archival framing, and curated wall architecture shaped precisely to your sanctuary.
            </p>

            {/* CTA Buttons Row */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={createWhatsAppUrl(generalMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#faf8f5] text-[#5c0612] px-8 py-4 text-xs font-sans font-semibold tracking-[0.2em] uppercase hover:bg-[#d4af37] hover:text-stone-900 transition-all shadow-lg active:scale-95 group"
              >
                <span>Start a Custom Order</span>
                <svg className="w-4 h-4 stroke-[2] transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <button
                type="button"
                onClick={scrollToProcess}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-sans font-medium tracking-[0.18em] uppercase text-stone-200 hover:text-white border border-white/30 hover:border-white transition-all bg-black/20 hover:bg-black/40 backdrop-blur-xs cursor-pointer"
              >
                <span>See how it works</span>
                <span className="text-xs">↓</span>
              </button>
            </div>

          </div>
        </div>

      </section>


      {/* ========================================================================= */}
      {/* B. INTRO STRIP                                                            */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-20 sm:pt-28 pb-12 sm:pb-16 text-center">
        <p className="text-xs font-sans font-medium tracking-[0.26em] text-[#b89047] uppercase mb-3">
          THREE WAYS TO CUSTOMISE
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-stone-900 leading-snug max-w-2xl mx-auto">
          Your Space,{' '}
          <span className="italic font-serif text-[#5c0612] font-normal">
            Your Story
          </span>
        </h2>
        <div className="w-12 h-px bg-[#b89047]/60 mx-auto my-5" />
        <p className="text-stone-600 font-sans text-xs sm:text-sm font-light tracking-wide max-w-xl mx-auto leading-relaxed">
          Every home possesses its own rhythm, architectural lines, and lighting. We sculpt pure natural raw materials into bespoke pieces that harmonize with your environment.
        </p>
      </section>


      {/* ========================================================================= */}
      {/* C. THREE SERVICE BANNERS (Core of the page)                              */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16 sm:space-y-24 pb-24 sm:pb-32">
        {services.map((service) => (
          <div
            key={service.id}
            className={`flex flex-col ${
              service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
            } items-stretch bg-white border border-stone-200/80 shadow-sm overflow-hidden group hover:border-stone-300 transition-all duration-500`}
          >
            {/* Image Block (~55% width on desktop) */}
            <div className="w-full lg:w-[55%] relative min-h-[360px] sm:min-h-[460px] lg:min-h-[520px] overflow-hidden bg-stone-100">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500" />
              
              {/* Numbered Tag on image corner */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3.5 py-1.5 bg-white/90 backdrop-blur-xs text-stone-900 font-serif text-xs sm:text-sm tracking-widest border border-stone-200/60 shadow-xs">
                {service.id}
              </div>
            </div>

            {/* Content Block (~45% width on desktop) */}
            <div className="w-full lg:w-[45%] p-8 sm:p-12 lg:p-14 flex flex-col justify-between bg-[#faf8f5]">
              <div className="space-y-4">
                
                {/* Eyebrow */}
                <div className="text-[11px] font-sans font-semibold tracking-[0.22em] text-[#b89047] uppercase">
                  {service.tag}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-900 tracking-tight leading-tight">
                  {service.title}
                </h3>
                <p className="font-serif italic text-sm sm:text-base text-stone-600">
                  {service.subtitle}
                </p>

                {/* Editorial Copy */}
                <p className="font-sans text-xs sm:text-sm font-light text-stone-600 leading-relaxed pt-2">
                  {service.description}
                </p>

                {/* Key Attributes Checklist */}
                <ul className="pt-2 space-y-2 font-sans text-xs text-stone-700 border-t border-stone-200/70">
                  {service.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5c0612] mt-1.5 shrink-0" />
                      <span className="font-light">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consultation WhatsApp CTA */}
              <div className="pt-8">
                <a
                  href={createWhatsAppUrl(service.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#5c0612] text-white px-8 py-3.5 text-xs font-sans font-semibold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all shadow-sm active:scale-95 group/btn"
                >
                  <span>{service.ctaText}</span>
                  <svg className="w-4 h-4 stroke-[1.8] transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

            </div>
          </div>
        ))}
      </section>


      {/* ========================================================================= */}
      {/* D. HOW IT WORKS (Process Section)                                         */}
      {/* ========================================================================= */}
      <section id="how-it-works" className="w-full bg-[#f4ece1]/70 border-y border-stone-200/70 py-20 sm:py-28">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
            <span className="text-xs font-sans font-medium tracking-[0.25em] text-[#b89047] uppercase block mb-2">
              SEAMLESS CONCIERGE PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-stone-900 tracking-tight">
              From Vision to Your Floor
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {processSteps.map((step, idx) => (
              <div key={step.num} className="relative bg-[#faf8f5] p-7 border border-stone-200/80 flex flex-col justify-between space-y-4 shadow-2xs hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-full bg-[#5c0612] text-white font-serif text-sm font-medium flex items-center justify-center">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-sans font-medium text-stone-400 tracking-widest uppercase">
                      STEP {idx + 1}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-medium text-stone-900 tracking-tight mb-2">
                    {step.title}
                  </h4>
                  <p className="font-sans text-xs text-stone-600 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-200/50">
                  <span className="text-[10px] font-sans text-[#b89047] uppercase tracking-wider font-semibold">
                    100% Artisan Made
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* E. INSPIRATION GALLERY                                                    */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-stone-200/80 pb-6">
          <div>
            <span className="text-xs font-sans font-medium tracking-[0.25em] text-[#b89047] uppercase block mb-2">
              COMPLETED ARCHIVES
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-stone-900 tracking-tight">
              Crafted for Discerning Spaces
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-stone-500 font-light mt-3 md:mt-0 max-w-sm">
            A curation of bespoke commissions delivered across private estates, penthouses, and studios.
          </p>
        </div>

        {/* 3-Column Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryProjects.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveLightbox(item)}
              className="group cursor-pointer flex flex-col bg-white border border-stone-200/80 overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 backdrop-blur-xs text-stone-900 text-xs font-sans px-4 py-2 uppercase tracking-widest font-medium shadow-md">
                    View Project
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-5 space-y-1 bg-[#faf8f5]">
                <span className="text-[10px] font-sans uppercase tracking-wider text-[#b89047] font-semibold block">
                  {item.category}
                </span>
                <h4 className="font-serif text-sm sm:text-[15px] font-medium text-stone-900 line-clamp-1 group-hover:text-[#5c0612] transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] font-sans text-stone-400 font-light">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ========================================================================= */}
      {/* F. FAQ ACCORDION                                                          */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#f8f4ed]/60 border-t border-stone-200/70 py-20 sm:py-28">
        <div className="w-full max-w-3xl mx-auto px-6">
          
          <div className="text-center mb-12">
            <span className="text-xs font-sans font-medium tracking-[0.25em] text-[#b89047] uppercase block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl font-light text-stone-900 tracking-tight">
              Bespoke Services FAQ
            </h2>
          </div>

          <div className="divide-y divide-stone-200 border-y border-stone-200 bg-white shadow-2xs">
            {faqs.map((faq, idx) => (
              <div key={idx} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left text-sm sm:text-base font-serif font-medium text-stone-900 hover:text-[#5c0612] cursor-pointer"
                >
                  <span className="pr-4">{faq.q}</span>
                  <span className="font-sans text-stone-400 font-light text-lg shrink-0">
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-1 font-sans text-xs sm:text-sm text-stone-600 font-light leading-relaxed border-t border-stone-100 bg-[#faf8f5]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Consultation Prompt */}
          <div className="text-center mt-12 space-y-3">
            <p className="font-sans text-xs text-stone-500">
              Have specific architectural blueprints or unconventional requirements?
            </p>
            <a
              href={createWhatsAppUrl(generalMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-sans font-semibold tracking-widest text-[#5c0612] uppercase hover:underline underline-offset-4"
            >
              <span>Speak with a Lead Consultant on WhatsApp</span>
              <span>→</span>
            </a>
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* LIGHTBOX MODAL FOR GALLERY                                                */}
      {/* ========================================================================= */}
      {activeLightbox && (
        <div 
          onClick={() => setActiveLightbox(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-[#faf8f5] max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col relative"
          >
            <button
              type="button"
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>
            <div className="relative aspect-[16/11] bg-stone-900 overflow-hidden">
              <img
                src={activeLightbox.image}
                alt={activeLightbox.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-stone-200">
              <div>
                <span className="text-[10px] font-sans tracking-widest uppercase text-[#b89047] font-semibold block mb-1">
                  {activeLightbox.category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-medium text-stone-900">
                  {activeLightbox.title}
                </h3>
                <p className="font-sans text-xs text-stone-500 mt-1">
                  {activeLightbox.location}
                </p>
              </div>
              <a
                href={createWhatsAppUrl(`Hi Qaleen Bhaiya! I saw your completed project "${activeLightbox.title}" and would like to commission something similar.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#5c0612] text-white px-6 py-3 text-xs font-sans font-semibold tracking-wider uppercase hover:bg-stone-900 transition-colors shrink-0 shadow-sm"
              >
                <span>Commission Similar</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
