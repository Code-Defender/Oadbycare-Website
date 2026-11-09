import React from 'react'
import { FileText, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react'
import { SITE_CONFIG } from '@/config/site'
import type { AppPage } from '@/types'

export interface LegalPageProps {
  onNavigate?: (page: AppPage, targetSectionId?: string) => void
}

export const TermsConditionsPage: React.FC<LegalPageProps> = ({ onNavigate }) => {
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate('home')
    }
  }

  return (
    <main id="main-content" className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 space-y-8">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#52656b]">
        <a
          href="/"
          onClick={handleHomeClick}
          className="hover:text-[#4DAEB5] transition-colors flex items-center gap-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Home</span>
        </a>
        <span className="text-slate-300" aria-hidden="true">/</span>
        <span className="text-[#4DAEB5] font-semibold" aria-current="page">Terms &amp; Conditions</span>
      </nav>

      {/* Main Content Card */}
      <article className="bg-white rounded-[2rem] border border-[#dbeff2] p-5 sm:p-10 lg:p-12 shadow-[0_10px_30px_-5px_rgba(77,174,181,0.06),0_4px_12px_-2px_rgba(0,0,0,0.02)] space-y-8 text-[#17252B]">
        {/* Header */}
        <header className="border-b border-[#dbeff2] pb-6 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f6f8] text-[#4DAEB5] text-xs font-bold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>Service Agreement &amp; Terms</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#17252B]">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs sm:text-sm text-[#52656b]">
            <strong>Last Updated:</strong> November 2026 • <strong>Entity:</strong> Oadby Care Ltd
          </p>
        </header>

        {/* Terms Body */}
        <div className="space-y-6 text-sm sm:text-base text-[#52656b] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#17252B]">1. Introduction &amp; Agreement</h2>
            <p>
              Welcome to <strong>Oadby Care Ltd</strong>. These Terms and Conditions govern your use of our website (<strong>oadbycare.co.uk</strong>) and outline the principles under which we deliver domiciliary care, companionship, and specialist home support services across Leicestershire and the United Kingdom.
            </p>
            <p>
              By accessing our website, requesting care consultations, or engaging our home care services, you agree to comply with and be bound by these terms.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#17252B]">2. Home Care Services &amp; Assessments</h2>
            <p>
              All care provided by Oadby Care Ltd is preceded by a thorough in-home care assessment and agreed upon in a personalised <strong>Individual Care Plan</strong>.
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Our services include domiciliary visits, companionship, personal care, dementia care, respite care, and registered nursing oversight.</li>
              <li>Care schedules, visit durations, and specific support requirements are formally documented and confirmed prior to service commencement.</li>
              <li>Care plans are continuously reviewed under the supervision of <strong>Dr Nawazish Karim</strong> and our registered care coordinators.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#17252B]">3. Medical &amp; Emergency Disclaimer</h2>
            <p>
              Information on our website is provided for general guidance and service coordination purposes only. It is not intended as a substitute for acute emergency medical advice. In life-threatening emergencies, clients and family members must immediately dial <strong>999</strong> or contact NHS <strong>111</strong>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#17252B]">4. Care Staff &amp; Standards of Conduct</h2>
            <p>
              We pride ourselves on professionalism, compassion, and respect.
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>All carers and healthcare assistants are rigorously vetted, including Enhanced Disclosure and Barring Service (DBS) checks and reference verifications.</li>
              <li>Our staff adhere to Care Quality Commission (CQC) standards and statutory health and safety regulations.</li>
              <li>We maintain a zero-tolerance policy against any form of discrimination, abuse, or harassment towards our care workers or our clients.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#17252B]">5. Fees, Invoicing &amp; Cancellations</h2>
            <p>
              Detailed pricing, hourly rates, and invoice schedules are transparently provided in your specific client service contract before care starts. Any schedule adjustments or cancellations should be communicated to your dedicated care coordinator with the notice period specified in your client agreement.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#17252B]">6. Governing Law</h2>
            <p>
              These Terms and Conditions and any non-contractual obligations arising out of them are governed by and construed in accordance with the <strong>laws of England and Wales</strong>, and subject to the exclusive jurisdiction of the English courts.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#dbeff2]">
            <h2 className="text-lg sm:text-xl font-bold text-[#17252B]">7. Contact &amp; Registered Details</h2>
            <p>For any queries or formal notices regarding these terms, please contact:</p>
            <div className="bg-[#f0f9fb] p-4 sm:p-5 rounded-2xl border border-[#dbeff2] space-y-2 text-xs sm:text-sm">
              <p className="font-bold text-[#17252B]">Oadby Care Ltd (Attn: Dr Nawazish Karim, Clinical &amp; Managing Director)</p>
              <div className="flex items-center gap-2 text-[#52656b]">
                <MapPin className="w-4 h-4 text-[#4DAEB5] shrink-0" />
                <span>{SITE_CONFIG.address.location}</span>
              </div>
              <div className="flex items-center gap-2 text-[#52656b]">
                <Mail className="w-4 h-4 text-[#4DAEB5] shrink-0" />
                <a href={SITE_CONFIG.emailHref} className="text-[#4DAEB5] hover:underline font-semibold">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-[#52656b]">
                <Phone className="w-4 h-4 text-[#4DAEB5] shrink-0" />
                <a href={SITE_CONFIG.phoneHref} className="text-[#4DAEB5] hover:underline font-semibold">
                  {SITE_CONFIG.displayPhone}
                </a>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  )
}

