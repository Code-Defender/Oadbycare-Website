import React from 'react'
import { ArrowRight, Phone, HelpCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/config/site'
import type { AppPage } from '@/types'

export interface ServicesPageProps {
  onNavigate?: (page: AppPage, targetSectionId?: string) => void
  onSelectService?: (serviceId: string) => void
}

interface ServiceCardItem {
  id: string
  title: string
  tag: string
  teaser: string
  imageSrc: string
  imageAlt: string
}

const SERVICES_LIST: readonly ServiceCardItem[] = [
  {
    id: 'specialized-care',
    title: 'Specialized Care',
    tag: 'Personalised Support',
    teaser:
      'Condition-specific care designed for individuals with complex medical needs and disabilities, delivered in the comfort of home across multiple locations throughout the UK.',
    imageSrc: '/services/specialized-care.jpg',
    imageAlt: 'Elderly client receiving specialized care support in a comfortable home',
  },
  {
    id: 'support-workers',
    title: 'Support Workers',
    tag: 'Daily Independence',
    teaser:
      'Dependable, person-centred assistance with daily routines, personal care, and uplifting companionship to foster independence in homes across the UK.',
    imageSrc: '/services/support-workers.jpg',
    imageAlt: 'Support worker sharing a warm conversation with an elderly lady over tea',
  },
  {
    id: 'advanced-care',
    title: 'Advanced Care',
    tag: 'Complex & Dementia',
    teaser:
      'Dedicated, higher-level home support for individuals living with dementia, Alzheimer’s, or advanced medical conditions requiring tailored, continuous care.',
    imageSrc: '/services/advanced-care.jpg',
    imageAlt: 'Advanced home care specialist providing attentive dementia support',
  },
  {
    id: 'registered-nurses',
    title: 'Registered Nurses',
    tag: 'Clinical Nursing',
    teaser:
      'Qualified clinical nursing delivered directly at home, providing expert medical oversight, medication administration, and compassionate recovery care across the UK.',
    imageSrc: '/services/registered-nurses.jpg',
    imageAlt: 'Registered clinical community nurse reviewing medical notes with client',
  },
  {
    id: 'senior-healthcare-assistants',
    title: 'Senior Healthcare Assistants',
    tag: 'Experienced Supervision',
    teaser:
      'Experienced senior carers providing elevated care supervision, complex support, and dependable daily living assistance tailored to individual family needs.',
    imageSrc: '/services/senior-healthcare-assistants.jpg',
    imageAlt: 'Senior healthcare assistant reviewing care routines and checking client comfort',
  },
  {
    id: 'healthcare-assistance',
    title: 'Healthcare Assistance',
    tag: 'Personal & Practical Care',
    teaser:
      'Flexible, dignified domiciliary assistance helping elderly individuals and adults with disabilities manage everyday routines, nutrition, and personal wellbeing.',
    imageSrc: '/services/healthcare-assistance.jpg',
    imageAlt: 'Compassionate carer assisting an elderly client in a comfortable home',
  },
]

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onSelectService }) => {
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate) {
      e.preventDefault()
      onNavigate('home')
    }
  }

  const handleContactClick = (e: React.MouseEvent<HTMLElement>) => {
    if (onNavigate) {
      e.preventDefault()
      onNavigate('contact')
    }
  }

  const handleCardClick = (serviceId: string) => {
    if (onSelectService) {
      onSelectService(serviceId)
    } else if (onNavigate) {
      if (serviceId === 'specialized-care') {
        onNavigate('specialized-care')
      } else if (serviceId === 'support-workers') {
        onNavigate('support-workers')
      } else if (serviceId === 'advanced-care') {
        onNavigate('advanced-care')
      } else if (serviceId === 'registered-nurses') {
        onNavigate('registered-nurses')
      } else if (serviceId === 'senior-healthcare-assistants') {
        onNavigate('senior-healthcare-assistants')
      } else if (serviceId === 'healthcare-assistance') {
        onNavigate('healthcare-assistance')
      } else {
        onNavigate('contact')
      }
    }
  }

  return (
    <main
      id="main-content"
      className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 space-y-12 sm:space-y-16"
    >
      {/* SECTION 1: Page Title / Breadcrumb Card */}
      <section
        className="w-full rounded-[2rem] bg-gradient-to-b from-white via-white to-[#f0f9fb]/60 border border-[#dbeff2] p-5 sm:p-10 lg:p-12 shadow-[0_10px_30px_-5px_rgba(77,174,181,0.06),0_4px_12px_-2px_rgba(0,0,0,0.02)] space-y-5"
        aria-labelledby="services-page-heading"
      >
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#52656b]"
        >
          <a
            href="/"
            onClick={handleHomeClick}
            className="hover:text-[#4DAEB5] transition-colors focus:outline-none focus:underline"
          >
            Home
          </a>
          <span className="text-slate-300" aria-hidden="true">
            /
          </span>
          <span className="text-[#4DAEB5] font-semibold" aria-current="page">
            Services
          </span>
        </nav>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ddf2f6] shadow-xs border border-[#dbeff2]">
          <span className="w-2 h-2 rounded-full bg-[#4DAEB5] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#17252B]">
            OUR CARE SERVICES
          </span>
        </div>

        <div className="space-y-3 max-w-3xl">
          <h1
            id="services-page-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#17252B] leading-tight"
          >
            Professional &amp; Compassionate Care Services
          </h1>
          <p className="text-base sm:text-lg text-[#52656b] leading-relaxed">
            Delivering dependable, personalised home care and clinical support across Leicestershire
            and multiple locations throughout the UK, helping individuals live safely, comfortably,
            and independently in their own homes.
          </p>
        </div>
      </section>

      {/* SECTION 2: Photographic Service Cards Grid with Teaser Hook & Overlapping Button */}
      <section aria-label="Services List" className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {SERVICES_LIST.map((service) => (
            <article
              key={service.id}
              onClick={() => handleCardClick(service.id)}
              className="group relative rounded-3xl bg-white border border-[#dbeff2] shadow-sm hover:shadow-xl hover:border-[#4DAEB5]/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer focus-within:ring-2 focus-within:ring-[#4DAEB5]"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleCardClick(service.id)
                }
              }}
              role="button"
              aria-label={`View full details and arrange consultation for ${service.title}`}
            >
              {/* Top Photo Frame */}
              <div className="relative w-full">
                <div className="w-full aspect-[16/10] overflow-hidden bg-[#e8f6f8] rounded-t-3xl">
                  <img
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                  {/* Scope Badge */}
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/95 text-[#17252B] shadow-xs backdrop-blur-xs border border-white/60">
                    {service.tag}
                  </span>
                </div>

                {/* Circular Brand Teal Action Button (Floats outside overflow-hidden, 100% visible) */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20">
                  <div className="w-12 h-12 rounded-full bg-[#4DAEB5] text-white flex items-center justify-center ring-4 ring-white shadow-[0_8px_20px_rgba(77,174,181,0.35)] group-hover:bg-[#3d969c] group-hover:scale-110 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Card Body with Teaser */}
              <div className="pt-8 pb-7 px-6 sm:px-7 text-center space-y-3 flex flex-col flex-grow justify-between">
                <div className="space-y-2.5">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#17252B] group-hover:text-[#4DAEB5] transition-colors tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#52656b] leading-relaxed line-clamp-3">
                    {service.teaser}
                  </p>
                </div>

                {/* Bottom Action Trigger */}
                <div className="pt-2 flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#4DAEB5] group-hover:text-[#2c7a80] transition-colors">
                    <span>Arrange Consultation</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 3: Minimal Consultation Banner */}
      <section
        className="rounded-3xl bg-gradient-to-r from-white via-[#f0f9fb] to-[#e8f6f8] border border-[#dbeff2] p-6 sm:p-10 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        aria-labelledby="services-cta-heading"
      >
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#4DAEB5] uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#4DAEB5]" />
            <span>Need Tailored Advice?</span>
          </div>
          <h2 id="services-cta-heading" className="text-xl sm:text-2xl font-bold text-[#17252B]">
            Not sure which care service fits your needs?
          </h2>
          <p className="text-xs sm:text-sm text-[#52656b] leading-relaxed">
            Our dedicated care coordinators are available 7 days a week to answer questions and
            arrange a free, no-obligation care review across our UK service areas.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
          <a
            href={SITE_CONFIG.phoneHref}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-[#17252B] font-bold text-xs sm:text-sm border border-[#dbeff2] hover:bg-slate-50 transition-colors shadow-xs text-center"
          >
            <Phone className="w-4 h-4 text-[#4DAEB5]" />
            <span>{SITE_CONFIG.phone}</span>
          </a>
          <button
            type="button"
            onClick={handleContactClick}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#4DAEB5] hover:bg-[#3d969c] text-white font-bold text-xs sm:text-sm transition-colors shadow-xs cursor-pointer text-center"
          >
            <span>Arrange Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </main>
  )
}
