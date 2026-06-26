import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { ReactNode } from 'react'
import styles from '../styles/Home.module.css'
import {
  DEFAULT_OG_IMAGE,
  JsonLd,
  SITE_NAME,
  SITE_URL,
  breadcrumbSchema,
  organizationSchema,
  webPageSchema,
  websiteSchema,
  type Crumb,
} from '../lib/seo'

type LayoutProps = {
  title: string
  description: string
  /** Route path for canonical URL and structured data, e.g. "/services". */
  path: string
  /** Breadcrumb trail; first item should be Home. */
  breadcrumbs?: Crumb[]
  /** Page-specific JSON-LD objects (FAQPage, HowTo, OfferCatalog, etc.). */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema?: Record<string, any>[]
  /** Plain-text title for OG/structured data (defaults to `title`). */
  ogTitle?: string
  /** Social/OG image URL. */
  ogImage?: string
  children: ReactNode
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/about', label: 'About' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/contact', label: 'Contact' },
]

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/faqs', label: 'FAQs' },
]

export default function Layout({
  title,
  description,
  path,
  breadcrumbs,
  schema,
  ogTitle,
  ogImage = DEFAULT_OG_IMAGE,
  children,
}: LayoutProps) {
  const router = useRouter()

  const canonical = `${SITE_URL}${path}`
  const socialTitle = ogTitle ?? title

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={socialTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={socialTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd
        data={webPageSchema({
          path,
          name: socialTitle,
          description,
          hasBreadcrumb: Boolean(breadcrumbs && breadcrumbs.length > 0),
        })}
      />
      {breadcrumbs && breadcrumbs.length > 0 && (
        <JsonLd data={breadcrumbSchema(path, breadcrumbs)} />
      )}
      {schema?.map((item, index) => (
        <JsonLd key={index} data={item} />
      ))}

      <div className={styles.topBar}>
        <div className={`${styles.topBarInner} container`}>
          <div className={styles.topBarContact}>
            <a href="tel:+15198033330" className={styles.topBarLink}>
              <svg
                className={styles.topBarIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>519.803.3330</span>
            </a>
            <a href="mailto:lawrence@bailygroup.com" className={styles.topBarLink}>
              <svg
                className={styles.topBarIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              <span>lawrence@bailygroup.com</span>
            </a>
          </div>
          <div className={styles.topBarSocial}>
            <a
              href="https://www.facebook.com/p/The-Baily-Group-61585101267711/"
              className={styles.topBarSocialLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="The Baily Group on Facebook"
            >
              <svg
                className={styles.topBarSocialIcon}
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.954.925-1.954 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/lawrencebaily/"
              className={styles.topBarSocialLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="The Baily Group on LinkedIn"
            >
              <svg
                className={styles.topBarSocialIcon}
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.76-1.75 1.76zm13.5 12.27h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96v5.7h-3v-11h2.88v1.5h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v6.47z" />
              </svg>
            </a>
          </div>
        </div>
        </div>
        <div className={styles.headerBar}>
          <header className={`${styles.header} container`}>
            <Link href="/" className={styles.logo} aria-label="The Baily Group home">
              <img
                src="/images/baily-group-logo.webp"
                alt="The Baily Group"
                className={styles.logoMark}
                width={112}
                height={112}
                decoding="async"
              />
            </Link>
            <nav className={styles.nav} aria-label="Primary navigation">
              {navLinks.map((link) => {
                const isActive = !link.href.includes('#') && router.pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={isActive ? styles.navActive : undefined}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
            <div className={styles.mobileMenu}>
              <input
                className={styles.mobileMenuToggle}
                type="checkbox"
                id="mobile-menu-toggle"
                aria-label="Toggle navigation menu"
              />
              <label className={styles.mobileMenuButton} htmlFor="mobile-menu-toggle">
                <span className={styles.mobileMenuLine} />
                <span className={styles.mobileMenuLine} />
                <span className={styles.mobileMenuLine} />
              </label>
              <nav className={styles.mobileNav} aria-label="Mobile navigation">
                {navLinks.map((link) => {
                  const isActive = !link.href.includes('#') && router.pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={isActive ? styles.mobileNavActive : undefined}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </nav>
            </div>
          </header>
        </div>
      <main className={`${styles.page} container`}>
        {children}

        <section className={styles.ctaBand} aria-label="Referral partners welcome">
          <div className={`${styles.ctaBandInner} container`}>
            <div>
              <h2 className={styles.ctaBandTitle}>Referral partners welcome</h2>
              <p className={styles.ctaBandText}>
                Much of our best work comes through trusted partners. If you&apos;re an insurer, realtor, or operations manager with clients who need a vehicle handled the right way, we&apos;d love to work together.
              </p>
            </div>
            <div className={styles.ctaBandButtons}>
              <a href="tel:+15198033330" className={`${styles.ctaButton} ${styles.ctaButtonPhone}`}>
                <svg className={styles.ctaButtonIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call 519.803.3330
              </a>
              <a href="mailto:lawrence@bailygroup.com" className={`${styles.ctaButton} ${styles.ctaButtonEmail}`}>
                <svg className={styles.ctaButtonIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </section>

        <footer id="contact" className={styles.siteFooter}>
          <div className={styles.siteFooterInner}>
            <div className={styles.footerGrid}>
              <div>
                <img
                  src="/images/baily-group-logo.webp"
                  alt="The Baily Group"
                  className={styles.footerBrandLogo}
                  width={96}
                  height={96}
                  loading="lazy"
                  decoding="async"
                />
                <p className={styles.footerBlurb}>
                  The Baily Group: expert car buying concierge service, personalized auto buying help, dealer negotiation, lease guidance, financing, and vehicle sourcing across Kitchener, Waterloo, Cambridge, Guelph, and Southwestern Ontario.
                </p>
              </div>

              <div>
                <h2 className={styles.footerHeading}>Quick Links</h2>
                <ul className={styles.footerLinks}>
                  {footerLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={styles.footerLink}>
                        <svg className={styles.footerLinkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className={styles.footerHeading}>Contact Info</h2>
                <ul className={styles.footerContact}>
                  <li>
                    <a href="tel:+15198033330" className={styles.footerContactItem}>
                      <svg className={styles.footerContactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      519.803.3330
                    </a>
                  </li>
                  <li>
                    <a href="mailto:lawrence@bailygroup.com" className={styles.footerContactItem}>
                      <svg className={styles.footerContactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 6-10 7L2 6" />
                      </svg>
                      lawrence@bailygroup.com
                    </a>
                  </li>
                  <li className={styles.footerContactItem}>
                    <svg className={styles.footerContactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Kitchener, Waterloo, Cambridge, Guelph & Southwestern Ontario
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/p/The-Baily-Group-61585101267711/"
                      className={styles.footerContactItem}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className={styles.footerContactIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.954.925-1.954 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
                      </svg>
                      Connect on Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/lawrencebaily/"
                      className={styles.footerContactItem}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className={styles.footerContactIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.76-1.75 1.76zm13.5 12.27h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96v5.7h-3v-11h2.88v1.5h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v6.47z" />
                      </svg>
                      Connect on LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <hr className={styles.footerDivider} />
            <div className={styles.footerBottom}>
              <p className={styles.footerCopyright}>
                Copyright © {new Date().getFullYear()} The Baily Group. All rights reserved.
              </p>
              <p className={styles.footerCredit}>Design by: Speed River Media</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
