import React from 'react'
import {
  Check,
  ChevronRight,
} from 'lucide-react'
import { ServiceAdviceForm } from '@/components/common/ServiceAdviceForm'
import { ServiceHelpCard } from '@/components/common/ServiceHelpCard'
import type { AppPage } from '@/types'

export interface AdvancedCarePageProps {
  onNavigate?: (page: AppPage, targetSectionId?: string) => void
}

const ADVANCED_SERVICES_LIST = [
  'Support for complex health conditions',
  'Assistance with mobility and transfers',
  'Personal care and hygiene support',
  'Medication monitoring and reminders',
  'Help with daily living activities',
  'Emotional support and companionship',
  'Monitoring health and wellbeing',
] as const

const WHY_CHOOSE_LIST = [
  'Experienced and trained carers',
  'Personalised care plans for complex needs',
  'Flexible care arrangements across Leicestershire and multiple UK locations',
  'Reliable and responsive local care team',
  'Compassionate and respectful approach',
] as const

export const AdvancedCarePage: React.FC<AdvancedCarePageProps> = ({ onNavigate }) => {
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate) {
      e.preventDefault()
      onNavigate('home')
    }
  }

  const handleServicesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate) {
      e.preventDefault()
      onNavigate('services')
    }
  }

  return (
    <main id="main-content" className="flex-grow w-full">
      {/* =========================================================================
          HERO SECTION: Panoramic Background with Overlapping Title/Breadcrumb Card
          ========================================================================= */}
      <section
        aria-label="Advanced Care Banner"
        className="relative w-full h-64 sm:h-72 lg:h-80 bg-slate-900 overflow-hidden"
      >
        <img
          src="/service-banner-hero.jpg"
          alt="Peaceful British countryside landscape with rolling green hills"
          className="w-full h-full object-cover object-center opacity-85"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent pointer-events-none" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-0">
            <div className="bg-white rounded-t-2xl sm:rounded-t-3xl p-6 sm:p-8 max-w-xl shadow-xl border-t border-x border-[#dbeff2] relative">
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#4DAEB5]" />

              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#52656b]"
              >
                <a
                  href="/"
                  onClick={handleHomeClick}
                  className="hover:text-[#4DAEB5] transition-colors focus:outline-none focus:underline"
                >
                  Home
                </a>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                <a
                  href="#services"
                  onClick={handleServicesClick}
                  className="hover:text-[#4DAEB5] transition-colors focus:outline-none focus:underline"
                >
                  Services
                </a>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                <span className="text-[#4DAEB5] font-semibold" aria-current="page">
                  Advanced Care
                </span>
              </nav>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#17252B] mt-2">
                Advanced Care
              </h1>
              <p className="text-xs sm:text-sm text-[#52656b] mt-1.5 leading-relaxed">
                Providing specialist Advanced Care across Leicestershire and multiple locations throughout the UK
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN PAGE CONTENT: Two-Column Layout (68% Main / 32% Sidebar)
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT COLUMN: Main Content (~68% width on desktop) */}
          <div className="lg:col-span-8 space-y-10 sm:space-y-12">
            {/* 1. Introduction: Specialist Advanced Care Services at Home */}
            <section aria-labelledby="advanced-intro-heading" className="space-y-4">
              <h2
                id="advanced-intro-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#17252B]"
              >
                Specialist Advanced Care Services Delivered at Home
              </h2>
              <div className="space-y-3.5 text-sm sm:text-base text-[#52656b] leading-relaxed">
                <p>
                  Oadby Care provides professional, compassionate Advanced Care for individuals managing
                  complex conditions, advanced dementia, or higher-dependency health needs. Covering
                  Leicestershire and multiple locations throughout the UK, our trained carers deliver
                  structured care that preserves dignity, comfort, and personal safety.
                </p>
                <p>
                  Our goal is to support clients with advanced care requirements so they can remain safely
                  in familiar home surroundings while enjoying the highest possible quality of life.
                </p>
              </div>
            </section>

            {/* 2. Our Advanced Care Services Include: Image on Left + 7 Checklist Items on Right */}
            <section aria-labelledby="advanced-services-heading" className="space-y-5">
              <h2
                id="advanced-services-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Our Advanced Care Services Include:
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center pt-1">
                {/* Visual Image */}
                <div className="sm:col-span-5 rounded-2xl overflow-hidden border border-[#dbeff2] shadow-xs bg-[#e8f6f8]">
                  <img
                    src="/services/advanced-care.jpg"
                    alt="Advanced home care specialist providing attentive and reassuring support"
                    className="w-full h-auto aspect-[4/3] sm:aspect-square object-cover"
                    loading="lazy"
                  />
                </div>

                {/* 7 Services Checklist */}
                <div className="sm:col-span-7">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#17252B] font-medium">
                    {ADVANCED_SERVICES_LIST.map((serviceName) => (
                      <li key={serviceName} className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#ddf2f6] text-[#4DAEB5] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </span>
                        <span>{serviceName}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. What Is Advanced Care? */}
            <section aria-labelledby="what-is-advanced-heading" className="space-y-3.5">
              <h2
                id="what-is-advanced-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                What Is Advanced Care?
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#52656b] leading-relaxed">
                <p>
                  Advanced Care is designed for individuals whose care needs exceed standard domiciliary
                  support. This includes those living with progressive neurological conditions, severe
                  mobility restrictions, or health challenges requiring close supervision and
                  specialised care techniques.
                </p>
                <p>
                  Our carers coordinate closely with families, general practitioners, and district medical
                  professionals to ensure a continuous, structured, and proactive standard of care.
                </p>
              </div>
            </section>

            {/* 4. Why Choose Our Advanced Care? */}
            <section aria-labelledby="why-choose-advanced-heading" className="space-y-3.5">
              <h2
                id="why-choose-advanced-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Why Choose Our Advanced Care?
              </h2>
              <p className="text-sm sm:text-base text-[#52656b] leading-relaxed">
                When addressing higher-level care requirements, choosing an experienced and
                compassionate care partner is paramount. At Oadby Care, we combine attentive personal
                care with clinical awareness to support both clients and their families.
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-[#17252B] font-medium pt-1">
                {WHY_CHOOSE_LIST.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#ddf2f6] text-[#4DAEB5] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm sm:text-base text-[#52656b] leading-relaxed pt-1.5">
                Our commitment is to provide trusted, professional home care that families across the UK
                can rely on with confidence.
              </p>
            </section>

            {/* 5. Supporting Complex Needs at Home */}
            <section aria-labelledby="complex-needs-heading" className="space-y-3">
              <h2
                id="complex-needs-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Supporting Complex Needs at Home
              </h2>
              <p className="text-sm sm:text-base text-[#52656b] leading-relaxed">
                Remaining at home provides invaluable emotional comfort and consistency during complex
                health journeys. Our attentive carers adapt to changing needs, empowering clients to
                maintain their independence within a safe and supportive home setting.
              </p>
            </section>

            {/* 6. Arrange Advanced Care */}
            <section aria-labelledby="arrange-advanced-heading" className="space-y-3">
              <h2
                id="arrange-advanced-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Arrange Advanced Care Today
              </h2>
              <p className="text-sm sm:text-base text-[#52656b] leading-relaxed">
                If you or a loved one requires specialised advanced care at home, get in touch with
                Oadby Care today. Our care team will carry out a thorough assessment to design a
                bespoke care plan tailored to your exact requirements.
              </p>
            </section>
          </div>

          {/* RIGHT COLUMN: Reusable Sidebar Components */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            <ServiceAdviceForm defaultCareType="Advanced Care" />
            <ServiceHelpCard onNavigate={onNavigate} />
          </aside>
        </div>
      </div>
    </main>
  )
}

export default AdvancedCarePage

