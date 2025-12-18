import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ContactForm from '@/components/ContactUsSection';
import Footer from '@/components/Footer';
import WhyChooseFitztar from '@/components/WhyChooseFitztar';
import AboutSection from '@/components/AboutSection';
import FaqSection from '@/components/FaqSection';
import SupportSection from '@/components/ui/SupportSection';
import ContactUsSection from '@/components/ContactUsSection';

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <WhyChooseFitztar/>
        <AboutSection/>
        <Features />
        <FaqSection/>
        <SupportSection/>
        <ContactUsSection/>
        <Footer />
      </main>
    </>
  );
}
