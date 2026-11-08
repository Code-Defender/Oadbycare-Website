import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { SeniorHealthcareAssistantsPage } from './SeniorHealthcareAssistantsPage'
import * as inquiryService from '@/services/inquiryService'

describe('SeniorHealthcareAssistantsPage Component', () => {
  it('renders heading, breadcrumb, and subtitle in hero banner', () => {
    const onNavigateMock = vi.fn()
    render(<SeniorHealthcareAssistantsPage onNavigate={onNavigateMock} />)

    // Hero title & subtitle
    expect(
      screen.getByRole('heading', { level: 1, name: /^Senior Healthcare Assistants$/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/We focus on delivering high-quality Senior Healthcare Assistants in Oadby & Leicestershire/i),
    ).toBeInTheDocument()

    // Breadcrumb
    const breadcrumbNav = screen.getByRole('navigation', { name: /Breadcrumb/i })
    expect(breadcrumbNav).toBeInTheDocument()
    const homeLink = screen.getByRole('link', { name: /^Home$/i })
    const servicesLink = screen.getByRole('link', { name: /^Services$/i })
    expect(homeLink).toBeInTheDocument()
    expect(servicesLink).toBeInTheDocument()
    expect(breadcrumbNav).toHaveTextContent('Senior Healthcare Assistants')

    // Clicking breadcrumb items triggers onNavigate
    fireEvent.click(homeLink)
    expect(onNavigateMock).toHaveBeenCalledWith('home')

    fireEvent.click(servicesLink)
    expect(onNavigateMock).toHaveBeenCalledWith('services')
  })

  it('renders all 6 senior care service categories and content sections', () => {
    render(<SeniorHealthcareAssistantsPage />)

    // Introduction heading
    expect(
      screen.getByRole('heading', {
        name: /^Experienced Senior Healthcare Assistants Supporting Families Across Leicestershire$/i,
      }),
    ).toBeInTheDocument()

    // 6 Services Included List
    expect(screen.getByText('Personal care and hygiene assistance')).toBeInTheDocument()
    expect(screen.getByText('Medication management and monitoring')).toBeInTheDocument()
    expect(screen.getByText('Mobility and transfer support')).toBeInTheDocument()
    expect(screen.getByText('Support with long-term health conditions')).toBeInTheDocument()
    expect(screen.getByText('Assistance with daily living activities')).toBeInTheDocument()
    expect(screen.getByText('Companionship and emotional reassurance')).toBeInTheDocument()

    // Key Content Sections
    expect(
      screen.getByRole('heading', { name: /^What Do Senior Healthcare Assistants Do\?$/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /^Why Choose Our Senior Healthcare Assistants in Leicestershire\?$/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /^Supporting Complex Care Needs at Home$/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /^Arrange Senior Healthcare Support in Leicestershire$/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders sidebar contact form and pre-selects Senior Healthcare Assistants', () => {
    render(<SeniorHealthcareAssistantsPage />)

    expect(screen.getByRole('heading', { name: /^Looking for Advice\?$/i })).toBeInTheDocument()

    const select = screen.getByLabelText(/Select type of care/i) as HTMLSelectElement
    expect(select.value).toBe('Senior Healthcare Assistants')
  })

  it('submits valid callback request and displays confirmation view', async () => {
    vi.spyOn(inquiryService, 'submitCareInquiry').mockResolvedValueOnce({
      success: true,
      message: 'Inquiry received',
      referenceId: 'OAD-SHA-12345',
    })

    render(<SeniorHealthcareAssistantsPage />)

    fireEvent.change(screen.getByLabelText(/Your name/i), {
      target: { value: 'David Mitchell' },
    })
    fireEvent.change(screen.getByLabelText(/Your email/i), {
      target: { value: 'david.mitchell@example.co.uk' },
    })
    fireEvent.change(screen.getByLabelText(/Phone number/i), {
      target: { value: '0116 271 8800' },
    })

    const submitBtn = screen.getByRole('button', { name: /Request a Callback/i })
    fireEvent.click(submitBtn)

    await waitFor(() => {
      expect(screen.getByText(/Callback Requested!/i)).toBeInTheDocument()
      expect(screen.getByText(/OAD-SHA-12345/i)).toBeInTheDocument()
    })
  })

  it('renders Have Questions section with contact details and trigger button', () => {
    const onNavigateMock = vi.fn()
    render(<SeniorHealthcareAssistantsPage onNavigate={onNavigateMock} />)

    expect(screen.getByRole('heading', { name: /^Have Questions\?$/i })).toBeInTheDocument()
    expect(screen.getByText(/0116 271 8800/i)).toBeInTheDocument()
    expect(screen.getByText(/info@oadbycare\.co\.uk/i)).toBeInTheDocument()

    const contactUsBtn = screen.getByRole('button', { name: /^Contact Us$/i })
    fireEvent.click(contactUsBtn)
    expect(onNavigateMock).toHaveBeenCalledWith('contact')
  })
})

