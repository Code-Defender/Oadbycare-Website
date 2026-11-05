import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ServicesPage } from './ServicesPage'

describe('ServicesPage Component', () => {
  it('renders Services page heading, breadcrumb, and label', () => {
    const onNavigateMock = vi.fn()
    render(<ServicesPage onNavigate={onNavigateMock} />)

    // Heading & Badge
    expect(
      screen.getByRole('heading', { name: /^Professional & Compassionate Care Services$/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/OUR CARE SERVICES/i)).toBeInTheDocument()

    // Breadcrumb
    expect(screen.getByRole('navigation', { name: /Breadcrumb/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^Home$/i })).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()

    // Home navigation
    const homeLink = screen.getByRole('link', { name: /^Home$/i })
    fireEvent.click(homeLink)
    expect(onNavigateMock).toHaveBeenCalledWith('home')
  })

  it('renders all 6 care services with titles and descriptions', () => {
    render(<ServicesPage />)

    // 1. Specialized Care
    expect(screen.getByRole('heading', { name: /^Specialized Care$/i })).toBeInTheDocument()
    expect(
      screen.getByText(/Specialized Care in Oadby and Leicestershire is designed for individuals/i),
    ).toBeInTheDocument()

    // 2. Support Workers
    expect(screen.getByRole('heading', { name: /^Support Workers$/i })).toBeInTheDocument()
    expect(
      screen.getByText(/Our focus is to deliver dependable home care across Leicestershire/i),
    ).toBeInTheDocument()

    // 3. Advanced Care
    expect(screen.getByRole('heading', { name: /^Advanced Care$/i })).toBeInTheDocument()
    expect(
      screen.getByText(/We provide professional and compassionate Advanced Care in Oadby/i),
    ).toBeInTheDocument()

    // 4. Registered Nurses
    expect(screen.getByRole('heading', { name: /^Registered Nurses$/i })).toBeInTheDocument()
    expect(
      screen.getByText(/Our goal is to provide reliable nursing care at home in Leicestershire/i),
    ).toBeInTheDocument()

    // 5. Senior Healthcare Assistants
    expect(
      screen.getByRole('heading', { name: /^Senior Healthcare Assistants$/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Oadby Care provides professional and compassionate Senior Healthcare Assistants/i),
    ).toBeInTheDocument()

    // 6. Healthcare Assistance
    expect(screen.getByRole('heading', { name: /^Healthcare Assistance$/i })).toBeInTheDocument()
    expect(
      screen.getByText(/Our professional carers support elderly clients and adults with disabilities/i),
    ).toBeInTheDocument()

    // Images rendered
    expect(screen.getByAltText(/Support worker sharing a warm conversation/i)).toBeInTheDocument()
    expect(screen.getByAltText(/Elderly client receiving specialized care support/i)).toBeInTheDocument()
  })

  it('navigates to specialized-care page when Specialized Care card is clicked', () => {
    const onNavigateMock = vi.fn()
    render(<ServicesPage onNavigate={onNavigateMock} />)

    const arrangeButtons = screen.getAllByRole('button', { name: /Arrange Consultation/i })
    expect(arrangeButtons.length).toBeGreaterThanOrEqual(6)
    // First card is Specialized Care
    fireEvent.click(arrangeButtons[0])
    expect(onNavigateMock).toHaveBeenCalledWith('specialized-care')

    // Second card (Support Workers) navigates to contact
    fireEvent.click(arrangeButtons[1])
    expect(onNavigateMock).toHaveBeenCalledWith('contact')
  })

  it('calls onSelectService callback when provided', () => {
    const onSelectServiceMock = vi.fn()
    render(<ServicesPage onSelectService={onSelectServiceMock} />)

    const arrangeButtons = screen.getAllByRole('button', { name: /Arrange Consultation/i })
    fireEvent.click(arrangeButtons[0])
    expect(onSelectServiceMock).toHaveBeenCalledWith('specialized-care')
  })

  it('renders phone link for direct telephone inquiries', () => {
    render(<ServicesPage />)
    expect(screen.getByText('0116 271 8800')).toBeInTheDocument()
  })
})

