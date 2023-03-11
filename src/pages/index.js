import AboutSection from '@/sections/AboutSection/AboutSection';
import ContactFloating from '@/components/organisms/ContactFloating/ContactFloating';
import ContactSection from '@/sections/ContactSection/ContactSection';
import HomeSection from '@/sections/HomeSection/HomeSection';
import Navbar from '@/components/organisms/Navbar/Navbar';
import ProjectSection from '@/sections/ProjectSection/ProjectSection';
import SectionTemplate from '@/templates/SectionTemplate/SectionTemplate';
import Footer from '@/components/organisms/Footer/Footer';
import Sidebar from '@/components/organisms/Sidebar/Sidebar';

export default function Home({ data }) {
  return (
    <>
      <ContactFloating />
      <Sidebar />
      <Navbar />
      <SectionTemplate id={'home_section'} children={<HomeSection />} />
      //<SectionTemplate id={'about_section'} children={<AboutSection data={data} />} />
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
