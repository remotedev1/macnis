// File: app/components/ServicesWeOffer.tsx
import Image from "next/image";
import Link from "next/link";

export default function ServicesWeOffer() {
  const services = [
    {
      title: "Residential Construction",
      description:
        "Your idea, our work. Build your customized dream home with Thikedaar.Com's expert craftsmanship tailored to your vision and lifestyle.",
      image: "/images/residential.jpg",
      link: "/services/residential",
    },
    {
      title: "Commercial Construction",
      description:
        "From business complexes to hotels, Thikedaar.Com delivers superior quality and efficiency in commercial construction, ensuring it reflects professionalism and functionality.",
      image: "/images/commercial.jpg",
      link: "/services/commercial",
    },
    {
      title: "Interiors",
      description:
        "Right before moving in, we make your house a home with our top-notch interior design service. It is fully customized to reflect your unique style and preferences.",
      image: "/images/interiors.jpg",
      link: "/services/interiors",
    },
    {
      title: "Maintenance",
      description:
        "Ensure the longevity and optimal performance of your property with Thikedaar.Com's comprehensive building maintenance services. We help you keep your investment in top condition.",
      image: "/images/maintenance.jpg",
      link: "/services/maintenance",
    },
  ];

  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-2">
          Services <span className="text-yellow-500">We Offer</span>
        </h2>
        <Link
          href="/services"
          className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold mb-12 hover:bg-yellow-600 transition"
        >
          See All Services
        </Link>
        <div className="grid gap-8 md:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition text-left"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="text-yellow-500 font-semibold inline-flex items-center hover:underline"
                >
                  Know More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
