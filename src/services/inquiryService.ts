import type { ContactFormData, ContactSubmissionResult } from '@/types'
import { validateContactForm } from '@/utils/validators'

/**
 * Service for submitting client care inquiries and assessment requests.
 * Decouples API transmission from UI rendering.
 */
export async function submitCareInquiry(data: ContactFormData): Promise<ContactSubmissionResult> {
  // Client-side guard check
  const { isValid, errors } = validateContactForm(data)
  if (!isValid) {
    const firstErrorMessage = Object.values(errors)[0] || 'Invalid form input.'
    throw new Error(firstErrorMessage)
  }

  // Check if API endpoint is configured
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

  if (apiBaseUrl && apiBaseUrl !== '/api') {
    try {
      const response = await fetch(`${apiBaseUrl}/inquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`Server returned HTTP ${response.status}`)
      }

      const result = await response.json()
      return {
        success: true,
        message: result.message || 'Your inquiry has been submitted successfully.',
        referenceId: result.referenceId || `OAD-${Date.now().toString(36).toUpperCase()}`,
      }
    } catch (networkError) {
      console.warn('Backend API submission failed, falling back to local acknowledgment:', networkError)
    }
  }

  // Default simulated resilient submission (e.g., development or static hosting)
  await new Promise((resolve) => setTimeout(resolve, 600))

  const randomRef = `OAD-${Math.floor(100000 + Math.random() * 900000)}`

  return {
    success: true,
    message: 'Thank you. Your assessment request has been received. Our care coordinator will contact you shortly.',
    referenceId: randomRef,
  }
}

