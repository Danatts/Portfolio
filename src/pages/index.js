import AboutSection from "@/components/AboutSection/AboutSection";
import ContactFloating from "@/components/ContactFloating/ContactFloating";
import ContactSection from "@/components/ContactSection/ContactSection";
import HomeSection from "@/components/HomeSection/HomeSection";
import Navbar from "@/components/Navbar/Navbar";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import SectionTemplate from "@/templates/SectionTemplate/SectionTemplate";

export default function Home() {
  return (
    <>
      <Navbar />
      <ContactFloating />
      <SectionTemplate id={"home_section"} children={<HomeSection />} />
      <SectionTemplate id={"about_section"} children={<AboutSection />} />
      <SectionTemplate id={"project_section"} children={<ProjectSection />} />
      <SectionTemplate id={"contact_section"} children={<ContactSection />} />
    </>
  );
}
