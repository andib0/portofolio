import type { Metadata, Viewport } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/organisms/Header/Header";
import Footer from "@/components/organisms/Footer/Footer";
import SidePanel from "@/components/organisms/SidePanel/SidePanel";
import PanelOneContent from "@/components/molecules/PanelOneContent/PanelOneContent";
import PanelTwoContent from "@/components/molecules/PanelTwoContent/PanelTwoContent";
import RevealInit from "@/components/atoms/RevealInit/RevealInit";
import { site } from "@/utils/mocks/data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const title = `${site.name} | ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(`${site.url}/`),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title,
    description: site.description,
    url: "./",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description: site.description },
};

export const viewport: Viewport = {
  themeColor: "#0a192f",
  colorScheme: "dark",
};

/*
  Turns the scroll reveal on before first paint, and only when motion is
  welcome. Without it every section is simply visible.
*/
const revealScript = `(function(){try{if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&"IntersectionObserver" in window){document.documentElement.setAttribute("data-reveal","on")}}catch(e){}})()`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
      </head>
      <body>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <Header />
        <SidePanel left={false}>
          <PanelOneContent />
        </SidePanel>
        <SidePanel left={true}>
          <PanelTwoContent />
        </SidePanel>
        <main id="content">{children}</main>
        <Footer />
        <RevealInit />
      </body>
    </html>
  );
}
