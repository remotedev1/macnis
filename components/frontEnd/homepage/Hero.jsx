// File: app/page.tsx
import Container from "@/components/common/GlobalContainer";
import ConsultationForm from "@/components/frontEnd/consultation-form";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col bg-black text-white overflow-hidden pt-[40px] lg:pt-15 lg:pb-24">
      <Container>
        <Image
          src="/hero.jpg"
          alt="Background"
          fill
          className="object-cover -z-10"
        />

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

          <div className="bg-black/50 rounded-2xl md:p-6 backdrop-blur-md">
            <ConsultationForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
