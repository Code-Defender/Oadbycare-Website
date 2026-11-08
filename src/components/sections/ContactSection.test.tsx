import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ContactSection } from './ContactSection'

describe('ContactSection', () => {
  it('renders Stitch contact section and details cards', () => {
    render(<ContactSection />)

    expect(screen.getByRole('heading', { name: /Let's Find the Right Care for You/i })).toBeInTheDocument()
    expect(screen.getByText(/Telephone Consultation/i)).toBeInTheDocument()
    expect(screen.getByText(/Verified Direct Email/i)).toBeInTheDocument()
    expect(screen.getByText(/Registered Office/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Book Free Care Consultation/i })).toBeInTheDocument()
  })

  it('opens modal and displays validation errors when submitting empty required fields', async () => {
    render(<ContactSection />)

    // Open modal
    const contactBtn = screen.getByRole('button', { name: /Book Free Care Consultation/i })
    fireEvent.click(contactBtn)

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText(/Contact Our Care Team/i)).toBeInTheDocument()

    // Submit without filling fields
    const submitBtn = screen.getByRole('button', { name: /Submit Assessment Request/i })
    fireEvent.click(submitBtn)

    await waitFor(() => {
      expect(screen.getByText(/Please provide your full name/i)).toBeInTheDocument()
      expect(screen.getByText(/Please provide a contact telephone number/i)).toBeInTheDocument()
      expect(screen.getByText(/Please provide an email address/i)).toBeInTheDocument()
    })
  })
})
