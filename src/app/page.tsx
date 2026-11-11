import ContentTop from "@/components/organisms/ContentTop/ContentTop";
import AboutMe from "@/components/organisms/AboutMe/AboutMe";
import Experience from "@/components/organisms/Experience/Experience";
import FeaturedProjects from "@/components/organisms/FeaturedProjects/FeaturedProjects";
import OtherProjects from "@/components/organisms/OtherProjects/OtherProjects";
import Contact from "@/components/organisms/Contact/Contact";

export default function Home() {
  return (
    <>
      <ContentTop />
      <AboutMe />
      <Experience />
      <FeaturedProjects />
      <OtherProjects />
      <Contact />
    </>
  );
}
