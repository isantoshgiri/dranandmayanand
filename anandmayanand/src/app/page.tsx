import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { Journey } from "@/components/sections/Journey";
import { Stats } from "@/components/sections/Stats";
import { AatmaMilanPreview } from "@/components/sections/AatmaMilanPreview";
import { MeditationPrograms } from "@/components/sections/MeditationPrograms";
import { UpcomingEvents } from "@/components/sections/UpcomingEvents";
import { Testimonials } from "@/components/sections/Testimonials";
import { HospitalProjectPreview } from "@/components/sections/HospitalProjectPreview";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { LatestMedia } from "@/components/sections/LatestMedia";
import { DonationCTA } from "@/components/sections/DonationCTA";
import { NewsletterBand } from "@/components/sections/NewsletterBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <Journey />
      <Stats />
      <AatmaMilanPreview />
      <MeditationPrograms />
      <UpcomingEvents />
      <Testimonials />
      <HospitalProjectPreview />
      <GalleryPreview />
      <LatestMedia />
      <DonationCTA />
      <NewsletterBand />
    </>
  );
}
