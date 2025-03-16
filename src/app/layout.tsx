import { Metadata } from "next";
import MainLayout from "./main-layout";

export const metadata: Metadata = {
  title: "Andi Basha",
  description: "Zero Technologies",
  keywords: "Zero Technologies",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
