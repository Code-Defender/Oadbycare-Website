import React, { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { NAV_LINKS, SITE_CONFIG } from '@/config/site'
import type { AppPage } from '@/types'

export interface NavbarProps {
  currentPage?: AppPage
  onNavigate?: (page: AppPage, targetSectionId?: string) => void
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage = 'home', onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    label: string,
    href: string,
  ) => {
    if (!onNavigate) return

    e.preventDefault()
    setMobileMenuOpen(false)

    if (label === 'Home') {
      onNavigate('home')
    } else if (label === 'About Us') {
      onNavigate('about')
    } else if (label === 'F.A.Q') {
      onNavigate('faq')
    } else if (label === 'Contact') {
      onNavigate('contact')
    } else if (label === 'Services') {
      onNavigate('services')
    } else if (label === 'Blog') {
      onNavigate('home', 'blog-section')
    } else {
      // Fallback
      if (href.startsWith('#')) {
        const id = href.replace('#', '')
        onNavigate('home', id)
      }
    }
  }

  const handleGetInTouchClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!onNavigate) return

    e.preventDefault()
    setMobileMenuOpen(false)

    if (currentPage === 'contact') {
      const el = document.getElementById('contact-form')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      onNavigate('contact')
    }
  }

  const isLinkActive = (label: string, defaultActive?: boolean): boolean => {
    if (currentPage === 'faq') {
      return label === 'F.A.Q'
    }
    if (
      currentPage === 'services' ||
      currentPage === 'specialized-care' ||
      currentPage === 'support-workers' ||
      currentPage === 'advanced-care' ||
      currentPage === 'registered-nurses' ||
      currentPage === 'senior-healthcare-assistants' ||
      currentPage === 'healthcare-assistance'
    ) {
      return label === 'Services'
    }
    if (currentPage === 'about') {
      return label === 'About Us'
    }
    if (currentPage === 'contact') {
      return label === 'Contact'
    }
    if (currentPage === 'home') {
      return label === 'Home'
    }
    return Boolean(defaultActive)
  }

  return (
    <header className="sticky top-3.5 z-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-md border border-slate-100/90 rounded-full px-5 sm:px-7 py-3 shadow-[0_20px_40px_-10px_rgba(23,37,43,0.08),0_1px_3px_rgba(0,0,0,0.04)] flex items-center justify-between">
        {/* Brand Logo */}
        <a
          aria-label="Oadby Care Home"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#4DAEB5] rounded-full p-1"
          href="#"
          onClick={(e) => {
            if (onNavigate) {
              e.preventDefault()
              onNavigate('home')
            }
          }}
        >
          <img
            src="/logo-mark.png"
            alt="Oadby Care Logo"
            className="w-11 h-11 object-contain group-hover:scale-105 transition-transform"
          />
          <div>
            <span className="text-xl font-bold tracking-tight text-[#17252B] block leading-none">
              Oadby Care<span className="text-[#4DAEB5]">.</span>
            </span>
            <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-400 block mt-0.5">
              Compassionate Living
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-medium text-[#52656b]">
          {NAV_LINKS.map((link) => {
            const active = isLinkActive(link.label, link.active)
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.label, link.href)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  active
                    ? 'bg-[#e8f6f8] text-[#4DAEB5] font-semibold'
                    : 'hover:text-[#17252B] hover:bg-slate-50'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Header Direct Phone & CTA */}
        <div className="flex items-center gap-3">
          <a
            href={SITE_CONFIG.phoneHref}
            className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-[#17252B] bg-[#e8f6f8] hover:bg-[#ddf2f6] px-3.5 py-2 rounded-full border border-[#dbeff2] transition-colors"
            title="Call our care coordination team"
          >
            <Phone className="w-3.5 h-3.5 text-[#4DAEB5]" />
            <span>{SITE_CONFIG.displayPhone}</span>
          </a>

          <a
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#4DAEB5] hover:bg-[#3d969c] shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4DAEB5]"
            href={currentPage === 'contact' ? '#contact-form' : '#contact-section'}
            onClick={handleGetInTouchClick}
          >
            Get in Touch
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#4DAEB5]"
            aria-label="Toggle navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 bg-white/95 backdrop-blur-md border border-slate-100 rounded-3xl p-4 shadow-xl">
          <nav className="flex flex-col space-y-1 text-sm font-medium">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.label, link.active)
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.label, link.href)}
                  className={`px-4 py-2.5 rounded-full transition-colors ${
                    active
                      ? 'bg-[#e8f6f8] text-[#4DAEB5] font-semibold'
                      : 'text-[#52656b] hover:text-[#17252B] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={SITE_CONFIG.phoneHref}
                className="flex items-center justify-center gap-2 py-2 px-3 text-sm font-semibold text-[#17252B] bg-[#e8f6f8] rounded-full border border-[#dbeff2]"
              >
                <Phone className="w-4 h-4 text-[#4DAEB5]" />
                Call Local Team: {SITE_CONFIG.displayPhone}
              </a>
              <a
                className="w-full inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#4DAEB5] hover:bg-[#3d969c] shadow-md"
                href={currentPage === 'contact' ? '#contact-form' : '#contact-section'}
                onClick={handleGetInTouchClick}
              >
                Get in Touch
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
