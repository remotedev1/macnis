import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="bg-gray-500 pt-16 rounded-t-2xl shadow-lg relative z-10">
      <div className="max-w-[900px] relative top-8 mx-auto bg-white p-10 rounded-xl">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold text-gray-900">
            Contact <span className="text-yellow-500">Us</span>
          </h3>

          <p className="text-gray-500 mt-2">
            Get in touch with us to start your project.
          </p>
          <div className="flex justify-center items-center gap-6 mt-6">
            <div className="flex items-center gap-2 text-gray-800">
              <Phone className="text-yellow-500" />
              <span className="font-semibold">078590 43737</span>
            </div>
            <div className="flex items-center gap-2 text-gray-800">
              <Mail className="text-yellow-500" />
              <span className="font-semibold">Hello@Macnis.Com</span>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Corporate Office (Delhi-NCR Branch):",
              address:
                "Macnis.Com | Home Construction 107, DLF Star Mall, NH 8, Block A, Sector 30, Gurugram (Delhi NCR), Haryana 122001 (India)",
              link: "#",
            },
            {
              title: "Bihar Branch:",
              address:
                "Macnis.Com | Home Construction 310, 3rd Floor, Patna One Mall, New Dakbunglow Road, Patna, Bihar 800001 (India)",
              link: "#",
            },
            {
              title: "Jharkhand Branch:",
              address:
                "Macnis.Com | Home Construction 4th Floor, SPM Tower, Circular Road, Ranchi, Jharkhand 834001 (India)",
              link: "#",
            },
          ].map((branch, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-2 border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-6"
            >
              <MapPin className="text-yellow-500" />
              <h4 className="font-semibold text-gray-900">{branch.title}</h4>
              <p className="text-gray-500 text-sm">{branch.address}</p>
              <a
                href={branch.link}
                className="text-yellow-500 font-semibold flex items-center gap-1"
              >
                Get Direction →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
