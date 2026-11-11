import type { Metadata } from "next";
import Cv from "@/components/organisms/Cv/Cv";
import { cv } from "@/utils/mocks/data";

export const metadata: Metadata = {
  title: "CV",
  description: cv.summary,
  /* Relative to this page's own path, so "./" is /cv/. */
  alternates: { canonical: "./" },
};

export default function CvPage() {
  return <Cv />;
}
