import React, { useState, useEffect } from 'react'
import { ErrorBoundary } from '@/components/feedback/ErrorBoundary'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ServicesPage } from '@/pages/ServicesPage'
import { SpecializedCarePage } from '@/pages/SpecializedCarePage'
import { SupportWorkersPage } from '@/pages/SupportWorkersPage'
import { AdvancedCarePage } from '@/pages/AdvancedCarePage'
import { RegisteredNursesPage } from '@/pages/RegisteredNursesPage'
import { SeniorHealthcareAssistantsPage } from '@/pages/SeniorHealthcareAssistantsPage'
import { HealthcareAssistancePage } from '@/pages/HealthcareAssistancePage'
import { FaqPage } from '@/pages/FaqPage'
import { ContactPage } from '@/pages/ContactPage'
import type { AppPage } from '@/types'

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<AppPage>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash
      const path = window.location.pathname
      if (hash === '#about' || hash === '#/about' || path === '/about') {
        return 'about'
      }
      if (hash === '#services' || hash === '#/services' || path === '/services') {
        return 'services'
      }
      if (hash === '#faq' || hash === '#/faq' || path === '/faq') {
        return 'faq'
      }
      if (hash === '#contact' || hash === '#/contact' || path === '/contact') {
        return 'contact'
      }
      if (
        hash === '#specialized-care' ||
        hash === '#/specialized-care' ||
        hash === '#services/specialized-care' ||
        path === '/specialized-care'
      ) {
        return 'specialized-care'
      }
      if (
        hash === '#support-workers' ||
        hash === '#/support-workers' ||
        hash === '#services/support-workers' ||
        path === '/support-workers'
      ) {
        return 'support-workers'
      }
      if (
        hash === '#advanced-care' ||
        hash === '#/advanced-care' ||
        hash === '#services/advanced-care' ||
        path === '/advanced-care'
      ) {
        return 'advanced-care'
      }
      if (
        hash === '#registered-nurses' ||
        hash === '#/registered-nurses' ||
        hash === '#services/registered-nurses' ||
        path === '/registered-nurses'
      ) {
        return 'registered-nurses'
      }
      if (
        hash === '#senior-healthcare-assistants' ||
        hash === '#/senior-healthcare-assistants' ||
        hash === '#services/senior-healthcare-assistants' ||
        path === '/senior-healthcare-assistants'
      ) {
        return 'senior-healthcare-assistants'
      }
      if (
        hash === '#healthcare-assistance' ||
        hash === '#/healthcare-assistance' ||
        hash === '#services/healthcare-assistance' ||
        path === '/healthcare-assistance'
      ) {
        return 'healthcare-assistance'
      }
    }
    return 'home'
  })

  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash
      if (hash === '#about' || hash === '#/about') {
        setCurrentPage('about')
      } else if (hash === '#services' || hash === '#/services') {
        setCurrentPage('services')
      } else if (hash === '#faq' || hash === '#/faq') {
        setCurrentPage('faq')
      } else if (hash === '#contact' || hash === '#/contact') {
        setCurrentPage('contact')
      } else if (
        hash === '#specialized-care' ||
        hash === '#/specialized-care' ||
        hash === '#services/specialized-care'
      ) {
        setCurrentPage('specialized-care')
      } else if (
        hash === '#support-workers' ||
        hash === '#/support-workers' ||
        hash === '#services/support-workers'
      ) {
        setCurrentPage('support-workers')
      } else if (
        hash === '#advanced-care' ||
        hash === '#/advanced-care' ||
        hash === '#services/advanced-care'
      ) {
        setCurrentPage('advanced-care')
      } else if (
        hash === '#registered-nurses' ||
        hash === '#/registered-nurses' ||
        hash === '#services/registered-nurses'
      ) {
        setCurrentPage('registered-nurses')
      } else if (
        hash === '#senior-healthcare-assistants' ||
        hash === '#/senior-healthcare-assistants' ||
        hash === '#services/senior-healthcare-assistants'
      ) {
        setCurrentPage('senior-healthcare-assistants')
      } else if (
        hash === '#healthcare-assistance' ||
        hash === '#/healthcare-assistance' ||
        hash === '#services/healthcare-assistance'
      ) {
        setCurrentPage('healthcare-assistance')
      } else if (
        hash === '#home' ||
        hash === '#/' ||
        hash === '' ||
        hash === '#services-section' ||
        hash === '#about-section' ||
        hash === '#testimonials-section' ||
        hash === '#blog-section'
      ) {
        setCurrentPage('home')
      }
    }

    window.addEventListener('hashchange', handleLocationChange)
    window.addEventListener('popstate', handleLocationChange)
    return () => {
      window.removeEventListener('hashchange', handleLocationChange)
      window.removeEventListener('popstate', handleLocationChange)
    }
  }, [])

  const handleNavigate = (page: AppPage, targetSectionId?: string) => {
    setCurrentPage(page)
    if (page === 'about') {
      window.location.hash = 'about'
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (page === 'services') {
      window.location.hash = 'services'
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (page === 'faq') {
      window.location.hash = 'faq'
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (page === 'contact') {
      window.location.hash = 'contact'
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (page === 'specialized-care') {
      window.location.hash = 'specialized-care'
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (page === 'support-workers') {
      window.location.hash = 'support-workers'
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (page === 'advanced-care') {
      window.location.hash = 'advanced-care'
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (page === 'registered-nurses') {
      window.location.hash = 'registered-nurses'
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (page === 'senior-healthcare-assistants') {
      window.location.hash = 'senior-healthcare-assistants'
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (page === 'healthcare-assistance') {
      window.location.hash = 'healthcare-assistance'
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      if (targetSectionId) {
        window.location.hash = targetSectionId
        setTimeout(() => {
          const el = document.getElementById(targetSectionId)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 80)
      } else {
        window.location.hash = ''
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  const renderContent = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />
      case 'services':
        return (
          <ServicesPage
            onNavigate={handleNavigate}
            onSelectService={(serviceId) => {
              if (serviceId === 'specialized-care') {
                handleNavigate('specialized-care')
              } else if (serviceId === 'support-workers') {
                handleNavigate('support-workers')
              } else if (serviceId === 'advanced-care') {
                handleNavigate('advanced-care')
              } else if (serviceId === 'registered-nurses') {
                handleNavigate('registered-nurses')
              } else if (serviceId === 'senior-healthcare-assistants') {
                handleNavigate('senior-healthcare-assistants')
              } else if (serviceId === 'healthcare-assistance') {
                handleNavigate('healthcare-assistance')
              } else {
                handleNavigate('contact')
              }
            }}
          />
        )
      case 'specialized-care':
        return <SpecializedCarePage onNavigate={handleNavigate} />
      case 'support-workers':
        return <SupportWorkersPage onNavigate={handleNavigate} />
      case 'advanced-care':
        return <AdvancedCarePage onNavigate={handleNavigate} />
      case 'registered-nurses':
        return <RegisteredNursesPage onNavigate={handleNavigate} />
      case 'senior-healthcare-assistants':
        return <SeniorHealthcareAssistantsPage onNavigate={handleNavigate} />
      case 'healthcare-assistance':
        return <HealthcareAssistancePage onNavigate={handleNavigate} />
      case 'faq':
        return <FaqPage onNavigate={handleNavigate} />
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />
      case 'home':
      default:
        return <HomePage onNavigate={handleNavigate} />
    }
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col bg-[#f0f9fb] text-[#52656b] font-sans antialiased selection:bg-[#4DAEB5] selection:text-white">
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
        {renderContent()}
        <Footer onNavigate={handleNavigate} />
      </div>
    </ErrorBoundary>
  )
}

export default App
