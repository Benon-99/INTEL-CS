import Hero from "@/components/Hero";
import MotivationalRobot from "@/components/InteractiveRobot";
import Services from "../components/services";
import TopServices from "@/components/topServices";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero/>
      {/* <MotivationalRobot /> */}
      <TopServices/>
      <Services/>
      <Footer/>
    </main>
  );
}
