"use client";

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-white pt-16 pb-8"
      style={{
        background: "linear-gradient(to bottom, #003350 0%, #0F5E85 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Column: Logo & Social */}
        <div>
          <img src="/logo1.png" alt="Intel-CS Logo" className="mb-4 w-40" />
          <p className="text-sm text-white/90 mb-6 max-w-xs">
            Intelligence Cloud Sphere — providing advanced cloud and IT services to optimize your business.
          </p>
          <div className="flex items-center space-x-4 text-2xl">
            <a href="#" className="hover:text-white">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Middle Column: Services + Quick Links */}
        <div className="grid grid-cols-2 gap-8 text-sm">
          <div>
            <h3 className="font-semibold mb-4 uppercase">Services Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Cloud Services</a></li>
              <li><a href="#" className="hover:text-white">Data Services</a></li>
              <li><a href="#" className="hover:text-white">Business Process Automation</a></li>
              <li><a href="#" className="hover:text-white">Managed Services</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 uppercase">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Case Studies</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Right Column: Contact Info */}
        <div>
          <h3 className="font-semibold mb-4 uppercase text-sm">Contact Information</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center space-x-2">
              <FaPhoneAlt />
              <span>+971 4 835 8795</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope />
              <span>info@intel-cs.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt />
              <span>UAE</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-6 text-center text-xs text-white/70 border-t border-white/20">
        © 2025 intel-cs, all rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
