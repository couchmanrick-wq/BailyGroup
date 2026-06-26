import Head from 'next/head'
import Link from 'next/link'
import type { ReactNode } from 'react'
import styles from '../styles/Home.module.css'

type LayoutProps = {
  title: string
  description: string
  children: ReactNode
}

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/#contact', label: 'Contact' },
]

export default function Layout({ title, description, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
      <main className={`${styles.page} container`}>
        <header className={styles.header}>
          <Link href="/" className={styles.logo} aria-label="The Baily Group home">
            <img
              src="/images/baily-group-logo.webp"
              alt="The Baily Group"
              className={styles.logoMark}
              width={112}
              height={112}
            />
          </Link>
          <nav className={styles.nav} aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </header>

        {children}

        <footer className={styles.footer}>
          © {new Date().getFullYear()} The Baily Group. Vehicle buying &amp; leasing across Southwestern Ontario.
        </footer>
      </main>
    </>
  )
}
