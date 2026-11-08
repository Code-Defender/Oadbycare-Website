export type CareServiceType =
  | 'domiciliary'
  | 'dementia'
  | 'respite'
  | 'live-in'
  | 'palliative'
  | 'companionship'

export interface CareService {
  id: CareServiceType
  title: string
  tagline: string
  description: string
  features: string[]
  iconName: 'Home' | 'HeartPulse' | 'Clock' | 'Users' | 'Sparkles' | 'ShieldCheck'
  badge?: string
}

export interface Testimonial {
  id: string
  author: string
  relation: string
  location: string
  quote: string
  rating: number
  verified: boolean
}

export interface ValuePillar {
  id: string
  title: string
  description: string
  iconName: 'ShieldCheck' | 'Award' | 'Clock' | 'Heart'
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface ContactFormData {
  fullName: string
  email: string
  phone: string
  serviceType: CareServiceType | ''
  urgency: 'immediate' | 'within-week' | 'planning-ahead'
  message: string
  consent: boolean
}

export interface ContactFormErrors {
  fullName?: string
  email?: string
  phone?: string
  serviceType?: string
  urgency?: string
  message?: string
  consent?: string
}

export interface ContactSubmissionResult {
  success: boolean
  message: string
  referenceId?: string
}

export interface NavItem {
  label: string
  href: string
  isCta?: boolean
}

export type AppPage =
  | 'home'
  | 'about'
  | 'services'
  | 'faq'
  | 'contact'
  | 'specialized-care'
  | 'support-workers'
  | 'advanced-care'
  | 'registered-nurses'
  | 'senior-healthcare-assistants'
  | 'healthcare-assistance'


