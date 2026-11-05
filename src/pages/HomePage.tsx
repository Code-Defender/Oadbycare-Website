import React from 'react'
import { Hero } from '@/components/sections/Hero'
import { CareBenefitsSection } from '@/components/sections/CareBenefitsSection'
import { AboutUsSection } from '@/components/sections/AboutUsSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { MissionValuesSection } from '@/components/sections/MissionValuesSection'
import { TrustStatsStrip } from '@/components/sections/TrustStatsStrip'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { BlogSection } from '@/components/sections/BlogSection'
import { ContactSection } from '@/components/sections/ContactSection'
import type { AppPage } from '@/types'

export interface HomePageProps {
  onNavigate?: (page: AppPage, targetSectionId?: string) => void
}

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <main id="main-content" className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-16 md:space-y-24 py-8">
      <Hero />
      <CareBenefitsSection />
      <AboutUsSection />
      <ServicesSection />
      <MissionValuesSection />
      <TrustStatsStrip />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
    </main>
  )
}
