import React from 'react'
import {
  Heart,
  Target,
  ShieldCheck,
  Award,
  Users,
  Clock,
  ArrowRight,
  Phone,
  CheckCircle2,
  CalendarCheck,
} from 'lucide-react'
import { SITE_CONFIG } from '@/config/site'
import type { AppPage } from '@/types'

export interface AboutPageProps {
  onNavigate?: (page: AppPage, targetSectionId?: string) => void
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const handleNavigateToServices = () => {
    if (onNavigate) {
      onNavigate('home', 'services-section')
    } else {
      window.location.href = '/#services-section'
    }
  }

  const handleNavigateToContact = () => {
    if (onNavigate) {
      onNavigate('contact')
    } else {
      window.location.href = '/#contact'
    }
  }

  return (
    <main
      id="main-content"
      className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-16 md:space-y-24 py-8"
    >
      {/* =========================================================================
          SECTION 1: HERO SECTION (Two-Column Layout)
          ========================================================================= */}
      <section
        className="relative w-full rounded-[2rem] p-6 sm:p-10 lg:p-14 border border-[#dbeff2] bg-gradient-to-br from-[#e8f6f8] via-[#f0f9fb] to-white shadow-sm overflow-hidden"
        aria-labelledby="about-hero-heading"
      >
        {/* Ambient Glows */}
        <div
          aria-hidden="true"
          className="absolute -top-20 -right-20 w-80 h-80 bg-[#4DAEB5]/15 rounded-full blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#4DAEB5]/10 rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ddf2f6] border border-[#dbeff2]">
              <span className="w-2 h-2 rounded-full bg-[#4DAEB5] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#17252B]">
                ABOUT OADBY CARE
              </span>
            </div>

            <h1
              id="about-hero-heading"
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#17252B] leading-tight"
            >
              Care That Feels Personal. Support You Can Trust.
            </h1>

            <p className="text-base sm:text-lg text-[#52656b] leading-relaxed">
              At Oadby Care, we believe everyone deserves to feel safe, valued, and supported in the
              place they call home. We provide compassionate, personalised home care that respects
              individual choices, preserves independence, and brings peace of mind to families
              across Oadby and Leicestershire.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="button"
                onClick={handleNavigateToServices}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-[#17252B] bg-white border border-[#dbeff2] hover:bg-slate-50 shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-[#4DAEB5]" />
              </button>

              <button
                type="button"
                onClick={handleNavigateToContact}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-[#4DAEB5] hover:bg-[#3d969c] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Reassurance pills */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs font-medium text-[#17252B]">
              <div className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#4DAEB5]" />
                <span>100% DBS Vetted</span>
              </div>
              <div className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#4DAEB5]" />
                <span>CQC Regulation Ready</span>
              </div>
              <div className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#4DAEB5]" />
                <span>Leicestershire Local Team</span>
              </div>
            </div>
          </div>

          {/* Right: Large High-Quality Home Care Photograph (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-[2rem] overflow-hidden border-2 border-white shadow-[0_20px_40px_-10px_rgba(77,174,181,0.18)] bg-white">
              <img
                src="/about-hero.jpg"
                alt="Compassionate home care professional supporting an elderly British client comfortably in her bright living room at home"
                className="w-full h-[380px] sm:h-[440px] object-cover hover:scale-102 transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111c21]/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#dbeff2] shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#4DAEB5] uppercase tracking-wider block">
                    Person-Centred Support
                  </span>
                  <span className="text-xs font-bold text-[#17252B]">
                    Dignity &amp; Familiar Comfort at Home
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#e8f6f8] text-[#4DAEB5] flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHO WE ARE (Two-Column Layout)
          ========================================================================= */}
      <section
        className="w-full rounded-[2rem] bg-white border border-[#dbeff2] p-6 sm:p-10 lg:p-12 shadow-[0_10px_30px_-5px_rgba(77,174,181,0.08),0_4px_12px_-2px_rgba(0,0,0,0.03)]"
        aria-labelledby="who-we-are-heading"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Photograph of Friendly Conversation */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-[2rem] overflow-hidden border border-[#dbeff2] shadow-md bg-white">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcVtzf0O6PJnF6-1VPUnVs3OLx-eEOkDkSSSrMe_EQjxoUgWD9EwKSC-DMAAnhq_DrvihSFcTtTGMT3MrOfHUGXhVfRB_wuahUMfj25pRN4oXB_Igd2QFK3Q1W36fFPO3yWXRl76vNE1jctfuvo4EeeJ1ZcfKfhZ_w40OZQycHgcrZ79q2y2-k_FMJERt18df_8lZvczPVFOkHHUY4CO93470rn2oZeQID_tjkb2dR"
                alt="Professional home carer having a friendly conversation and discussing care plan with an elderly person in a warm British living room"
                className="w-full h-[360px] sm:h-[400px] object-cover hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            {/* Floating Trust Metric Card */}
            <div className="absolute -bottom-5 left-6 right-6 sm:left-8 sm:right-auto sm:max-w-xs p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#dbeff2] shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#e8f6f8] text-[#4DAEB5] flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#17252B] block">Consistent Carer Pairs</span>
                  <span className="text-[11px] text-[#52656b]">Familiar, friendly faces every visit</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#4DAEB5] font-semibold">
                WHO WE ARE
              </span>
              <h2
                id="who-we-are-heading"
                className="text-2xl sm:text-4xl font-bold text-[#17252B] tracking-tight mt-1"
              >
                More Than Care. A Commitment to People.
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#52656b] leading-relaxed">
              <p>
                Oadby Care is a home care provider dedicated to helping individuals live comfortably,
                safely, and independently in their own homes.
              </p>
              <p>
                We understand that inviting someone into your home to provide care is an important
                decision. It requires trust, understanding, and confidence that your loved one will
                be treated with kindness and respect.
              </p>
              <p>
                That's why we take a person-centred approach to everything we do. We take time to
                understand each individual's circumstances, daily routines, personal preferences,
                and care requirements before developing a support plan that works for them.
              </p>
              <p>
                Whether someone needs a little assistance with everyday activities or more
                comprehensive ongoing support, our focus remains the same: delivering care that
                makes a meaningful difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: OUR MISSION & VISION
          ========================================================================= */}
      <section
        className="w-full rounded-[2rem] bg-[#e8f6f8]/60 border border-[#dbeff2] p-6 sm:p-10 lg:p-12 space-y-8"
        aria-labelledby="mission-vision-heading"
      >
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-wider text-[#4DAEB5] font-semibold">
            OUR PURPOSE
          </span>
          <h2
            id="mission-vision-heading"
            className="text-2xl sm:text-4xl font-bold text-[#17252B] tracking-tight"
          >
            Guided by Purpose. Driven by Compassion.
          </h2>
        </div>

        {/* Two balanced cards: Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Our Mission */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#dbeff2] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#e8f6f8] text-[#4DAEB5] flex items-center justify-center shadow-xs">
                <Heart className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#4DAEB5] font-bold block mb-1">
                  Core Purpose
                </span>
                <h3 className="text-2xl font-bold text-[#17252B]">Our Mission</h3>
              </div>
              <p className="text-base text-[#52656b] leading-relaxed">
                To deliver compassionate, reliable, and personalised home care that enables
                individuals to maintain their independence, dignity, and quality of life while giving
                families confidence and reassurance.
              </p>
            </div>
            <div className="pt-2 border-t border-[#dbeff2] flex items-center gap-2 text-xs font-semibold text-[#17252B]">
              <CheckCircle2 className="w-4 h-4 text-[#4DAEB5]" />
              <span>Dignity, Independence &amp; Reassurance</span>
            </div>
          </div>

          {/* Card 2: Our Vision */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#dbeff2] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#e8f6f8] text-[#4DAEB5] flex items-center justify-center shadow-xs">
                <Target className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#4DAEB5] font-bold block mb-1">
                  Long-Term Aspiration
                </span>
                <h3 className="text-2xl font-bold text-[#17252B]">Our Vision</h3>
              </div>
              <p className="text-base text-[#52656b] leading-relaxed">
                To become a trusted name in home care across Leicestershire by creating a culture
                where individuals feel respected, families feel supported, and quality care is at
                the heart of every interaction.
              </p>
            </div>
            <div className="pt-2 border-t border-[#dbeff2] flex items-center gap-2 text-xs font-semibold text-[#17252B]">
              <CheckCircle2 className="w-4 h-4 text-[#4DAEB5]" />
              <span>Leicestershire's Gold Standard in Home Care</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OUR CORE VALUES (4 Responsive Cards)
          ========================================================================= */}
      <section className="w-full space-y-8" aria-labelledby="core-values-heading">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-wider text-[#4DAEB5] font-semibold">
            WHAT GUIDES US
          </span>
          <h2
            id="core-values-heading"
            className="text-2xl sm:text-4xl font-bold text-[#17252B] tracking-tight"
          >
            The Values Behind Everything We Do
          </h2>
          <p className="text-sm sm:text-base text-[#52656b]">
            Our approach to care is guided by principles that shape every relationship, every care
            plan, and every visit.
          </p>
        </div>

        {/* 4 Cards in Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Compassion */}
          <div className="bg-white rounded-[2rem] border border-[#dbeff2] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQatif3d-0KTZbrZHvzTj9D5msGT_pXv7tE1EdIajXzMTnBPXd0zE7uqW5J-RonKs09z_eCHGxcvg6XIuCudDOccZcARiP4MSO34B_Jpp80araR8JWrezSwnq-hJQa5MqqsCyIy-Yy_Mxd3EuwDLXUfj7_lC1yZDIeu1XlD5_LJOyig3RZnph8SlqeorHc_cQEHQXqzMOARnajlozPXxxJaYPh3x9zTT8fQ8NEM3Dv"
                alt="Caregiver gently offering compassionate support and holding hand of client in bright home"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-white/95 backdrop-blur-md text-[#4DAEB5] flex items-center justify-center shadow-xs">
                <Heart className="w-4 h-4" />
              </div>
            </div>
            <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#17252B]">Compassion</h3>
                <p className="text-sm text-[#52656b] mt-1 leading-relaxed">
                  We treat every individual with kindness, patience, empathy, and genuine
                  understanding.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#4DAEB5] block pt-3">
                Kindness &amp; Empathy
              </span>
            </div>
          </div>

          {/* Card 2: Dignity & Respect */}
          <div className="bg-white rounded-[2rem] border border-[#dbeff2] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvJ0hfpzBTVZYpk9BUuvD81t0CcIuMBg-ryz3eWAtgUqgONFcPL7FBElB7Hs0zsJ0Zuppgne23oSo5H5fyKr0FG3tmkJ2k8SJYdCZb7MOPmKoDsRREIcA2s2iwT7YwRPsoBqIFhQKpCH-7we73kfsWHPSI75VB5h0wTZUdG26U-Uv7PpPkMyXcmgIx72RUUeU1a0dGw96kUto9ybvuM4GnuuN55Ie1bo9uA8tGj16V"
                alt="Dignified elderly client enjoying an independent, peaceful and comfortable moment at home"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-white/95 backdrop-blur-md text-[#4DAEB5] flex items-center justify-center shadow-xs">
                <Award className="w-4 h-4" />
              </div>
            </div>
            <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#17252B]">Dignity &amp; Respect</h3>
                <p className="text-sm text-[#52656b] mt-1 leading-relaxed">
                  We respect personal choices, privacy, cultural preferences, and individual
                  independence.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#4DAEB5] block pt-3">
                Choice &amp; Privacy
              </span>
            </div>
          </div>

          {/* Card 3: Trust & Reliability */}
          <div className="bg-white rounded-[2rem] border border-[#dbeff2] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcVtzf0O6PJnF6-1VPUnVs3OLx-eEOkDkSSSrMe_EQjxoUgWD9EwKSC-DMAAnhq_DrvihSFcTtTGMT3MrOfHUGXhVfRB_wuahUMfj25pRN4oXB_Igd2QFK3Q1W36fFPO3yWXRl76vNE1jctfuvo4EeeJ1ZcfKfhZ_w40OZQycHgcrZ79q2y2-k_FMJERt18df_8lZvczPVFOkHHUY4CO93470rn2oZeQID_tjkb2dR"
                alt="Home care professional discussing a care plan in an open, trustworthy conversation"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-white/95 backdrop-blur-md text-[#4DAEB5] flex items-center justify-center shadow-xs">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#17252B]">Trust &amp; Reliability</h3>
                <p className="text-sm text-[#52656b] mt-1 leading-relaxed">
                  We build meaningful relationships through consistent support, honest
                  communication, and dependable care.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#4DAEB5] block pt-3">
                Punctual &amp; Honest
              </span>
            </div>
          </div>

          {/* Card 4: Quality & Safety */}
          <div className="bg-white rounded-[2rem] border border-[#dbeff2] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTFNeFiwLwmvL4Fb8c1jtpQH0lvw1TIVfVL6FIboJ-76M7xtV-rRGUeAY614wN8aD27w9z3tclQn9Y8i3lB9xMpUmO1gUkOvtDdYuI17VNuepKK7eOFnycfMVErkNzTtcM8XhhEvr-4e4GnNaYA5PKm6vwy3cIfu07CAYZN6THhH9Mx0xD0NNIblX9pOnY6dhLep1MCIiO5bVDbvZnEwgjyUdG852UvzlUxMHzyb3-"
                alt="Professional healthcare worker ensuring high medical standards and attentive support"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-white/95 backdrop-blur-md text-[#4DAEB5] flex items-center justify-center shadow-xs">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
            <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#17252B]">Quality &amp; Safety</h3>
                <p className="text-sm text-[#52656b] mt-1 leading-relaxed">
                  We are committed to appropriate care planning, safe practices, and maintaining
                  high standards of support.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#4DAEB5] block pt-3">
                CQC Aligned Rigor
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: WHY CHOOSE OADBY CARE? (Two-Column Layout)
          ========================================================================= */}
      <section
        className="w-full rounded-[2rem] bg-white border border-[#dbeff2] p-6 sm:p-10 lg:p-12 shadow-[0_10px_30px_-5px_rgba(77,174,181,0.08),0_4px_12px_-2px_rgba(0,0,0,0.03)]"
        aria-labelledby="why-choose-heading"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Home care photograph with floating badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2rem] overflow-hidden border border-[#dbeff2] shadow-md bg-white">
              <img
                src="/about-why-choose.jpg"
                alt="Professional British nurse gently supporting an elderly gentleman practicing walking at home"
                className="w-full h-[360px] sm:h-[420px] object-cover hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            {/* Satisfaction Badge */}
            <div className="absolute -bottom-4 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#dbeff2] shadow-md text-center">
              <span className="text-2xl font-bold text-[#4DAEB5] block leading-none">4.9 / 5</span>
              <span className="text-[11px] font-semibold text-[#17252B] mt-1 block">
                Verified Family Rating
              </span>
            </div>
          </div>

          {/* Right: Key Reasons & Differentiators */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#4DAEB5] font-semibold">
                WHY CHOOSE OADBY CARE
              </span>
              <h2
                id="why-choose-heading"
                className="text-2xl sm:text-4xl font-bold text-[#17252B] tracking-tight mt-1"
              >
                Care Grounded in Trust, Safety &amp; Community
              </h2>
              <p className="text-sm sm:text-base text-[#52656b] mt-2">
                We combine the rigorous clinical governance of a regulated healthcare provider with
                the warmth, flexibility, and personal touch of a local Leicestershire team.
              </p>
            </div>

            {/* 4 Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-2xl bg-[#f0f9fb] border border-[#dbeff2] space-y-1.5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4DAEB5] shrink-0" />
                  <h3 className="text-sm font-bold text-[#17252B]">Person-Centred Plans</h3>
                </div>
                <p className="text-xs text-[#52656b] leading-relaxed">
                  Tailored around your specific routines, independence goals, and clinical needs.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f0f9fb] border border-[#dbeff2] space-y-1.5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4DAEB5] shrink-0" />
                  <h3 className="text-sm font-bold text-[#17252B]">100% DBS-Vetted</h3>
                </div>
                <p className="text-xs text-[#52656b] leading-relaxed">
                  Stringent background checks, professional vetting, and regular supervisory audits.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f0f9fb] border border-[#dbeff2] space-y-1.5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4DAEB5] shrink-0" />
                  <h3 className="text-sm font-bold text-[#17252B]">Consistent Familiar Faces</h3>
                </div>
                <p className="text-xs text-[#52656b] leading-relaxed">
                  We match carers thoughtfully so you always welcome a trusted, familiar presence.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f0f9fb] border border-[#dbeff2] space-y-1.5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4DAEB5] shrink-0" />
                  <h3 className="text-sm font-bold text-[#17252B]">Named Coordinator</h3>
                </div>
                <p className="text-xs text-[#52656b] leading-relaxed">
                  A direct point of contact for your family, available 7 days a week with zero delays.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleNavigateToContact}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#4DAEB5] hover:text-[#3d969c] cursor-pointer"
              >
                <span>Arrange a Free Home Care Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: FINAL CTA SECTION
          ========================================================================= */}
      <section
        className="w-full rounded-[2rem] bg-gradient-to-r from-[#dcf2f5] via-[#eaf8fa] to-white p-8 sm:p-12 lg:p-16 border border-[#dbeff2] shadow-sm relative overflow-hidden"
        aria-labelledby="about-cta-heading"
      >
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#dbeff2] text-xs font-semibold text-[#17252B]">
            <CalendarCheck className="w-3.5 h-3.5 text-[#4DAEB5]" />
            <span>Dedicated Family Advisory</span>
          </div>

          <h2
            id="about-cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#17252B]"
          >
            Ready to Discuss Care for Your Loved One?
          </h2>

          <p className="text-base sm:text-lg text-[#52656b] max-w-xl mx-auto leading-relaxed">
            Speak with our local care coordination team today for friendly, unhurried, no-obligation
            advice.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE_CONFIG.phoneHref}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-[#4DAEB5] hover:bg-[#3d969c] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us – {SITE_CONFIG.phone}</span>
            </a>

            <button
              type="button"
              onClick={handleNavigateToContact}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm sm:text-base font-semibold text-[#17252B] bg-white border border-[#dbeff2] hover:bg-slate-50 shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book a Free Home Assessment</span>
              <ArrowRight className="w-4 h-4 text-[#4DAEB5]" />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

