export interface NavLinkItem {
  label: string
  href: string
  active?: boolean
}

export const SITE_CONFIG = {
  name: 'Oadby Care',
  legalName: 'Oadby Care Ltd',
  tagline: 'Compassionate Living',
  heroHeadline: 'Compassionate Home & Live-In Care Across Oadby & Leicestershire',
  heroSubtitle:
    'Delivering trusted, personalised home care that helps people live safely, independently, and with dignity in the comfort of their own homes.',
  leadName: 'Dr Nawazish Karim',
  leadFirstName: 'Dr Nawazish',
  leadLastName: 'Karim',
  leadRole: 'Clinical & Managing Director',
  phone: '+44 7459 131084',
  phoneHref: 'tel:+447459131084',
  displayPhone: '+44 7459 131084',
  emergencyPhone: '+44 7459 131084',
  emergencyPhoneHref: 'tel:+447459131084',
  email: 'info@oadbycare.co.uk',
  emailHref: 'mailto:info@oadbycare.co.uk',
  address: {
    hub: 'Registered Office',
    street: '19 Holme Drive',
    town: 'Oadby',
    city: 'Leicester',
    postcode: 'LE2 4HF',
    location: '19 Holme Drive, Oadby, Leicester, England, LE2 4HF',
    coverage: 'Serving Oadby, Leicestershire, and multiple locations across the UK',
    country: 'United Kingdom',
  },
  openingHours: 'Mon - Sun: 7:00 AM – 10:00 PM (24/7 Emergency Line Available)',
  cqcStatus: 'Care Standards Compliant | CQC Regulation Ready',
} as const

export const NAV_LINKS: readonly NavLinkItem[] = [
  { label: 'Home', href: '#', active: true },
  { label: 'Services', href: '#services-section' },
  { label: 'About Us', href: '#about-section' },
  { label: 'F.A.Q', href: '#testimonials-section' },
  { label: 'Blog', href: '#blog-section' },
  { label: 'Contact', href: '#contact-section' },
]

export const CARE_BENEFITS = [
  {
    id: 'plans',
    title: 'Personalised Care Plans',
    description:
      'Every client receives a tailored home care plan designed around their individual needs, routines, and preferences.',
    linkText: 'Holistic Assessments →',
    iconType: 'clipboard',
    badge: null,
  },
  {
    id: 'carers',
    title: 'Compassionate Carers',
    description:
      'Our trained and DBS-checked care professionals provide reliable support with kindness, dignity, and respect.',
    linkText: 'Rigorous DBS Checks →',
    iconType: 'heart',
    badge: '100% Enhanced DBS Vetted',
    highlighted: true,
  },
  {
    id: 'local',
    title: 'Local Support',
    description:
      'Receive responsive, consistent care from a team committed to supporting individuals and families in their local community.',
    linkText: 'Leicestershire Based →',
    iconType: 'map',
    badge: null,
  },
] as const

export const STITCH_SERVICES = [
  {
    id: 'specialised',
    title: 'Specialised Care',
    scopeBadge: 'From 30-min visits',
    description:
      'Personalised support tailored to individual circumstances, preferences, and clinical care requirements.',
    imageSrc: '/services/specialized-care.jpg',
    imageAlt: 'Compassionate carer supporting an elderly gentleman with mobility in a comfortable living room',
  },
  {
    id: 'companionship-daily-living',
    title: 'Companionship & Daily Living',
    scopeBadge: 'Social outings & meal prep',
    description:
      'Dependable assistance with everyday activities, independence, warm conversation, and personal wellbeing.',
    imageSrc: '/services/support-workers.jpg',
    imageAlt: 'Friendly support worker sharing tea and conversation with an elderly lady in a warm kitchen',
  },
  {
    id: 'advanced-care',
    title: 'Advanced Care',
    scopeBadge: 'Dementia & clinical oversight',
    description:
      'Individualised support for people with more complex care needs, delivered with dignity and compassion.',
    imageSrc: '/services/advanced-care.jpg',
    imageAlt: 'Attentive carer holding hands warmly with an elderly client in a comfortable home armchair',
  },
  {
    id: 'registered-nurses',
    title: 'Registered Nurses',
    scopeBadge: 'Medication & wound management',
    description:
      'Professional nursing support at home, helping individuals receive appropriate care in familiar surroundings.',
    imageSrc: '/services/registered-nurses.jpg',
    imageAlt: 'Qualified registered nurse in uniform reviewing clinical medication with an elderly client at home',
  },
] as const

export const CARE_PATHWAY_STEPS = [
  {
    step: '1',
    title: 'Free Initial Consultation',
    description:
      'A friendly conversation to discuss your loved one’s personal routine, requirements, and family preferences.',
  },
  {
    step: '2',
    title: 'In-Home Care Assessment',
    description:
      'Our senior care coordinator visits your home in Leicestershire to conduct a full safety and wellbeing review.',
  },
  {
    step: '3',
    title: 'Carer Matching & Introduction',
    description:
      'We introduce a dedicated, DBS-vetted carer selected specifically for compatible personality and clinical needs.',
  },
] as const

export const STATS = [
  { value: '100%', label: 'Enhanced DBS & Reference Vetted Carers' },
  { value: '15-Min', label: 'Average Out-of-Hours Emergency Response' },
  { value: '4.9 / 5', label: 'Verified Family Satisfaction Rating' },
] as const

export const STITCH_TESTIMONIALS = [
  {
    id: '1',
    initials: 'FK',
    author: 'Frankie K.',
    role: 'Daughter of client, Oadby',
    quote:
      'The carers from Oadby Care have brought such relief and warmth to our family. My father looks forward to their visits every morning.',
    rating: 5,
  },
  {
    id: '2',
    initials: 'DJ',
    author: 'Doris J.',
    role: 'Home Care Client, Wigston',
    quote:
      'Gentle, respectful, and always punctual. Having consistent care at home has allowed me to retain my independence in the house I love.',
    rating: 5,
  },
  {
    id: '3',
    initials: 'CR',
    author: 'Claire R.',
    role: 'Daughter & Primary Carer, Stoneygate',
    quote:
      "A truly compassionate approach from initial assessment to ongoing support. We couldn't ask for a more attentive team.",
    rating: 5,
  },
] as const

export const BLOG_ARTICLES = [
  {
    id: '1',
    tag: 'Clinical Care',
    date: '12 May 2026',
    title: 'The Role of Registered Nurses in Home Care',
    excerpt:
      'Understanding how clinical at-home support bridges hospital discharge and daily domestic independence.',
  },
  {
    id: '2',
    tag: 'Daily Living',
    date: '28 Apr 2026',
    title: 'The Importance of Healthcare Assistance at Home',
    excerpt:
      'How daily visiting carers provide crucial companionship, nutrition, and routine management.',
  },
  {
    id: '3',
    tag: 'Family Guides',
    date: '15 Apr 2026',
    title: 'Practical Advice for Choosing Home Care',
    excerpt:
      'Essential questions to ask when selecting domiciliary care for an ageing loved one.',
  },
] as const
