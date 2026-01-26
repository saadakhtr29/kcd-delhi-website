import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import EventJourney from "@/components/EventJourney";
import Speakers from "@/components/Speakers";
import Venue from "@/components/Venue";
import Team from "@/components/Team";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";
import NotificationBanner from "@/components/notificationBanner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
  <NotificationBanner />
  <Navbar />
      <Hero />
      <About />
      <EventJourney />
      <Speakers />
      <Venue />
      <Team />
      <Sponsors />
      <Footer />
    </main>
  );
}
