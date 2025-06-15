import Hero from "@/components/Hero";
import Services from "../components/services";
import TopServices from "@/components/topServices";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TopServices />
      <Services />
      <AboutUs />
      <Footer />

      {/* Simple scroll indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-sm font-medium text-gray-600 mb-2 tracking-wider">
            SCROLL
          </span>
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 stroke-current text-gray-600"
            fill="none"
            strokeWidth="2"
          >
            <line x1="12" y1="1" x2="12" y2="22.5" />
            <line x1="12.1" y1="22.4" x2="18.9" y2="15.6" />
            <line x1="11.9" y1="22.4" x2="5.1" y2="15.6" />
          </svg>
        </div>
      </div>
    </main>
  );
}
