import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at top right, rgba(10, 102, 255, 0.15), transparent 60%)"
        }}
      />
      
      <div className="max-w-[1440px] mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 
              className="text-[38px] md:text-[56px] lg:text-[72px] font-bold leading-tight text-balance"
              style={{ color: "#031B4E" }}
            >
              Together Every Step of the Way
            </h1>
            
            <p 
              className="mt-6 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0"
              style={{ color: "#6B7280" }}
            >
              Trustboxx Financial Services delivers premium financial expertise 
              with trust, stability, and human support at every milestone of your journey.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#services"
                className="btn-primary inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold text-white"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold border-2 transition-all hover:bg-deep-navy hover:text-white"
                style={{ 
                  color: "#031B4E",
                  borderColor: "#031B4E"
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
          
          {/* Right Content - Logo/Illustration */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src="/logo.png"
                alt="Trustboxx Financial Services - 3D Cube Logo"
                width={600}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
