import AboutSection from '@/sections/AboutSection/AboutSection';
import ContactFloating from '@/components/ContactFloating/ContactFloating';
import ContactSection from '@/sections/ContactSection/ContactSection';
import HomeSection from '@/sections/HomeSection/HomeSection';
import Navbar from '@/components/Navbar/Navbar';
import ProjectSection from '@/sections/ProjectSection/ProjectSection';
import SectionTemplate from '@/templates/SectionTemplate/SectionTemplate';
import Footer from '@/components/Footer/Footer';

export default function Home({ data }) {
  return (
    <>
      <Navbar />
      <ContactFloating />
      <SectionTemplate id={'home_section'} children={<HomeSection />} />
      <SectionTemplate id={'about_section'} children={<AboutSection data={data} />} />
      <SectionTemplate id={'project_section'} children={<ProjectSection />} />
      <SectionTemplate id={'contact_section'} children={<ContactSection />} />
      <Footer />
      </>
  );
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/user');
  const data = await response.json()
  return {
    props: {
      data,
    }
  }
}
