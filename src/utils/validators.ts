import type { ContactFormData, ContactFormErrors } from '@/types'

const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
// Supports UK phone numbers (landline, mobile) and generic international formats
const PHONE_REGEX = /^(?:(?:\+44\s?|0)(?:\d\s?){9,10})$/

/**
 * Validates the contact/assessment inquiry form fields.
 */
export function validateContactForm(data: ContactFormData): {
  isValid: boolean
  errors: ContactFormErrors
} {
  const errors: ContactFormErrors = {}

  const trimmedName = data.fullName.trim()
  if (!trimmedName) {
    errors.fullName = 'Please provide your full name.'
  } else if (trimmedName.length < 2) {
    errors.fullName = 'Full name must be at least 2 characters.'
  } else if (trimmedName.length > 80) {
    errors.fullName = 'Full name is too long.'
  }

  const trimmedEmail = data.email.trim()
  if (!trimmedEmail) {
    errors.email = 'Please provide an email address.'
  } else if (!EMAIL_REGEX.test(trimmedEmail)) {
    errors.email = 'Please provide a valid email address (e.g. name@example.co.uk).'
  }

  const cleanPhone = data.phone.replace(/[\s-]/g, '')
  if (!cleanPhone) {
    errors.phone = 'Please provide a contact telephone number.'
  } else if (!PHONE_REGEX.test(data.phone.trim())) {
    errors.phone = 'Please provide a valid UK telephone number (e.g. 0116 271 8800 or 07123456789).'
  }

  if (!data.serviceType) {
    errors.serviceType = 'Please select the required care service.'
  }

  if (!data.urgency) {
    errors.urgency = 'Please select how quickly care is required.'
  }

  const trimmedMessage = data.message.trim()
  if (trimmedMessage.length > 1000) {
    errors.message = 'Message must be under 1000 characters.'
  }

  if (!data.consent) {
    errors.consent = 'You must acknowledge our privacy policy to submit an assessment request.'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

