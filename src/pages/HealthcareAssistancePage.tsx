import React from 'react'
import {
  Check,
  ChevronRight,
} from 'lucide-react'
import { ServiceAdviceForm } from '@/components/common/ServiceAdviceForm'
import { ServiceHelpCard } from '@/components/common/ServiceHelpCard'
import type { AppPage } from '@/types'

export interface HealthcareAssistancePageProps {
  onNavigate?: (page: AppPage, targetSectionId?: string) => void
}

const HEALTHCARE_SERVICES_LIST = [
  'Personal care (washing, dressing, grooming)',
  'Medication reminders and monitoring',
  'Mobility and transfer support',
  'Meal preparation and hydration support',
  'Companionship and emotional support',
  'Assistance after hospital discharge',
] as const

const WHY_CHOOSE_LIST = [
  'Fully trained and DBS-checked carers',
  'Personalised care plans tailored to individual needs',
  'Flexible visit times – from short visits to longer support',
  'Fast response across Leicestershire',
  'Compassionate, respectful, and professional service',
] as const

export const HealthcareAssistancePage: React.FC<HealthcareAssistancePageProps> = ({ onNavigate }) => {
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
        aria-label="Healthcare Assistance Banner"
        className="relative w-full h-64 sm:h-72 lg:h-80 bg-slate-900 overflow-hidden"
      >
        <img
          src="/about-hero.jpg"
          alt="Peaceful Leicestershire countryside landscape"
          className="w-full h-full object-cover object-center opacity-75"
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
                  Healthcare Assistance
                </span>
              </nav>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#17252B] mt-2">
                Healthcare Assistance
              </h1>
              <p className="text-xs sm:text-sm text-[#52656b] mt-1.5 leading-relaxed">
                Oadby Care provides trusted and compassionate Healthcare Assistance in Oadby &amp; Leicestershire.
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
            {/* 1. Introduction: Professional Healthcare Assistance at Home */}
            <section aria-labelledby="healthcare-intro-heading" className="space-y-4">
              <h2
                id="healthcare-intro-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#17252B]"
              >
                Professional Healthcare Assistance at Home in Leicestershire
              </h2>
              <div className="space-y-3.5 text-sm sm:text-base text-[#52656b] leading-relaxed">
                <p>
                  Our professional carers support elderly clients, adults with disabilities, and
                  individuals recovering from illness with personalised home care services tailored to
                  their specific needs.
                </p>
                <p>
                  We understand that every client is different. That’s why our home care in Leicestershire
                  is carefully designed to promote independence while ensuring safety, dignity, and
                  wellbeing at all times.
                </p>
              </div>
            </section>

            {/* 2. Our Healthcare Assistance Services Include */}
            <section aria-labelledby="healthcare-services-heading" className="space-y-5">
              <h2
                id="healthcare-services-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Our Healthcare Assistance Services in Leicestershire Include:
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center pt-1">
                {/* Visual Image */}
                <div className="sm:col-span-5 rounded-2xl overflow-hidden border border-[#dbeff2] shadow-xs bg-[#e8f6f8]">
                  <img
                    src="/services/healthcare-assistance.jpg"
                    alt="Compassionate carer assisting an elderly client in a comfortable home"
                    className="w-full h-auto aspect-[4/3] sm:aspect-square object-cover"
                    loading="lazy"
                  />
                </div>

                {/* 6 Services Checklist */}
                <div className="sm:col-span-7">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#17252B] font-medium">
                    {HEALTHCARE_SERVICES_LIST.map((serviceName) => (
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

            {/* 3. What Is Healthcare Assistance? */}
            <section aria-labelledby="what-is-healthcare-heading" className="space-y-3.5">
              <h2
                id="what-is-healthcare-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                What Is Healthcare Assistance?
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#52656b] leading-relaxed">
                <p>
                  Healthcare Assistance is a flexible form of care at home in Leicestershire that
                  provides essential daily support for individuals who need help with routine activities
                  or medical-related assistance. Our trained carers deliver dependable domiciliary care in
                  Leicestershire, ensuring clients receive the right level of care without leaving their
                  homes.
                </p>
                <p>
                  This service is ideal for elderly individuals, those with long-term conditions, or
                  anyone requiring temporary support after hospital discharge.
                </p>
              </div>
            </section>

            {/* 4. Why Choose Our Healthcare Assistance in Leicestershire? */}
            <section aria-labelledby="why-choose-healthcare-heading" className="space-y-3.5">
              <h2
                id="why-choose-healthcare-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Why Choose Our Healthcare Assistance in Leicestershire?
              </h2>
              <p className="text-sm sm:text-base text-[#52656b] leading-relaxed">
                Choosing the right provider for elderly care in Leicestershire is an important decision.
                At Oadby Care, we focus exclusively on delivering high-quality homecare services across
                Leicestershire.
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
            </section>

            {/* 5. Supporting Independence at Home */}
            <section aria-labelledby="supporting-independence-heading" className="space-y-3">
              <h2
                id="supporting-independence-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Supporting Independence at Home
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#52656b] leading-relaxed">
                <p>
                  Remaining at home can significantly improve emotional wellbeing and quality of life.
                  Our Healthcare Assistance in Leicestershire ensures individuals maintain their
                  independence while receiving the practical and medical support they need.
                </p>
                <p>
                  Whether you require short-term assistance or ongoing domiciliary care in Leicestershire,
                  our team is here to help every step of the way.
                </p>
              </div>
            </section>

            {/* 6. Get Started with Healthcare Assistance in Leicestershire */}
            <section aria-labelledby="get-started-healthcare-heading" className="space-y-3">
              <h2
                id="get-started-healthcare-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Get Started with Healthcare Assistance in Leicestershire
              </h2>
              <p className="text-sm sm:text-base text-[#52656b] leading-relaxed">
                If you or your loved one needs professional care at home in Leicestershire, contact Oadby
                Care today. Our friendly team will discuss your requirements, arrange a consultation,
                and create a personalized care plan designed around your needs.
              </p>
            </section>
          </div>

          {/* RIGHT COLUMN: Reusable Sidebar Components */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            <ServiceAdviceForm defaultCareType="Healthcare Assistance" />
            <ServiceHelpCard onNavigate={onNavigate} />
          </aside>
        </div>
      </div>
    </main>
  )
}

export default HealthcareAssistancePage

