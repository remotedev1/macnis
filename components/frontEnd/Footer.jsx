import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import Container from "../common/GlobalContainer";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <Container>
        <div className=" mx-auto px-4 grid md:grid-cols-2 gap-10 mt-10">
          {/* Left Section - Logo + About */}
          <div>
            <h2 className="text-2xl font-bold text-yellow-400">
              MACNIS<span className="text-white">.COM</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed">
              At Macnis.Com, we bring together functionality and aesthetics to
              provide homeowners with customised and efficient home
              construction. Our team specialise in construction of houses, and
              help you create a personalised home to suit your lifestyle.
            </p>
          </div>

          <div className="flex flex-row justify-end space-x-5">
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-4">
                Home
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/why-us">Why Us</Link>
                </li>
                <li>
                  <Link href="/projects">Our Projects</Link>
                </li>
                <li>
                  <Link href="/make-my-house">Make My House</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-4">
                Get In Touch
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <Phone size={16} className="text-yellow-400" />
                <a
                  href="tel:+910546546541654654"
                  className="hover:text-yellow-400"
                >
                  +91-0546546541654654
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-yellow-400" />
                <a
                  href="mailto:hello@Macnis.Com"
                  className="hover:text-yellow-400"
                >
                  hello@Macnis.Com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Macnis.Com — All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
