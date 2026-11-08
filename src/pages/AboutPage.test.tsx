import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { AboutPage } from './AboutPage'

describe('AboutPage Component', () => {
  it('renders Section 1 (Hero) with small heading, main heading, description, and CTAs', () => {
    const onNavigateMock = vi.fn()
    render(<AboutPage onNavigate={onNavigateMock} />)

    // Small heading
    expect(screen.getByText('ABOUT OADBY CARE')).toBeInTheDocument()

    // Main heading
    expect(
      screen.getByRole('heading', {
        name: /Care That Feels Personal\. Support You Can Trust\./i,
      }),
    ).toBeInTheDocument()

    // Description
    expect(
      screen.getByText(/At Oadby Care, we believe everyone deserves to feel safe, valued, and supported/i),
    ).toBeInTheDocument()

    // CTAs
    const exploreBtn = screen.getByRole('button', { name: /Explore Our Services/i })
    const contactBtn = screen.getByRole('button', { name: /Get in Touch/i })

    expect(exploreBtn).toBeInTheDocument()
    expect(contactBtn).toBeInTheDocument()

    fireEvent.click(exploreBtn)
    expect(onNavigateMock).toHaveBeenCalledWith('home', 'services-section')

    fireEvent.click(contactBtn)
    expect(onNavigateMock).toHaveBeenCalledWith('contact')
  })

  it('renders Section 2 (Who We Are) with two-column content and description', () => {
    render(<AboutPage />)

    expect(screen.getByText('WHO WE ARE')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /More Than Care\. A Commitment to People\./i,
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByText(/Oadby Care is a home care provider dedicated to helping individuals live comfortably/i),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/We understand that inviting someone into your home to provide care is an important decision/i),
    ).toBeInTheDocument()
  })

  it('renders Section 3 (Our Mission & Vision) with purpose heading and both cards', () => {
    render(<AboutPage />)

    expect(screen.getByText('OUR PURPOSE')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /Guided by Purpose\. Driven by Compassion\./i,
      }),
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Our Mission/i })).toBeInTheDocument()
    expect(
      screen.getByText(/To deliver compassionate, reliable, and personalised home care/i),
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Our Vision/i })).toBeInTheDocument()
    expect(
      screen.getByText(/To become a trusted name in home care across Leicestershire/i),
    ).toBeInTheDocument()
  })

  it('renders Section 4 (Our Core Values) with 4 values cards', () => {
    render(<AboutPage />)

    expect(screen.getByText('WHAT GUIDES US')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /The Values Behind Everything We Do/i,
      }),
    ).toBeInTheDocument()

    // Card 1
    expect(screen.getByRole('heading', { name: /^Compassion$/i })).toBeInTheDocument()
    expect(
      screen.getByText(/We treat every individual with kindness, patience, empathy, and genuine understanding/i),
    ).toBeInTheDocument()

    // Card 2
    expect(screen.getByRole('heading', { name: /Dignity & Respect/i })).toBeInTheDocument()
    expect(
      screen.getByText(/We respect personal choices, privacy, cultural preferences, and individual independence/i),
    ).toBeInTheDocument()

    // Card 3
    expect(screen.getByRole('heading', { name: /Trust & Reliability/i })).toBeInTheDocument()
    expect(
      screen.getByText(/We build meaningful relationships through consistent support, honest communication/i),
    ).toBeInTheDocument()

    // Card 4
    expect(screen.getByRole('heading', { name: /Quality & Safety/i })).toBeInTheDocument()
    expect(
      screen.getByText(/We are committed to appropriate care planning, safe practices/i),
    ).toBeInTheDocument()
  })

  it('renders Section 5 (Why Choose Oadby Care?) with key features and metrics', () => {
    render(<AboutPage />)

    expect(screen.getByText('WHY CHOOSE OADBY CARE')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /Care Grounded in Trust, Safety & Community/i,
      }),
    ).toBeInTheDocument()

    expect(screen.getByText(/Person-Centred Plans/i)).toBeInTheDocument()
    expect(screen.getByText(/100% DBS-Vetted/i)).toBeInTheDocument()
    expect(screen.getByText(/Consistent Familiar Faces/i)).toBeInTheDocument()
    expect(screen.getByText(/Named Coordinator/i)).toBeInTheDocument()
  })

  it('renders Section 6 (Final CTA) with phone and assessment booking button', () => {
    const onNavigateMock = vi.fn()
    render(<AboutPage onNavigate={onNavigateMock} />)

    expect(
      screen.getByRole('heading', {
        name: /Ready to Discuss Care for Your Loved One\?/i,
      }),
    ).toBeInTheDocument()

    expect(screen.getByText(/Call Us – \+44 7459 131084/i)).toBeInTheDocument()

    const assessmentBtn = screen.getByRole('button', {
      name: /Book a Free Home Assessment/i,
    })
    expect(assessmentBtn).toBeInTheDocument()

    fireEvent.click(assessmentBtn)
    expect(onNavigateMock).toHaveBeenCalledWith('contact')
  })
})
