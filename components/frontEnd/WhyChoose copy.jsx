import { DollarSign, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";
import Container from "../common/GlobalContainer";

export default function WhyChoose({ about = false }) {
  return (
    <section className="pb-16 pt-20 bg-white text-gray-800">
      <Container>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Why Choose <span className="text-yellow-500">Macnis.Com</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            At Macnis.Com, we transform your home construction dreams into
            reality with our expert team & seamless process. From design to
            delivery, we ensure quality & transparency at every step of the way.
            Our mission is to build homes that embody your vision, constructed
            with top-notch craftsmanship & innovative technology.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-yellow-500 shadow-sm text-left">
              <DollarSign className="w-10 h-10 text-yellow-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">
                Guaranteed Price Protection
              </h3>
              <p className="text-sm text-gray-600">
                Fixed pricing with no hidden costs or surprises and complete
                transparency. The estimate remains unchanged once finalized
                until and unless the client makes the changes.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-yellow-500 shadow-sm text-left">
              <ShieldCheck className="w-10 h-10 text-yellow-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">440+ Quality Checks</h3>
              <p className="text-sm text-gray-600">
                Home construction with perfection! We perform 440+ quality
                checks to ensure your home meets the highest construction
                standards.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-yellow-500 shadow-sm text-left">
              <Clock className="w-10 h-10 text-yellow-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Timely Delivery</h3>
              <p className="text-sm text-gray-600">
                Guaranteed on-time completion because your dream home shouldn’t
                wait. In rare delays, we impose penalties for accountability and
                your peace of mind.
              </p>
            </div>
          </div>
          {about && (
            <button className="mt-8 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600">
              <Link
                href="/about-us"
                className="text-white font-semibold inline-flex items-center "
              >
                Learn more about us
              </Link>
            </button>
          )}
        </div>
      </Container>
    </section>
  );
}
