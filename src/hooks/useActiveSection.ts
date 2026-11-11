"use client";

import { useEffect, useState } from "react";

/*
  Returns the id of the section the reader is currently in: the last section
  whose top edge has passed 40% of the viewport height. `watch` re-runs the
  lookup when the route changes, since the sections belong to the home page.
*/
export default function useActiveSection(
  ids: readonly string[],
  watch: string,
): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.4;
      let current: string | null = null;

      for (const el of elements) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom && elements.length > 0 && window.scrollY > 0) {
        current = elements[elements.length - 1].id;
      }

      setActive(current);
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [ids, watch]);

  return active;
}
