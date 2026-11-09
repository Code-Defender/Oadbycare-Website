import React, { useState } from 'react'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { submitCareInquiry } from '@/services/inquiryService'

export interface ServiceAdviceFormProps {
  defaultCareType?: string
  className?: string
}

export const CARE_TYPE_OPTIONS = [
  'Specialized Care',
  'Support Workers',
  'Advanced Care',
  'Registered Nurses',
  'Senior Healthcare Assistants',
  'Healthcare Assistance',
  'Respite Home Care',
  'Daily Home Care',
  'Hospital to Home Care',
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

export const ServiceAdviceForm: React.FC<ServiceAdviceFormProps> = ({
  defaultCareType = 'Specialized Care',
  className = '',
}) => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [careType, setCareType] = useState<string>(defaultCareType)
  const [message, setMessage] = useState('')

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
      newErrors.phone = 'Please enter a valid UK telephone number (e.g. 07123 456789).'
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
        serviceName: careType,
        urgency: 'Within this week',
        message: message.trim() || 'Request a Callback',
        consent: true,
      })

      setSubmittedRef(result.referenceId || 'OAD-INQUIRY')
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
    setCareType(defaultCareType)
    setMessage('')
    setErrors({})
    setSubmittedRef(null)
    setApiError(null)
  }

  return (
    <div className={`bg-white rounded-2xl border border-[#dbeff2] p-6 sm:p-7 shadow-xs space-y-5 ${className}`}>
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
            Thank you, <strong>{fullName}</strong>. Your request for <strong>{careType}</strong> has been received (Ref: {submittedRef}). Our care team will call you shortly.
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
              className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-xs sm:text-sm text-[#17252B] focus:outline-none focus:ring-2 focus:ring-[#4DAEB5] transition-all ${errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-[#dbeff2]'
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
              className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-xs sm:text-sm text-[#17252B] focus:outline-none focus:ring-2 focus:ring-[#4DAEB5] transition-all ${errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#dbeff2]'
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
              placeholder="07123 456789"
              className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-xs sm:text-sm text-[#17252B] focus:outline-none focus:ring-2 focus:ring-[#4DAEB5] transition-all ${errors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#dbeff2]'
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
  )
}

export default ServiceAdviceForm

