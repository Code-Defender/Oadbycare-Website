import React from 'react'
import { Heart, ShieldCheck, ArrowRight, PhoneCall, Home, UserCheck } from 'lucide-react'
import { CARE_PATHWAY_STEPS } from '@/config/site'

const stepIcons = [PhoneCall, Home, UserCheck]

export const MissionValuesSection: React.FC = () => {
  return (
    <section
      className="bg-gradient-to-br from-[#e1f3f6] to-[#eaf8fa] rounded-[2rem] p-8 md:p-14 border border-[#dbeff2] shadow-[0_10px_30px_-5px_rgba(77,174,181,0.08),0_4px_12px_-2px_rgba(0,0,0,0.03)] space-y-12"
      data-purpose="mission-values"
    >
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold text-[#17252B] tracking-tight">
          Committed to Exceptional Home Care
        </h2>
        <p className="text-[#52656b] text-base">
          Supporting independence, dignity, and quality of life through trusted local care governance.
        </p>
      </div>

      {/* Mission & Vision 2-Column Focus */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <div className="bg-white rounded-[1.75rem] p-8 border border-[#dbeff2] shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#e8f6f8] text-[#4DAEB5] flex items-center justify-center font-bold">
            <Heart className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#17252B]">Our Mission</h3>
          <p className="text-[#52656b] text-sm leading-relaxed">
            To provide compassionate, reliable, and high-quality home care tailored to each individual's needs, helping people remain safe, respected, and comfortable in their own homes.
          </p>
        </div>

        <div className="bg-white rounded-[1.75rem] p-8 border border-[#dbeff2] shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#e8f6f8] text-[#4DAEB5] flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#17252B]">Our Vision</h3>
          <p className="text-[#52656b] text-sm leading-relaxed">
            To be Leicestershire’s most trusted home care service, where every individual feels deeply empowered and families enjoy complete peace of mind.
          </p>
        </div>
      </div>

      {/* Care Pathway 3-Step Journey */}
      <div className="pt-4 space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs uppercase tracking-widest text-[#4DAEB5] font-bold">
            SIMPLE, REASSURING ONBOARDING
          </span>
          <h3 className="text-2xl font-bold text-[#17252B]">How Arranging Care Works</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {CARE_PATHWAY_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || PhoneCall

            return (
              <div
                key={step.step}
                className="bg-white/95 rounded-2xl p-6 border border-[#dbeff2] shadow-xs relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#e8f6f8] text-[#4DAEB5] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-400">Step 0{step.step}</span>
                  </div>
                  <h4 className="text-lg font-bold text-[#17252B]">{step.title}</h4>
                  <p className="text-[#52656b] text-xs leading-relaxed">{step.description}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[#4DAEB5]">
                  <a href="#contact-section" className="inline-flex items-center gap-1 hover:underline">
                    <span>Start Step 0{step.step}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
