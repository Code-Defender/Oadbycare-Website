import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { SpecializedCarePage } from './SpecializedCarePage'
import * as inquiryService from '@/services/inquiryService'

describe('SpecializedCarePage Component', () => {
  it('renders heading, breadcrumb, and subtitle in hero banner', () => {
    const onNavigateMock = vi.fn()
    render(<SpecializedCarePage onNavigate={onNavigateMock} />)

    // Hero title & subtitle
    expect(
      screen.getByRole('heading', { level: 1, name: /^Specialized Care$/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Providing high-quality Specialized Care across Leicestershire and multiple locations throughout the UK/i),
    ).toBeInTheDocument()

    // Breadcrumb
    const breadcrumbNav = screen.getByRole('navigation', { name: /Breadcrumb/i })
    expect(breadcrumbNav).toBeInTheDocument()
    const homeLink = screen.getByRole('link', { name: /^Home$/i })
    const servicesLink = screen.getByRole('link', { name: /^Services$/i })
    expect(homeLink).toBeInTheDocument()
    expect(servicesLink).toBeInTheDocument()
    expect(breadcrumbNav).toHaveTextContent('Specialized Care')

    // Clicking breadcrumb items triggers onNavigate
    fireEvent.click(homeLink)
    expect(onNavigateMock).toHaveBeenCalledWith('home')

    fireEvent.click(servicesLink)
    expect(onNavigateMock).toHaveBeenCalledWith('services')
  })

  it('renders all 7 specialized services and content sections', () => {
    render(<SpecializedCarePage />)

    // Introduction heading
    expect(
      screen.getByRole('heading', { name: /^Expert Specialized Care Services Delivered in the Comfort of Home$/i }),
    ).toBeInTheDocument()

    // 7 Services Included List
    expect(screen.getByText('Dementia and Alzheimer’s care')).toBeInTheDocument()
    expect(screen.getByText('Disability care and mobility support')).toBeInTheDocument()
    expect(screen.getByText('Post-hospital recovery support')).toBeInTheDocument()
    expect(screen.getByText('Long-term condition management')).toBeInTheDocument()
    expect(screen.getByText('Personal care and daily living assistance')).toBeInTheDocument()
    expect(screen.getByText('Companionship and emotional support')).toBeInTheDocument()
    expect(screen.getByText('Monitoring health and wellbeing')).toBeInTheDocument()

    // Key Content Sections
    expect(screen.getByRole('heading', { name: /^What Is Specialized Care\?$/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /^Why Choose Our Specialized Care\?$/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /^Specialist Support in the Comfort of Home$/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /^Arrange Specialized Care Today$/i }),
    ).toBeInTheDocument()
  })

  it('renders sidebar contact form and validates required fields on empty submit', () => {
    render(<SpecializedCarePage />)

    expect(screen.getByRole('heading', { name: /^Looking for Advice\?$/i })).toBeInTheDocument()

    const submitBtn = screen.getByRole('button', { name: /Request a Callback/i })
    fireEvent.click(submitBtn)

    expect(screen.getByText('Please enter your full name.')).toBeInTheDocument()
    expect(screen.getByText('Please enter your email address.')).toBeInTheDocument()
    expect(screen.getByText('Please enter your telephone number.')).toBeInTheDocument()
  })

  it('validates email and phone formats correctly', () => {
    render(<SpecializedCarePage />)

    const emailInput = screen.getByLabelText(/Your email/i)
    fireEvent.change(emailInput, { target: { value: 'not-an-email' } })

    const phoneInput = screen.getByLabelText(/Phone number/i)
    fireEvent.change(phoneInput, { target: { value: '123' } })

    const submitBtn = screen.getByRole('button', { name: /Request a Callback/i })
    fireEvent.click(submitBtn)

    expect(screen.getByText(/Please provide a valid email address/i)).toBeInTheDocument()
    expect(screen.getByText(/Please enter a valid UK telephone number/i)).toBeInTheDocument()
  })

  it('submits valid callback request and displays confirmation view', async () => {
    vi.spyOn(inquiryService, 'submitCareInquiry').mockResolvedValueOnce({
      success: true,
      message: 'Inquiry received',
      referenceId: 'OAD-CB-12345',
    })

    render(<SpecializedCarePage />)

    fireEvent.change(screen.getByLabelText(/Your name/i), {
      target: { value: 'Eleanor Vance' },
    })
    fireEvent.change(screen.getByLabelText(/Your email/i), {
      target: { value: 'eleanor.vance@example.co.uk' },
    })
    fireEvent.change(screen.getByLabelText(/Phone number/i), {
      target: { value: '0116 271 8800' },
    })
    fireEvent.change(screen.getByLabelText(/Select type of care/i), {
      target: { value: 'Specialized Care' },
    })

    const submitBtn = screen.getByRole('button', { name: /Request a Callback/i })
    fireEvent.click(submitBtn)

    await waitFor(() => {
      expect(screen.getByText(/Callback Requested!/i)).toBeInTheDocument()
      expect(screen.getByText(/OAD-CB-12345/i)).toBeInTheDocument()
    })

    // Reset allows submitting another inquiry
    const resetBtn = screen.getByRole('button', { name: /Submit another inquiry/i })
    fireEvent.click(resetBtn)

    expect(screen.getByRole('button', { name: /Request a Callback/i })).toBeInTheDocument()
  })

  it('renders Have Questions section with contact details and trigger button', () => {
    const onNavigateMock = vi.fn()
    render(<SpecializedCarePage onNavigate={onNavigateMock} />)

    expect(screen.getByRole('heading', { name: /^Have Questions\?$/i })).toBeInTheDocument()
    expect(screen.getByText(/0116 271 8800/i)).toBeInTheDocument()
    expect(screen.getByText(/info@oadbycare\.co\.uk/i)).toBeInTheDocument()

    const contactUsBtn = screen.getByRole('button', { name: /^Contact Us$/i })
    fireEvent.click(contactUsBtn)
    expect(onNavigateMock).toHaveBeenCalledWith('contact')
  })
})
