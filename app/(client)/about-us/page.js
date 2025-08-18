"use client";

import Container from "@/components/common/GlobalContainer";
import WhyChoose from "@/components/frontEnd/WhyChoose";
import Image from "next/image";

const aboutTimeline = [
  {
    id: 1,
    date: "May 2020",
    location: "Bengaluru, Karnataka",
    description:
      "Macnis.Com embarked on its journey in Karnataka, marking the beginning of its mission to revolutionize the construction industry with innovative and comprehensive solutions.",
  },
  {
    id: 2,
    date: "September 2022",
    location: "Mysore, Karnataka",
    description:
      "Loreum Ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
  },
  {
    id: 3,
    date: "May 2024",
    location: "Kodagu, Karnataka",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-white pb-5">
      {/* Hero / Header */}
      <div className="relative bg-black text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-yellow-500">Us</span>
          </h1>
          <p className="max-w-3xl mx-auto text-sm md:text-base">
            Welcome to Macnis.Com, your premier destination for all-inclusive
            construction solutions. We have redefined the construction
            experience, ensuring it is streamlined, transparent, and accessible.
            Our commitment to excellence and innovation makes us the ideal
            choice for all your building needs. As India’s first construction
            company with a digital service portal, we provide a seamless
            platform for clients to plan, design, build, and maintain their
            dream homes, tailored to their budget and requirements, all at the
            touch of a screen.
          </p>
        </div>
      </div>
      <Container>
        {/* Timeline Section */}
        <div className="max-w-[70vw] mx-auto py-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
            The Journey of <span className="text-yellow-500">Macnis.com</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={"/images/modern-house.jpg"}
                  alt="Team working on model"
                  className="object-cover w-full h-full"
                  width={400}
                  height={200}
                  priority
                />
              </div>
            </div>

            {/* Timeline */}
            <div className="order-1 md:order-2 space-y-8">
              {aboutTimeline.map((item) => (
                <div key={item.id} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold border-4 border-white shadow">
                      {item.id.toString().padStart(2, "0")}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">{item.date}</p>
                    <h3 className="text-lg font-semibold text-gray-400">
                      {item.location}
                    </h3>
                    <p className="text-gray-700 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
