import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { HealthcareAssistancePage } from './HealthcareAssistancePage'
import * as inquiryService from '@/services/inquiryService'

describe('HealthcareAssistancePage Component', () => {
  it('renders heading, breadcrumb, and subtitle in hero banner', () => {
    const onNavigateMock = vi.fn()
    render(<HealthcareAssistancePage onNavigate={onNavigateMock} />)

    // Hero title & subtitle
    expect(
      screen.getByRole('heading', { level: 1, name: /^Healthcare Assistance$/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/We focus on delivering high-quality Healthcare Assistance across multiple locations throughout the UK/i),
    ).toBeInTheDocument()

    // Breadcrumb
    const breadcrumbNav = screen.getByRole('navigation', { name: /Breadcrumb/i })
    expect(breadcrumbNav).toBeInTheDocument()
    const homeLink = screen.getByRole('link', { name: /^Home$/i })
    const servicesLink = screen.getByRole('link', { name: /^Services$/i })
    expect(homeLink).toBeInTheDocument()
    expect(servicesLink).toBeInTheDocument()
    expect(breadcrumbNav).toHaveTextContent('Healthcare Assistance')

    // Clicking breadcrumb items triggers onNavigate
    fireEvent.click(homeLink)
    expect(onNavigateMock).toHaveBeenCalledWith('home')

    fireEvent.click(servicesLink)
    expect(onNavigateMock).toHaveBeenCalledWith('services')
  })

  it('renders all 6 healthcare assistance service categories and content sections', () => {
    render(<HealthcareAssistancePage />)

    // Introduction heading
    expect(
      screen.getByRole('heading', {
        name: /^Professional Healthcare Assistance at Home$/i,
      }),
    ).toBeInTheDocument()

    // 6 Services Included List
    expect(screen.getByText('Personal care (washing, dressing, grooming)')).toBeInTheDocument()
    expect(screen.getByText('Medication reminders and monitoring')).toBeInTheDocument()
    expect(screen.getByText('Mobility and transfer support')).toBeInTheDocument()
    expect(screen.getByText('Meal preparation and hydration support')).toBeInTheDocument()
    expect(screen.getByText('Companionship and emotional support')).toBeInTheDocument()
    expect(screen.getByText('Assistance after hospital discharge')).toBeInTheDocument()

    // Key Content Sections
    expect(
      screen.getByRole('heading', { name: /^What Is Healthcare Assistance\?$/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /^Why Choose Our Healthcare Assistance\?$/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /^Supporting Independence at Home$/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /^Get Started with Healthcare Assistance Today$/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders sidebar contact form and pre-selects Healthcare Assistance', () => {
    render(<HealthcareAssistancePage />)

    expect(screen.getByRole('heading', { name: /^Looking for Advice\?$/i })).toBeInTheDocument()

    const select = screen.getByLabelText(/Select type of care/i) as HTMLSelectElement
    expect(select.value).toBe('Healthcare Assistance')
  })

  it('submits valid callback request and displays confirmation view', async () => {
    vi.spyOn(inquiryService, 'submitCareInquiry').mockResolvedValueOnce({
      success: true,
      message: 'Inquiry received',
      referenceId: 'OAD-HCA-12345',
    })

    render(<HealthcareAssistancePage />)

    fireEvent.change(screen.getByLabelText(/Your name/i), {
      target: { value: 'Rachel Green' },
    })
    fireEvent.change(screen.getByLabelText(/Your email/i), {
      target: { value: 'rachel.green@example.co.uk' },
    })
    fireEvent.change(screen.getByLabelText(/Phone number/i), {
      target: { value: '0116 271 8800' },
    })

    const submitBtn = screen.getByRole('button', { name: /Request a Callback/i })
    fireEvent.click(submitBtn)

    await waitFor(() => {
      expect(screen.getByText(/Callback Requested!/i)).toBeInTheDocument()
      expect(screen.getByText(/OAD-HCA-12345/i)).toBeInTheDocument()
    })
  })

  it('renders Have Questions section with contact details and trigger button', () => {
    const onNavigateMock = vi.fn()
    render(<HealthcareAssistancePage onNavigate={onNavigateMock} />)

    expect(screen.getByRole('heading', { name: /^Have Questions\?$/i })).toBeInTheDocument()
    expect(screen.getByText(/0116 271 8800/i)).toBeInTheDocument()
    expect(screen.getByText(/info@oadbycare\.co\.uk/i)).toBeInTheDocument()

    const contactUsBtn = screen.getByRole('button', { name: /^Contact Us$/i })
    fireEvent.click(contactUsBtn)
    expect(onNavigateMock).toHaveBeenCalledWith('contact')
  })
})

