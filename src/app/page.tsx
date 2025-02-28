"use client";

import ContentTop from "@/components/organisms/ContentTop/ContentTop";
import "../styles/globals.css";
import AboutMe from "@/components/organisms/AboutMe/AboutMe";
import Experience from "@/components/organisms/Experience/Experience";
import { technologies } from "@/utils/mocks/data";

import FeaturedProjectContentContainer from "@/components/atoms/FeaturedProjectContentContainer/FeaturedProjectContentContainer";

export default function Home() {
  return (
    <div>
      <div style={{ color: "var(--primary)", fontSize: "var(--text-lg)" }}>
        <FeaturedProjectContentContainer
          title="Halycon Theme"
          description="A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm."
          stack={["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"]}
        />
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
