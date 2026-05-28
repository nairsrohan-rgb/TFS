import { CheckCircle } from "lucide-react"

const reasons = [
  {
    title: "Trusted Expertise",
    description: "Decades of combined experience in financial services with proven track record of success."
  },
  {
    title: "Client-Centric Approach",
    description: "Your goals are our priority. We tailor every solution to your unique financial situation."
  },
  {
    title: "Transparent Communication",
    description: "No hidden fees, no surprises. We believe in clear, honest communication at every step."
  },
  {
    title: "24/7 Support",
    description: "Our dedicated team is always available to address your questions and concerns."
  }
]

export function WhyTfsSection() {
  return (
    <section 
      id="why-tfs" 
      className="py-20 md:py-32"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <h2 
              className="text-[28px] md:text-[48px] font-bold text-balance"
              style={{ color: "#031B4E" }}
            >
              Why Choose Trustboxx?
            </h2>
            <p 
              className="mt-6 text-base md:text-lg leading-relaxed"
              style={{ color: "#6B7280" }}
            >
              At Trustboxx Financial Services, we combine industry expertise with 
              personalized attention to deliver financial solutions that truly work for you.
            </p>
            
            <div className="mt-10 flex flex-col gap-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <div 
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(10, 102, 255, 0.1)" }}
                  >
                    <CheckCircle 
                      className="w-5 h-5" 
                      style={{ color: "#0A66FF" }} 
                    />
                  </div>
                  <div>
                    <h3 
                      className="text-lg font-semibold"
                      style={{ color: "#031B4E" }}
                    >
                      {reason.title}
                    </h3>
                    <p 
                      className="mt-1 text-base"
                      style={{ color: "#6B7280" }}
                    >
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Content - Stats */}
          <div 
            className="grid grid-cols-2 gap-6"
          >
            {[
              { value: "15+", label: "Years Experience" },
              { value: "5000+", label: "Happy Clients" },
              { value: "$2B+", label: "Assets Managed" },
              { value: "98%", label: "Client Retention" }
            ].map((stat) => (
              <div 
                key={stat.label}
                className="p-8 rounded-3xl text-center"
                style={{
                  background: "rgba(255, 255, 255, 0.9)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06)",
                  border: "1px solid rgba(3, 27, 78, 0.08)"
                }}
              >
                <div 
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: "#0A66FF" }}
                >
                  {stat.value}
                </div>
                <div 
                  className="mt-2 text-sm font-medium"
                  style={{ color: "#6B7280" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
