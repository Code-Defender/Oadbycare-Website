import React from 'react'
import { STITCH_SERVICES } from '@/config/site'

export const ServicesSection: React.FC = () => {
  return (
    <section className="space-y-10" data-purpose="services" id="services-section">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest text-[#4DAEB5] font-bold">
          HOW WE CAN HELP
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#17252B] tracking-tight">
          Comprehensive Home Care Services
        </h2>
        <p className="text-[#52656b] text-base">
          We offer a range of professional home care services designed to support older adults, people with disabilities, and individuals recovering from illness. Flexible care packages help each person receive the right level of support.
        </p>
      </div>

      {/* 4 Services Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STITCH_SERVICES.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-[2rem] p-6 border border-[#dbeff2] shadow-[0_10px_30px_-5px_rgba(77,174,181,0.08),0_4px_12px_-2px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:shadow-lg transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="relative w-full h-36 rounded-2xl overflow-hidden bg-slate-100 mb-3">
                <img
                  alt={service.imageAlt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  src={service.imageSrc}
                />
                <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/95 text-[#17252B] shadow-xs">
                  {service.scopeBadge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#17252B]">{service.title}</h3>
              <p className="text-[#52656b] text-sm leading-relaxed">{service.description}</p>
            </div>
            <div className="pt-6">
              <a
                className="inline-flex items-center text-sm font-semibold text-[#4DAEB5] hover:text-[#3d969c]"
                href="#contact-section"
              >
                More Details →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Below Cards Banner */}
      <div className="rounded-[2rem] bg-white border border-[#dbeff2] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_10px_30px_-5px_rgba(77,174,181,0.08),0_4px_12px_-2px_rgba(0,0,0,0.03)]">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-lg font-bold text-[#17252B]">Need help finding the right care?</h3>
          <p className="text-[#52656b] text-sm">Speak with our local coordinators to explore the support package that best suits your family.</p>
        </div>
        <a
          className="flex-shrink-0 px-7 py-3 rounded-full font-semibold text-sm text-white bg-[#4DAEB5] hover:bg-[#3d969c] shadow-sm transition-colors"
          href="#contact-section"
        >
          Explore All Services
        </a>
      </div>
    </section>
  )
}
