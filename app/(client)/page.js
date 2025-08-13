// File: app/page.tsx
import ConsultationForm from "@/components/frontEnd/consultation-form";
import Footer from "@/components/frontEnd/Footer";
import Header from "@/components/frontEnd/Header";
import ContactUs from "@/components/frontEnd/homepage/ContactUs";
import ConsultationAd from "@/components/frontEnd/homepage/cosultationAd";
import RecentWorks from "@/components/frontEnd/RecentWorks";
import ServicesWeOffer from "@/components/frontEnd/ServicesWeOffer";
import Testimonials from "@/components/frontEnd/Testimonials";
import WhyChoose from "@/components/frontEnd/WhyChoose";
import Image from "next/image";

export default function Page() {
  return (
    <main className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden">
      <Image
        src="/hero.jpg"
        alt="Background"
        fill
        className="object-cover -z-10"
      />

      <Header />

      <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-8 items-center flex-1">
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight">
            Build Your Dream Home with{" "}
            <span className="text-yellow-400">Macnis.Com</span>
          </h1>
          <p className="text-lg text-gray-300">Building Homes Simplified</p>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
            Get a Free Construction Estimate
          </button>
          <div className="grid grid-cols-3 gap-6 pt-8 text-center">
            <div>
              <p className="text-2xl font-bold text-yellow-400">440+</p>
              <p className="text-sm">Quality Checks</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-yellow-400">600K+</p>
              <p className="text-sm">Sqft. Build</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-yellow-400">100%</p>
              <p className="text-sm">On Time Delivery</p>
            </div>
          </div>
        </div>

        <div className="bg-black/50 rounded-2xl p-6 backdrop-blur-md">
          <ConsultationForm />
        </div>
      </div>
      <WhyChoose />
      <ServicesWeOffer />
      <Testimonials />
      <RecentWorks />
      <ConsultationAd />
      <ContactUs />
      <Footer />
    </main>
  );
}
