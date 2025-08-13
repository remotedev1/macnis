// File: app/components/RecentWorks.tsx
import Image from "next/image";

export default function RecentWorks() {
  const works = [
    {
      renderImage: "/images/render1.jpg",
      actualImage: "/images/actual1.jpg",
      orderId: "372, Krishna Vidya Cottage",
      status: "Delivered",
      videoLink: "#",
    },
    {
      renderImage: "/images/render2.jpg",
      actualImage: "/images/actual2.jpg",
      orderId: "306, Shri Raghunath Bhawan",
      status: "Under Construction",
      videoLink: "#",
    },
  ];

  return (
    <section className="py-16 bg-[#FFF9F1] text-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-12">
          Our Recent <span className="text-yellow-500">Works</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {works.map((work, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-yellow-300"
            >
              <div className="grid grid-cols-2 relative">
                <div className="relative">
                  <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                    Render
                  </span>
                  <Image
                    src={work.renderImage}
                    alt="Render"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="relative">
                  <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                    Actual
                  </span>
                  <Image
                    src={work.actualImage}
                    alt="Actual"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <a
                  href={work.videoLink}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="bg-red-600 text-white p-3 rounded-full">
                    ▶
                  </div>
                </a>
              </div>
              <p className="py-4 text-gray-700 font-medium">
                Order Id: {work.orderId}
              </p>
            </div>
          ))}
        </div>
        <button className="mt-8 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600">
          More Works
        </button>
      </div>
    </section>
  );
}
