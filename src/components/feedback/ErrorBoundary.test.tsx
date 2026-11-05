import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ErrorBoundary } from './ErrorBoundary'

const ThrowingComponent = () => {
  throw new Error('Test crash')
}

describe('ErrorBoundary', () => {
  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Normal Content</div>
      </ErrorBoundary>,
    )
    expect(screen.getByText('Normal Content')).toBeInTheDocument()
  })

  it('renders fallback UI when child throws', () => {
    // Suppress console.error output during deliberate test throw
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})

    render(
      <ErrorBoundary fallbackTitle="Custom Error Headline">
        <ThrowingComponent />
      </ErrorBoundary>,
    )

    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(screen.getByText('Custom Error Headline')).toBeInTheDocument()
    expect(screen.getByText('Reload Page')).toBeInTheDocument()

    consoleError.mockRestore()
  })
})

