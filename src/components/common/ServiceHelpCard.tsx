import React from 'react'
import { Phone, Mail } from 'lucide-react'
import { SITE_CONFIG } from '@/config/site'
import type { AppPage } from '@/types'

export interface ServiceHelpCardProps {
  onNavigate?: (page: AppPage, targetSectionId?: string) => void
  imageSrc?: string
  imageAlt?: string
  title?: string
  subtitle?: string
  className?: string
}

export const ServiceHelpCard: React.FC<ServiceHelpCardProps> = ({
  onNavigate,
  imageSrc = '/services/support-workers.jpg',
  imageAlt = 'Oadby Care support worker having warm conversation over tea',
  title = 'Have Questions?',
  subtitle = 'Our local client care coordinators in Oadby are available 7 days a week to answer your questions.',
  className = '',
}) => {
  return (
    <div className={`rounded-2xl bg-[#23585c] text-white p-6 sm:p-7 space-y-4 shadow-xs relative overflow-hidden ${className}`}>
      <div className="space-y-2 text-center">
        <h3 className="text-xl font-bold tracking-tight">{title}</h3>
        <p className="text-xs text-[#ddf2f6] leading-relaxed">
          {subtitle}
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
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-32 object-cover opacity-90"
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default ServiceHelpCard

