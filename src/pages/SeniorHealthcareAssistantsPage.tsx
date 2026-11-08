import React from 'react'
import {
  Check,
  ChevronRight,
} from 'lucide-react'
import { ServiceAdviceForm } from '@/components/common/ServiceAdviceForm'
import { ServiceHelpCard } from '@/components/common/ServiceHelpCard'
import type { AppPage } from '@/types'

export interface SeniorHealthcareAssistantsPageProps {
  onNavigate?: (page: AppPage, targetSectionId?: string) => void
}

const SENIOR_SERVICES_LIST = [
  'Personal care and hygiene assistance',
  'Medication management and monitoring',
  'Mobility and transfer support',
  'Support with long-term health conditions',
  'Assistance with daily living activities',
  'Companionship and emotional reassurance',
] as const

const WHY_CHOOSE_LIST = [
  'Highly trained and DBS-checked senior carers',
  'Experience in complex and specialist care needs',
  'Personalised care plans tailored to each client',
  'Flexible support options across Leicestershire',
  'Compassionate and respectful approach',
] as const

export const SeniorHealthcareAssistantsPage: React.FC<SeniorHealthcareAssistantsPageProps> = ({
  onNavigate,
}) => {
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
        aria-label="Senior Healthcare Assistants Banner"
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
                  Senior Healthcare Assistants
                </span>
              </nav>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#17252B] mt-2">
                Senior Healthcare Assistants
              </h1>
              <p className="text-xs sm:text-sm text-[#52656b] mt-1.5 leading-relaxed">
                We focus on delivering high-quality Senior Healthcare Assistants in Oadby &amp; Leicestershire
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
            {/* 1. Introduction: Experienced Senior Healthcare Assistants */}
            <section aria-labelledby="senior-intro-heading" className="space-y-4">
              <h2
                id="senior-intro-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#17252B]"
              >
                Experienced Senior Healthcare Assistants Supporting Families Across Leicestershire
              </h2>
              <div className="space-y-3.5 text-sm sm:text-base text-[#52656b] leading-relaxed">
                <p>
                  Oadby Care provides professional and compassionate Senior Healthcare Assistants in
                  Leicestershire, delivering reliable home care support tailored to individual needs. Our
                  experienced senior carers assist elderly individuals, adults with complex needs, and
                  those requiring enhanced supervision within the comfort of their own homes.
                </p>
                <p>
                  We focus on delivering high-quality home care in Leicestershire, ensuring every client
                  receives personalised support that promotes dignity, safety, and independence.
                </p>
              </div>
            </section>

            {/* 2. Our Senior Healthcare Assistant Services Include */}
            <section aria-labelledby="senior-services-heading" className="space-y-5">
              <h2
                id="senior-services-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Our Senior Healthcare Assistant Services Include:
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center pt-1">
                {/* Visual Image */}
                <div className="sm:col-span-5 rounded-2xl overflow-hidden border border-[#dbeff2] shadow-xs bg-[#e8f6f8]">
                  <img
                    src="/services/senior-healthcare-assistants.jpg"
                    alt="Senior healthcare assistant reviewing care routines and checking client comfort"
                    className="w-full h-auto aspect-[4/3] sm:aspect-square object-cover"
                    loading="lazy"
                  />
                </div>

                {/* 6 Services Checklist */}
                <div className="sm:col-span-7">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#17252B] font-medium">
                    {SENIOR_SERVICES_LIST.map((serviceName) => (
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

            {/* 3. What Do Senior Healthcare Assistants Do? */}
            <section aria-labelledby="what-do-senior-heading" className="space-y-3.5">
              <h2
                id="what-do-senior-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                What Do Senior Healthcare Assistants Do?
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#52656b] leading-relaxed">
                <p>
                  Our Senior Healthcare Assistants in Leicestershire provide advanced support beyond basic
                  domiciliary care. They are experienced professionals trained to handle more complex care
                  requirements while supervising and guiding other care staff when needed.
                </p>
                <p>
                  This service is ideal for individuals who require consistent, higher-level elderly care
                  in Leicestershire, including those living with long-term conditions or mobility challenges.
                </p>
              </div>
            </section>

            {/* 4. Why Choose Our Senior Healthcare Assistants in Leicestershire? */}
            <section aria-labelledby="why-choose-senior-heading" className="space-y-3.5">
              <h2
                id="why-choose-senior-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Why Choose Our Senior Healthcare Assistants in Leicestershire?
              </h2>
              <p className="text-sm sm:text-base text-[#52656b] leading-relaxed">
                Choosing trusted and experienced carers is essential when arranging domiciliary care in
                Leicestershire. At Oadby Care, we are committed to maintaining high standards of care and
                professionalism.
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

            {/* 5. Supporting Complex Care Needs at Home */}
            <section aria-labelledby="complex-support-heading" className="space-y-3">
              <h2
                id="complex-support-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Supporting Complex Care Needs at Home
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#52656b] leading-relaxed">
                <p>
                  For individuals who require more structured and experienced support, our Senior
                  Healthcare Assistants in Leicestershire ensure continuity of care and close attention to
                  wellbeing. Remaining at home while receiving advanced care improves comfort,
                  familiarity, and overall quality of life.
                </p>
                <p>
                  Whether care is needed short-term or long-term, our Leicestershire care team is ready to
                  provide expert support.
                </p>
              </div>
            </section>

            {/* 6. Arrange Senior Healthcare Support in Leicestershire */}
            <section aria-labelledby="arrange-senior-heading" className="space-y-3">
              <h2
                id="arrange-senior-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Arrange Senior Healthcare Support in Leicestershire
              </h2>
              <p className="text-sm sm:text-base text-[#52656b] leading-relaxed">
                If you are looking for experienced Senior Healthcare Assistants in Leicestershire, contact
                Oadby Care today. We will discuss your needs, arrange a consultation, and develop a
                personalised care plan designed around your situation.
              </p>
            </section>
          </div>

          {/* RIGHT COLUMN: Reusable Sidebar Components */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            <ServiceAdviceForm defaultCareType="Senior Healthcare Assistants" />
            <ServiceHelpCard onNavigate={onNavigate} />
          </aside>
        </div>
      </div>
    </main>
  )
}

export default SeniorHealthcareAssistantsPage

