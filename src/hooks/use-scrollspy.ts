"use client";

import { useScroll } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePrevious } from "react-use";

function getMostVisibleElement(els: Element[]) {
  const viewportHeight = window.innerHeight;

  let max = 0;
  let mostVisibleEl = null;

  for (const el of Array.from(els)) {
    const rect = el.getBoundingClientRect();
    const height = rect.bottom - rect.top;
    const visible = {
      top: rect.top >= 0 && rect.top < viewportHeight,
      bottom: rect.bottom > 0 && rect.bottom < viewportHeight,
    };

    let visiblePx = 0;
    if (visible.top && visible.bottom) {
      visiblePx = height; // Whole element is visible
    } else if (visible.top) {
      visiblePx = viewportHeight - rect.top;
    } else if (visible.bottom) {
      visiblePx = rect.bottom;
    } else if (height > viewportHeight && rect.top < 0) {
      const absTop = Math.abs(rect.top);
      if (absTop < height) {
        visiblePx = height - absTop; // Part of the element is visible
      }
    }

    if (visiblePx > max) {
      max = visiblePx;
      mostVisibleEl = el;
    }
  }

  return mostVisibleEl;
}

// https://github.com/nuxt-themes/docus/blob/main/composables/useScrollspy.ts
/**
 * Scrollspy allows you to watch visible headings in a specific page.
 * Useful for table of contents live style updates.
 */
export function useScrollspy() {
  const observerRef = useRef<IntersectionObserver>();
  const [visibleHeadings, setVisibleHeadings] = useState<string[]>([]);
  const [activeHeadings, setActiveHeadings] = useState<string[]>([]);
  const previousVisibleHeadings = usePrevious(visibleHeadings);
  const { scrollYProgress } = useScroll();

  const [activeHeading, setActiveHeading] = useState<string>();

  const updateActiveHeading = useCallback(() => {
    const elements: Element[] = [];
    for (const heading of activeHeadings) {
      elements.push(document.getElementById(heading)!);
    }
    setActiveHeading(getMostVisibleElement(elements)?.id);
  }, [activeHeadings]);

  useEffect(() => {
    scrollYProgress.on("change", (v) => {
      updateActiveHeading();
    });

    return () => {
      scrollYProgress.clearListeners();
    };
  }, [scrollYProgress, updateActiveHeading]);

  useEffect(() => {
    updateActiveHeading();
  }, [updateActiveHeading]);

  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[]) =>
      entries.forEach((entry) => {
        const id = entry.target.id;

        if (entry.isIntersecting) {
          setVisibleHeadings((visibleHeadings) => [...visibleHeadings, id]);
        } else {
          setVisibleHeadings((visibleHeadings) =>
            visibleHeadings.filter((t) => t !== id)
          );
        }
      }),
    []
  );

  function updateHeadings(headings: Element[]) {
    headings.forEach((heading) => {
      observerRef.current?.observe(heading);
    });
  }

  useEffect(() => {
    const val = visibleHeadings;
    const oldVal = previousVisibleHeadings;

    if (val.length === 0) {
      setActiveHeadings(oldVal || []);
    } else {
      setActiveHeadings(val);
    }
  }, [previousVisibleHeadings, visibleHeadings]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(observerCallback);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [observerCallback]);

  return {
    visibleHeadings,
    activeHeadings,
    activeHeading,
    updateHeadings,
  };
}
