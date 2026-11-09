import React, { useState, useMemo } from 'react'
import {
  Plus,
  Minus,
  Search,
  X,
  Phone,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Clock,
  HeartHandshake,
  PoundSterling,
} from 'lucide-react'
import { SITE_CONFIG } from '../config/site'
import type { AppPage } from '@/types'

export interface FaqPageProps {
  onNavigate?: (page: AppPage, targetSectionId?: string) => void
}

interface FaqItem {
  id: string
  category: 'services' | 'arranging' | 'carers' | 'funding'
  categoryLabel: string
  question: string
  answer: string
}

const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 'services-what-we-offer',
    category: 'services',
    categoryLabel: 'Care Services',
    question: 'What types of home care services does Oadby Care provide?',
    answer:
      'We provide comprehensive, person-centred home care across Oadby and Leicestershire. Our services include visiting domiciliary care (from 30-minute companionship calls to full-day assistance), 24-hour live-in care, specialist dementia and Alzheimer’s care, respite care for family carers, and post-hospital discharge support.',
  },
  {
    id: 'services-customisation',
    category: 'services',
    categoryLabel: 'Care Services',
    question: 'Can care plans be adjusted if our loved one’s needs change?',
    answer:
      'Yes, absolutely. Every care plan is flexible and continuously reviewed. As health conditions, mobility, or personal routines evolve, our senior care coordinators update the plan in close consultation with the client, their family, and attending healthcare practitioners.',
  },
  {
    id: 'arranging-how-quickly',
    category: 'arranging',
    categoryLabel: 'Arranging Care',
    question: 'How quickly can home care support begin?',
    answer:
      'In most circumstances, we can conduct an in-person home assessment within 24 to 48 hours of your inquiry. If you have an urgent requirement—such as an unexpected hospital discharge or sudden family emergency—our rapid-response team can initiate emergency care within hours.',
  },
  {
    id: 'arranging-assessment-process',
    category: 'arranging',
    categoryLabel: 'Arranging Care',
    question: 'What happens during the initial home care assessment?',
    answer:
      'A senior care coordinator visits your home for a relaxed, confidential consultation. We discuss daily routines, medical requirements, dietary preferences, home safety, and personal goals. This enables us to formulate a personalised care plan and introduce a well-matched carer.',
  },
  {
    id: 'carers-vetting-training',
    category: 'carers',
    categoryLabel: 'Our Carers',
    question: 'How do you vet, select, and train your carers?',
    answer:
      'We operate under the highest recruitment and safety standards. Every carer undergoes an enhanced Disclosure and Barring Service (DBS) check, multiple verified professional references, and structured in-person interviews. Carers complete comprehensive training aligned with the UK Care Certificate, covering safeguarding, medication management, and dignity in care.',
  },
  {
    id: 'carers-continuity',
    category: 'carers',
    categoryLabel: 'Our Carers',
    question: 'Will we always have the same carer visiting?',
    answer:
      'Yes, continuity of care is fundamental to our service. We assign a dedicated primary carer and introduce a small, familiar backup team so you consistently receive care from faces you know and trust, even during staff holidays or unexpected absences.',
  },
  {
    id: 'funding-fees-structure',
    category: 'funding',
    categoryLabel: 'Costs & Funding',
    question: 'How much does home care cost and how are fees calculated?',
    answer:
      'Our care rates are competitive, transparent, and straightforward with no hidden administrative fees. Costs depend on the type, frequency, and duration of support required—from short scheduled visiting calls to 24/7 live-in support. Following your free initial consultation, we provide a full written quotation.',
  },
  {
    id: 'funding-direct-payments',
    category: 'funding',
    categoryLabel: 'Costs & Funding',
    question: 'Can I use Direct Payments or Council funding with Oadby Care?',
    answer:
      'Yes. While many of our clients self-fund their care privately, we regularly work with families receiving Direct Payments from Leicestershire County Council or NHS Continuing Healthcare (CHC) personal budgets. Our team can guide you through the required documentation.',
  },
]

type CategoryFilter = 'all' | 'services' | 'arranging' | 'carers' | 'funding'

const CATEGORIES: { id: CategoryFilter; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'all', label: 'All Questions', icon: HelpCircle },
  { id: 'services', label: 'Care Services', icon: HeartHandshake },
  { id: 'arranging', label: 'Arranging Care', icon: Clock },
  { id: 'carers', label: 'Our Carers', icon: ShieldCheck },
  { id: 'funding', label: 'Costs & Funding', icon: PoundSterling },
]

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [openItemIds, setOpenItemIds] = useState<Set<string>>(
    new Set(['services-what-we-offer', 'arranging-how-quickly']),
  )

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

  const toggleItem = (id: string) => {
    setOpenItemIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory
      const query = searchQuery.trim().toLowerCase()
      const matchesQuery =
        !query ||
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        item.categoryLabel.toLowerCase().includes(query)
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, searchQuery])

  return (
    <main
      id="main-content"
      className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 sm:py-16 md:py-20 space-y-12 sm:space-y-16"
    >
      {/* SECTION 1: Page Hero & Breadcrumb */}
      <section
        className="w-full rounded-[2rem] bg-gradient-to-b from-white to-[#f0f9fb]/60 border border-[#dbeff2] p-5 sm:p-10 lg:p-16 shadow-[0_10px_30px_-5px_rgba(77,174,181,0.06),0_4px_12px_-2px_rgba(0,0,0,0.02)] space-y-6"
        aria-labelledby="faq-page-heading"
      >
        {/* Breadcrumb: Home / F.A.Q */}
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
            F.A.Q
          </span>
        </nav>

        {/* Small Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6f6f7] text-[#2c7a80] text-xs font-bold tracking-wider uppercase">
          <HelpCircle className="w-3.5 h-3.5 text-[#4DAEB5]" />
          <span>HELP &amp; SUPPORT</span>
        </div>

        {/* Main Heading */}
        <div className="space-y-3 max-w-3xl">
          <h1
            id="faq-page-heading"
            className="text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-[#17252B] leading-tight"
          >
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-[#52656b] leading-relaxed">
            Find clear answers about our personalised home care services, carer vetting, funding
            options, and how we support families across Oadby and Leicestershire.
          </p>
        </div>

        {/* Search Bar & Category Controls */}
        <div className="pt-4 space-y-5">
          {/* Search Input */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. live-in care, fees, DBS vetting)..."
              className="w-full pl-12 pr-10 py-3.5 text-sm sm:text-base rounded-xl bg-white border border-[#dbeff2] text-[#17252B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4DAEB5] focus:border-[#4DAEB5] shadow-xs transition-all"
              aria-label="Search frequently asked questions"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Clear search input"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div
            className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1"
            role="tablist"
            aria-label="Filter questions by category"
          >
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon
              const isActive = activeCategory === cat.id
              const count =
                cat.id === 'all'
                  ? FAQ_ITEMS.length
                  : FAQ_ITEMS.filter((item) => item.category === cat.id).length

              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-[#4DAEB5] text-white shadow-sm ring-2 ring-[#4DAEB5]/20'
                      : 'bg-white text-[#52656b] border border-[#dbeff2] hover:border-[#4DAEB5] hover:text-[#17252B]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                  <span
                    className={`ml-1 text-xs px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: Questions Accordion List */}
      <section className="space-y-4" aria-label="Questions list">
        {filteredFaqs.length > 0 ? (
          <div className="space-y-3.5">
            {filteredFaqs.map((faq) => {
              const isOpen = openItemIds.has(faq.id)
              const contentId = `faq-answer-${faq.id}`
              const buttonId = `faq-question-${faq.id}`

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl bg-white border transition-all duration-200 shadow-xs ${
                    isOpen
                      ? 'border-[#4DAEB5] shadow-sm ring-1 ring-[#4DAEB5]/10'
                      : 'border-[#dbeff2] hover:border-[#4DAEB5]/60'
                  }`}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      onClick={() => toggleItem(faq.id)}
                      className="w-full text-left p-4 sm:p-6 flex items-start sm:items-center justify-between gap-3 sm:gap-4 font-semibold text-[#17252B] hover:text-[#4DAEB5] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4DAEB5] rounded-2xl"
                    >
                      <div className="space-y-1 pr-2">
                        <span className="inline-block text-[11px] font-bold text-[#4DAEB5] bg-[#f0f9fb] px-2.5 py-0.5 rounded-md tracking-wider uppercase">
                          {faq.categoryLabel}
                        </span>
                        <div className="text-base sm:text-lg font-bold text-[#17252B] leading-snug">
                          {faq.question}
                        </div>
                      </div>
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                          isOpen
                            ? 'bg-[#4DAEB5] text-white shadow-xs'
                            : 'bg-[#f0f9fb] text-[#4DAEB5]'
                        }`}
                        aria-hidden="true"
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4 stroke-[2.5]" />
                        ) : (
                          <Plus className="w-4 h-4 stroke-[2.5]" />
                        )}
                      </div>
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={contentId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-[#52656b] text-sm sm:text-base leading-relaxed border-t border-slate-100"
                    >
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-16 px-6 rounded-2xl bg-white border border-[#dbeff2] space-y-4">
            <HelpCircle className="w-12 h-12 text-[#4DAEB5]/60 mx-auto" />
            <h3 className="text-lg font-bold text-[#17252B]">No matching questions found</h3>
            <p className="text-sm text-[#52656b] max-w-md mx-auto">
              We couldn’t find any questions matching &ldquo;{searchQuery}&rdquo;. Try another search
              term or choose a different category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('')
                setActiveCategory('all')
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#4DAEB5] text-white text-xs sm:text-sm font-semibold hover:bg-[#3d949b] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* SECTION 3: Still Have Questions Reassurance CTA */}
      <section
        className="rounded-3xl bg-gradient-to-br from-slate-900 to-[#17252B] text-white p-5 sm:p-10 lg:p-12 border border-slate-800 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8"
        aria-labelledby="faq-cta-heading"
      >
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#4DAEB5] uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-[#4DAEB5]" />
            <span>Still Have Questions?</span>
          </div>
          <h2 id="faq-cta-heading" className="text-2xl sm:text-3xl font-bold tracking-tight">
            Can’t find what you’re looking for?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Our friendly Leicestershire care coordinators are available to answer your questions,
            offer honest guidance, and arrange a free, no-obligation consultation in your home.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto shrink-0">
          <a
            href={SITE_CONFIG.phoneHref}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-[#17252B] font-bold text-sm hover:bg-[#f0f9fb] transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4 text-[#4DAEB5]" />
            <span>{SITE_CONFIG.phone}</span>
          </a>
          <button
            type="button"
            onClick={handleContactClick}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#4DAEB5] text-white font-bold text-sm hover:bg-[#3d949b] transition-colors shadow-sm"
          >
            <span>Send Us a Message</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </main>
  )
}
