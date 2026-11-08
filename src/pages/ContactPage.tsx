import React, { useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ChevronDown,
  Lock,
  ShieldCheck,
  Heart,
  MessageSquare,
  Clock,
  Compass,
  Check,
  Send,
  RefreshCw,
  HelpCircle,
} from 'lucide-react'
import { SITE_CONFIG } from '@/config/site'
import { submitCareInquiry } from '@/services/inquiryService'
import type { CareServiceType, AppPage } from '@/types'

export interface ContactPageProps {
  onNavigate?: (page: AppPage, targetSectionId?: string) => void
}

const CARE_SERVICE_OPTIONS = [
  'Personal Care',
  'Companionship & Daily Living',
  'Dementia Support',
  'Live-in Care',
  'Respite Care',
  'Post-Hospital Recovery',
  'Registered Nursing Care',
  'General Enquiry',
] as const

type CallbackWindow = 'morning' | 'afternoon' | 'evening'

interface FormErrors {
  fullName?: string
  email?: string
  phone?: string
  service?: string
  message?: string
  consent?: string
}

const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
const PHONE_REGEX = /^(?:(?:\+44\s?|0)(?:\d\s?){9,10})$/

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  // Form state
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [callbackWindow, setCallbackWindow] = useState<CallbackWindow>('morning')
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)

  // Status & validation states
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submittedRef, setSubmittedRef] = useState<string | null>(null)
  const [apiError, setApiError] = useState<string | null>(null)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    const trimmedName = fullName.trim()
    if (!trimmedName) {
      newErrors.fullName = 'Please enter your full name.'
    } else if (trimmedName.length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.'
    } else if (trimmedName.length > 80) {
      newErrors.fullName = 'Full name cannot exceed 80 characters.'
    }

    const trimmedEmail = email.trim()
    if (!trimmedEmail) {
      newErrors.email = 'Please enter your email address.'
    } else if (!EMAIL_REGEX.test(trimmedEmail)) {
      newErrors.email = 'Please provide a valid email address (e.g. name@example.com).'
    }

    const trimmedPhone = phone.trim()
    const cleanPhone = trimmedPhone.replace(/[\s-]/g, '')
    if (!cleanPhone) {
      newErrors.phone = 'Please enter your telephone number.'
    } else if (!PHONE_REGEX.test(trimmedPhone)) {
      newErrors.phone = 'Please enter a valid UK telephone number (e.g. 0116 271 8800 or 07123 456789).'
    }

    if (!service) {
      newErrors.service = 'Please select a care service from the dropdown.'
    }

    const trimmedMessage = message.trim()
    if (!trimmedMessage) {
      newErrors.message = 'Please provide details about your care requirements.'
    } else if (trimmedMessage.length < 10) {
      newErrors.message = 'Please enter at least 10 characters.'
    } else if (trimmedMessage.length > 1500) {
      newErrors.message = 'Message cannot exceed 1500 characters.'
    }

    if (!consent) {
      newErrors.consent = 'Please confirm that you agree to be contacted regarding your enquiry.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setApiError(null)

    if (!validate()) {
      return
    }

    setIsSubmitting(true)
    try {
      const serviceTypeMapping: Record<string, CareServiceType> = {
        'Personal Care': 'domiciliary',
        'Companionship & Daily Living': 'companionship',
        'Dementia Support': 'dementia',
        'Live-in Care': 'live-in',
        'Respite Care': 'respite',
        'Post-Hospital Recovery': 'domiciliary',
        'Registered Nursing Care': 'palliative',
        'General Enquiry': 'domiciliary',
      }

      const mappedType = serviceTypeMapping[service] || 'domiciliary'

      const result = await submitCareInquiry({
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        serviceType: mappedType,
        urgency: 'immediate',
        message: `[Preferred Callback: ${callbackWindow.toUpperCase()}] [Selected Service: ${service}] ${message.trim()}`,
        consent,
      })

      setSubmittedRef(result.referenceId || `OAD-${Math.floor(100000 + Math.random() * 900000)}`)
    } catch (err) {
      setApiError(err instanceof Error ? err.message : 'An error occurred while submitting your inquiry.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleResetForm = () => {
    setFullName('')
    setEmail('')
    setPhone('')
    setService('')
    setCallbackWindow('morning')
    setMessage('')
    setConsent(false)
    setErrors({})
    setSubmittedRef(null)
    setApiError(null)
  }

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate) {
      e.preventDefault()
      onNavigate('home')
    }
  }

  const handleExploreServices = () => {
    if (onNavigate) {
      onNavigate('home', 'services-section')
    } else {
      window.location.href = '/#services-section'
    }
  }

  const handleFaqClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate) {
      e.preventDefault()
      onNavigate('faq')
    }
  }

  return (
    <main
      id="main-content"
      className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12 sm:space-y-16 py-8 sm:py-12"
    >
      {/* =========================================================================
          SECTION 1: STREAMLINED COMPACT HEADER & BREADCRUMB
          ========================================================================= */}
      <section
        className="w-full rounded-[2rem] bg-gradient-to-b from-white via-white to-[#f0f9fb]/60 border border-[#dbeff2] p-6 sm:p-10 lg:p-12 shadow-[0_10px_30px_-5px_rgba(77,174,181,0.06),0_4px_12px_-2px_rgba(0,0,0,0.02)] space-y-6"
        aria-labelledby="contact-hero-heading"
      >
        {/* Breadcrumb: Home / Contact */}
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
            Contact
          </span>
        </nav>

        {/* Small label & Title Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ddf2f6] shadow-xs border border-[#dbeff2]">
              <span className="w-2 h-2 rounded-full bg-[#4DAEB5] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#17252B]">
                GET IN TOUCH
              </span>
            </div>

            <h1
              id="contact-hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#17252B] leading-tight"
            >
              We'd Love to Hear From You
            </h1>

            <p className="text-base sm:text-lg text-[#52656b] leading-relaxed max-w-2xl">
              Whether you're looking for care for yourself or a loved one, our friendly team is
              here to answer your questions and help you find the right support. Get in touch to
              arrange a consultation.
            </p>
          </div>

          {/* Quick Emergency / 24/7 Hotline Badge */}
          <div className="shrink-0 p-4 rounded-2xl bg-white border border-[#dbeff2] shadow-xs space-y-1.5 lg:max-w-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-[#4DAEB5] uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-[#4DAEB5]" />
              <span>Urgent Care Support</span>
            </div>
            <p className="text-xs text-[#52656b] leading-relaxed">
              Need immediate or same-day support? Call our coordinator directly:
            </p>
            <a
              href={SITE_CONFIG.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#17252B] hover:text-[#4DAEB5] transition-colors pt-0.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#4DAEB5]" />
              <span>{SITE_CONFIG.phone} (24/7 Line)</span>
            </a>
          </div>
        </div>

        {/* Trust Indicators Strip */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-4 sm:gap-6 text-[#17252B] text-xs sm:text-sm font-medium">
          <div className="inline-flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#4DAEB5]" />
            <span>CQC Standard Quality</span>
          </div>
          <span className="text-slate-300 hidden sm:inline" aria-hidden="true">
            •
          </span>
          <div className="inline-flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#4DAEB5]" />
            <span>Response within 24 Hours</span>
          </div>
          <span className="text-slate-300 hidden sm:inline" aria-hidden="true">
            •
          </span>
          <div className="inline-flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#4DAEB5]" />
            <span>Confidential &amp; Discreet</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: MAIN CONTACT AREA (Two-Column Layout)
          ========================================================================= */}
      <section className="w-full" aria-label="Contact information and enquiry form">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ---------------------------------------------------------------------
              LEFT COLUMN – Contact Information (5 Columns on Desktop)
              --------------------------------------------------------------------- */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#4DAEB5] font-semibold">
                Immediate Assistance
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#17252B] mt-1 tracking-tight">
                Call Us or Fill Out the Form
              </h2>
              <p className="text-sm sm:text-base text-[#52656b] mt-2 leading-relaxed">
                Call us or send us an email to discuss your care requirements and arrange a free
                consultation.
              </p>
            </div>

            {/* Three Contact Information Blocks */}
            <div className="space-y-4 pt-1">
              {/* Block 1: Location */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#dbeff2] shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#e8f6f8] flex items-center justify-center text-[#4DAEB5] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs uppercase tracking-wider text-[#52656b] font-semibold block">
                    Registered Office &amp; Region
                  </span>
                  <h3 className="text-lg font-bold text-[#17252B] mt-0.5">Registered Office</h3>
                  <p className="text-sm font-semibold text-[#17252B] mt-1">
                    19 Holme Drive, Oadby, Leicester, England, LE2 4HF
                  </p>
                  <p className="text-xs text-[#52656b] mt-0.5">
                    Serving Oadby, Leicestershire, and surrounding UK communities.
                  </p>
                </div>
              </div>

              {/* Block 2: Call Us (High Priority Highlight) */}
              <a
                href={SITE_CONFIG.phoneHref}
                className="group block p-5 sm:p-6 rounded-2xl bg-white border-2 border-[#4DAEB5]/40 hover:border-[#4DAEB5] shadow-xs hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4DAEB5]"
                aria-label={`Call ${SITE_CONFIG.phone}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#4DAEB5] text-white flex items-center justify-center group-hover:scale-105 transition-transform shrink-0 shadow-xs">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs uppercase tracking-wider text-[#52656b] font-semibold">
                          Direct Care Line
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-[#e8f6f8] text-[11px] font-semibold text-[#4DAEB5] border border-[#dbeff2]">
                          24/7 Support
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-[#17252B] mt-0.5">Call Us</h3>
                      <span className="text-xl sm:text-2xl font-bold text-[#4DAEB5] block mt-1 tracking-tight">
                        {SITE_CONFIG.phone}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-[#4DAEB5] group-hover:translate-x-1 transition-all mt-1" />
                </div>
              </a>

              {/* Block 3: Email Us */}
              <a
                href={SITE_CONFIG.emailHref}
                className="group block p-5 sm:p-6 rounded-2xl bg-white border border-[#dbeff2] shadow-xs hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4DAEB5]"
                aria-label="Email info@oadbycare.co.uk"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#e8f6f8] flex items-center justify-center text-[#4DAEB5] group-hover:scale-105 transition-transform shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#52656b] font-semibold block">
                        Written Enquiries
                      </span>
                      <h3 className="text-lg font-bold text-[#17252B] mt-0.5">Email Us</h3>
                      <span className="text-sm sm:text-base font-semibold text-[#4DAEB5] block mt-1 hover:underline break-all">
                        info@oadbycare.co.uk
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-[#4DAEB5] group-hover:translate-x-1 transition-all mt-1" />
                </div>
              </a>

              {/* Block 4: Clinical Governance & Leadership */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#dbeff2] shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#e8f6f8] flex items-center justify-center text-[#4DAEB5] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs uppercase tracking-wider text-[#52656b] font-semibold block">
                    Clinical Governance
                  </span>
                  <h3 className="text-lg font-bold text-[#17252B] mt-0.5">Dr Nawazish Karim</h3>
                  <p className="text-xs text-[#52656b] mt-0.5">
                    Clinical &amp; Managing Director
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#4DAEB5] font-semibold mt-2">
                    <a href={SITE_CONFIG.phoneHref} className="hover:underline flex items-center gap-1">
                      <Phone className="w-3 h-3" /> {SITE_CONFIG.displayPhone}
                    </a>
                    <a href={SITE_CONFIG.emailHref} className="hover:underline flex items-center gap-1">
                      <Mail className="w-3 h-3" /> {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map-Style Visual / Coverage Radius */}
            <div className="p-6 rounded-3xl bg-white border border-[#dbeff2] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4DAEB5]" />
                  <h3 className="text-base font-bold text-[#17252B]">Coverage Radius</h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#e8f6f8] text-[#17252B] border border-[#dbeff2]">
                  LE2 • South Leicestershire
                </span>
              </div>

              {/* Stylized Vector Radar Map */}
              <div className="relative w-full h-48 rounded-2xl bg-[#e8f6f8]/70 border border-[#dbeff2] overflow-hidden flex items-center justify-center">
                <svg
                  className="absolute inset-0 w-full h-full text-[#4DAEB5]/25"
                  fill="none"
                  viewBox="0 0 400 220"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                >
                  <circle cx="200" cy="110" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="200" cy="110" r="75" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" />
                  <circle cx="200" cy="110" r="115" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
                  <path d="M40 180 Q 150 140 200 110 T 360 40" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M120 20 Q 180 80 200 110 T 260 210" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M30 60 Q 140 90 200 110 T 370 160" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
                </svg>

                <div className="absolute top-4 left-6 text-[10px] font-semibold text-[#52656b] bg-white/80 px-2 py-0.5 rounded-md border border-[#dbeff2]">
                  Stoughton
                </div>
                <div className="absolute bottom-4 left-8 text-[10px] font-semibold text-[#52656b] bg-white/80 px-2 py-0.5 rounded-md border border-[#dbeff2]">
                  Wigston (LE18)
                </div>
                <div className="absolute top-5 right-6 text-[10px] font-semibold text-[#52656b] bg-white/80 px-2 py-0.5 rounded-md border border-[#dbeff2]">
                  Stoneygate
                </div>
                <div className="absolute bottom-5 right-8 text-[10px] font-semibold text-[#52656b] bg-white/80 px-2 py-0.5 rounded-md border border-[#dbeff2]">
                  Great Glen
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute -inset-2.5 rounded-full bg-[#4DAEB5]/25 animate-ping" />
                    <div className="relative w-10 h-10 rounded-full bg-[#4DAEB5] text-white flex items-center justify-center shadow-md">
                      <MapPin className="w-5 h-5 fill-current" />
                    </div>
                  </div>
                  <div className="mt-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-xs border border-[#dbeff2] text-center">
                    <span className="text-xs font-bold text-[#17252B] block leading-none">
                      Oadby Hub (LE2)
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-2 right-2 text-slate-400 flex items-center gap-1 text-[10px]">
                  <Compass className="w-3.5 h-3.5 text-[#4DAEB5]" />
                  <span>52.59° N, 1.08° W</span>
                </div>
              </div>

              <p className="text-xs text-[#52656b] leading-relaxed">
                Regular daily visits across Oadby, Wigston, Stoughton, Great Glen, and nearby
                Leicestershire communities with dedicated local carers.
              </p>
            </div>
          </div>

          {/* ---------------------------------------------------------------------
              RIGHT COLUMN – Contact Form (7 Columns on Desktop)
              --------------------------------------------------------------------- */}
          <div className="lg:col-span-7">
            <div
              id="contact-form"
              className="p-6 sm:p-10 lg:p-12 rounded-[2rem] bg-white border border-[#dbeff2] shadow-[0_10px_30px_-5px_rgba(77,174,181,0.08),0_4px_12px_-2px_rgba(0,0,0,0.03)] relative"
            >
              {/* Form Heading & Description */}
              <div className="flex items-start justify-between mb-8 pb-4 border-b border-[#dbeff2]">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#4DAEB5] font-semibold">
                    Online Consultation Request
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#17252B] mt-1 tracking-tight">
                    Send Us a Message
                  </h2>
                  <p className="text-sm text-[#52656b] mt-1">
                    Complete the form below and a member of our team will get back to you.
                  </p>
                </div>
                <div className="hidden sm:flex w-12 h-12 rounded-full bg-[#e8f6f8] items-center justify-center text-[#4DAEB5] shrink-0">
                  <Send className="w-5 h-5" />
                </div>
              </div>

              {/* SUCCESS OVERLAY */}
              {submittedRef ? (
                <div
                  className="py-10 text-center space-y-6 animate-fadeIn"
                  role="status"
                  aria-live="polite"
                >
                  <div className="w-16 h-16 rounded-full bg-[#e8f6f8] text-[#4DAEB5] flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <span className="px-3 py-1 rounded-full bg-[#e8f6f8] text-xs font-bold text-[#4DAEB5] border border-[#dbeff2]">
                      Reference: {submittedRef}
                    </span>
                    <h3 className="text-2xl font-bold text-[#17252B]">
                      Thank You for Reaching Out
                    </h3>
                    <p className="text-sm sm:text-base text-[#52656b] max-w-md mx-auto leading-relaxed">
                      We have received your enquiry for <strong>{service}</strong>. A member of our
                      clinical team in Oadby will reach out within 24 hours to discuss how we can
                      support you.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#f0f9fb] border border-[#dbeff2] text-xs text-left max-w-md mx-auto space-y-1.5 text-[#52656b]">
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#17252B]">Client:</span>
                      <span>{fullName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#17252B]">Contact:</span>
                      <span>{phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#17252B]">Preferred Window:</span>
                      <span className="capitalize">{callbackWindow}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="px-6 py-2.5 rounded-full bg-[#e8f6f8] hover:bg-[#ddf2f6] text-xs font-semibold text-[#17252B] border border-[#dbeff2] transition-colors inline-flex items-center gap-2 cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Send Another Message</span>
                    </button>
                    <a
                      href={SITE_CONFIG.phoneHref}
                      className="px-6 py-2.5 rounded-full bg-[#4DAEB5] hover:bg-[#3d969c] text-xs font-semibold text-white shadow-xs transition-colors"
                    >
                      Speak Directly: {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>
              ) : (
                /* INTERACTIVE FORM */
                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                  {apiError && (
                    <div
                      className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3"
                      role="alert"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>{apiError}</span>
                    </div>
                  )}

                  {/* 1. Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="block text-xs font-bold text-[#17252B] uppercase tracking-wider">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="e.g. John Smith"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value)
                        if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }))
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-white border ${
                        errors.fullName ? 'border-red-400 focus:ring-red-400' : 'border-[#dbeff2] focus:ring-[#4DAEB5]'
                      } text-[#17252B] placeholder:text-slate-400 text-sm shadow-xs focus:outline-none focus:ring-2 transition-all`}
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      required
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="text-xs text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* 2 & 3. Email & Phone (Grid on Tablet+) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-bold text-[#17252B] uppercase tracking-wider">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                          if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }))
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-white border ${
                          errors.email ? 'border-red-400 focus:ring-red-400' : 'border-[#dbeff2] focus:ring-[#4DAEB5]'
                        } text-[#17252B] placeholder:text-slate-400 text-sm shadow-xs focus:outline-none focus:ring-2 transition-all`}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        required
                      />
                      {errors.email && (
                        <p id="email-error" className="text-xs text-red-500 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="block text-xs font-bold text-[#17252B] uppercase tracking-wider">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value)
                          if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }))
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-white border ${
                          errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-[#dbeff2] focus:ring-[#4DAEB5]'
                        } text-[#17252B] placeholder:text-slate-400 text-sm shadow-xs focus:outline-none focus:ring-2 transition-all`}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        required
                      />
                      {errors.phone && (
                        <p id="phone-error" className="text-xs text-red-500 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Microcopy reassurance below phone */}
                  <p className="text-[11px] text-[#52656b] -mt-2">
                    We only call during your requested callback window and respect your privacy.
                  </p>

                  {/* 4. Dropdown: I'm Interested In */}
                  <div className="space-y-1.5">
                    <label htmlFor="service" className="block text-xs font-bold text-[#17252B] uppercase tracking-wider">
                      I'm Interested In <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={service}
                        onChange={(e) => {
                          setService(e.target.value)
                          if (errors.service) setErrors((prev) => ({ ...prev, service: undefined }))
                        }}
                        className={`w-full appearance-none px-4 py-3 rounded-xl bg-white border ${
                          errors.service ? 'border-red-400 focus:ring-red-400' : 'border-[#dbeff2] focus:ring-[#4DAEB5]'
                        } text-[#17252B] text-sm shadow-xs focus:outline-none focus:ring-2 transition-all cursor-pointer pr-10`}
                        aria-invalid={Boolean(errors.service)}
                        aria-describedby={errors.service ? 'service-error' : undefined}
                        required
                      >
                        <option value="" disabled>
                          Please select a care service...
                        </option>
                        {CARE_SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                    {errors.service && (
                      <p id="service-error" className="text-xs text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.service}</span>
                      </p>
                    )}
                  </div>

                  {/* 5. Preferred Callback Window */}
                  <div className="space-y-2 pt-1">
                    <span className="block text-xs font-bold text-[#17252B] uppercase tracking-wider">
                      Preferred Callback Window
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {(
                        [
                          { key: 'morning', label: 'Morning (9am - 12pm)' },
                          { key: 'afternoon', label: 'Afternoon (12pm - 5pm)' },
                          { key: 'evening', label: 'Evening (5pm - 7pm)' },
                        ] as const
                      ).map((item) => (
                        <button
                          key={item.key}
                          type="button"
                          onClick={() => setCallbackWindow(item.key)}
                          className={`px-3 py-2.5 rounded-xl text-xs font-semibold transition-all border text-center cursor-pointer ${
                            callbackWindow === item.key
                              ? 'bg-[#e8f6f8] text-[#17252B] border-[#4DAEB5] shadow-xs'
                              : 'bg-white text-[#52656b] border-[#dbeff2] hover:bg-slate-50'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 6. Message */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label htmlFor="message" className="block text-xs font-bold text-[#17252B] uppercase tracking-wider">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <span className="text-[11px] text-slate-400">
                        {message.length}/1500 chars
                      </span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us how we can help you..."
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value)
                        if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }))
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-white border ${
                        errors.message ? 'border-red-400 focus:ring-red-400' : 'border-[#dbeff2] focus:ring-[#4DAEB5]'
                      } text-[#17252B] placeholder:text-slate-400 text-sm shadow-xs focus:outline-none focus:ring-2 transition-all resize-none`}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      required
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* 7. Consent Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#52656b]">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => {
                          setConsent(e.target.checked)
                          if (errors.consent) setErrors((prev) => ({ ...prev, consent: undefined }))
                        }}
                        className="mt-0.5 rounded border-[#dbeff2] text-[#4DAEB5] focus:ring-[#4DAEB5] cursor-pointer"
                        required
                      />
                      <span>
                        I understand that Oadby Care will process my details to respond to this care enquiry.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.consent}</span>
                      </p>
                    )}
                  </div>

                  {/* 8. Full-width Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 rounded-full bg-[#4DAEB5] hover:bg-[#3d969c] text-white font-semibold text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed group focus:outline-none focus:ring-2 focus:ring-[#4DAEB5] focus:ring-offset-2"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Submitting Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Enquiry</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* 9. Privacy reassurance below button */}
                  <div className="flex items-center justify-center gap-2 pt-1 text-center">
                    <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <p className="text-xs text-[#52656b]">
                      Your information will only be used to respond to your enquiry and will be handled with care.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: REASSURANCE & FAQ BRIDGE
          ========================================================================= */}
      <section
        className="w-full rounded-[2rem] bg-[#e8f6f8]/60 border border-[#dbeff2] p-8 sm:p-12 space-y-8"
        aria-labelledby="reassurance-heading"
      >
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-wider text-[#4DAEB5] font-semibold">
            Our Commitment
          </span>
          <h2
            id="reassurance-heading"
            className="text-2xl sm:text-4xl font-bold text-[#17252B] tracking-tight"
          >
            Here to Support You Every Step of the Way
          </h2>
          <p className="text-sm sm:text-base text-[#52656b]">
            We make initiating home care straightforward, compassionate, and completely transparent
            for you and your relatives.
          </p>
        </div>

        {/* Three Reassurance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Personalised Support */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#dbeff2] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f6f8] flex items-center justify-center text-[#4DAEB5]">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#17252B]">Personalised Support</h3>
                <p className="text-sm text-[#52656b] mt-2 leading-relaxed">
                  Care tailored around your individual needs.
                </p>
              </div>
            </div>
            <div className="pt-2 flex items-center gap-2 text-[#4DAEB5] text-xs font-semibold">
              <Check className="w-4 h-4" />
              <span>Bespoke Care Plans</span>
            </div>
          </div>

          {/* Card 2: Friendly Guidance */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#dbeff2] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f6f8] flex items-center justify-center text-[#4DAEB5]">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#17252B]">Friendly Guidance</h3>
                <p className="text-sm text-[#52656b] mt-2 leading-relaxed">
                  Speak with our team about your care options.
                </p>
              </div>
            </div>
            <div className="pt-2 flex items-center gap-2 text-[#4DAEB5] text-xs font-semibold">
              <Check className="w-4 h-4" />
              <span>No-Obligation Advice</span>
            </div>
          </div>

          {/* Card 3: Local Care Team */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#dbeff2] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f6f8] flex items-center justify-center text-[#4DAEB5]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#17252B]">Local Care Team</h3>
                <p className="text-sm text-[#52656b] mt-2 leading-relaxed">
                  Supporting families across Oadby and Leicestershire.
                </p>
              </div>
            </div>
            <div className="pt-2 flex items-center gap-2 text-[#4DAEB5] text-xs font-semibold">
              <Check className="w-4 h-4" />
              <span>DBS Vetted &amp; Local</span>
            </div>
          </div>
        </div>

        {/* Bridge to FAQ page */}
        <div className="pt-4 text-center">
          <a
            href="/#faq"
            onClick={handleFaqClick}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#4DAEB5] hover:text-[#2c7a80] transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Have common questions regarding funding, assessments, or schedules? Browse our F.A.Q →</span>
          </a>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: FINAL CTA SECTION
          ========================================================================= */}
      <section
        className="w-full rounded-[2rem] bg-gradient-to-r from-[#dcf2f5] via-[#eaf8fa] to-white p-8 sm:p-12 lg:p-16 border border-[#dbeff2] shadow-sm relative overflow-hidden"
        aria-labelledby="cta-heading"
      >
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#dbeff2] text-xs font-semibold text-[#17252B]">
            <Clock className="w-3.5 h-3.5 text-[#4DAEB5]" />
            <span>Dedicated Care Advisory</span>
          </div>

          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#17252B]"
          >
            Not Sure Where to Start?
          </h2>

          <p className="text-base sm:text-lg text-[#52656b] max-w-xl mx-auto leading-relaxed">
            Our friendly team is happy to talk through your options and help you understand the next
            steps.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE_CONFIG.phoneHref}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-[#4DAEB5] hover:bg-[#3d969c] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us – {SITE_CONFIG.phone}</span>
            </a>

            <button
              type="button"
              onClick={handleExploreServices}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm sm:text-base font-semibold text-[#17252B] bg-white border border-[#dbeff2] hover:bg-slate-50 shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 text-[#4DAEB5]" />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
