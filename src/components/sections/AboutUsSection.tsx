import React from 'react'

export const AboutUsSection: React.FC = () => {
  return (
    <section className="py-2" data-purpose="about-us" id="about-section">
      <div className="bg-gradient-to-br from-[#e8f6f8] via-[#eef9fa] to-white rounded-[2rem] border border-[#dbeff2] p-6 sm:p-10 lg:p-12 shadow-[0_10px_30px_-5px_rgba(77,174,181,0.08),0_4px_12px_-2px_rgba(0,0,0,0.03)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Image with organic curved container */}
        <div className="lg:col-span-6 relative">
          <div className="relative z-10 rounded-[1.75rem] overflow-hidden border-2 border-white shadow-md bg-white">
            <img
              alt="A friendly male carer walking in a bright garden hallway with an elderly gentleman, dignified, warm natural light, comfortable British residential home"
              className="w-full h-auto object-cover max-h-[440px] hover:scale-102 transition-transform duration-500"
              loading="lazy"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGXTgrL9XWHeiz6vfoVn-S9h99gLd_j85Gmy4P-1fiF2Zg0Tz3yDh4CbxO6YJKO_azTpUqr__O7PTr5iZzAQV7gkxyQT7NqC1gBwzWxjtRTY-clxp44f5GdwMST_kGml0OQDDWqaonKssmFIFEUqlolhyWE6th0TZbPQjh45urLii7C76LhGu5uLZwsMteF1JK4xcuhzrxUQlh9COUL3KgJsk0Gn_g0Avd6Dks9vXd"
            />
          </div>
          {/* Organic accent background element */}
          <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-[#ddf2f6] rounded-[2rem] -z-0" />
        </div>

        {/* Right Description Content */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#4DAEB5] font-bold">
              Family-Led Domiciliary Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#17252B] tracking-tight leading-tight">
              Delivering Trusted Home Care
            </h2>
          </div>

          <div className="space-y-4 text-[#52656b] leading-relaxed text-base">
            <p>
              We provide reliable and affordable home care, supporting individuals to live independently in the comfort of their own homes.
            </p>
            <p>
              Our dedicated team delivers high-quality domiciliary care, live-in care, personal care, and specialist support tailored to each individual. Whether you require short-term assistance or long-term home care, we are committed to ensuring safety, comfort, and peace of mind for clients and their families.
            </p>
          </div>

          {/* Feature mini-points with concrete metrics */}
          <div className="grid grid-cols-2 gap-4 py-2">
            <div className="bg-white/90 rounded-2xl p-4 border border-[#dbeff2]/70 shadow-sm">
              <span className="block font-bold text-[#17252B] text-sm">1 Named Care Coordinator</span>
              <span className="text-xs text-[#52656b]">Dedicated direct phone line for your family</span>
            </div>
            <div className="bg-white/90 rounded-2xl p-4 border border-[#dbeff2]/70 shadow-sm">
              <span className="block font-bold text-[#17252B] text-sm">Flexible 30-Min to 24/7 Visits</span>
              <span className="text-xs text-[#52656b]">Adjust schedules with zero agency penalties</span>
            </div>
          </div>

          {/* CTA */}
          <div>
            <a
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white bg-[#4DAEB5] hover:bg-[#3d969c] transition-colors shadow-sm"
              href="#services-section"
            >
              <span>Discover Our Approach</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
