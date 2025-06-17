"use client";

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-white pt-16 pb-8 flex flex-col justify-between w-full"
      style={{
        background: "linear-gradient(to bottom, #003350 0%, #0F5E85 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 justify-between items-start">
        {/* Left Column: Logo & Social */}
        <div className="flex flex-col justify-start">
          <img src="/logo1.png" alt="Intel-CS Logo" className="mb-4 w-40" />
          <p className="text-sm text-white/90 mb-6 max-w-xs">
            Intelligence Cloud Sphere — providing advanced cloud and IT services to optimize your business.
          </p>
          <div className="flex items-center space-x-4 text-2xl">
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Middle Column: Services Links */}
        <div className="flex flex-col items-center md:items-start justify-start h-full">
          <h3 className="font-semibold mb-4 uppercase text-white/90">Services Links</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-white/80 hover:text-white transition-colors">Professional Services</a></li>
            <li><a href="#" className="text-white/80 hover:text-white transition-colors">Managed Services</a></li>
            <li><a href="#" className="text-white/80 hover:text-white transition-colors">Resources</a></li>
          </ul>
        </div>

        {/* Right Column: Contact Info */}
        <div className="flex flex-col items-center md:items-start justify-start h-full">
          <h3 className="font-semibold uppercase mb-4 text-white/90">Contact Information</h3>
          <div className="space-y-3 w-full">
            <a href="tel:+97148358795" className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors">
              <FaPhoneAlt className="text-lg" />
              <span>+971 4 835 8795</span>
            </a>
            <a href="mailto:info@intel-cs.com" className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors">
              <FaEnvelope className="text-lg" />
              <span>info@intel-cs.com</span>
            </a>
            <div className="flex items-center space-x-3 text-white/80">
              <FaMapMarkerAlt className="text-lg" />
              <span>UAE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-6 text-center text-sm text-white/70 border-t border-white/20">
        © 2025 intel-cs, all rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
