import React, { useState } from 'react'
import {
  Phone,
  Mail,
  Check,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  Send,
} from 'lucide-react'
import { SITE_CONFIG } from '@/config/site'
import { submitCareInquiry } from '@/services/inquiryService'
import type { AppPage } from '@/types'

export interface SpecializedCarePageProps {
  onNavigate?: (page: AppPage, targetSectionId?: string) => void
}

const CARE_TYPE_OPTIONS = [
  'Specialized Care',
  'Respite Home Care',
  'Daily Home Care',
  'Hospital to Home Care',
  'Advanced Care',
  'Hourly Home Care',
] as const

interface FormErrors {
  fullName?: string
  email?: string
  phone?: string
  careType?: string
}

const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
const PHONE_REGEX = /^(?:(?:\+44\s?|0)(?:\d\s?){9,10})$/

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
  'Flexible home care services across Leicestershire',
  'Reliable and responsive local care team',
  'Compassionate and respectful support',
] as const

export const SpecializedCarePage: React.FC<SpecializedCarePageProps> = ({ onNavigate }) => {
  // Sidebar Contact Form State
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [careType, setCareType] = useState<string>('Specialized Care')
  const [message, setMessage] = useState('')

  // Form Submission Status
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submittedRef, setSubmittedRef] = useState<string | null>(null)
  const [apiError, setApiError] = useState<string | null>(null)

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

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    const trimmedName = fullName.trim()
    if (!trimmedName) {
      newErrors.fullName = 'Please enter your full name.'
    } else if (trimmedName.length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.'
    }

    const trimmedEmail = email.trim()
    if (!trimmedEmail) {
      newErrors.email = 'Please enter your email address.'
    } else if (!EMAIL_REGEX.test(trimmedEmail)) {
      newErrors.email = 'Please provide a valid email address (e.g. name@example.com).'
    }

    const trimmedPhone = phone.trim()
    if (!trimmedPhone) {
      newErrors.phone = 'Please enter your telephone number.'
    } else if (!PHONE_REGEX.test(trimmedPhone)) {
      newErrors.phone = 'Please enter a valid UK telephone number (e.g. 0116 271 8800 or 07123 456789).'
    }

    if (!careType) {
      newErrors.careType = 'Please select a type of care.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setApiError(null)

    if (!validate()) {
      return
    }

    setIsSubmitting(true)

    try {
      const result = await submitCareInquiry({
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        serviceType: 'domiciliary',
        urgency: 'within-week',
        message: `[Care Type: ${careType}] ${message.trim() || 'Request a Callback'}`,
        consent: true,
      })

      setSubmittedRef(result.referenceId || 'OAD-SP-CARE')
    } catch (err) {
      setApiError(err instanceof Error ? err.message : 'Failed to submit callback request. Please call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleResetForm = () => {
    setFullName('')
    setEmail('')
    setPhone('')
    setCareType('Specialized Care')
    setMessage('')
    setErrors({})
    setSubmittedRef(null)
    setApiError(null)
  }

  return (
    <main id="main-content" className="flex-grow w-full">
      {/* =========================================================================
          HERO SECTION: Panoramic Background with Overlapping Title/Breadcrumb Card
          (Strictly matches reference screenshot layout)
          ========================================================================= */}
      <section
        aria-label="Specialized Care Banner"
        className="relative w-full h-64 sm:h-72 lg:h-80 bg-slate-900 overflow-hidden"
      >
        {/* Background Landscape Photograph */}
        <img
          src="/about-hero.jpg"
          alt="Peaceful Leicestershire countryside landscape"
          className="w-full h-full object-cover object-center opacity-75"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent pointer-events-none" />

        {/* Overlapping Page Title & Breadcrumb Box (Bottom-Left aligned) */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-0">
            <div className="bg-white rounded-t-2xl sm:rounded-t-3xl p-6 sm:p-8 max-w-xl shadow-xl border-t border-x border-[#dbeff2] relative">
              {/* Bottom Accent Bar in Oadby Care Brand Teal */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#4DAEB5]" />

              {/* Breadcrumb Navigation */}
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

              {/* Title & Short Subtitle */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#17252B] mt-2">
                Specialized Care
              </h1>
              <p className="text-xs sm:text-sm text-[#52656b] mt-1.5 leading-relaxed">
                We focus on delivering high-quality Specialized Care service in Oadby &amp; Leicestershire
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
          {/* =====================================================================
              LEFT COLUMN: Main Content (~68% width on desktop)
              ===================================================================== */}
          <div className="lg:col-span-8 space-y-10 sm:space-y-12">
            {/* 1. Introduction: Expert Specialized Care Services at Home */}
            <section aria-labelledby="expert-services-heading" className="space-y-4">
              <h2
                id="expert-services-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#17252B]"
              >
                Expert Specialized Care Services at Home in Leicestershire
              </h2>
              <div className="space-y-3.5 text-sm sm:text-base text-[#52656b] leading-relaxed">
                <p>
                  Oadby Care provides professional and compassionate Specialized Care in Leicestershire
                  for individuals with complex or specific health conditions. Our experienced carers
                  deliver personalised care at home designed to meet the unique needs of each client
                  while promoting dignity, comfort, and independence.
                </p>
                <p>
                  We understand that some individuals require more specialised support than standard home
                  care. Our specialist home care in Leicestershire ensures that clients receive the
                  appropriate level of care while remaining in the familiar environment of their own home.
                </p>
              </div>
            </section>

            {/* 2. Specialized Care Services: Image on Left + 7 Categories Checklist on Right */}
            <section aria-labelledby="services-include-heading" className="space-y-5">
              <h2
                id="services-include-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Our Specialized Care Services in Leicestershire Include:
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center pt-1">
                {/* Visual Image */}
                <div className="sm:col-span-5 rounded-2xl overflow-hidden border border-[#dbeff2] shadow-xs bg-[#e8f6f8]">
                  <img
                    src="/services/specialized-care.jpg"
                    alt="Specialized care worker supporting elderly gentleman with gentle mobility and care at home"
                    className="w-full h-auto aspect-[4/3] sm:aspect-square object-cover"
                    loading="lazy"
                  />
                </div>

                {/* 7 Services Readable Checklist */}
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
                  Specialized Care in Leicestershire is designed for individuals who require targeted
                  support due to medical conditions, disabilities, or long-term health challenges. Our
                  trained carers provide structured care that focuses on safety, wellbeing, and
                  maintaining quality of life.
                </p>
                <p>
                  This type of complex care in Leicestershire is tailored to each individual’s condition
                  and may involve coordination with healthcare professionals and family members.
                </p>
              </div>
            </section>

            {/* 4. Why Choose Our Specialized Care? */}
            <section aria-labelledby="why-choose-heading" className="space-y-3.5">
              <h2
                id="why-choose-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Why Choose Our Specialized Care in Leicestershire?
              </h2>
              <p className="text-sm sm:text-base text-[#52656b] leading-relaxed">
                When dealing with complex health conditions, choosing the right provider for specialist
                home care in Leicestershire is essential. At Oadby Care, we are committed to delivering
                high-quality, compassionate care tailored to each client’s needs.
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
                Our goal is to provide trusted home care in Leicestershire that ensures comfort,
                safety, and peace of mind for clients and their families.
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
                Receiving Specialized Care in Leicestershire allows individuals to stay in a familiar
                environment while receiving professional support tailored to their condition. Our care
                team focuses on improving wellbeing, maintaining independence, and ensuring every
                client receives attentive and respectful care.
              </p>
            </section>

            {/* 6. Arrange Specialized Care in Leicestershire (Short Call to Action) */}
            <section aria-labelledby="arrange-care-heading" className="space-y-3">
              <h2
                id="arrange-care-heading"
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#17252B]"
              >
                Arrange Specialized Care in Leicestershire
              </h2>
              <p className="text-sm sm:text-base text-[#52656b] leading-relaxed">
                If you or your loved one requires professional Specialized Care in Leicestershire,
                contact Oadby Care today. Our friendly team will discuss your needs and create a
                personalised care plan designed to provide the right level of specialist support.
              </p>
            </section>
          </div>

          {/* =====================================================================
              RIGHT COLUMN: Sidebar (~32% width on desktop)
              ===================================================================== */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            {/* CARD 1: Simple Contact Form ("Looking for Advice?") */}
            <div className="bg-white rounded-2xl border border-[#dbeff2] p-6 sm:p-7 shadow-xs space-y-5">
              <div className="text-center space-y-1.5">
                <h3 className="text-xl font-bold text-[#17252B]">Looking for Advice?</h3>
                <div className="w-12 h-0.5 bg-[#4DAEB5] mx-auto rounded-full" />
              </div>

              {submittedRef ? (
                <div className="text-center py-4 space-y-3" role="status" aria-live="polite">
                  <div className="w-12 h-12 rounded-full bg-[#ddf2f6] text-[#4DAEB5] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-base font-bold text-[#17252B]">Callback Requested!</h4>
                  <p className="text-xs text-[#52656b] leading-relaxed">
                    Thank you, <strong>{fullName}</strong>. Your request for{' '}
                    <strong>{careType}</strong> has been received (Ref: {submittedRef}). Our care team
                    will call you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="mt-2 text-xs font-semibold text-[#4DAEB5] hover:underline cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {apiError && (
                    <div
                      className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2"
                      role="alert"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{apiError}</span>
                    </div>
                  )}

                  {/* Name */}
                  <div className="space-y-1">
                    <label htmlFor="sidebar-name" className="block text-xs font-semibold text-[#17252B]">
                      Your name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="sidebar-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value)
                        if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }))
                      }}
                      placeholder="e.g., John Doe"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-xs sm:text-sm text-[#17252B] focus:outline-none focus:ring-2 focus:ring-[#4DAEB5] transition-all ${
                        errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-[#dbeff2]'
                      }`}
                      aria-required="true"
                      aria-invalid={Boolean(errors.fullName)}
                    />
                    {errors.fullName && <p className="text-xs text-red-600">{errors.fullName}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label htmlFor="sidebar-email" className="block text-xs font-semibold text-[#17252B]">
                      Your email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="sidebar-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }))
                      }}
                      placeholder="name@example.co.uk"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-xs sm:text-sm text-[#17252B] focus:outline-none focus:ring-2 focus:ring-[#4DAEB5] transition-all ${
                        errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#dbeff2]'
                      }`}
                      aria-required="true"
                      aria-invalid={Boolean(errors.email)}
                    />
                    {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label htmlFor="sidebar-phone" className="block text-xs font-semibold text-[#17252B]">
                      Phone number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="sidebar-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value)
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }))
                      }}
                      placeholder="0116 271 8800"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-xs sm:text-sm text-[#17252B] focus:outline-none focus:ring-2 focus:ring-[#4DAEB5] transition-all ${
                        errors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#dbeff2]'
                      }`}
                      aria-required="true"
                      aria-invalid={Boolean(errors.phone)}
                    />
                    {errors.phone && <p className="text-xs text-red-600">{errors.phone}</p>}
                  </div>

                  {/* Select Type of Care */}
                  <div className="space-y-1">
                    <label htmlFor="sidebar-care-type" className="block text-xs font-semibold text-[#17252B]">
                      Select type of care <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="sidebar-care-type"
                      value={careType}
                      onChange={(e) => {
                        setCareType(e.target.value)
                        if (errors.careType) setErrors((prev) => ({ ...prev, careType: undefined }))
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#dbeff2] text-xs sm:text-sm text-[#17252B] focus:outline-none focus:ring-2 focus:ring-[#4DAEB5] transition-all cursor-pointer"
                    >
                      {CARE_TYPE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Optional Short Message */}
                  <div className="space-y-1">
                    <label htmlFor="sidebar-message" className="block text-xs font-semibold text-[#17252B]">
                      Short message (optional)
                    </label>
                    <textarea
                      id="sidebar-message"
                      rows={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Brief note about schedule or health needs..."
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#dbeff2] text-xs sm:text-sm text-[#17252B] focus:outline-none focus:ring-2 focus:ring-[#4DAEB5] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3 px-4 rounded-xl bg-[#4DAEB5] hover:bg-[#3d969c] disabled:opacity-60 text-white font-bold text-xs sm:text-sm transition-all shadow-xs hover:shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending Request...' : 'Request a Callback'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* CARD 2: Have Questions? Contact / Help Section */}
            <div className="rounded-2xl bg-[#23585c] text-white p-6 sm:p-7 space-y-4 shadow-xs relative overflow-hidden">
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold tracking-tight">Have Questions?</h3>
                <p className="text-xs text-[#ddf2f6] leading-relaxed">
                  Our local client care coordinators in Oadby are available 7 days a week to answer your
                  questions.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-2 text-xs pt-1">
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 text-[#ddf2f6]" />
                  <span>Call {SITE_CONFIG.displayPhone}</span>
                </a>
                <a
                  href={SITE_CONFIG.emailHref}
                  className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors font-semibold"
                >
                  <Mail className="w-3.5 h-3.5 text-[#ddf2f6]" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </div>

              {/* Simple Contact Us Button */}
              <div className="pt-1 text-center">
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('contact')}
                  className="w-full py-2.5 px-4 rounded-xl bg-white text-[#17252B] font-bold text-xs hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
                >
                  Contact Us
                </button>
              </div>

              {/* Warm Photo of Support Worker and Client (matching reference screenshot) */}
              <div className="pt-3 -mx-6 -mb-7 overflow-hidden rounded-b-2xl">
                <img
                  src="/services/support-workers.jpg"
                  alt="Oadby Care support worker having warm conversation over tea"
                  className="w-full h-32 object-cover opacity-90"
                  loading="lazy"
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default SpecializedCarePage
