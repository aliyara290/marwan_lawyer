import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Services from "@/components/home/Services";
import Achievemnt from "@/components/home/Achievement";
import Clients from "@/components/home/Clients";
import Team from "@/components/home/Team";
import Banner from "@/components/home/Banner";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Services />
      <Achievemnt />
      <Clients />
      <Team />
      <Banner />
    </>
  );
}
