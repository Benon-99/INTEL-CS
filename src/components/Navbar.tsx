"use client";

import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const menuItems = [
  //   {
  //     title: "What We Offer",
  //     href: "/services",
  //     submenu: [
  //       {
  //         title: "Business Outsourcing",
  //         href: "/services/business-outsourcing",
  //         items: [
  //           {
  //             name: "Recruitment Process Outsourcing (RPO) Jobs.ici",
  //             href: "/services/business-outsourcing/jobs-ici",
  //           },
  //           {
  //             name: "HR Outsourcing Company (HRO)",
  //             href: "/services/business-outsourcing/hr-recruitment",
  //           },
  //           {
  //             name: "Payroll Service Provider",
  //             href: "/services/business-outsourcing/hr-payroll",
  //           },
  //         ],
  //       },
  //       {
  //         title: "ICT Solutions",
  //         href: "/services/ict-solutions",
  //         items: [
  //           {
  //             name: "Data Center Infrastructure",
  //             href: "/services/ict-solutions/data-center",
  //           },
  //           {
  //             name: "Solutions Integration",
  //             href: "/services/ict-solutions/solutions-integration",
  //           },
  //           {
  //             name: "Information Security",
  //             href: "/services/ict-solutions/information-security",
  //           },
  //           {
  //             name: "Software Development",
  //             href: "/services/ict-solutions/software-development",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];

  // Function to check if a given route is active
  const isActiveRoute = (route: string) => {
    // Check for exact match for home page
    if (route === "/" && pathname === "/") {
      return true;
    }
    // Check if pathname starts with route for other pages
    return route !== "/" && pathname.startsWith(route);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300  ${
        isScrolled
          ? "bg-primary backdrop-blur-lg border-b bg-[#003350] border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center pt-2">
            <Image
              src="/logo1.png"
              alt="Intel_Logo"
              width={125}
              height={55}
              className="h-16 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-white/90 hover:text-white transition-colors relative group ${
                isActiveRoute("/") ? "text-white" : ""
              }`}
            >
              <span>Home</span>
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${
                  isActiveRoute("/") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>

              <Link
                href="/blogs"
                className={`block transition-colors py-2 ${
                  isActiveRoute("/blogs")
                    ? "text-white font-medium"
                    : "text-white/90 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Professional services
                {isActiveRoute("/blogs") && (
                  <div className="h-0.5 w-16 bg-white mt-1"></div>
                )}
              </Link>
              <Link
                href="/blogs"
                className={`block transition-colors py-2 ${
                  isActiveRoute("/blogs")
                    ? "text-white font-medium"
                    : "text-white/90 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Managed services
                {isActiveRoute("/blogs") && (
                  <div className="h-0.5 w-16 bg-white mt-1"></div>
                )}
              </Link>
              <Link
                href="/blogs"
                className={`block transition-colors py-2 ${
                  isActiveRoute("/blogs")
                    ? "text-white font-medium"
                    : "text-white/90 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Resources
                {isActiveRoute("/blogs") && (
                  <div className="h-0.5 w-16 bg-white mt-1"></div>
                )}
              </Link>
            <Link
                href="/about"
                className={`block transition-colors py-2 ${
                  isActiveRoute("/about")
                    ? "text-white font-medium"
                    : "text-white/90 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About Us
                {isActiveRoute("/about") && (
                  <div className="h-0.5 w-16 bg-white mt-1"></div>
                )}
              </Link>
              <Link
                href="/blogs"
                className={`block transition-colors py-2 ${
                  isActiveRoute("/blogs")
                    ? "text-white font-medium"
                    : "text-white/90 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Join our team
                {isActiveRoute("/blogs") && (
                  <div className="h-0.5 w-16 bg-white mt-1"></div>
                )}
              </Link>

              <Link
                href="/contact"
                className="block px-6 py-2 text-white rounded-full text-center bg-[#0085A1] border-2 transition-colors"
                style={{
                  borderColor: isActiveRoute("/contact") ? "white" : "#0085A1",
                }}
                onMouseEnter={(e) => {
                  if (!isActiveRoute("/contact")) {
                    e.currentTarget.style.borderColor = "white";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActiveRoute("/contact")) {
                    e.currentTarget.style.borderColor = "#0085A1";
                  }
                }}
                onClick={() => setIsOpen(false)}
              >
                Book a meeting
              </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-gray-900 shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/"
                className={`block transition-colors py-2 ${
                  isActiveRoute("/")
                    ? "text-white font-medium"
                    : "text-white/90 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
                {isActiveRoute("/") && (
                  <div className="h-0.5 w-16 bg-white mt-1"></div>
                )}
              </Link>

              <Link
                href="/about"
                className={`block transition-colors py-2 ${
                  isActiveRoute("/about")
                    ? "text-white font-medium"
                    : "text-white/90 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About Us
                {isActiveRoute("/about") && (
                  <div className="h-0.5 w-16 bg-white mt-1"></div>
                )}
              </Link>

              <Link
                href="/blogs"
                className={`block transition-colors py-2 ${
                  isActiveRoute("/blogs")
                    ? "text-white font-medium"
                    : "text-white/90 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Professional services
                {isActiveRoute("/blogs") && (
                  <div className="h-0.5 w-16 bg-white mt-1"></div>
                )}
              </Link>
              <Link
                href="/blogs"
                className={`block transition-colors py-2 ${
                  isActiveRoute("/blogs")
                    ? "text-white font-medium"
                    : "text-white/90 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Managed services
                {isActiveRoute("/blogs") && (
                  <div className="h-0.5 w-16 bg-white mt-1"></div>
                )}
              </Link>
              <Link
                href="/blogs"
                className={`block transition-colors py-2 ${
                  isActiveRoute("/blogs")
                    ? "text-white font-medium"
                    : "text-white/90 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Resources
                {isActiveRoute("/blogs") && (
                  <div className="h-0.5 w-16 bg-white mt-1"></div>
                )}
              </Link>
              <Link
                href="/blogs"
                className={`block transition-colors py-2 ${
                  isActiveRoute("/blogs")
                    ? "text-white font-medium"
                    : "text-white/90 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Join our team
                {isActiveRoute("/blogs") && (
                  <div className="h-0.5 w-16 bg-white mt-1"></div>
                )}
              </Link>

              <Link
                href="/contact"
                className={`block px-6 py-2 text-white rounded-full text-center ${
                  isActiveRoute("/contact")
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 font-medium"
                    : "bg-gradient-to-r from-purple-500 to-pink-500"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Book a meeting
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
