import Image from "next/image";

export default function ConsultationAd() {
  return (
    <section className="bg-yellow-500 rounded-2xl py-12 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="text-white max-w-xl">
        <h2 className="text-4xl font-extrabold mb-4">
          Ready to build your dream home?
        </h2>
        <p className="text-lg mb-6 text-yellow-50">
          Still in doubt about the home construction plan and price? Estimate
          your project cost with our easy-to-use cost calculator. Get a clear
          idea of construction costs from the comfort of your couch.
        </p>
        <button className="bg-black text-yellow-500 font-bold px-6 py-3 rounded-full hover:bg-gray-900">
          Get a Free Construction Estimate
        </button>
      </div>
      <div className="flex-shrink-0">
        <Image
          src="/images/modern-house.jpg"
          alt="Modern House"
          width={500}
          height={300}
          className="rounded-xl object-cover"
        />
      </div>
    </section>
  );
}
