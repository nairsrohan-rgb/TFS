import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Why TFS", href: "#why-tfs" },
    { label: "Careers", href: "#" },
  ],
  support: [
    { label: "Client Support", href: "#support" },
    { label: "FAQs", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer 
      id="contact"
      style={{ backgroundColor: "#031B4E" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block">
              <Image
                src="/logo.png"
                alt="Trustboxx Financial Services"
                width={120}
                height={120}
                className="w-auto h-16 brightness-0 invert"
              />
            </a>
            <p 
              className="mt-4 text-sm leading-relaxed max-w-xs"
              style={{ color: "#9CA3AF" }}
            >
              Together every step of the way. Delivering trust, stability, and premium 
              financial expertise to help you achieve your goals.
            </p>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: "#F8FAFC" }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-electric-blue"
                    style={{ color: "#9CA3AF" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support Links */}
          <div>
            <h4 
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: "#F8FAFC" }}
            >
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-electric-blue"
                    style={{ color: "#9CA3AF" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: "#F8FAFC" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@trustboxxfs.com"
                  className="flex items-center gap-3 text-sm transition-colors hover:text-electric-blue"
                  style={{ color: "#9CA3AF" }}
                >
                  <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "#0A66FF" }} />
                  info@trustboxxfs.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-sm transition-colors hover:text-electric-blue"
                  style={{ color: "#9CA3AF" }}
                >
                  <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "#0A66FF" }} />
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <div
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "#9CA3AF" }}
                >
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#0A66FF" }} />
                  <span>
                    123 Financial District<br />
                    New York, NY 10004
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div 
          className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
        >
          <p 
            className="text-sm"
            style={{ color: "#6B7280" }}
          >
            © {new Date().getFullYear()} Trustboxx Financial Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-sm transition-colors hover:text-electric-blue"
              style={{ color: "#6B7280" }}
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="text-sm transition-colors hover:text-electric-blue"
              style={{ color: "#6B7280" }}
            >
              Terms
            </a>
            <a 
              href="#" 
              className="text-sm transition-colors hover:text-electric-blue"
              style={{ color: "#6B7280" }}
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
