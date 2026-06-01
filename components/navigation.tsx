"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Client Support", href: "#support" },
  { label: "Why TFS", href: "#why-tfs" },
  { label: "Contact Us", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-[18px] shadow-lg border-b border-white/12"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1440px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Trustboxx Financial Services"
              width={50}
              height={50}
              className="w-auto h-10 md:h-12"
              priority
            />
            <span
              className="hidden sm:block font-semibold text-lg"
              style={{ color: "#031B4E" }}
            ></span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-electric-blue"
                  style={{ color: "#031B4E" }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white"
            >
              Talk To Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" style={{ color: "#031B4E" }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: "#031B4E" }} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-gray/20 pt-4">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block text-base font-medium py-2"
                    style={{ color: "#031B4E" }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  className="btn-primary inline-flex items-center justify-center w-full px-6 py-3 rounded-full text-sm font-semibold text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Talk To Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
