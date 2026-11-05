import React, { useState } from 'react'
import { Phone, Mail, MapPin, CheckCircle2, AlertCircle, X, ArrowRight, UserPlus } from 'lucide-react'
import { SITE_CONFIG } from '@/config/site'
import { submitCareInquiry } from '@/services/inquiryService'
import { validateContactForm } from '@/utils/validators'
import type { ContactFormData, ContactFormErrors, ContactSubmissionResult } from '@/types'

export const ContactSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionResult, setSubmissionResult] = useState<ContactSubmissionResult | null>(null)
  const [generalError, setGeneralError] = useState<string | null>(null)
  const [errors, setErrors] = useState<ContactFormErrors>({})

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceType: 'domiciliary',
    urgency: 'planning-ahead',
    message: '',
    consent: false,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))

    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setGeneralError(null)

    const validation = validateContactForm(formData)
    if (!validation.isValid) {
      setErrors(validation.errors)
      return
    }

    setIsSubmitting(true)
    try {
      const result = await submitCareInquiry(formData)
      setSubmissionResult(result)
      setErrors({})
    } catch (err) {
      setGeneralError(err instanceof Error ? err.message : 'An unexpected error occurred.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSubmissionResult(null)
  }

  return (
    <section
      className="relative rounded-[2rem] bg-gradient-to-br from-[#dcf2f5] via-[#eaf8fa] to-white p-8 sm:p-12 lg:p-16 border border-[#dbeff2] shadow-[0_10px_30px_-5px_rgba(77,174,181,0.08),0_4px_12px_-2px_rgba(0,0,0,0.03)] overflow-hidden"
      data-purpose="contact-cta"
      id="contact-section"
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-bold text-[#17252B] tracking-tight">
          Let's Find the Right Care for You
        </h2>
        <p className="text-base sm:text-lg text-[#52656b] max-w-2xl mx-auto">
          Our team is here to listen, answer your questions, and arrange a free, person-centred home assessment across Leicestershire.
        </p>

        {/* CTA Buttons Row - Dominant Single Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-base font-semibold text-white bg-[#4DAEB5] hover:bg-[#3d969c] shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#4DAEB5] flex items-center justify-center gap-2"
          >
            <span>Book Free Care Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-base font-semibold text-[#17252B] bg-white border border-[#dbeff2] hover:bg-slate-50 shadow-sm transition-all text-center"
            href={SITE_CONFIG.phoneHref}
          >
            Call {SITE_CONFIG.phone}
          </a>
        </div>

        {/* Contact Detail Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 text-left">
          {/* Phone Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 border border-[#dbeff2] shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#e8f6f8] flex items-center justify-center text-[#4DAEB5]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[#52656b] font-medium">Telephone Consultation</p>
                <a href={SITE_CONFIG.phoneHref} className="text-sm font-bold text-[#17252B] hover:text-[#4DAEB5]">
                  {SITE_CONFIG.displayPhone}
                </a>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 border border-[#dbeff2] shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#e8f6f8] flex items-center justify-center text-[#4DAEB5]">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs text-[#52656b] font-medium">Verified Direct Email</p>
                <a
                  className="text-sm font-bold text-[#17252B] hover:text-[#4DAEB5] truncate block"
                  href={SITE_CONFIG.emailHref}
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>
          </div>

          {/* Location Card with Coverage Details */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 border border-[#dbeff2] shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#e8f6f8] flex items-center justify-center text-[#4DAEB5] shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[#52656b] font-medium">{SITE_CONFIG.address.hub}</p>
                <p className="text-sm font-bold text-[#17252B]">{SITE_CONFIG.address.location}</p>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">{SITE_CONFIG.address.coverage}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Carer Recruitment Invitation Ribbon */}
        <div className="pt-6 border-t border-[#dbeff2]/80 mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-[#52656b]">
          <span className="flex items-center gap-1.5 font-medium">
            <UserPlus className="w-4 h-4 text-[#4DAEB5]" />
            Are you an experienced or aspiring carer living in South Leicestershire?
          </span>
          <a
            href={SITE_CONFIG.phoneHref}
            className="font-bold text-[#4DAEB5] hover:text-[#3d969c] underline underline-offset-2"
          >
            Join our accredited care team →
          </a>
        </div>
      </div>

      {/* Interactive Consultation Request Modal */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-[2rem] border border-[#dbeff2] shadow-2xl max-w-lg w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={handleCloseModal}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close consultation modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submissionResult ? (
              <div className="py-6 text-center space-y-4">
                <div className="w-16 h-16 bg-[#e8f6f8] text-[#4DAEB5] rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#17252B]">Inquiry Received</h3>
                <p className="text-sm text-[#52656b] leading-relaxed">
                  {submissionResult.message}
                </p>
                {submissionResult.referenceId && (
                  <div className="p-3 bg-[#f0f9fb] border border-[#dbeff2] rounded-xl inline-block">
                    <span className="text-xs text-slate-500 block">Reference Code</span>
                    <span className="font-mono text-base font-bold text-[#4DAEB5]">
                      {submissionResult.referenceId}
                    </span>
                  </div>
                )}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#4DAEB5] hover:bg-[#3d969c]"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-xl font-bold text-[#17252B]">Contact Our Care Team</h3>
                  <p className="text-xs text-[#52656b] mt-1">
                    Free in-home assessment and confidential support for your family.
                  </p>
                </div>

                {generalError && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{generalError}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-[#17252B] mb-1" htmlFor="modal-name">
                    Full Name *
                  </label>
                  <input
                    id="modal-name"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#dbeff2] text-sm focus:border-[#4DAEB5] focus:ring-1 focus:ring-[#4DAEB5] outline-none"
                  />
                  {errors.fullName && <p className="text-rose-600 text-xs mt-1">{errors.fullName}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#17252B] mb-1" htmlFor="modal-phone">
                      Telephone *
                    </label>
                    <input
                      id="modal-phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 0116 271 8800"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#dbeff2] text-sm focus:border-[#4DAEB5] focus:ring-1 focus:ring-[#4DAEB5] outline-none"
                    />
                    {errors.phone && <p className="text-rose-600 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#17252B] mb-1" htmlFor="modal-email">
                      Email Address *
                    </label>
                    <input
                      id="modal-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.co.uk"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#dbeff2] text-sm focus:border-[#4DAEB5] focus:ring-1 focus:ring-[#4DAEB5] outline-none"
                    />
                    {errors.email && <p className="text-rose-600 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#17252B] mb-1" htmlFor="modal-service">
                    Care Service Required
                  </label>
                  <select
                    id="modal-service"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#dbeff2] text-sm focus:border-[#4DAEB5] focus:ring-1 focus:ring-[#4DAEB5] outline-none"
                  >
                    <option value="domiciliary">Personal &amp; Domiciliary Care</option>
                    <option value="companionship">Companionship &amp; Daily Living</option>
                    <option value="dementia">Dementia &amp; Alzheimer's Care</option>
                    <option value="respite">Respite Care</option>
                    <option value="live-in">24/7 Live-in Care</option>
                    <option value="palliative">Palliative &amp; End of Life</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#17252B] mb-1" htmlFor="modal-msg">
                    How Can We Help? (Optional)
                  </label>
                  <textarea
                    id="modal-msg"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us a little about your loved one's schedule or support needs..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#dbeff2] text-sm focus:border-[#4DAEB5] focus:ring-1 focus:ring-[#4DAEB5] outline-none"
                  />
                </div>

                <div className="pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-0.5 rounded text-[#4DAEB5] focus:ring-[#4DAEB5]"
                    />
                    <span className="text-xs text-[#52656b] leading-tight">
                      I agree to Oadby Care Ltd contacting me regarding this care inquiry.
                    </span>
                  </label>
                  {errors.consent && <p className="text-rose-600 text-xs mt-1">{errors.consent}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-full font-semibold text-sm text-white bg-[#4DAEB5] hover:bg-[#3d969c] shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Assessment Request'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
