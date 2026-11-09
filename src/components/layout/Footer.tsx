import React from 'react'
import { Mail, MapPin } from 'lucide-react'
import { SITE_CONFIG } from '@/config/site'
import type { AppPage } from '@/types'

const CURRENT_YEAR = 2026

export interface FooterProps {
  onNavigate?: (page: AppPage, targetSectionId?: string) => void
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: AppPage,
    sectionId?: string,
  ) => {
    if (!onNavigate) return
    e.preventDefault()
    onNavigate(page, sectionId)
  }

  return (
    <footer
      className="bg-[#111c21] text-slate-300 pt-12 pb-12 mt-12 border-t border-slate-800"
      data-purpose="site-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* =========================================================================
            TOP SECTION: Carer Recruitment Ribbon
            ========================================================================= */}
        <div className="p-5 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4DAEB5] animate-pulse" />
              <h3 className="text-white font-bold text-lg sm:text-xl">
                Are you a Carer? Join Us.
              </h3>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
              We offer competitive hourly rates, paid mileage, comprehensive training, and flexible
              local schedules across Leicestershire.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <a
              href={SITE_CONFIG.emailHref}
              className="inline-flex items-center gap-2 text-[#4DAEB5] hover:text-[#72d2d8] transition-colors font-medium"
            >
              <Mail className="w-4 h-4 text-[#4DAEB5]" />
              <span>{SITE_CONFIG.email}</span>
            </a>
            <span className="text-slate-700 hidden sm:inline" aria-hidden="true">
              •
            </span>
            <div className="inline-flex items-center gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-[#4DAEB5]" />
              <span>19 Holme Drive, Oadby, Leicester, LE2 4HF</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MAIN FOOTER GRID
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pt-2">
          {/* 1. Company Information (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-1 shadow-xs">
                <img
                  src="/logo-mark.png"
                  alt="Oadby Care Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Oadby Care<span className="text-[#4DAEB5]"> Ltd</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Providing reliable and compassionate domiciliary and live-in care across Oadby and
              the United Kingdom, under the clinical leadership of Dr Nawazish Karim.
            </p>
            <div className="pt-1 text-xs text-slate-400 space-y-1">
              <div>Registered Office: 19 Holme Drive, Oadby, Leicester, England, LE2 4HF</div>

              <div className="text-slate-300 font-medium pt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                <a href={SITE_CONFIG.phoneHref} className="text-[#4DAEB5] hover:underline">
                  {SITE_CONFIG.displayPhone}
                </a>
                <span>•</span>
                <a href={SITE_CONFIG.emailHref} className="text-[#4DAEB5] hover:underline">
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>
          </div>

          {/* 2. Useful Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Useful Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="hover:text-white transition-colors"
                  href="#"
                  onClick={(e) => handleNav(e, 'home')}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors"
                  href="#about-section"
                  onClick={(e) => handleNav(e, 'about')}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors"
                  href="#blog-section"
                  onClick={(e) => handleNav(e, 'home', 'blog-section')}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors"
                  href="#faq-section"
                  onClick={(e) => handleNav(e, 'faq')}
                >
                  F.A.Q
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors"
                  href="#services"
                  onClick={(e) => handleNav(e, 'services')}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors"
                  href="#contact-section"
                  onClick={(e) => handleNav(e, 'contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Care Solutions / Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Care Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="hover:text-white transition-colors"
                  href="#services-section"
                  onClick={(e) => handleNav(e, 'home', 'services-section')}
                >
                  Personal Care
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors"
                  href="#services-section"
                  onClick={(e) => handleNav(e, 'home', 'services-section')}
                >
                  Companionship
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors"
                  href="#services-section"
                  onClick={(e) => handleNav(e, 'home', 'services-section')}
                >
                  24/7 Live-in Care
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors"
                  href="#services-section"
                  onClick={(e) => handleNav(e, 'home', 'services-section')}
                >
                  Dementia Support
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors"
                  href="#services-section"
                  onClick={(e) => handleNav(e, 'home', 'services-section')}
                >
                  Respite Care
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors"
                  href="#services-section"
                  onClick={(e) => handleNav(e, 'home', 'services-section')}
                >
                  Post-Hospital Recovery
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Our Mission & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Our Mission
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              At Oadby Care, our mission is to provide compassionate, reliable, and high-quality
              home care tailored to each individual's needs. We aim to help people remain safe and
              comfortable in their own homes through personalised domiciliary care, live-in care,
              and specialist support services.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-slate-800 text-xs rounded-full text-slate-300 border border-slate-700">
                CQC Regulation Ready
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BOTTOM STRIP: Copyright & Legal
            ========================================================================= */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 text-center sm:text-left">
          <div>© {CURRENT_YEAR} Oadby Care Ltd. All rights reserved.</div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a
              className="hover:text-white transition-colors cursor-pointer"
              href="#privacy-policy"
              onClick={(e) => handleNav(e, 'privacy-policy')}
            >
              Privacy Policy
            </a>
            <a
              className="hover:text-white transition-colors cursor-pointer"
              href="#cookie-policy"
              onClick={(e) => handleNav(e, 'cookie-policy')}
            >
              Cookie Policy
            </a>
            <a
              className="hover:text-white transition-colors cursor-pointer"
              href="#terms-conditions"
              onClick={(e) => handleNav(e, 'terms-conditions')}
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
