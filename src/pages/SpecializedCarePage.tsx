import React from 'react'
import {
  Check,
  ChevronRight,
} from 'lucide-react'
import { ServiceAdviceForm } from '@/components/common/ServiceAdviceForm'
import { ServiceHelpCard } from '@/components/common/ServiceHelpCard'
import type { AppPage } from '@/types'

export interface SpecializedCarePageProps {
  onNavigate?: (page: AppPage, targetSectionId?: string) => void
}

const SERVICES_INCLUDE_LIST = [
  'Dementia and Alzheimer’s care',
  'Disability care and mobility support',
  'Post-hospital recovery support',
  'Long-term condition management',
  'Personal care and daily living assistance',
  'Companionship and emotional support',
  'Monitoring health and wellbeing',
] as const

const WHY_CHOOSE_LIST = [
  'Trained carers experienced in specialist care',
  'Personalised care plans for complex conditions',
  'Flexible care services across Leicestershire and multiple UK locations',
  'Reliable and responsive local care team',
  'Compassionate and respectful support',
] as const

export const SpecializedCarePage: React.FC<SpecializedCarePageProps> = ({ onNavigate }) => {
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
        aria-label="Specialized Care Banner"
        className="relative w-full h-64 sm:h-72 lg:h-80 bg-slate-900 overflow-hidden"
      >
        <img
          src="/about-hero.jpg"
          alt="Peaceful countryside landscape"
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
                  Specialized Care
                </span>
              </nav>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#17252B] mt-2">
                Specialized Care
              </h1>
              <p className="text-xs sm:text-sm text-[#52656b] mt-1.5 leading-relaxed">
                Providing high-quality Specialized Care across Leicestershire and multiple locations throughout the UK
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
          {/* LEFT COLUMN: Main Content */}
          <div className="lg:col-span-8 space-y-10 sm:space-y-12">
            {/* 1. Introduction: Expert Specialized Care Services at Home */}
            <section aria-labelledby="expert-services-heading" className="space-y-4">
              <h2
                id="expert-services-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#17252B]"
              >
                Expert Specialized Care Services Delivered in the Comfort of Home
              </h2>
              <div className="space-y-3.5 text-sm sm:text-base text-[#52656b] leading-relaxed">
                <p>
                  Oadby Care delivers professional and compassionate Specialized Care for individuals
                  living with complex or specific health conditions. Serving Leicestershire and
                  communities across the UK, our experienced carers provide tailored support that
                  champions each client's dignity, comfort, and personal independence.
                </p>
                <p>
                  When health requirements go beyond standard home care, our specialist teams ensure
                  clients receive targeted, condition-specific support within the familiar,
                  reassuring surroundings of their own home.
                </p>
              </div>
            </section>

            {/* 2. Specialized Care Services: Image on Left + 7 Categories Checklist on Right */}
            <section aria-labelledby="services-include-heading" className="space-y-5">
              <h2
                id="services-include-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Our Specialized Care Services Include:
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center pt-1">
                <div className="sm:col-span-5 rounded-2xl overflow-hidden border border-[#dbeff2] shadow-xs bg-[#e8f6f8]">
                  <img
                    src="/services/specialized-care.jpg"
                    alt="Specialized care worker supporting elderly gentleman with gentle mobility and care at home"
                    className="w-full h-auto aspect-[4/3] sm:aspect-square object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="sm:col-span-7">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#17252B] font-medium">
                    {SERVICES_INCLUDE_LIST.map((serviceName) => (
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

            {/* 3. What Is Specialized Care? */}
            <section aria-labelledby="what-is-heading" className="space-y-3.5">
              <h2
                id="what-is-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                What Is Specialized Care?
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#52656b] leading-relaxed">
                <p>
                  Specialized Care is tailored support for individuals navigating medical conditions,
                  disabilities, or progressive health challenges. Our trained carers provide
                  structured, compassionate assistance centered on client safety, clinical wellbeing,
                  and everyday quality of life.
                </p>
                <p>
                  This higher level of home care is precisely calibrated to each individual’s
                  circumstances, seamlessly coordinating with family members, GPs, and multidisciplinary
                  healthcare teams.
                </p>
              </div>
            </section>

            {/* 4. Why Choose Our Specialized Care? */}
            <section aria-labelledby="why-choose-heading" className="space-y-3.5">
              <h2
                id="why-choose-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Why Choose Our Specialized Care?
              </h2>
              <p className="text-sm sm:text-base text-[#52656b] leading-relaxed">
                Selecting the right provider for complex health conditions is an important decision.
                At Oadby Care, we are committed to delivering dependable, high-quality care that puts
                each client and their family at the center of every care plan.
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-[#17252B] font-medium pt-1">
                {WHY_CHOOSE_LIST.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#ddf2f6] text-[#4DAEB5] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm sm:text-base text-[#52656b] leading-relaxed pt-1.5">
                Our goal is to provide trusted home care that ensures safety, comfort, and enduring
                peace of mind for clients and their families across the UK.
              </p>
            </section>

            {/* 5. Specialist Support in the Comfort of Home */}
            <section aria-labelledby="comfort-home-heading" className="space-y-3">
              <h2
                id="comfort-home-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Specialist Support in the Comfort of Home
              </h2>
              <p className="text-sm sm:text-base text-[#52656b] leading-relaxed">
                Receiving specialist care at home allows individuals to maintain their personal routines
                and comfort while benefiting from dedicated professional care. Our care team focuses on
                holistic wellbeing, helping clients live as independently and comfortably as possible.
              </p>
            </section>

            {/* 6. Arrange Specialized Care */}
            <section aria-labelledby="arrange-care-heading" className="space-y-3">
              <h2
                id="arrange-care-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Arrange Specialized Care Today
              </h2>
              <p className="text-sm sm:text-base text-[#52656b] leading-relaxed">
                If you or a loved one requires dedicated specialist care, contact Oadby Care today. Our
                friendly team will listen carefully to your requirements, answer your questions, and
                develop a personalised care plan tailored to your needs.
              </p>
            </section>
          </div>

          {/* RIGHT COLUMN: Reusable Sidebar Components */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            <ServiceAdviceForm defaultCareType="Specialized Care" />
            <ServiceHelpCard onNavigate={onNavigate} />
          </aside>
        </div>
      </div>
    </main>
  )
}

export default SpecializedCarePage
