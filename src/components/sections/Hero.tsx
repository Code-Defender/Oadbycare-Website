import React, { useState } from 'react'
import { ArrowRight, Check, CheckCircle2, ShieldCheck } from 'lucide-react'

interface HeroProps {
  onCheckAvailability?: (careType: string, location: string, hours: string) => void
}

const locationLabels: Record<string, string> = {
  oadby: 'Oadby & Surrounds',
  leicester: 'Leicester Central',
  wigston: 'Wigston',
  'south-leics': 'South Leicestershire',
}

const careTypeLabels: Record<string, string> = {
  personal: 'Personal Care',
  companionship: 'Companionship',
  dementia: 'Dementia Care',
  respite: 'Respite Care',
  livein: '24/7 Live-in Care',
}

export const Hero: React.FC<HeroProps> = ({ onCheckAvailability }) => {
  const [careType, setCareType] = useState('personal')
  const [location, setLocation] = useState('oadby')
  const [hours, setHours] = useState('hourly')
  const [availabilityResult, setAvailabilityResult] = useState<{
    confirmed: boolean
    careName: string
    locationName: string
  } | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAvailabilityResult({
      confirmed: true,
      careName: careTypeLabels[careType] || 'Personal Care',
      locationName: locationLabels[location] || 'Oadby',
    })
    onCheckAvailability?.(careType, location, hours)
  }

  const handleBookSlot = () => {
    const contactElem = document.getElementById('contact-section')
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      className="relative rounded-[2rem] overflow-hidden shadow-[0_10px_30px_-5px_rgba(77,174,181,0.08),0_4px_12px_-2px_rgba(0,0,0,0.03)] border border-[#dbeff2]/70 min-h-[580px] lg:min-h-[620px] flex flex-col justify-between p-6 sm:p-10 lg:p-12"
      data-purpose="hero"
    >
      {/* Background Image & Soft Teal Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-doctor.jpg"
          alt="Doctor and patient consultation in a warm, bright room"
          className="w-full h-full object-cover object-right md:object-[78%_center] transition-transform duration-700"
        />
        {/* Scrim cleanly fades out before reaching the doctor, keeping him 100% clear & sharp */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#eaf8fa] via-[#eaf8fa]/85 via-30% to-transparent to-48% pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#eaf8fa] via-[#eaf8fa]/70 to-transparent md:hidden pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-xl lg:max-w-2xl space-y-5 pt-2 sm:pt-4">
        {/* Reassurance Badge */}
        <div className="inline-flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[#3d969c] border border-[#dbeff2] text-xs font-semibold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#4DAEB5] animate-pulse" />
            <span>Trusted Domiciliary &amp; Live-in Care</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 text-xs font-medium text-slate-600 border border-[#dbeff2]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#4DAEB5]" />
            <span>Same-Day Emergency Assessments Available</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#17252B] tracking-tight leading-[1.12]">
          Compassionate Home &amp; Live-In Care{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17252B] via-[#22676c] to-[#4DAEB5]">
            Across Oadby &amp; Leicestershire
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#52656b] max-w-lg leading-relaxed">
          Delivering trusted, personalised home care that helps people live safely, independently, and with dignity in the comfort of their own homes.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center gap-4 pt-1">
          <a
            className="px-7 py-3.5 rounded-full text-base font-semibold text-white bg-[#4DAEB5] hover:bg-[#3d969c] shadow-md hover:shadow-lg transition-all focus:ring-2 focus:ring-[#4DAEB5]"
            href="#services-section"
          >
            Explore Our Services
          </a>
          <a
            className="px-7 py-3.5 rounded-full text-base font-semibold text-[#17252B] bg-white/95 hover:bg-white border border-[#dbeff2] shadow-sm hover:shadow transition-all backdrop-blur-sm"
            href="#contact-section"
          >
            Get in Touch
          </a>
        </div>

        {/* Reassurance Checklist */}
        <div className="pt-4 border-t border-[#dbeff2]/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-[#17252B]">
          <div className="flex items-center gap-2">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#4DAEB5]/20 flex items-center justify-center text-[#4DAEB5]">
              <Check className="w-3.5 h-3.5" strokeWidth={3} />
            </span>
            <span>Personalised Care Plans</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#4DAEB5]/20 flex items-center justify-center text-[#4DAEB5]">
              <Check className="w-3.5 h-3.5" strokeWidth={3} />
            </span>
            <span>100% DBS Vetted Carers</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#4DAEB5]/20 flex items-center justify-center text-[#4DAEB5]">
              <Check className="w-3.5 h-3.5" strokeWidth={3} />
            </span>
            <span>Local 24/7 Support</span>
          </div>
        </div>
      </div>

      {/* Quick Care Availability Matcher Bar */}
      <div className="relative z-10 mt-10 rounded-2xl p-4 sm:p-5 shadow-[0_12px_36px_0_rgba(77,174,181,0.14)] border border-white/80 bg-white/75 backdrop-blur-md">
        <form className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end" onSubmit={handleSubmit}>
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-[#17252B] uppercase tracking-wide" htmlFor="care-type">
              Care Type
            </label>
            <div className="relative">
              <select
                id="care-type"
                value={careType}
                onChange={(e) => {
                  setCareType(e.target.value)
                  setAvailabilityResult(null)
                }}
                className="w-full bg-white/90 text-sm text-[#17252B] border border-[#dbeff2] rounded-xl px-3.5 py-2.5 focus:border-[#4DAEB5] focus:ring-1 focus:ring-[#4DAEB5] outline-none transition-all shadow-sm"
              >
                <option value="personal">Personal Care</option>
                <option value="companionship">Companionship</option>
                <option value="dementia">Dementia Care</option>
                <option value="respite">Respite Care</option>
                <option value="livein">24/7 Live-in Care</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-[#17252B] uppercase tracking-wide" htmlFor="location">
              Location
            </label>
            <div className="relative">
              <select
                id="location"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value)
                  setAvailabilityResult(null)
                }}
                className="w-full bg-white/90 text-sm text-[#17252B] border border-[#dbeff2] rounded-xl px-3.5 py-2.5 focus:border-[#4DAEB5] focus:ring-1 focus:ring-[#4DAEB5] outline-none transition-all shadow-sm"
              >
                <option value="oadby">Oadby &amp; Surrounds</option>
                <option value="leicester">Leicester Central</option>
                <option value="wigston">Wigston</option>
                <option value="south-leics">South Leicestershire</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-[#17252B] uppercase tracking-wide" htmlFor="hours">
              Required Hours
            </label>
            <div className="relative">
              <select
                id="hours"
                value={hours}
                onChange={(e) => {
                  setHours(e.target.value)
                  setAvailabilityResult(null)
                }}
                className="w-full bg-white/90 text-sm text-[#17252B] border border-[#dbeff2] rounded-xl px-3.5 py-2.5 focus:border-[#4DAEB5] focus:ring-1 focus:ring-[#4DAEB5] outline-none transition-all shadow-sm"
              >
                <option value="hourly">Hourly Visiting (from 1 hr)</option>
                <option value="day">Daytime Support</option>
                <option value="overnight">Overnight Waking/Sleeping</option>
                <option value="full-livein">Full-time Live-in Care</option>
              </select>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2.5 px-6 rounded-xl font-semibold text-sm text-white bg-[#4DAEB5] hover:bg-[#3d969c] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Check Availability</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Dynamic Reassurance Result */}
        {availabilityResult && (
          <div className="mt-3 pt-3 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs bg-[#e8f6f8]/80 p-3 rounded-xl border border-[#dbeff2] animate-in fade-in duration-200">
            <div className="flex items-center gap-2 text-[#17252B]">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                <strong>Carers Available:</strong> Accredited local carers ready in{' '}
                <span className="text-[#4DAEB5] font-semibold">{availabilityResult.locationName}</span> for{' '}
                <span className="text-[#4DAEB5] font-semibold">{availabilityResult.careName}</span>.
              </span>
            </div>
            <button
              type="button"
              onClick={handleBookSlot}
              className="shrink-0 font-bold text-white bg-[#4DAEB5] hover:bg-[#3d969c] px-3.5 py-1.5 rounded-full transition-colors flex items-center gap-1"
            >
              <span>Book Assessment</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
