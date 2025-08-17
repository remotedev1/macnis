"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const response = await fetch("/api/testimonials");
      const data = await response.json();
      setTestimonials(data);
    };

    fetchTestimonials();
  }, []);

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
          {testimonials?.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 mx-2 flex flex-col items-center text-center m-5"
            >
              <p className="text-gray-600 mb-6 italic">“{testimonial.quote}”</p>
              <Image
                src={testimonial.image || "/placeholder.jpg"}
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
