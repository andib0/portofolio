"use client";

import { useEffect } from "react";

/*
  Reveals every element with the "reveal-section" class as it scrolls into
  view. Called once from RevealInit in the root layout, so sections only need
  the class name. The hidden state lives in globals.css and is switched on by
  the inline script in the document head.

  `route` must change whenever the page does: the layout stays mounted across
  in-site navigation, so without it the sections of the next page would never
  be observed and would stay hidden.
*/
export default function useScrollReveal(route: string) {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      ".reveal-section:not(.is-revealed)",
    );

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    targets.forEach((el) => {
      // Anything already on screen appears at once instead of waiting.
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("is-revealed");
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [route]);
}
