import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { AdvancedCarePage } from './AdvancedCarePage'
import * as inquiryService from '@/services/inquiryService'

describe('AdvancedCarePage Component', () => {
  it('renders heading, breadcrumb, and subtitle in hero banner', () => {
    const onNavigateMock = vi.fn()
    render(<AdvancedCarePage onNavigate={onNavigateMock} />)

    // Hero title & subtitle
    expect(
      screen.getByRole('heading', { level: 1, name: /^Advanced Care$/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Providing specialist Advanced Care across Leicestershire and multiple locations throughout the UK/i),
    ).toBeInTheDocument()

    // Breadcrumb
    const breadcrumbNav = screen.getByRole('navigation', { name: /Breadcrumb/i })
    expect(breadcrumbNav).toBeInTheDocument()
    const homeLink = screen.getByRole('link', { name: /^Home$/i })
    const servicesLink = screen.getByRole('link', { name: /^Services$/i })
    expect(homeLink).toBeInTheDocument()
    expect(servicesLink).toBeInTheDocument()
    expect(breadcrumbNav).toHaveTextContent('Advanced Care')

    // Clicking breadcrumb items triggers onNavigate
    fireEvent.click(homeLink)
    expect(onNavigateMock).toHaveBeenCalledWith('home')

    fireEvent.click(servicesLink)
    expect(onNavigateMock).toHaveBeenCalledWith('services')
  })

  it('renders all 7 advanced care service categories and content sections', () => {
    render(<AdvancedCarePage />)

    // Introduction heading
    expect(
      screen.getByRole('heading', {
        name: /^Specialist Advanced Care Services Delivered at Home$/i,
      }),
    ).toBeInTheDocument()

    // 7 Services Included List
    expect(screen.getByText('Support for complex health conditions')).toBeInTheDocument()
    expect(screen.getByText('Assistance with mobility and transfers')).toBeInTheDocument()
    expect(screen.getByText('Personal care and hygiene support')).toBeInTheDocument()
    expect(screen.getByText('Medication monitoring and reminders')).toBeInTheDocument()
    expect(screen.getByText('Help with daily living activities')).toBeInTheDocument()
    expect(screen.getByText('Emotional support and companionship')).toBeInTheDocument()
    expect(screen.getByText('Monitoring health and wellbeing')).toBeInTheDocument()

    // Key Content Sections
    expect(screen.getByRole('heading', { name: /^What Is Advanced Care\?$/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /^Why Choose Our Advanced Care\?$/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /^Supporting Complex Needs at Home$/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /^Arrange Advanced Care Today$/i }),
    ).toBeInTheDocument()
  })

  it('renders sidebar contact form preselected with Advanced Care', () => {
    render(<AdvancedCarePage />)

    expect(screen.getByRole('heading', { name: /^Looking for Advice\?$/i })).toBeInTheDocument()

    const careTypeSelect = screen.getByLabelText(/Select type of care/i) as HTMLSelectElement
    expect(careTypeSelect.value).toBe('Advanced Care')
  })

  it('submits valid callback request and displays confirmation view', async () => {
    vi.spyOn(inquiryService, 'submitCareInquiry').mockResolvedValueOnce({
      success: true,
      message: 'Inquiry received',
      referenceId: 'OAD-ADV-99887',
    })

    render(<AdvancedCarePage />)

    fireEvent.change(screen.getByLabelText(/Your name/i), {
      target: { value: 'William Thompson' },
    })
    fireEvent.change(screen.getByLabelText(/Your email/i), {
      target: { value: 'william.t@example.co.uk' },
    })
    fireEvent.change(screen.getByLabelText(/Phone number/i), {
      target: { value: '0116 271 8800' },
    })

    const submitBtn = screen.getByRole('button', { name: /Request a Callback/i })
    fireEvent.click(submitBtn)

    await waitFor(() => {
      expect(screen.getByText(/Callback Requested!/i)).toBeInTheDocument()
      expect(screen.getByText(/OAD-ADV-99887/i)).toBeInTheDocument()
    })
  })

  it('renders Have Questions section with contact details and trigger button', () => {
    const onNavigateMock = vi.fn()
    render(<AdvancedCarePage onNavigate={onNavigateMock} />)

    expect(screen.getByRole('heading', { name: /^Have Questions\?$/i })).toBeInTheDocument()
    expect(screen.getByText(/\+44 7459 131084/i)).toBeInTheDocument()
    expect(screen.getByText(/info@oadbycare\.co\.uk/i)).toBeInTheDocument()

    const contactUsBtn = screen.getByRole('button', { name: /^Contact Us$/i })
    fireEvent.click(contactUsBtn)
    expect(onNavigateMock).toHaveBeenCalledWith('contact')
  })
})

