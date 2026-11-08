import React from 'react'
import {
  Check,
  ChevronRight,
} from 'lucide-react'
import { ServiceAdviceForm } from '@/components/common/ServiceAdviceForm'
import { ServiceHelpCard } from '@/components/common/ServiceHelpCard'
import type { AppPage } from '@/types'

export interface RegisteredNursesPageProps {
  onNavigate?: (page: AppPage, targetSectionId?: string) => void
}

const NURSING_SERVICES_LIST = [
  'Medication administration and monitoring',
  'Wound care and clinical support',
  'Health assessments and monitoring',
  'Support for chronic medical conditions',
  'Post-hospital recovery care',
  'Coordination with healthcare professionals',
  'Personalised nursing care plans',
] as const

const WHY_CHOOSE_LIST = [
  'Fully qualified and experienced registered nurses',
  'Professional medical care delivered at home',
  'Personalised nursing care plans',
  'Reliable and responsive care across Leicestershire',
  'Compassionate and patient-focused service',
] as const

export const RegisteredNursesPage: React.FC<RegisteredNursesPageProps> = ({ onNavigate }) => {
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
        aria-label="Registered Nurses Banner"
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
                  Registered Nurses
                </span>
              </nav>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#17252B] mt-2">
                Registered Nurses
              </h1>
              <p className="text-xs sm:text-sm text-[#52656b] mt-1.5 leading-relaxed">
                We focus on delivering high-quality Registered Nurses in Oadby &amp; Leicestershire
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
            {/* 1. Introduction: Professional Registered Nurses Providing Care at Home */}
            <section aria-labelledby="nurses-intro-heading" className="space-y-4">
              <h2
                id="nurses-intro-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#17252B]"
              >
                Professional Registered Nurses Providing Care at Home in Leicestershire
              </h2>
              <div className="space-y-3.5 text-sm sm:text-base text-[#52656b] leading-relaxed">
                <p>
                  Oadby Care offers experienced and compassionate Registered Nurses in Leicestershire,
                  delivering professional nursing care within the comfort of your own home. Our qualified
                  nurses support individuals with complex medical needs, long-term conditions, and recovery
                  after illness or hospital discharge.
                </p>
                <p>
                  Our goal is to provide reliable nursing care at home in Leicestershire so clients can
                  receive professional healthcare support while remaining in a familiar and comfortable
                  environment.
                </p>
              </div>
            </section>

            {/* 2. Our Registered Nursing Services Include: Image on Left + 7 Checklist Items on Right */}
            <section aria-labelledby="nursing-services-heading" className="space-y-5">
              <h2
                id="nursing-services-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Our Registered Nursing Services in Leicestershire Include:
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center pt-1">
                {/* Visual Image */}
                <div className="sm:col-span-5 rounded-2xl overflow-hidden border border-[#dbeff2] shadow-xs bg-[#e8f6f8]">
                  <img
                    src="/services/registered-nurses.jpg"
                    alt="Registered clinical community nurse reviewing medical notes with client at home"
                    className="w-full h-auto aspect-[4/3] sm:aspect-square object-cover"
                    loading="lazy"
                  />
                </div>

                {/* 7 Services Checklist */}
                <div className="sm:col-span-7">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#17252B] font-medium">
                    {NURSING_SERVICES_LIST.map((serviceName) => (
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

            {/* 3. What Does a Registered Nurse Do? */}
            <section aria-labelledby="what-do-nurses-heading" className="space-y-3.5">
              <h2
                id="what-do-nurses-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                What Does a Registered Nurse Do?
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#52656b] leading-relaxed">
                <p>
                  Our Registered Nurses in Leicestershire provide advanced medical care and supervision
                  for individuals who require professional healthcare support at home. They work closely
                  with families, doctors, and care teams to ensure every client receives safe,
                  personalised, and effective care.
                </p>
                <p>
                  This service is ideal for individuals who require ongoing medical monitoring,
                  specialised care, or post-hospital recovery support.
                </p>
              </div>
            </section>

            {/* 4. Why Choose Our Registered Nurses in Leicestershire? */}
            <section aria-labelledby="why-choose-nurses-heading" className="space-y-3.5">
              <h2
                id="why-choose-nurses-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Why Choose Our Registered Nurses in Leicestershire?
              </h2>
              <p className="text-sm sm:text-base text-[#52656b] leading-relaxed">
                Finding reliable nursing care at home in Leicestershire is essential for families
                seeking professional medical support. At Oadby Care, we ensure every nurse is fully
                qualified and committed to delivering exceptional care.
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
                Our aim is to provide trusted professional nursing support in Leicestershire that
                ensures safety, comfort, and peace of mind.
              </p>
            </section>

            {/* 5. Quality Nursing Care in the Comfort of Home */}
            <section aria-labelledby="comfort-nursing-heading" className="space-y-3">
              <h2
                id="comfort-nursing-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Quality Nursing Care in the Comfort of Home
              </h2>
              <p className="text-sm sm:text-base text-[#52656b] leading-relaxed">
                Receiving care from Registered Nurses in Leicestershire allows individuals to remain in
                their homes while receiving the medical support they need. Our nursing team ensures every
                client receives safe, attentive, and personalised care that supports both physical health
                and emotional wellbeing.
              </p>
            </section>

            {/* 6. Arrange Registered Nursing Care in Leicestershire */}
            <section aria-labelledby="arrange-nurses-heading" className="space-y-3">
              <h2
                id="arrange-nurses-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Arrange Registered Nursing Care in Leicestershire
              </h2>
              <p className="text-sm sm:text-base text-[#52656b] leading-relaxed">
                If you or your loved one requires professional nursing care at home in Leicestershire,
                contact Oadby Care today. Our team will discuss your needs and create a tailored care
                plan designed to provide the right level of support.
              </p>
            </section>
          </div>

          {/* RIGHT COLUMN: Reusable Sidebar Components */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            <ServiceAdviceForm defaultCareType="Registered Nurses" />
            <ServiceHelpCard onNavigate={onNavigate} />
          </aside>
        </div>
      </div>
    </main>
  )
}

export default RegisteredNursesPage

