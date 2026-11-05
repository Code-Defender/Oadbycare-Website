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
  phone: '0116 271 8800',
  phoneHref: 'tel:01162718800',
  displayPhone: '0116 271 8800',
  emergencyPhone: '0800 247 1199',
  emergencyPhoneHref: 'tel:08002471199',
  email: 'info@oadbycare.co.uk',
  emailHref: 'mailto:info@oadbycare.co.uk',
  address: {
    hub: 'Head Operational Hub',
    location: 'Oadby, Leicestershire, UK',
    coverage: 'Serving Oadby, Wigston, Blaby, Great Glen, Stoneygate & South Leicestershire',
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
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBvJ0hfpzBTVZYpk9BUuvD81t0CcIuMBg-ryz3eWAtgUqgONFcPL7FBElB7Hs0zsJ0Zuppgne23oSo5H5fyKr0FG3tmkJ2k8SJYdCZb7MOPmKoDsRREIcA2s2iwT7YwRPsoBqIFhQKpCH-7we73kfsWHPSI75VB5h0wTZUdG26U-Uv7PpPkMyXcmgIx72RUUeU1a0dGw96kUto9ybvuM4GnuuN55Ie1bo9uA8tGj16V',
    imageAlt: 'Elderly man in a wheelchair smiling comfortably at home',
  },
  {
    id: 'companionship-daily-living',
    title: 'Companionship & Daily Living',
    scopeBadge: 'Social outings & meal prep',
    description:
      'Dependable assistance with everyday activities, independence, warm conversation, and personal wellbeing.',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCQatif3d-0KTZbrZHvzTj9D5msGT_pXv7tE1EdIajXzMTnBPXd0zE7uqW5J-RonKs09z_eCHGxcvg6XIuCudDOccZcARiP4MSO34B_Jpp80araR8JWrezSwnq-hJQa5MqqsCyIy-Yy_Mxd3EuwDLXUfj7_lC1yZDIeu1XlD5_LJOyig3RZnph8SlqeorHc_cQEHQXqzMOARnajlozPXxxJaYPh3x9zTT8fQ8NEM3Dv',
    imageAlt: 'A caring support worker helping an older adult prepare healthy food in a bright modern kitchen',
  },
  {
    id: 'advanced-care',
    title: 'Advanced Care',
    scopeBadge: 'Dementia & clinical oversight',
    description:
      'Individualised support for people with more complex care needs, delivered with dignity and compassion.',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCTFNeFiwLwmvL4Fb8c1jtpQH0lvw1TIVfVL6FIboJ-76M7xtV-rRGUeAY614wN8aD27w9z3tclQn9Y8i3lB9xMpUmO1gUkOvtDdYuI17VNuepKK7eOFnycfMVErkNzTtcM8XhhEvr-4e4GnNaYA5PKm6vwy3cIfu07CAYZN6THhH9Mx0xD0NNIblX9pOnY6dhLep1MCIiO5bVDbvZnEwgjyUdG852UvzlUxMHzyb3-',
    imageAlt: 'Advanced Care - Nurse caring for elderly patient in bed',
  },
  {
    id: 'registered-nurses',
    title: 'Registered Nurses',
    scopeBadge: 'Medication & wound management',
    description:
      'Professional nursing support at home, helping individuals receive appropriate care in familiar surroundings.',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBcVtzf0O6PJnF6-1VPUnVs3OLx-eEOkDkSSSrMe_EQjxoUgWD9EwKSC-DMAAnhq_DrvihSFcTtTGMT3MrOfHUGXhVfRB_wuahUMfj25pRN4oXB_Igd2QFK3Q1W36fFPO3yWXRl76vNE1jctfuvo4EeeJ1ZcfKfhZ_w40OZQycHgcrZ79q2y2-k_FMJERt18df_8lZvczPVFOkHHUY4CO93470rn2oZeQID_tjkb2dR',
    imageAlt: 'Warm editorial photo of a nurse in professional medical attire checking notes with client',
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
