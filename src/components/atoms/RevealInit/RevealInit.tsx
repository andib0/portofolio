"use client";

import { usePathname } from "next/navigation";
import useScrollReveal from "@/hooks/useScrollReveal";

/* Mounts the scroll reveal observer once, and renews it on every page. */
const RevealInit = () => {
  useScrollReveal(usePathname());
  return null;
};

export default RevealInit;
