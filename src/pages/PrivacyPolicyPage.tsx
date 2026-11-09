import React from 'react'
import { ShieldCheck, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react'
import { SITE_CONFIG } from '@/config/site'
import type { AppPage } from '@/types'

export interface LegalPageProps {
  onNavigate?: (page: AppPage, targetSectionId?: string) => void
}

export const PrivacyPolicyPage: React.FC<LegalPageProps> = ({ onNavigate }) => {
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
        <span className="text-[#4DAEB5] font-semibold" aria-current="page">Privacy Policy</span>
      </nav>

      {/* Main Content Card */}
      <article className="bg-white rounded-[2rem] border border-[#dbeff2] p-5 sm:p-10 lg:p-12 shadow-[0_10px_30px_-5px_rgba(77,174,181,0.06),0_4px_12px_-2px_rgba(0,0,0,0.02)] space-y-8 text-[#17252B]">
        {/* Header */}
        <header className="border-b border-[#dbeff2] pb-6 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f6f8] text-[#4DAEB5] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Legal &amp; Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#17252B]">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-[#52656b]">
            <strong>Last Updated:</strong> November 2026 • <strong>Entity:</strong> Oadby Care Ltd
          </p>
        </header>

        {/* Policy Body */}
        <div className="space-y-6 text-sm sm:text-base text-[#52656b] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#17252B]">1. Introduction &amp; Overview</h2>
            <p>
              At <strong>Oadby Care Ltd</strong> ("we", "our", or "us"), under the clinical leadership of <strong>Dr Nawazish Karim</strong>, we are committed to respecting and protecting the privacy, dignity, and confidential personal data of our clients, their families, and visitors to our website.
            </p>
            <p>
              This Privacy Policy explains how we collect, store, handle, and safeguard your personal data in accordance with the <strong>UK General Data Protection Regulation (UK GDPR)</strong>, the <strong>Data Protection Act 2018</strong>, and relevant health and social care standards.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#17252B]">2. Information We Collect</h2>
            <p>To provide safe, personalised, and high-quality home care services, we may collect:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Contact Details:</strong> Full name, email address, telephone number, home address, and postcode.</li>
              <li><strong>Care &amp; Health Information:</strong> Details regarding care requirements, daily routines, medical conditions, medication management, and mobility support.</li>
              <li><strong>Emergency &amp; Family Contacts:</strong> Names and contact information of designated family members, next of kin, or healthcare advocates.</li>
              <li><strong>Website Enquiries:</strong> Information you submit through our website callback forms, consultation requests, or availability checkers.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#17252B]">3. How We Use Your Information</h2>
            <p>We process your personal data strictly for legitimate care and operational purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>To evaluate care requirements and prepare tailored, person-centred care plans.</li>
              <li>To deliver safe, reliable domiciliary, live-in, and specialist nursing care.</li>
              <li>To communicate with you regarding care scheduling, assessments, and client wellbeing.</li>
              <li>To respond promptly to enquiries submitted through our website or telephone lines.</li>
              <li>To comply with legal, regulatory, and healthcare governance obligations.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#17252B]">4. Lawful Basis for Processing</h2>
            <p>
              We process personal information under lawful grounds provided by UK GDPR, including your explicit consent, the performance of a care contract, compliance with legal obligations, and for the provision of health or social care treatment under Article 9(2)(h).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#17252B]">5. Data Security &amp; Confidentiality</h2>
            <p>
              All client information and care records are held securely with industry-standard encryption, strict access controls, and confidential protocols. Only vetted, DBS-checked care staff and coordinators with a direct duty of care have authorized access to your records.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#17252B]">6. Sharing of Personal Data</h2>
            <p>
              We never sell or rent your personal data to third parties. We only share information with relevant healthcare practitioners (such as your GP, district nurses, or emergency medical services) where necessary for your health, safety, or with your explicit consent.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#17252B]">7. Your Legal Rights</h2>
            <p>Under UK data protection law, you have rights regarding your personal information, including:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>The right to request copies of your personal data held by us.</li>
              <li>The right to request correction of inaccurate or incomplete records.</li>
              <li>The right to request restriction or erasure of personal information where legally permitted.</li>
              <li>The right to withdraw consent at any time for non-statutory communications.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#dbeff2]">
            <h2 className="text-lg sm:text-xl font-bold text-[#17252B]">8. Contact Our Data Controller</h2>
            <p>If you have any questions or wish to exercise your data rights, please contact our team:</p>
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

