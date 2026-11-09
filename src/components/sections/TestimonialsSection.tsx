import React from 'react'
import { Star, CheckCircle } from 'lucide-react'
import { STITCH_TESTIMONIALS } from '@/config/site'

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="space-y-8" data-purpose="testimonials" id="testimonials-section">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold text-[#17252B] tracking-tight">
          Trusted by Families
        </h2>
        <p className="text-[#52656b] text-base">
          Discover how compassionate support brings genuine reassurance to individuals and their loved ones across Leicestershire.
        </p>
      </div>

      {/* 3 Testimonial Cards with 5 Stars & Local Credentials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {STITCH_TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-[2rem] p-5 sm:p-8 border border-[#dbeff2] shadow-[0_10px_30px_-5px_rgba(77,174,181,0.08),0_4px_12px_-2px_rgba(0,0,0,0.03)] flex flex-col justify-between relative hover:shadow-lg transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex gap-1 text-amber-400" aria-label="5 out of 5 stars">
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  <span>Verified Review</span>
                </span>
              </div>

              <p className="text-[#52656b] text-sm sm:text-base leading-relaxed italic">
                "{t.quote}"
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#dbeff2]/70 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#e8f6f8] flex items-center justify-center font-bold text-[#4DAEB5] text-sm">
                {t.initials}
              </div>
              <div>
                <p className="font-bold text-[#17252B] text-sm">{t.author}</p>
                <p className="text-xs text-[#52656b]">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
