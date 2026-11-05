import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { FaqPage } from './FaqPage'

describe('FaqPage Component', () => {
  it('renders FAQ page heading, breadcrumb, and description', () => {
    const onNavigateMock = vi.fn()
    render(<FaqPage onNavigate={onNavigateMock} />)

    // Heading & Label
    expect(
      screen.getByRole('heading', { name: /^Frequently Asked Questions$/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/HELP & SUPPORT/i)).toBeInTheDocument()

    // Breadcrumb
    expect(screen.getByRole('navigation', { name: /Breadcrumb/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^Home$/i })).toBeInTheDocument()
    expect(screen.getByText('F.A.Q')).toBeInTheDocument()

    // Clicking breadcrumb Home link navigates back to home
    const homeBreadcrumb = screen.getByRole('link', { name: /^Home$/i })
    fireEvent.click(homeBreadcrumb)
    expect(onNavigateMock).toHaveBeenCalledWith('home')
  })

  it('renders accordion questions and toggles answers on click', () => {
    render(<FaqPage />)

    // Check first question exists
    const firstQuestionBtn = screen.getByRole('button', {
      name: /What types of home care services does Oadby Care provide\?/i,
    })
    expect(firstQuestionBtn).toBeInTheDocument()
    expect(firstQuestionBtn).toHaveAttribute('aria-expanded', 'true')

    // Initial expanded answer is visible
    expect(
      screen.getByText(/We provide comprehensive, person-centred home care across Oadby and Leicestershire/i),
    ).toBeInTheDocument()

    // Clicking collapses it
    fireEvent.click(firstQuestionBtn)
    expect(firstQuestionBtn).toHaveAttribute('aria-expanded', 'false')

    // Clicking again expands it
    fireEvent.click(firstQuestionBtn)
    expect(firstQuestionBtn).toHaveAttribute('aria-expanded', 'true')
  })

  it('filters questions by category when category tab is clicked', () => {
    render(<FaqPage />)

    // Initially all 8 questions are rendered
    const fundingTab = screen.getByRole('tab', { name: /Costs & Funding/i })
    fireEvent.click(fundingTab)

    // Only funding questions should now be visible
    expect(
      screen.getByText(/How much does home care cost and how are fees calculated\?/i),
    ).toBeInTheDocument()
    expect(
      screen.queryByText(/What types of home care services does Oadby Care provide\?/i),
    ).not.toBeInTheDocument()
  })

  it('filters questions by search query and shows empty state when nothing matches', () => {
    render(<FaqPage />)

    const searchInput = screen.getByRole('textbox', {
      name: /Search frequently asked questions/i,
    })

    // Search for DBS
    fireEvent.change(searchInput, { target: { value: 'DBS' } })
    expect(
      screen.getByText(/How do you vet, select, and train your carers\?/i),
    ).toBeInTheDocument()
    expect(
      screen.queryByText(/How much does home care cost and how are fees calculated\?/i),
    ).not.toBeInTheDocument()

    // Search for non-existent keyword
    fireEvent.change(searchInput, { target: { value: 'xyzrandomquery123' } })
    expect(screen.getByText(/No matching questions found/i)).toBeInTheDocument()

    // Reset filters
    const resetBtn = screen.getByRole('button', { name: /Reset Filters/i })
    fireEvent.click(resetBtn)
    expect(
      screen.getByText(/What types of home care services does Oadby Care provide\?/i),
    ).toBeInTheDocument()
  })

  it('renders Still Have Questions CTA and triggers navigation to contact page', () => {
    const onNavigateMock = vi.fn()
    render(<FaqPage onNavigate={onNavigateMock} />)

    expect(screen.getByText(/Still Have Questions\?/i)).toBeInTheDocument()
    expect(screen.getByText(/Can’t find what you’re looking for\?/i)).toBeInTheDocument()
    expect(screen.getByText('0116 271 8800')).toBeInTheDocument()

    const contactBtn = screen.getByRole('button', { name: /Send Us a Message/i })
    fireEvent.click(contactBtn)
    expect(onNavigateMock).toHaveBeenCalledWith('contact')
  })
})
