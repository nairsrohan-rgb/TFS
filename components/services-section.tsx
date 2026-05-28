import { 
  TrendingUp, 
  Shield, 
  Users, 
  PiggyBank,
  Building2,
  HeadphonesIcon
} from "lucide-react"

const services = [
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Expert guidance on portfolio management and wealth building strategies tailored to your goals."
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Comprehensive risk assessment and mitigation strategies to protect your financial future."
  },
  {
    icon: PiggyBank,
    title: "Retirement Planning",
    description: "Strategic planning to ensure a secure and comfortable retirement for you and your family."
  },
  {
    icon: Building2,
    title: "Corporate Finance",
    description: "Business financial solutions including capital structuring, M&A advisory, and growth financing."
  },
  {
    icon: Users,
    title: "Wealth Management",
    description: "Holistic wealth preservation and growth services for high-net-worth individuals and families."
  },
  {
    icon: HeadphonesIcon,
    title: "Client Support",
    description: "Dedicated support team available to assist you with all your financial service needs."
  }
]

export function ServicesSection() {
  return (
    <section 
      id="services" 
      className="py-20 md:py-32"
      style={{ backgroundColor: "#031B4E" }}
    >
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-[28px] md:text-[48px] font-bold text-balance"
            style={{ color: "#F8FAFC" }}
          >
            Our Services
          </h2>
          <p 
            className="mt-4 text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "#6B7280" }}
          >
            Comprehensive financial solutions designed to meet your unique needs 
            and help you achieve your financial objectives.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2"
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(18px)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)"
              }}
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{ 
                  background: "linear-gradient(135deg, #0A66FF, #0047CC)"
                }}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 
                className="text-xl font-semibold mb-3"
                style={{ color: "#F8FAFC" }}
              >
                {service.title}
              </h3>
              
              <p 
                className="text-base leading-relaxed"
                style={{ color: "#9CA3AF" }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
