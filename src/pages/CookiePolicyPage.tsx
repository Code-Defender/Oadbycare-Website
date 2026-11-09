import React from 'react'
import { Cookie, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react'
import { SITE_CONFIG } from '@/config/site'
import type { AppPage } from '@/types'

export interface LegalPageProps {
  onNavigate?: (page: AppPage, targetSectionId?: string) => void
}

export const CookiePolicyPage: React.FC<LegalPageProps> = ({ onNavigate }) => {
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
        <span className="text-[#4DAEB5] font-semibold" aria-current="page">Cookie Policy</span>
      </nav>

      {/* Main Content Card */}
      <article className="bg-white rounded-[2rem] border border-[#dbeff2] p-5 sm:p-10 lg:p-12 shadow-[0_10px_30px_-5px_rgba(77,174,181,0.06),0_4px_12px_-2px_rgba(0,0,0,0.02)] space-y-8 text-[#17252B]">
        {/* Header */}
        <header className="border-b border-[#dbeff2] pb-6 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f6f8] text-[#4DAEB5] text-xs font-bold uppercase tracking-wider">
            <Cookie className="w-3.5 h-3.5" />
            <span>Website Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#17252B]">
            Cookie Policy
          </h1>
          <p className="text-xs sm:text-sm text-[#52656b]">
            <strong>Last Updated:</strong> November 2026 • <strong>Entity:</strong> Oadby Care Ltd
          </p>
        </header>

        {/* Policy Body */}
        <div className="space-y-6 text-sm sm:text-base text-[#52656b] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#17252B]">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device (computer, tablet, or smartphone) when you visit a website. They help websites function efficiently, remember preferences, and provide analytical insights on user interactions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#17252B]">2. How Oadby Care Uses Cookies</h2>
            <p>
              At <strong>Oadby Care Ltd</strong>, we use cookies responsibly to ensure our website is fast, secure, and easy to navigate for individuals and families seeking care services. We do not use intrusive tracking or invasive advertising cookies.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#17252B]">3. Categories of Cookies We Use</h2>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-[#f0f9fb] border border-[#dbeff2]">
                <h3 className="font-bold text-[#17252B] text-sm sm:text-base">A. Strictly Necessary Cookies</h3>
                <p className="text-xs sm:text-sm text-[#52656b] mt-1">
                  Essential for basic website operations, navigation between service pages, and secure submission of consultation forms. Without these cookies, parts of our website cannot function properly.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#f0f9fb] border border-[#dbeff2]">
                <h3 className="font-bold text-[#17252B] text-sm sm:text-base">B. Functionality &amp; Performance Cookies</h3>
                <p className="text-xs sm:text-sm text-[#52656b] mt-1">
                  These cookies help us understand how visitors interact with our service pages, monitor page loading speeds, and remember temporary selections (such as care availability preferences).
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#17252B]">4. Managing Cookies in Your Browser</h2>
            <p>
              You have the right to accept or decline cookies. Most web browsers automatically accept cookies, but you can modify your browser settings to decline or delete cookies at any time:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Google Chrome:</strong> Settings → Privacy and security → Third-party cookies.</li>
              <li><strong>Apple Safari:</strong> Preferences → Privacy → Manage Website Data.</li>
              <li><strong>Mozilla Firefox:</strong> Settings → Privacy &amp; Security → Cookies and Site Data.</li>
              <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies.</li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-500 pt-1">
              Please note: Disabling essential cookies may affect form submission capabilities or interactive navigation on our website.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#dbeff2]">
            <h2 className="text-lg sm:text-xl font-bold text-[#17252B]">5. Enquiries About Our Cookies</h2>
            <p>If you have any questions regarding our use of cookies, please get in touch with our team:</p>
            <div className="bg-[#f0f9fb] p-4 sm:p-5 rounded-2xl border border-[#dbeff2] space-y-2 text-xs sm:text-sm">
              <p className="font-bold text-[#17252B]">Oadby Care Ltd</p>
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

