import Meta from "@/components/Meta/index";
import Wavify from "@/components/Styles/index";
import { LandingLayout } from "@/layouts/index";
import {
  CallToAction,
  Features,
  Footer,
  BlogSection,
  Hero,
  Pricing,
  Testimonial,
} from "@/sections/index";

const Home = () => {
  return (
    <LandingLayout>
      <Meta
        title="Mohamed Rabii CHAKER"
        description="Personal website of Mohamed Rabii CHAKER"
      />
      <Hero />

      <Wavify>
        <section id="about">
          <Features />
        </section>
      </Wavify>
      <section id="contacts">
        <Footer />
      </section>
    </LandingLayout>
  );
};

export default Home;
