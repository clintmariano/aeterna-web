import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Bottleneck from "@/components/Bottleneck";
import Features from "@/components/Features";
import Implementation from "@/components/Implementation";
import WhyMatters from "@/components/WhyMatters";
import ClinicFunctions from "@/components/ClinicFunctions";
import WhyDifferent from "@/components/WhyDifferent";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Bottleneck />
        <Features />
        <Implementation />
        <WhyMatters />
        <ClinicFunctions />
        <WhyDifferent />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
