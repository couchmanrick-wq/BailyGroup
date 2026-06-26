// Centralized structured-data (JSON-LD) and SEO constants for The Baily Group.

export const SITE_URL = 'https://bailygroup.pages.dev'
export const SITE_NAME = 'The Baily Group'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/about-car.jpg`
export const LINKEDIN_URL = 'https://www.linkedin.com/in/lawrencebaily/'

const areaServed = [
  { '@type': 'City', name: 'Guelph' },
  { '@type': 'City', name: 'Kitchener' },
  { '@type': 'City', name: 'Waterloo' },
  { '@type': 'City', name: 'Cambridge' },
  { '@type': 'AdministrativeArea', name: 'Southwestern Ontario, Canada' },
]

// Primary entity: a local auto buying concierge based in Guelph.
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoDealer',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/baily-group-logo.webp`,
  image: `${SITE_URL}/images/about-car.jpg`,
  description:
    'The Baily Group, led by Lawrence Baily, is a car buying concierge service and auto buying consultant helping individuals and businesses buy, lease, finance, and source vehicles without dealership hassle. Based in Guelph and serving Kitchener, Waterloo, Cambridge, and southwestern Ontario.',
  founder: {
    '@type': 'Person',
    name: 'Lawrence Baily',
    jobTitle: 'Founder',
    sameAs: [LINKEDIN_URL],
  },
  telephone: '+1-519-803-3330',
  email: 'lawrence@bailygrp.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Guelph',
    addressRegion: 'ON',
    addressCountry: 'CA',
  },
  areaServed,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-519-803-3330',
    email: 'lawrence@bailygrp.com',
    contactType: 'sales',
    areaServed: 'CA',
    availableLanguage: ['English'],
  },
  knowsAbout: [
    'Car buying concierge service',
    'Car buying consultant',
    'Auto buying service',
    'Car dealership negotiation service',
    'New and used car buying help',
    'Car lease negotiation service',
    'Auto financing',
    'Vehicle sourcing',
    'Commercial fleet leasing',
  ],
  sameAs: [LINKEDIN_URL],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description:
    'Car buying concierge service, auto buying support, lease negotiation, financing, and vehicle sourcing across Kitchener, Waterloo, Cambridge, Guelph, and southwestern Ontario.',
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-CA',
}

export type Crumb = { name: string; href: string }

export function webPageSchema(opts: {
  path: string
  name: string
  description: string
  hasBreadcrumb: boolean
}) {
  const url = `${SITE_URL}${opts.path}`
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-CA',
    ...(opts.hasBreadcrumb ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}),
  }
}

export function breadcrumbSchema(path: string, crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${SITE_URL}${path}#breadcrumb`,
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.href}`,
    })),
  }
}

export function offerCatalogSchema(items: { title: string; description: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Vehicle services',
    itemListElement: items.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: 'Southwestern Ontario, Canada',
      },
    })),
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#lawrence`,
  name: 'Lawrence Baily',
  jobTitle: 'Founder',
  worksFor: { '@id': `${SITE_URL}/#organization` },
  image: `${SITE_URL}/images/lawrence-baily.webp`,
  url: `${SITE_URL}/about`,
  homeLocation: { '@type': 'Place', name: 'Guelph, Ontario, Canada' },
  sameAs: [LINKEDIN_URL],
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
