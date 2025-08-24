import AboutSectionOne from "./about/AboutSectionOne";
import AboutSectionTwo from "./about/AboutSectionTwo";
import Brands from "./brands";
import Hero from "./hero";
import MeetOurTeam from "./meet";
import Services from "./services";
import Support from "./support";
import Technologies from "./technologies";
import Testimonials from "./testimonials";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Technologies />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <MeetOurTeam />
      <Support />
      <Testimonials />
    </main>
  );
}
