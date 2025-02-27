"use client";
import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    const loadScrollReveal = async () => {
      try {
        const ScrollReveal = (await import("scrollreveal")).default;

        const sr = ScrollReveal({
          origin: "bottom",
          distance: "50px",
          duration: 1000,
          delay: 350,
          easing: "ease-out",
          reset: false,
        });

        sr.reveal(".reveal-section", {
          interval: 200,
        });
      } catch (error) {
        console.error("Error loading ScrollReveal:", error);
      }
    };

    loadScrollReveal();
  }, []);
}
