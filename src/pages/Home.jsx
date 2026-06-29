import Hero from "../sections/Hero.jsx";
import Statistics from "../sections/Statistics.jsx";
import Services from "../sections/Services.jsx";
import HowItWorks from "../sections/HowItWorks.jsx";
import VideoSection from "../sections/VideoSection.jsx";
import FeaturedProviders from "../sections/FeaturedProviders.jsx";
import UpcomingBookings from "../sections/UpcomingBookings.jsx";
import WhyPawzy from "../sections/WhyPawzy.jsx";
import PetProfile from "../sections/PetProfile.jsx";
import MostBookedServices from "../sections/MostBookedServices.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import JoinAsProvider from "../sections/JoinAsProvider.jsx";

export default function Home() {
  return (
    <main>
      <Hero />
      <Statistics />
      <Services />
      <HowItWorks />
      <VideoSection />
      <FeaturedProviders />
      <UpcomingBookings />
      <WhyPawzy />
      <VideoSection />
      <PetProfile />
      <MostBookedServices />
      <Testimonials />
      <JoinAsProvider />
    </main>
  );
}
