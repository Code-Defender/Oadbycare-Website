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
  'Wound care and clinical dressing support',
  'Health assessments and vital monitoring',
  'Support for chronic medical conditions',
  'Post-hospital recovery care',
  'Coordination with healthcare professionals',
  'Personalised clinical nursing care plans',
] as const

const WHY_CHOOSE_LIST = [
  'Fully qualified and experienced registered nurses',
  'Professional medical care delivered at home',
  'Personalised clinical nursing care plans',
  'Reliable and responsive care across Leicestershire and multiple UK locations',
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
        className="relative w-full min-h-[290px] sm:min-h-0 sm:h-72 lg:h-80 bg-slate-900 overflow-hidden"
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
            <div className="bg-white rounded-t-2xl sm:rounded-t-3xl p-4 sm:p-8 max-w-xl shadow-xl border-t border-x border-[#dbeff2] relative">
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
                Providing qualified Registered Nursing care across Leicestershire and multiple locations throughout the UK
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
                Professional Registered Nurses Providing Care at Home
              </h2>
              <div className="space-y-3.5 text-sm sm:text-base text-[#52656b] leading-relaxed">
                <p>
                  Oadby Care provides experienced and compassionate Registered Nurses to deliver expert
                  clinical care directly in your home. Serving Leicestershire and locations throughout
                  the UK, our qualified nurses support individuals with acute medical needs, chronic
                  conditions, and rehabilitation following hospital discharge.
                </p>
                <p>
                  Our mission is to make clinical care accessible, reliable, and comfortable at home,
                  ensuring clients receive high standards of nursing care without unnecessary hospital
                  stays.
                </p>
              </div>
            </section>

            {/* 2. Our Registered Nursing Services Include: Image on Left + 7 Checklist Items on Right */}
            <section aria-labelledby="nursing-services-heading" className="space-y-5">
              <h2
                id="nursing-services-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Our Registered Nursing Services Include:
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
                  Our Registered Nurses manage clinical procedures, medication protocols, and patient
                  wellbeing for individuals requiring skilled medical care outside a hospital setting.
                  Working in close partnership with doctors, consultants, and families, they ensure care
                  is administered safely and effectively.
                </p>
                <p>
                  This service is ideal for those managing complex conditions, recovering from surgery,
                  or requiring continuous clinical monitoring in the comfort of home.
                </p>
              </div>
            </section>

            {/* 4. Why Choose Our Registered Nurses? */}
            <section aria-labelledby="why-choose-nurses-heading" className="space-y-3.5">
              <h2
                id="why-choose-nurses-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Why Choose Our Registered Nurses?
              </h2>
              <p className="text-sm sm:text-base text-[#52656b] leading-relaxed">
                Arranging clinical nursing at home requires complete trust in the skill and empathy of
                your care team. At Oadby Care, every nurse is fully registered, vetted, and committed to
                patient-centred excellence.
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
                Our aim is to provide trusted clinical nursing support that delivers medical excellence,
                patient safety, and genuine peace of mind.
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
                Home-based nursing care preserves client dignity and emotional comfort while ensuring
                rigorous medical oversight. Our registered nurses treat the whole person, fostering
                recovery, stability, and reassurance for the entire family.
              </p>
            </section>

            {/* 6. Arrange Registered Nursing Care */}
            <section aria-labelledby="arrange-nurses-heading" className="space-y-3">
              <h2
                id="arrange-nurses-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Arrange Registered Nursing Care Today
              </h2>
              <p className="text-sm sm:text-base text-[#52656b] leading-relaxed">
                If you or a loved one requires qualified nursing care at home, contact Oadby Care today.
                Our clinical coordination team is ready to discuss your medical needs and organise an
                immediate consultation.
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

