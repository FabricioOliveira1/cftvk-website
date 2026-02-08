import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Modalities from '@/components/Modalities';
import ForWho from '@/components/ForWho';
import Community from '@/components/Community';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import OtherActivities from '@/components/OtherActivities';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Modalities />
        <OtherActivities />
        <ForWho />
        <Community />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
