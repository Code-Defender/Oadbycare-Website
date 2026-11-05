import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App Root Integration', () => {
  it('renders navbar, main content, and footer without crashing', () => {
    render(<App />)

    // Verify main brand name is present in navigation
    const brandLinks = screen.getAllByLabelText(/Oadby Care Home/i)
    expect(brandLinks.length).toBeGreaterThan(0)

    // Verify Stitch headline is rendered
    expect(
      screen.getByRole('heading', { name: /Compassionate Home & Live-In Care/i }),
    ).toBeInTheDocument()

    // Verify Stitch sections are present
    expect(screen.getByText(/Comprehensive Home Care Services/i)).toBeInTheDocument()
    expect(screen.getByText(/Care That Puts You First/i)).toBeInTheDocument()

    // Verify footer copyright
    expect(screen.getByText(/Oadby Care Ltd. All rights reserved./i)).toBeInTheDocument()
  })

  it('navigates seamlessly between Home and Contact pages via Navbar', () => {
    render(<App />)

    // On home page initially
    expect(
      screen.getByRole('heading', { name: /Compassionate Home & Live-In Care/i }),
    ).toBeInTheDocument()

    // Click Contact in desktop nav
    const contactLinks = screen.getAllByRole('link', { name: /^Contact$/i })
    fireEvent.click(contactLinks[0])

    // Contact page should now be visible
    expect(
      screen.getByRole('heading', { name: /We'd Love to Hear From You/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Call Us or Fill Out the Form/i)).toBeInTheDocument()
    expect(screen.getByText(/Send Us a Message/i)).toBeInTheDocument()

    // Click Home to return
    const homeLinks = screen.getAllByRole('link', { name: /^Home$/i })
    fireEvent.click(homeLinks[0])

    // Should return to Home page
    expect(
      screen.getByRole('heading', { name: /Compassionate Home & Live-In Care/i }),
    ).toBeInTheDocument()
  })

  it('navigates to About Us page when About Us link is clicked in Navbar', () => {
    render(<App />)

    const aboutLinks = screen.getAllByRole('link', { name: /^About Us$/i })
    fireEvent.click(aboutLinks[0])

    expect(
      screen.getByRole('heading', {
        name: /Care That Feels Personal\. Support You Can Trust\./i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText('ABOUT OADBY CARE')).toBeInTheDocument()
    expect(screen.getByText('More Than Care. A Commitment to People.')).toBeInTheDocument()
  })

  it('navigates to Services page when Services link is clicked in Navbar', () => {
    render(<App />)

    const servicesLinks = screen.getAllByRole('link', { name: /^Services$/i })
    fireEvent.click(servicesLinks[0])

    expect(
      screen.getByRole('heading', { name: /^Professional & Compassionate Care Services$/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/OUR CARE SERVICES/i)).toBeInTheDocument()
  })

  it('navigates to Specialized Care page when clicking Specialized Care card in Services page', () => {
    render(<App />)

    const servicesLinks = screen.getAllByRole('link', { name: /^Services$/i })
    fireEvent.click(servicesLinks[0])

    const specializedCareBtn = screen.getByRole('button', {
      name: /View full details and arrange consultation for Specialized Care/i,
    })
    fireEvent.click(specializedCareBtn)

    expect(
      screen.getByRole('heading', { name: /^Expert Specialized Care Services at Home$/i }),
    ).toBeInTheDocument()
    expect(screen.getByText('SPECIALIZED CARE')).toBeInTheDocument()
    expect(screen.getByText(/Our Specialized Care Services in Leicestershire Include/i)).toBeInTheDocument()
  })

  it('navigates to FAQ page when F.A.Q link is clicked in Navbar', () => {
    render(<App />)

    const faqLinks = screen.getAllByRole('link', { name: /^F\.A\.Q$/i })
    fireEvent.click(faqLinks[0])

    expect(
      screen.getByRole('heading', { name: /^Frequently Asked Questions$/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: /Breadcrumb/i })).toBeInTheDocument()
  })

  it('renders all required elements in the enhanced branded footer', () => {
    render(<App />)

    // Top Section
    expect(screen.getByText('Are you a Carer? Join Us.')).toBeInTheDocument()
    expect(screen.getByText('info@oadbycare.co.uk')).toBeInTheDocument()
    expect(screen.getByText('Oadby, Leicestershire, United Kingdom')).toBeInTheDocument()

    // Company info
    expect(
      screen.getByText(
        'Providing reliable and compassionate domiciliary and live-in care across Oadby and Leicestershire.',
      ),
    ).toBeInTheDocument()
    expect(screen.getAllByText(/Oadby Care/i).length).toBeGreaterThan(0)

    // Useful Links
    expect(screen.getByText('Useful Links')).toBeInTheDocument()

    // Our Mission
    expect(screen.getByText('Our Mission')).toBeInTheDocument()
    expect(
      screen.getByText(
        /At Oadby Care, our mission is to provide compassionate, reliable, and high-quality home care tailored to each individual's needs/i,
      ),
    ).toBeInTheDocument()

    // Copyright & Legal links
    expect(screen.getByText(/© 2026 Oadby Care Ltd. All rights reserved./i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Privacy Policy/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Cookie Policy/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Terms & Conditions/i })).toBeInTheDocument()
  })
})
