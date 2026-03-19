"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaRegEnvelope,
  FaLinkedinIn,
  FaFacebookF,
  FaMediumM,
  FaQuora,
} from "react-icons/fa";

import navData from "../data/navData.json"; // Update path as needed

export default function Footer() {
  return (
    <>
      <footer className="bg-[#0a0a0a] border-t">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/EF-thick-white.png"
                  alt="Company Logo"
                  width={520}
                  height={520}
                  className="h-60 w-70 object-contain"
                  priority
                />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:gap-6">
              {/* Navigation from navData */}
              <div>
                <p className="mb-6 text-sm font-semibold text-white uppercase">
                  Pages
                </p>
                <ul className="text-gray-300 font-medium">
                  {navData.map((item) => (
                    <li className="mb-4" key={item.label}>
                      <Link href={item.link} className="hover:underline">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li className="mb-4">
                    <Link href="/contact" className="hover:underline">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm text-white text-center">
              © {new Date().getFullYear()}{" "}
              <Link href="/" className="hover:underline font-semibold">
                Emmanuel Fombu MD, MBA
              </Link>
              . All Rights Reserved.
            </span>

            <div className="flex mt-4 sm:mt-0 gap-5 justify-center">
              <Link
                href="mailto:manny@drfombu.com"
                className="text-white hover:text-gray-500"
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaRegEnvelope size={18} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/emmanuel-f-789a93117/"
                className="text-white hover:text-gray-500"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={18} />
              </Link>
              <Link
                href="https://www.facebook.com/fombumd/"
                className="text-white hover:text-gray-500"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={18} />
              </Link>
              <Link
                href="https://medium.com/@emmanuel_fombu"
                className="text-white hover:text-gray-500"
                aria-label="Medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMediumM size={18} />
              </Link>
              <Link
                href="https://www.quora.com/profile/Emmanuel-Fombu-MD-MBA"
                className="text-white hover:text-gray-500"
                aria-label="Quora"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaQuora size={18} />
              </Link>
            </div>
          </div>

          {/* Sub-footer Attribution */}
          <div className="mt-4 text-center">
            <span className="text-xs text-neutral-400">
              Website designed & hosted by{" "}
              <a
                href="https://serelora.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline font-semibold"
              >
                Serelora
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
