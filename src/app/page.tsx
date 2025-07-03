import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import CoursePreview from '@/components/CoursePreview';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import DownloadBanner from '@/components/DownloadBanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features id="features" />
      <Testimonials id="testimonials" />
      <CoursePreview id="learn" />
      <About />
      <CTA />
      <FAQ id="faq" />
      <DownloadBanner id="download" />
      <Footer />
    </main>
  );
}
