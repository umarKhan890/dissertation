"use client";
import toast from "react-hot-toast";
import React, { useState } from "react";
import Image from "next/image"
import Link from "next/link"
import { Linkedin, Facebook, Instagram, Send } from "lucide-react"

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("website", "Skilled Writting");
      const response = await fetch(
        "https://skillwritingapi.dev-sh.xyz/api/contact",
        {
          method: "POST",
          headers: {
            "Accept": "application/json",
          },
          body: formData,
        }
      );
      const data = await response?.json();
      toast.success('Congratulation You Subscribe Succesfully');
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <footer
      className="relative py-16 md:py-20 px-4 md:px-6 text-white overflow-hidden bg-blue-800"
      
    >
      {/* Optional: A subtle overlay if text is hard to read on some parts of the background image */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Social Icons and Divider */}
        <div className="flex justify-end mb-8 md:mb-12">
          <div className="flex space-x-4">
            <Link
              href="#"
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-blue-600 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-blue-600 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-blue-600 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <hr className="border-t border-white/30 mb-12 md:mb-16" />

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Newsletter Subscription */}
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/assets/images/logo.png" // Replace with actual logo URL
                alt="Skilled Writing Logo"
                width={120}
                height={40}
                className="h-auto object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">Subscribe Our Newsletter:</h3>
            <p className="text-sm text-white/80 mb-6">
              We are a group of skilled Writting Writingers with several years of experience..
            </p>
            <div className="flex items-center bg-white rounded-full p-1 pr-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-grow bg-transparent text-gray-800 placeholder-gray-500 px-4 py-2 focus:outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 transition-colors duration-300">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Link */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Link</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="#" className="hover:text-blue-300 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-300 transition-colors duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-300 transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="#" className="hover:text-blue-300 transition-colors duration-200">
                  Skilled Writing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-300 transition-colors duration-200">
                  Dessertation Writing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-300 transition-colors duration-200">
                  Eassy Writing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-300 transition-colors duration-200">
                  Live Sessions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-300 transition-colors duration-200">
                  Presentation Writting
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-300 transition-colors duration-200">
                  Project Report
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & We Accept */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-sm text-white/80 mb-6">
              Subscribe To Our Weekly Newsletter And Receive Updates Via Email.
            </p>
            <h3 className="text-xl font-bold mb-4">We Accept</h3>
            <Image
              src="/assets/images/payment.png" // Replace with actual payment icons URL
              alt="Payment Methods"
              width={150}
              height={50}
              className="h-auto object-contain"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-16 md:mt-20 text-sm text-white/70">
          <p>All Rights Reserved by skilledwriting.org 2025</p>
        </div>
      </div>
    </footer>
      {/* <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-header">
                <div className="footer-logo">
                  <Image width={100} height={100} src="/assets/images/footer-logo.svg" alt="" />
                </div>

                <div className="footer-social-links">
                  <ul>

                    <li>
                      <Link href="https://www.linkedin.com/company/skilled-writing1/about/">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.facebook.com/profile.php?id=61573807590248">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/_skilledwriting?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-links footer-newsletter-form">
                <Image width={100} height={100} src="/assets/images/logo.png" alt="" />
                <h3>Subscribe our newsletter:</h3>
                <p>
                  We are a group of skilled Writting Writingers with several
                  years of experience ..
                </p>
                <form
                  id="newsletterForm"
                  action=""
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="mail"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="Enter Your Email"
                      required=""
                    />
                    <button type="submit" className="newsletter-btn">
                      <FaPaperPlane />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-6">
              <div className="footer-links footer-quick-links">
                <h3>Quick link</h3>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/faqs">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-6">
              <div className="footer-links">
                <h3>Services</h3>
                <ul>
                  <li>
                    <Link href="/services/skilled%20writing">Skilled Writing</Link>
                  </li>
                  <li>
                    <Link href="/services/Dissertation%20Writing">
                      Dessertation Writing
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/Essay%20Writing">Eassy Writing</Link>
                  </li>
                  <li>
                    <Link href="/services/Live%20Sessions">Live Sessions</Link>
                  </li>
                  <li>
                    <Link href="/services/Presentation%20Writing">
                      Presentation Writting
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/Project%20Report%20Writing">
                      Project Report
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-6">
              <div className="footer-links">
                <h3>Newsletter</h3>
                <ul>

                  <li>
                    Subscribe to our weekly Newsletter and receive updates via
                    email.
                  </li>
                  <h3>We Accept</h3>
                  <Image width={100} height={100} src="/assets/images/payment.png" alt="" />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="footer-copyright-text">
                  <p>All Rights Reserved by skilledwriting.org 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
};

export default Footer;
