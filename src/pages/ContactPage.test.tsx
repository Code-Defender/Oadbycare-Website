import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ContactPage } from './ContactPage'

describe('ContactPage Component', () => {
  it('renders Hero section with correct label, heading, description, and trust badges', () => {
    render(<ContactPage />)

    // Label
    expect(screen.getByText('GET IN TOUCH')).toBeInTheDocument()

    // Main Heading
    expect(
      screen.getByRole('heading', { name: /We'd Love to Hear From You/i }),
    ).toBeInTheDocument()

    // Description
    expect(
      screen.getByText(/Whether you're looking for care for yourself or a loved one/i),
    ).toBeInTheDocument()

    // Trust badges
    expect(screen.getByText(/CQC Standard Quality/i)).toBeInTheDocument()
    expect(screen.getByText(/Response within 24 Hours/i)).toBeInTheDocument()
    expect(screen.getByText(/Confidential & Discreet/i)).toBeInTheDocument()
  })

  it('renders Left Column contact information blocks and map visual', () => {
    render(<ContactPage />)

    // Column heading
    expect(
      screen.getByRole('heading', { name: /Call Us or Fill Out the Form/i }),
    ).toBeInTheDocument()

    // Block 1: Location
    expect(screen.getByText(/Oadby, Leicestershire, United Kingdom/i)).toBeInTheDocument()
    expect(screen.getByText(/Serving Oadby and surrounding communities/i)).toBeInTheDocument()

    // Block 2: Call Us
    expect(screen.getByText(/Direct Care Line/i)).toBeInTheDocument()
    expect(screen.getByText('0116 271 8800')).toBeInTheDocument()

    // Block 3: Email Us
    expect(screen.getByText('info@oadbycare.co.uk')).toBeInTheDocument()

    // Map visual
    expect(screen.getByText(/Coverage Radius/i)).toBeInTheDocument()
    expect(screen.getByText(/LE2 • South Leicestershire/i)).toBeInTheDocument()
    expect(screen.getByText(/Oadby Hub \(LE2\)/i)).toBeInTheDocument()
  })

  it('renders Right Column contact form with all required fields and dropdown options', () => {
    render(<ContactPage />)

    expect(screen.getByRole('heading', { name: /Send Us a Message/i })).toBeInTheDocument()
    expect(
      screen.getByText(/Complete the form below and a member of our team will get back to you/i),
    ).toBeInTheDocument()

    // Inputs
    expect(screen.getByPlaceholderText(/e\.g\. John Smith/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/name@example\.com/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Enter your phone number/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Tell us how we can help you/i)).toBeInTheDocument()

    // Dropdown with options
    const select = screen.getByLabelText(/I'm Interested In/i) as HTMLSelectElement
    expect(select).toBeInTheDocument()
    expect(screen.getByRole('option', { name: /Personal Care/i })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: /Companionship & Daily Living/i })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: /Dementia Support/i })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: /Live-in Care/i })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: /Respite Care/i })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: /Post-Hospital Recovery/i })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: /Registered Nursing Care/i })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: /General Enquiry/i })).toBeInTheDocument()

    // Submit button
    expect(screen.getByRole('button', { name: /Submit Enquiry/i })).toBeInTheDocument()

    // Privacy notice
    expect(
      screen.getByText(/Your information will only be used to respond to your enquiry/i),
    ).toBeInTheDocument()
  })

  it('validates required fields on empty submit and displays appropriate error messages', async () => {
    render(<ContactPage />)

    const submitBtn = screen.getByRole('button', { name: /Submit Enquiry/i })
    fireEvent.click(submitBtn)

    await waitFor(() => {
      expect(screen.getByText(/Please enter your full name/i)).toBeInTheDocument()
      expect(screen.getByText(/Please enter your email address/i)).toBeInTheDocument()
      expect(screen.getByText(/Please enter your telephone number/i)).toBeInTheDocument()
      expect(screen.getByText(/Please select a care service from the dropdown/i)).toBeInTheDocument()
      expect(screen.getByText(/Please provide details about your care requirements/i)).toBeInTheDocument()
      expect(screen.getByText(/Please confirm that you agree to be contacted/i)).toBeInTheDocument()
    })
  })

  it('validates email format properly', async () => {
    render(<ContactPage />)

    const emailInput = screen.getByPlaceholderText(/name@example\.com/i)
    fireEvent.change(emailInput, { target: { value: 'invalid-email-address' } })

    const submitBtn = screen.getByRole('button', { name: /Submit Enquiry/i })
    fireEvent.click(submitBtn)

    await waitFor(() => {
      expect(
        screen.getByText(/Please provide a valid email address \(e\.g\. name@example\.com\)/i),
      ).toBeInTheDocument()
    })
  })

  it('successfully submits valid form data and shows confirmation view', async () => {
    render(<ContactPage />)

    fireEvent.change(screen.getByPlaceholderText(/e\.g\. John Smith/i), {
      target: { value: 'Eleanor Vance' },
    })
    fireEvent.change(screen.getByPlaceholderText(/name@example\.com/i), {
      target: { value: 'eleanor@example.co.uk' },
    })
    fireEvent.change(screen.getByPlaceholderText(/Enter your phone number/i), {
      target: { value: '0116 271 8800' },
    })
    fireEvent.change(screen.getByLabelText(/I'm Interested In/i), {
      target: { value: 'Dementia Support' },
    })
    fireEvent.change(screen.getByPlaceholderText(/Tell us how we can help you/i), {
      target: { value: 'Looking for gentle daily companionship and memory care in Oadby.' },
    })
    fireEvent.click(screen.getByRole('checkbox'))

    const submitBtn = screen.getByRole('button', { name: /Submit Enquiry/i })
    fireEvent.click(submitBtn)

    await waitFor(
      () => {
        expect(screen.getByText(/Thank You for Reaching Out/i)).toBeInTheDocument()
        expect(screen.getByText(/Reference: OAD-/i)).toBeInTheDocument()
        expect(screen.getByText(/Eleanor Vance/i)).toBeInTheDocument()
      },
      { timeout: 3000 },
    )
  })

  it('renders Additional Reassurance section with three cards', () => {
    render(<ContactPage />)

    expect(
      screen.getByRole('heading', { name: /Here to Support You Every Step of the Way/i }),
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Personalised Support/i })).toBeInTheDocument()
    expect(screen.getByText(/Care tailored around your individual needs\./i)).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Friendly Guidance/i })).toBeInTheDocument()
    expect(screen.getByText(/Speak with our team about your care options\./i)).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Local Care Team/i })).toBeInTheDocument()
    expect(screen.getByText(/Supporting families across Oadby and Leicestershire\./i)).toBeInTheDocument()
  })

  it('renders Final CTA Section and calls onNavigate when explore services is clicked', () => {
    const onNavigateMock = vi.fn()
    render(<ContactPage onNavigate={onNavigateMock} />)

    expect(
      screen.getByRole('heading', { name: /Not Sure Where to Start\?/i }),
    ).toBeInTheDocument()

    expect(screen.getByText(/Call Us – 0116 271 8800/i)).toBeInTheDocument()

    const exploreBtn = screen.getByRole('button', { name: /Explore Our Services/i })
    expect(exploreBtn).toBeInTheDocument()

    fireEvent.click(exploreBtn)
    expect(onNavigateMock).toHaveBeenCalledWith('home', 'services-section')
  })
})
