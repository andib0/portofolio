import type { Metadata } from "next";
import NotFoundContent from "@/components/molecules/NotFoundContent/NotFoundContent";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

const NotFound = () => (
  <NotFoundContent
    code="404"
    title="Page not found"
    text="The page you are looking for does not exist or has moved."
    linkLabel="Go home"
    linkHref="/"
  />
);

export default NotFound;
