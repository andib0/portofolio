"use client";
import { Inter, Roboto_Mono } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/organisms/Header/Header";
import Footer from "@/components/organisms/Footer/Footer";
import SidePanel from "@/components/organisms/SidePanel/SidePanel";
import PanelOneContent from "@/components/molecules/PanelOneContent/PanelOneContent";
import PanelTwoContent from "@/components/molecules/PanelTwoContent/PanelTwoContent";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <html lang="en" style={{ height: "100%" }}>
      <body
        className={`${inter.className} ${robotoMono.className} `}
        style={{
          height: "100%",
          margin: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <QueryClientProvider client={queryClient}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              height: "100%",
            }}
          >
            <SidePanel left={false}>
              <PanelOneContent />
            </SidePanel>
            <div style={{ flex: 2, display: "flex", flexDirection: "column" }}>
              <Header />
              <main style={{ flex: 1 }}>{children}</main>
              <Footer />
            </div>
          </div>
          <SidePanel left={true}>
            <PanelTwoContent />
          </SidePanel>
        </QueryClientProvider>
      </body>
    </html>
  );
}
