import React from 'react'
import {
  Check,
  ChevronRight,
} from 'lucide-react'
import { ServiceAdviceForm } from '@/components/common/ServiceAdviceForm'
import { ServiceHelpCard } from '@/components/common/ServiceHelpCard'
import type { AppPage } from '@/types'

export interface SupportWorkersPageProps {
  onNavigate?: (page: AppPage, targetSectionId?: string) => void
}

const SUPPORT_SERVICES_LIST = [
  'Assistance with daily living activities',
  'Personal care and hygiene support',
  'Companionship and emotional support',
  'Help with meal preparation and household tasks',
  'Mobility assistance and safety support',
  'Support with appointments and outings',
  'Encouraging independence and social engagement',
] as const

const WHY_CHOOSE_LIST = [
  'Trained and DBS-checked support workers',
  'Personalised care plans tailored to each client',
  'Flexible support options across Leicestershire',
  'Reliable and responsive local care team',
  'Compassionate and respectful care approach',
] as const

export const SupportWorkersPage: React.FC<SupportWorkersPageProps> = ({ onNavigate }) => {
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
        aria-label="Support Workers Banner"
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
                  Support Workers
                </span>
              </nav>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#17252B] mt-2">
                Support Workers
              </h1>
              <p className="text-xs sm:text-sm text-[#52656b] mt-1.5 leading-relaxed">
                We focus on delivering high-quality Support Worker services in Oadby &amp; Leicestershire
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
            {/* 1. Introduction: Professional Support Workers Providing Care at Home */}
            <section aria-labelledby="support-intro-heading" className="space-y-4">
              <h2
                id="support-intro-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#17252B]"
              >
                Professional Support Workers Providing Care at Home in Leicestershire
              </h2>
              <div className="space-y-3.5 text-sm sm:text-base text-[#52656b] leading-relaxed">
                <p>
                  Oadby Care offers compassionate and reliable Support Workers in Leicestershire,
                  helping individuals live safely and independently in the comfort of their own homes.
                  Our dedicated support workers assist elderly individuals, adults with disabilities,
                  and people who require daily living support with personalised home care services.
                </p>
                <p>
                  Our focus is to deliver dependable home care across Leicestershire that improves
                  quality of life while ensuring dignity, safety, and independence.
                </p>
              </div>
            </section>

            {/* 2. Our Support Worker Services Include: Photo on Left + 7 Checklist Items on Right */}
            <section aria-labelledby="support-services-heading" className="space-y-5">
              <h2
                id="support-services-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Our Support Worker Services in Leicestershire Include:
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center pt-1">
                {/* Visual Image */}
                <div className="sm:col-span-5 rounded-2xl overflow-hidden border border-[#dbeff2] shadow-xs bg-[#e8f6f8]">
                  <img
                    src="/services/support-workers.jpg"
                    alt="Support worker sharing a warm conversation with an elderly lady over tea"
                    className="w-full h-auto aspect-[4/3] sm:aspect-square object-cover"
                    loading="lazy"
                  />
                </div>

                {/* 7 Services Checklist */}
                <div className="sm:col-span-7">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#17252B] font-medium">
                    {SUPPORT_SERVICES_LIST.map((serviceName) => (
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

            {/* 3. What Do Support Workers Do? */}
            <section aria-labelledby="what-do-support-heading" className="space-y-3.5">
              <h2
                id="what-do-support-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                What Do Support Workers Do?
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#52656b] leading-relaxed">
                <p>
                  Our Support Workers in Leicestershire provide practical and emotional assistance to
                  individuals who need help with everyday tasks and activities. This form of
                  domiciliary care is designed to help clients maintain independence while receiving the
                  support they need to manage daily life comfortably.
                </p>
                <p>
                  Support workers play an important role in promoting wellbeing, companionship, and
                  confidence for individuals who may need ongoing assistance.
                </p>
              </div>
            </section>

            {/* 4. Why Choose Our Support Workers in Leicestershire? */}
            <section aria-labelledby="why-choose-support-heading" className="space-y-3.5">
              <h2
                id="why-choose-support-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Why Choose Our Support Workers in Leicestershire?
              </h2>
              <p className="text-sm sm:text-base text-[#52656b] leading-relaxed">
                Choosing the right provider for care support at home in Leicestershire is important for
                both clients and families. At Oadby Care, we are committed to delivering reliable and
                person-centred care services.
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
                Our aim is to provide trusted personal support services in Leicestershire that families
                can depend on.
              </p>
            </section>

            {/* 5. Helping Individuals Live Independently */}
            <section aria-labelledby="live-independently-heading" className="space-y-3">
              <h2
                id="live-independently-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Helping Individuals Live Independently
              </h2>
              <p className="text-sm sm:text-base text-[#52656b] leading-relaxed">
                Our Support Workers in Leicestershire focus on helping clients maintain independence
                while receiving the support they need. By providing practical assistance and
                companionship, we help individuals continue living comfortably and confidently in their
                own homes.
              </p>
            </section>

            {/* 6. Arrange Support Worker Services in Leicestershire */}
            <section aria-labelledby="arrange-support-heading" className="space-y-3">
              <h2
                id="arrange-support-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Arrange Support Worker Services in Leicestershire
              </h2>
              <p className="text-sm sm:text-base text-[#52656b] leading-relaxed">
                If you or your loved one needs professional Support Workers in Leicestershire, contact
                Oadby Care today. Our team will discuss your needs and create a personalised care plan
                designed to provide the right level of support.
              </p>
            </section>
          </div>

          {/* RIGHT COLUMN: Reusable Sidebar Components */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            <ServiceAdviceForm defaultCareType="Support Workers" />
            <ServiceHelpCard onNavigate={onNavigate} />
          </aside>
        </div>
      </div>
    </main>
  )
}

export default SupportWorkersPage

