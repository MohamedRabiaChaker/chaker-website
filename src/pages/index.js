import Meta from "@/components/Meta/index";
import Wavify from "@/components/Styles/index";
import { LandingLayout } from "@/layouts/index";
import {
  Features,
  Footer,
  BlogSection,
  Hero,
  ProfessionalExperience,
  Header,
} from "@/sections/index";

const Home = () => {
  return (
    <LandingLayout>
      <Meta
        title="Mohamed Rabii CHAKER"
        description="Personal website of Mohamed Rabii CHAKER"
      />
      <Header />
      <Hero />
      <Wavify>
        <section id="about">
          <Features />
        </section>
      </Wavify>
      <ProfessionalExperience />
      <section id="contacts">
        <Footer />
      </section>
    </LandingLayout>
  );
};

export default Home;
