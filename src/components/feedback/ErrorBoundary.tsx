import { Component, type ErrorInfo, type ReactNode } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'
import { Button } from '@/components/common/Button'

interface ErrorBoundaryProps {
  children: ReactNode
  fallbackTitle?: string
  fallbackMessage?: string
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public override state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  }

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // In production, send to observability/telemetry logger (e.g. Sentry, Datadog)
    console.error('ErrorBoundary caught an unhandled application error:', error, errorInfo)
  }

  private handleReset = (): void => {
    this.setState({ hasError: false, error: null })
    window.location.reload()
  }

  public override render(): ReactNode {
    if (this.state.hasError) {
      return (
        <section
          role="alert"
          aria-live="assertive"
          className="min-h-[50vh] flex items-center justify-center p-6 bg-slate-50"
        >
          <div className="max-w-md w-full bg-white rounded-2xl border border-rose-100 p-8 shadow-sm text-center">
            <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-5">
              <AlertTriangle className="w-7 h-7" aria-hidden="true" />
            </div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              {this.props.fallbackTitle || 'Something went wrong'}
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              {this.props.fallbackMessage ||
                'We are sorry for the inconvenience. Our team has been notified. Please refresh the page or contact our office.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={this.handleReset} variant="primary" className="gap-2">
                <RefreshCw className="w-4 h-4" />
                Reload Page
              </Button>
              <a
                href="tel:01162718800"
                className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Call Office
              </a>
            </div>
          </div>
        </section>
      )
    }

    return this.props.children
  }
}
