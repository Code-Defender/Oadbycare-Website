import React from 'react'
import { BLOG_ARTICLES } from '@/config/site'

export const BlogSection: React.FC = () => {
  return (
    <section className="space-y-8" data-purpose="blog" id="blog-section">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#4DAEB5] font-bold">
            BLOG UPDATES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#17252B] tracking-tight">
            Home Care Advice and Insights
          </h2>
          <p className="text-[#52656b] text-base max-w-xl">
            Explore helpful information, practical advice, and updates about home care and wellbeing.
          </p>
        </div>
        <a
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#4DAEB5] hover:text-[#3d969c]"
          href="#blog-section"
        >
          View All Articles →
        </a>
      </div>

      {/* 3 Blog Articles Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BLOG_ARTICLES.map((article) => (
          <article
            key={article.id}
            className="bg-white rounded-[2rem] p-5 sm:p-7 border border-[#dbeff2] shadow-[0_10px_30px_-5px_rgba(77,174,181,0.08),0_4px_12px_-2px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#52656b]">
                <span className="px-2.5 py-1 rounded-full bg-[#e8f6f8] text-[#3d969c] font-semibold">
                  {article.tag}
                </span>
                <span>{article.date}</span>
              </div>
              <h3 className="text-xl font-bold text-[#17252B] leading-snug hover:text-[#4DAEB5] transition-colors">
                <a href="#blog-section">{article.title}</a>
              </h3>
              <p className="text-[#52656b] text-sm leading-relaxed">{article.excerpt}</p>
            </div>
            <div className="pt-6">
              <a
                className="text-sm font-semibold text-[#4DAEB5] hover:text-[#3d969c] inline-flex items-center gap-1"
                href="#blog-section"
              >
                Read Article →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

