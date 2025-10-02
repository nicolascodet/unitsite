"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Unit Industries Group" width={120} height={40} className="h-8 sm:h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="hover:text-gray-300 transition-colors">
              Our Services
            </Link>
            <Link href="#capabilities" className="hover:text-gray-300 transition-colors">
              Capabilities
            </Link>
            <Link href="#cleanroom" className="hover:text-gray-300 transition-colors">
              Clean Room
            </Link>
            <Link href="#contact" className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              <Link
                href="#services"
                className="block py-2 hover:text-gray-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Services
              </Link>
              <Link
                href="#capabilities"
                className="block py-2 hover:text-gray-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Capabilities
              </Link>
              <Link
                href="#cleanroom"
                className="block py-2 hover:text-gray-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Clean Room
              </Link>
              <Link
                href="#contact"
                className="block py-2 hover:text-gray-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900 opacity-80"></div>
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-40"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Innovative Manufacturing Solutions
          </h1>
          <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-300 px-2">
            Over a century of combined experience in integrated connectors, high-temp thermoplastics,
            printed circuitry, wire harnessing, and electro/mechanical assembly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link
              href="#services"
              className="border-2 border-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-colors"
            >
              LEARN MORE
            </Link>
          </div>
        </div>

        {/* Scroll indicator - hidden on mobile */}
        <div className="hidden sm:block absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">
                Progressive Manufacturing Excellence
              </h2>
              <p className="text-base sm:text-lg text-gray-300 mb-3 sm:mb-4">
                Unit Industries Group, Inc. has been dedicated to developing innovative manufacturing solutions with
                a core of professionals who have over a century of combined experience.
              </p>
              <p className="text-base sm:text-lg text-gray-300">
                We make some of the most complex and innovative electronic and mechanical products in the world.
                Recognized as a progressive manufacturer, Unit Industries Group provides end-to-end solution,
                manufacturing and logistics solutions, delivering superior quality and support to Original Equipment
                Manufacturers (OEMs).
              </p>
            </div>
            <div className="bg-gray-800 p-6 sm:p-8 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Industries We Serve</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></span>
                  Communications
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></span>
                  Medical
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></span>
                  Defense and Aerospace
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></span>
                  Industrial and Semiconductor
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></span>
                  Multimedia
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></span>
                  Automotive
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></span>
                  Commercial and Clean Technology
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-20 px-4 sm:px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Our Capabilities</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-lg hover:scale-105 transition-transform">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
                  <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">Integrated Connectors</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Advanced connector solutions with decades of expertise in design and manufacturing.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-lg hover:scale-105 transition-transform">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">High-Temp Thermoplastics</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Specialized materials engineering for demanding applications and extreme environments.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-lg hover:scale-105 transition-transform">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">Printed Circuitry</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Precision PCB manufacturing and assembly for complex electronic systems.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-lg hover:scale-105 transition-transform">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">Wire Harnessing</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Custom wire harness design and assembly for automotive, aerospace, and industrial applications.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-lg hover:scale-105 transition-transform">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">Electro/Mechanical Assembly</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Complete turnkey solutions from prototype to production for complex assemblies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-lg hover:scale-105 transition-transform">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">End-to-End Solutions</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Comprehensive manufacturing and logistics solutions with superior quality and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Room Section */}
      <section id="cleanroom" className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Clean Room Facility</h2>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-900 to-gray-900 p-6 sm:p-8 rounded-lg">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Clean Room Specifications</h3>
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold flex-shrink-0">✓</span>
                    <div>
                      <strong className="text-white">Class 100,000 Clean Room</strong>
                      <p className="text-xs sm:text-sm">4,800 square feet of controlled environment</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold flex-shrink-0">✓</span>
                    <div>
                      <strong className="text-white">Medical Molding</strong>
                      <p className="text-xs sm:text-sm">Specialized plastic injection molding for medical devices</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold flex-shrink-0">✓</span>
                    <div>
                      <strong className="text-white">Advanced Equipment</strong>
                      <p className="text-xs sm:text-sm">State-of-the-art injection molding machines</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 sm:mt-8">
                  <a
                    href="https://socalcleanroom.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-600 hover:bg-red-700 px-5 sm:px-6 py-2 sm:py-3 rounded-full transition-colors text-sm sm:text-base"
                  >
                    Visit SoCal Clean Room →
                  </a>
                </div>
              </div>
            </div>
            <div>
              <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
                Our Class 100,000 clean room facility provides exceptional precision and quality
                for medical molding projects. With 4,800 square feet of controlled environment, we deliver
                innovative solutions that meet the most demanding requirements.
              </p>
              <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
                Our clean room services include advanced plastic injection molding with state-of-the-art
                equipment, ensuring efficient and reliable manufacturing solutions for the medical industry
                and beyond.
              </p>
              <div className="bg-gray-800 p-5 sm:p-6 rounded-lg">
                <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">Innovating the Future</h4>
                <p className="text-sm sm:text-base text-gray-300">
                  We're committed to innovating the future of clean room services and injection molding
                  solutions, delivering precision manufacturing that exceeds industry standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12">Contact Us</h2>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-12 rounded-lg">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Corporate Office</h3>
                <p className="text-lg sm:text-xl text-gray-300">Unit Industries Group, Inc.</p>
                <p className="text-sm sm:text-lg text-gray-400">3122 South Maple Street</p>
                <p className="text-sm sm:text-lg text-gray-400">Santa Ana, CA 92707</p>
                <p className="text-sm sm:text-lg text-gray-400 mt-2 sm:mt-3">(714) 751-7084</p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Email</h3>
                <a
                  href="mailto:sales@unitindustriesgroup.com"
                  className="text-base sm:text-xl text-red-600 hover:text-red-500 transition-colors break-all"
                >
                  sales@unitindustriesgroup.com
                </a>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Office Hours</h3>
                <p className="text-base sm:text-lg text-gray-300">Monday - Friday</p>
                <p className="text-base sm:text-lg text-gray-300">8:00 AM to 4:00 PM PST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p className="text-sm sm:text-base">© 2024 Unit Industries Group, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
