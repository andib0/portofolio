"use client";

import useScrollReveal from "@/hooks/useScrollReveal";

/* Mounts the scroll reveal observer once for the whole page. */
const RevealInit = () => {
  useScrollReveal();
  return null;
};

export default RevealInit;
