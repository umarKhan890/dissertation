"use client";
import React, { useState } from "react";
import { FaChevronDown, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "../../../public/assets/js/servicesdata";

const Header = () => {
  const [show, setShow] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100">
      <div className="sticky top-0 z-50 bg-white">
        <nav className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20 w-full">
              <div className="flex-1">
                <Link href="/" className="flex-shrink-0">
                  <div className="relative w-32 h-8 lg:w-40 lg:h-10">
                    <Image
                      fill
                      src="/assets/images/logo.png"
                      alt="Skilled Writing Logo"
                      className="object-contain"
                      priority
                    />
                  </div>
                </Link>
              </div>

              <div className="hidden lg:flex flex-1 justify-center">
                <ul style={{ marginBottom: "0px" }} className="flex items-center space-x-8">
                  <li>
                    <Link
                      href="/"
                      className="text-black hover:text-gray-600 transition-colors duration-200 font-medium text-sm"
                    >
                      Home
                    </Link>
                  </li>
                  <li
                    className="relative group"
                    onMouseEnter={() => setServicesHover(true)}
                    onMouseLeave={() => setServicesHover(false)}
                  >
                    <Link
                      href="#"
                      className="flex items-center space-x-1 text-black hover:text-gray-600 font-medium text-sm transition-colors duration-200"
                    >
                      <span>Services</span>
                      <FaChevronDown
                        className={`w-3 h-3 transform transition-transform duration-200 ${servicesHover ? "rotate-180" : ""
                          }`}
                      />
                    </Link>
                    <div
                      className={`absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-4xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-lg shadow-2xl transition-all duration-300 mt-2 ${servicesHover ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
                        }`}
                    >
                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                          {Object.keys(servicesData).map((title) => (
                            <Link
                              key={title}
                              href={`/services/${title.toLowerCase().replace(/\s+/g, "-")}`}
                              className="block text-white hover:text-cyan-200 font-medium text-sm py-2 px-3 rounded-md hover:bg-white/10 transition-colors duration-200"
                              onClick={() => setServicesHover(false)} // 👈 Add this line
                            >
                              {title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-black hover:text-gray-600 transition-colors duration-200 font-medium text-sm"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-black hover:text-gray-600 transition-colors duration-200 font-medium text-sm"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faqs"
                      className="text-black hover:text-gray-600 transition-colors duration-200 font-medium text-sm"
                    >
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>

              {/* WhatsApp Button Right */}
              <div className="hidden lg:flex flex-1 justify-end">
                <Link
                  href="https://wa.me/+447554405359?text=Referral%20link%20website%3A%20www.skilledWritings.org%22"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-2.5 rounded-full transition-all duration-200 font-medium shadow-lg hover:shadow-xl text-sm"
                >
                  <span>Whatsapp</span>
                  <FaWhatsapp className="w-4 h-4" />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setShow(!show)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <div className="relative w-6 h-6">
                    <span
                      className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${show ? "rotate-45 translate-y-0" : "-translate-y-2"
                        }`}
                    />
                    <span
                      className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${show ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <span
                      className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${show ? "-rotate-45 translate-y-0" : "translate-y-2"
                        }`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 transition-all duration-300 ${show ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
          >
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/"
                className="block text-black hover:text-gray-600 transition-colors font-medium py-2"
                onClick={() => setShow(false)}
              >
                Home
              </Link>
              <div className="space-y-2">
                <span className="block text-gray-700 font-medium py-2">Services</span>
                <div className="pl-4 space-y-2 max-h-60 overflow-y-auto">
                  {Object.keys(servicesData).map((title) => (
                    <Link
                      key={title}
                      href={`/services/${title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block text-black hover:text-gray-600 transition-colors py-1 text-sm"
                      onClick={() => setShow(false)}
                    >
                      {title}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/blog"
                className="block text-black hover:text-gray-600 transition-colors font-medium py-2"
                onClick={() => setShow(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block text-black hover:text-gray-600 transition-colors font-medium py-2"
                onClick={() => setShow(false)}
              >
                Contact Us
              </Link>
              <Link
                href="/faqs"
                className="block text-black hover:text-gray-600 transition-colors font-medium py-2"
                onClick={() => setShow(false)}
              >
                FAQs
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="https://wa.me/+447554405359?text=Referral%20link%20website%3A%20www.skilledWritings.org%22"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-2.5 rounded-full transition-all duration-200 font-medium w-full justify-center shadow-lg"
                  onClick={() => setShow(false)}
                >
                  <span>Whatsapp</span>
                  <FaWhatsapp className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
