import { useEffect, useRef, useState } from 'react';

// Shared scroll-reveal hook backed by a single IntersectionObserver.
// Returns [ref, isVisible]. Attach ref to the element you want to observe and
// drive your reveal transition off isVisible.
//
// Respects prefers-reduced-motion: when the user asks for reduced motion the
// content is revealed immediately (no observer, no transition dependency), so
// nothing ever stays stuck in its hidden/offset state.
const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function useReveal(options = {}) {
  const { threshold = 0.12, rootMargin = '0px', once = true } = options;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Reduced motion (or no IO support): reveal right away.
    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return undefined;
    }

    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
}
