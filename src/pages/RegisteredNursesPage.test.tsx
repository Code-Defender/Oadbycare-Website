import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { RegisteredNursesPage } from './RegisteredNursesPage'
import * as inquiryService from '@/services/inquiryService'

describe('RegisteredNursesPage Component', () => {
  it('renders heading, breadcrumb, and subtitle in hero banner', () => {
    const onNavigateMock = vi.fn()
    render(<RegisteredNursesPage onNavigate={onNavigateMock} />)

    // Hero title & subtitle
    expect(
      screen.getByRole('heading', { level: 1, name: /^Registered Nurses$/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Providing qualified Registered Nursing care across Leicestershire and multiple locations throughout the UK/i),
    ).toBeInTheDocument()

    // Breadcrumb
    const breadcrumbNav = screen.getByRole('navigation', { name: /Breadcrumb/i })
    expect(breadcrumbNav).toBeInTheDocument()
    const homeLink = screen.getByRole('link', { name: /^Home$/i })
    const servicesLink = screen.getByRole('link', { name: /^Services$/i })
    expect(homeLink).toBeInTheDocument()
    expect(servicesLink).toBeInTheDocument()
    expect(breadcrumbNav).toHaveTextContent('Registered Nurses')

    // Clicking breadcrumb items triggers onNavigate
    fireEvent.click(homeLink)
    expect(onNavigateMock).toHaveBeenCalledWith('home')

    fireEvent.click(servicesLink)
    expect(onNavigateMock).toHaveBeenCalledWith('services')
  })

  it('renders all 7 nursing service categories and content sections', () => {
    render(<RegisteredNursesPage />)

    // Introduction heading
    expect(
      screen.getByRole('heading', {
        name: /^Professional Registered Nurses Providing Care at Home$/i,
      }),
    ).toBeInTheDocument()

    // 7 Services Included List
    expect(screen.getByText('Medication administration and monitoring')).toBeInTheDocument()
    expect(screen.getByText('Wound care and clinical dressing support')).toBeInTheDocument()
    expect(screen.getByText('Health assessments and vital monitoring')).toBeInTheDocument()
    expect(screen.getByText('Support for chronic medical conditions')).toBeInTheDocument()
    expect(screen.getByText('Post-hospital recovery care')).toBeInTheDocument()
    expect(screen.getByText('Coordination with healthcare professionals')).toBeInTheDocument()
    expect(screen.getAllByText('Personalised clinical nursing care plans').length).toBeGreaterThanOrEqual(1)

    // Key Content Sections
    expect(
      screen.getByRole('heading', { name: /^What Does a Registered Nurse Do\?$/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /^Why Choose Our Registered Nurses\?$/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /^Quality Nursing Care in the Comfort of Home$/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /^Arrange Registered Nursing Care Today$/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders sidebar contact form and pre-selects Registered Nurses', () => {
    render(<RegisteredNursesPage />)

    expect(screen.getByRole('heading', { name: /^Looking for Advice\?$/i })).toBeInTheDocument()

    const select = screen.getByLabelText(/Select type of care/i) as HTMLSelectElement
    expect(select.value).toBe('Registered Nurses')
  })

  it('submits valid callback request and displays confirmation view', async () => {
    vi.spyOn(inquiryService, 'submitCareInquiry').mockResolvedValueOnce({
      success: true,
      message: 'Inquiry received',
      referenceId: 'OAD-RN-12345',
    })

    render(<RegisteredNursesPage />)

    fireEvent.change(screen.getByLabelText(/Your name/i), {
      target: { value: 'Sarah Jenkins' },
    })
    fireEvent.change(screen.getByLabelText(/Your email/i), {
      target: { value: 'sarah.jenkins@example.co.uk' },
    })
    fireEvent.change(screen.getByLabelText(/Phone number/i), {
      target: { value: '0116 271 8800' },
    })

    const submitBtn = screen.getByRole('button', { name: /Request a Callback/i })
    fireEvent.click(submitBtn)

    await waitFor(() => {
      expect(screen.getByText(/Callback Requested!/i)).toBeInTheDocument()
      expect(screen.getByText(/OAD-RN-12345/i)).toBeInTheDocument()
    })
  })

  it('renders Have Questions section with contact details and trigger button', () => {
    const onNavigateMock = vi.fn()
    render(<RegisteredNursesPage onNavigate={onNavigateMock} />)

    expect(screen.getByRole('heading', { name: /^Have Questions\?$/i })).toBeInTheDocument()
    expect(screen.getByText(/0116 271 8800/i)).toBeInTheDocument()
    expect(screen.getByText(/info@oadbycare\.co\.uk/i)).toBeInTheDocument()

    const contactUsBtn = screen.getByRole('button', { name: /^Contact Us$/i })
    fireEvent.click(contactUsBtn)
    expect(onNavigateMock).toHaveBeenCalledWith('contact')
  })
})

