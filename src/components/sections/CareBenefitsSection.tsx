import React from 'react'
import { ShieldCheck } from 'lucide-react'
import { CARE_BENEFITS } from '@/config/site'

export const CareBenefitsSection: React.FC = () => {
  return (
    <section className="space-y-10" data-purpose="care-benefits">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold text-[#17252B] tracking-tight">
          Care That Puts You First
        </h2>
        <p className="text-[#52656b] text-base">
          Every person is unique. Our approach puts individual needs, routines, preferences, and wellbeing at the heart of every care decision.
        </p>
      </div>

      {/* 3 Rounded Benefit Cards with Visual Variety */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {CARE_BENEFITS.map((benefit) => {
          const isHighlighted = 'highlighted' in benefit && benefit.highlighted

          return (
            <div
              key={benefit.id}
              className={`rounded-[2rem] p-8 border transition-all duration-300 flex flex-col justify-between relative ${
                isHighlighted
                  ? 'bg-gradient-to-b from-[#eef9fa] to-white border-[#4DAEB5]/40 shadow-[0_16px_36px_-6px_rgba(77,174,181,0.14)] md:-translate-y-1'
                  : 'bg-white border-[#dbeff2] shadow-[0_10px_30px_-5px_rgba(77,174,181,0.08),0_4px_12px_-2px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-lg'
              }`}
            >
              {benefit.badge && (
                <div className="absolute -top-3.5 left-8 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#4DAEB5] text-white text-[11px] font-bold shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{benefit.badge}</span>
                </div>
              )}

              <div className="space-y-4 pt-1">
                <div className="w-14 h-14 rounded-2xl bg-[#e8f6f8] text-[#4DAEB5] flex items-center justify-center shadow-sm">
                  {benefit.iconType === 'clipboard' && (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  )}
                  {benefit.iconType === 'heart' && (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  )}
                  {benefit.iconType === 'map' && (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                      <path
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-bold text-[#17252B]">{benefit.title}</h3>
                <p className="text-[#52656b] leading-relaxed text-sm">{benefit.description}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#dbeff2]/60 text-xs font-semibold text-[#4DAEB5] flex items-center gap-1">
                <a href="#contact-section" className="hover:underline">
                  {benefit.linkText}
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
