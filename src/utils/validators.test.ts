import { describe, it, expect } from 'vitest'
import { validateContactForm } from './validators'
import type { ContactFormData } from '@/types'

describe('validateContactForm', () => {
  const validData: ContactFormData = {
    fullName: 'Jane Doe',
    email: 'jane.doe@example.co.uk',
    phone: '0116 271 8800',
    serviceType: 'domiciliary',
    urgency: 'immediate',
    message: 'Need assistance for my father with daily personal care and meals.',
    consent: true,
  }

  it('validates a correct form successfully', () => {
    const { isValid, errors } = validateContactForm(validData)
    expect(isValid).toBe(true)
    expect(Object.keys(errors)).toHaveLength(0)
  })

  it('rejects an empty full name', () => {
    const { isValid, errors } = validateContactForm({
      ...validData,
      fullName: '   ',
    })
    expect(isValid).toBe(false)
    expect(errors.fullName).toBeDefined()
  })

  it('rejects an invalid email format', () => {
    const { isValid, errors } = validateContactForm({
      ...validData,
      email: 'not-an-email',
    })
    expect(isValid).toBe(false)
    expect(errors.email).toBeDefined()
  })

  it('rejects invalid UK phone number', () => {
    const { isValid, errors } = validateContactForm({
      ...validData,
      phone: '123',
    })
    expect(isValid).toBe(false)
    expect(errors.phone).toBeDefined()
  })

  it('rejects if privacy consent is false', () => {
    const { isValid, errors } = validateContactForm({
      ...validData,
      consent: false,
    })
    expect(isValid).toBe(false)
    expect(errors.consent).toBeDefined()
  })
})

