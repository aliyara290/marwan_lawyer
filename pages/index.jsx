import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Services from "@/components/home/Services";
import Achievemnt from "@/components/home/Achievement";
import Clients from "@/components/home/Clients";
import Team from "@/components/home/Team";
import Banner from "@/components/home/Banner";
import Contact from "@/components/home/Contact";
import Faqs from "@/components/home/Faqs";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Services />
      <Achievemnt />
      {/* <Clients /> */}
      <Banner />
      <Team />
      <Contact />
      <Faqs />
      <Footer />
    </>
  );
}
