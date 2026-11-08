import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { SupportWorkersPage } from './SupportWorkersPage'
import * as inquiryService from '@/services/inquiryService'

describe('SupportWorkersPage Component', () => {
  it('renders heading, breadcrumb, and subtitle in hero banner', () => {
    const onNavigateMock = vi.fn()
    render(<SupportWorkersPage onNavigate={onNavigateMock} />)

    // Hero title & subtitle
    expect(
      screen.getByRole('heading', { level: 1, name: /^Support Workers$/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Providing dedicated Support Worker services across Leicestershire and multiple locations throughout the UK/i),
    ).toBeInTheDocument()

    // Breadcrumb
    const breadcrumbNav = screen.getByRole('navigation', { name: /Breadcrumb/i })
    expect(breadcrumbNav).toBeInTheDocument()
    const homeLink = screen.getByRole('link', { name: /^Home$/i })
    const servicesLink = screen.getByRole('link', { name: /^Services$/i })
    expect(homeLink).toBeInTheDocument()
    expect(servicesLink).toBeInTheDocument()
    expect(breadcrumbNav).toHaveTextContent('Support Workers')

    // Clicking breadcrumb items triggers onNavigate
    fireEvent.click(homeLink)
    expect(onNavigateMock).toHaveBeenCalledWith('home')

    fireEvent.click(servicesLink)
    expect(onNavigateMock).toHaveBeenCalledWith('services')
  })

  it('renders all 7 support worker service categories and content sections', () => {
    render(<SupportWorkersPage />)

    // Introduction heading
    expect(
      screen.getByRole('heading', {
        name: /^Professional Support Workers Providing Care at Home$/i,
      }),
    ).toBeInTheDocument()

    // 7 Services Included List
    expect(screen.getByText('Assistance with daily living activities')).toBeInTheDocument()
    expect(screen.getByText('Personal care and hygiene support')).toBeInTheDocument()
    expect(screen.getByText('Companionship and emotional support')).toBeInTheDocument()
    expect(screen.getByText('Help with meal preparation and household tasks')).toBeInTheDocument()
    expect(screen.getByText('Mobility assistance and safety support')).toBeInTheDocument()
    expect(screen.getByText('Support with appointments and outings')).toBeInTheDocument()
    expect(screen.getByText('Encouraging independence and social engagement')).toBeInTheDocument()

    // Key Content Sections
    expect(screen.getByRole('heading', { name: /^What Do Support Workers Do\?$/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /^Why Choose Our Support Workers\?$/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /^Helping Individuals Live Independently$/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /^Arrange Support Worker Services Today$/i }),
    ).toBeInTheDocument()
  })

  it('renders sidebar contact form preselected with Support Workers', () => {
    render(<SupportWorkersPage />)

    expect(screen.getByRole('heading', { name: /^Looking for Advice\?$/i })).toBeInTheDocument()

    const careTypeSelect = screen.getByLabelText(/Select type of care/i) as HTMLSelectElement
    expect(careTypeSelect.value).toBe('Support Workers')
  })

  it('submits valid callback request and displays confirmation view', async () => {
    vi.spyOn(inquiryService, 'submitCareInquiry').mockResolvedValueOnce({
      success: true,
      message: 'Inquiry received',
      referenceId: 'OAD-SW-12345',
    })

    render(<SupportWorkersPage />)

    fireEvent.change(screen.getByLabelText(/Your name/i), {
      target: { value: 'George Davies' },
    })
    fireEvent.change(screen.getByLabelText(/Your email/i), {
      target: { value: 'george.davies@example.co.uk' },
    })
    fireEvent.change(screen.getByLabelText(/Phone number/i), {
      target: { value: '0116 271 8800' },
    })

    const submitBtn = screen.getByRole('button', { name: /Request a Callback/i })
    fireEvent.click(submitBtn)

    await waitFor(() => {
      expect(screen.getByText(/Callback Requested!/i)).toBeInTheDocument()
      expect(screen.getByText(/OAD-SW-12345/i)).toBeInTheDocument()
    })
  })

  it('renders Have Questions section with contact details and trigger button', () => {
    const onNavigateMock = vi.fn()
    render(<SupportWorkersPage onNavigate={onNavigateMock} />)

    expect(screen.getByRole('heading', { name: /^Have Questions\?$/i })).toBeInTheDocument()
    expect(screen.getByText(/\+44 7459 131084/i)).toBeInTheDocument()
    expect(screen.getByText(/info@oadbycare\.co\.uk/i)).toBeInTheDocument()

    const contactUsBtn = screen.getByRole('button', { name: /^Contact Us$/i })
    fireEvent.click(contactUsBtn)
    expect(onNavigateMock).toHaveBeenCalledWith('contact')
  })
})

