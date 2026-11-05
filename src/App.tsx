import React, { useState, useEffect } from 'react'
import { ErrorBoundary } from '@/components/feedback/ErrorBoundary'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ServicesPage } from '@/pages/ServicesPage'
import { SpecializedCarePage } from '@/pages/SpecializedCarePage'
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
              } else {
                handleNavigate('contact')
              }
            }}
          />
        )
      case 'specialized-care':
        return <SpecializedCarePage onNavigate={handleNavigate} />
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
