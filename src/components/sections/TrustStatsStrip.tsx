import React from 'react'
import { ShieldCheck } from 'lucide-react'
import { STATS, SITE_CONFIG } from '@/config/site'

export const TrustStatsStrip: React.FC = () => {
  return (
    <section
      className="bg-white rounded-[2rem] p-5 sm:p-8 md:p-10 border border-[#dbeff2] shadow-[0_10px_30px_-5px_rgba(77,174,181,0.08),0_4px_12px_-2px_rgba(0,0,0,0.03)]"
      data-purpose="statistics"
    >
      <div className="flex items-center justify-between flex-wrap gap-4 pb-6 mb-6 border-b border-[#dbeff2]/70">
        <h3 className="text-sm font-bold uppercase tracking-wider text-[#17252B]">
          Clinical Governance &amp; Safety Standards
        </h3>
        <span className="inline-flex items-center gap-1.5 text-xs bg-[#e8f6f8] text-[#3d969c] font-semibold px-3.5 py-1.5 rounded-full border border-[#dbeff2]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#4DAEB5]" />
          <span>{SITE_CONFIG.cqcStatus}</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#dbeff2]">
        {STATS.map((stat, idx) => (
          <div key={idx} className={idx > 0 ? 'pt-6 md:pt-0 md:px-4' : 'pt-4 md:pt-0'}>
            <span className="block text-4xl sm:text-5xl font-extrabold text-[#4DAEB5] mb-2 tracking-tight">
              {stat.value}
            </span>
            <p className="text-sm font-medium text-[#52656b]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
