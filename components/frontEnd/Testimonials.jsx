"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "SDM Sunita",
      role: "Owner of Vats Kunj",
      image: "/images/sunita.jpg",
      quote:
        "Being an SDM in Dhaulana, UP, it was tough for me to travel every day to Noida for home construction supervision. Macnis.Com provided us with top-notch construction solutions. Their expert guidance and transparency in design, materials, and the building process were exceptional. They consistently ensured quality materials at competitive rates. They also helped us with our interiors. We highly recommend Macnis.Com.",
    },
    {
      name: "Ms Puja",
      role: "Owner of Suchita Sadan",
      image: "/images/puja.jpg",
      quote:
        "For my construction needs in Patna, we received excellent consultation and transparency with important insights on design, material, and process. Macnis.Com maintained a regular feedback loop and ensured quality materials at better pricing than local contractors. We highly recommend Macnis.Com as a one-stop solution for anyone looking to construct a house in Patna.",
    },
    {
      name: "Mr Venkatesh",
      role: "Owner of Shri Radha Niwas",
      image: "/images/venkatesh.jpg",
      quote:
        "The team of Macnis.Com is organized, collaborative, and problem-solving in their approach. They ensure timely completion of work and submission of inspection requests. Their expertise in construction and ability to suggest changes based on conditions make them valuable team players. I strongly recommend Macnis.Com's services and believe they have the potential for growth, expertise, and value for money.",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-12">
          Quotes From <span className="text-yellow-500">Happy Clients</span>
        </h2>
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={4000}
          keyBoardControl
          showDots={false}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 mx-2 flex flex-col items-center text-center"
            >
              <p className="text-gray-600 mb-6 italic">“{testimonial.quote}”</p>
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={60}
                height={60}
                className="rounded-full mb-4 object-cover"
              />
              <h3 className="font-bold text-lg">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
