"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Track active section
      const sections = ["home", "about", "menu", "gallery", "contact"];
      const scrollPos = window.scrollY + 100;

      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (
          el &&
          el.offsetTop <= scrollPos &&
          el.offsetTop + el.offsetHeight > scrollPos
        ) {
          setActiveSection(sec);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Menu", href: "#menu", id: "menu" },
    { name: "Gallery", href: "#gallery", id: "gallery" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo (text only) */}
          <h1
            className={cn(
              "text-2xl font-bold transition-colors duration-300",
              isScrolled ? "text-green-700" : "text-white"
            )}
          >
            Urban Bites
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "font-medium transition-colors duration-300 hover:text-green-600 relative",
                    isScrolled ? "text-gray-700" : "text-white",
                    activeSection === item.id && "text-green-700"
                  )}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <span className="absolute bottom-[-6px] left-0 w-full h-[2px] bg-green-700 rounded-full"></span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-green-700 text-base hover:bg-green-800 text-white px-6 py-5">
              Reserve Table
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "p-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-600",
                isScrolled ? "text-gray-700" : "text-white"
              )}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden transform transition-all duration-300 origin-top",
            isMobileMenuOpen
              ? "max-h-96 opacity-100 scale-y-100"
              : "max-h-0 opacity-0 scale-y-0"
          )}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-lg mt-2 shadow-lg">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-3 py-2 text-base font-medium transition-colors duration-300",
                  activeSection === item.id
                    ? "text-green-700"
                    : "text-gray-700 hover:text-green-700"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full bg-green-700 hover:bg-green-800 text-white px-6 py-5 text-base">
                Reserve Table
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
