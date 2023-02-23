import ContactFloating from "@/components/ContactFloating/ContactFloating";
import HomeSection from "@/components/HomeSection/HomeSection";
import Navbar from "@/components/Navbar/Navbar";
import SectionTemplate from "@/templates/SectionTemplate/SectionTemplate";

export default function Home() {
  return (
    <>
      <Navbar />
      <ContactFloating />
      <SectionTemplate children={<HomeSection />} />
      <SectionTemplate children={<HomeSection />} />
      <SectionTemplate children={<HomeSection />} />
      <SectionTemplate children={<HomeSection />} />
    </>
  );
}
