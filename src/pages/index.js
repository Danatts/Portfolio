import AboutSection from '@/sections/AboutSection/AboutSection';
import ContactFloating from '@/components/organisms/ContactFloating/ContactFloating';
import ContactSection from '@/sections/ContactSection/ContactSection';
import HomeSection from '@/sections/HomeSection/HomeSection';
import Navbar from '@/components/organisms/Navbar/Navbar';
import ProjectSection from '@/sections/ProjectSection/ProjectSection';
import HomeSections from '@/components/templates/HomeSections/HomeSections';
import Footer from '@/components/organisms/Footer/Footer';
import Sidebar from '@/components/organisms/Sidebar/Sidebar';
import Hamburger from '@/components/atoms/Hamburger/Hamburger';

export default function Home({ data }) {
  return (
    <>
      <Hamburger />
      <ContactFloating />
      <Sidebar />
      <Navbar />
      <HomeSections id={'home_section'} children={<HomeSection />} />
      <HomeSections id={'about_section'} children={<AboutSection data={data} />} />
      <HomeSections id={'project_section'} children={<ProjectSection />} />
      <HomeSections id={'contact_section'} children={<ContactSection />} />
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
