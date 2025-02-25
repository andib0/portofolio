"use client";

import ContentTop from "@/components/organisms/ContentTop/ContentTop";
import "../styles/globals.css";
import AboutMe from "@/components/organisms/AboutMe/AboutMe";
import Experience from "@/components/organisms/Experience/Experience";

const technologies = [
  "Tanstack Query",
  "Zustand",
  "i18n",
  "Axios",
  "Hook Form",
  "Scss",
  "Styled-components",
];

export default function Home() {
  return (
    <div>
      <div style={{ color: "var(--primary)", fontSize: "var(--text-lg)" }}>
        <ContentTop />
        <AboutMe
          items={technologies}
          alt="profile"
          imageSrc="/images/profile.jpg"
        />
        <Experience />
      </div>
    </div>
  );
}
