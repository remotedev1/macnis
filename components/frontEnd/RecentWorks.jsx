"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function RecentWorks() {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/projects");
        const projects = await response.json();
        setWorks(projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []);
  console.log(works);

  return (
    <section className="py-16 bg-[#FFF9F1] text-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-12">
          Our Recent <span className="text-yellow-500">Works</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {works.slice(0, 2).map((work, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-yellow-300 h-96"
            >
              {/* Background Image */}
              <Image
                src={work.imageGallery[0].url}
                alt={work.projectName}
                fill
                className="object-fill"
              />

              {/* Overlay text box at bottom */}
              <div className="absolute bottom-0 left-0 w-full bg-white/60 backdrop-blur-md p-4">
                <p className="text-gray-800 font-semibold">
                  {work.projectName}, {work.location}
                </p>
                <p className="text-gray-700 font-medium">
                  {work.projectType} building
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-8 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600">
          <Link href="/our-works">More Works</Link>
        </button>
      </div>
    </section>
  );
}
