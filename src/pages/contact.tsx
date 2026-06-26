import { useState, type FormEvent } from 'react'
import Layout from '../components/Layout'
import { SITE_URL } from '../lib/seo'
import styles from '../styles/Home.module.css'

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${SITE_URL}/contact#contactpage`,
  name: 'Contact The Baily Group',
  url: `${SITE_URL}/contact`,
  about: { '@id': `${SITE_URL}/#organization` },
}

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const payload = Object.fromEntries(new FormData(form).entries())

    setStatus('sending')
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <Layout
      title="Contact — The Baily Group"
      description="Get in touch with Lawrence Baily and The Baily Group for vehicle buying, leasing, financing, and sourcing across Kitchener, Waterloo, Cambridge, Guelph, and southwestern Ontario."
      path="/contact"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Contact', href: '/contact' },
      ]}
      schema={[contactPageSchema]}
    >
      <section className={styles.section}>
        <h1 className={styles.title}>Contact</h1>
        <p className={styles.subtitle}>
          Tell us what you&apos;re looking for and we&apos;ll help you find it. Fill out the form below, or reach Lawrence directly by phone or email.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.contactGrid}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.formRow}>
              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="name">
                  Name
                </label>
                <input className={styles.formInput} id="name" name="name" type="text" autoComplete="name" required />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="phone">
                  Phone (optional)
                </label>
                <input className={styles.formInput} id="phone" name="phone" type="tel" autoComplete="tel" />
              </div>
            </div>

            <div className={styles.formField}>
              <label className={styles.formLabel} htmlFor="email">
                Email
              </label>
              <input className={styles.formInput} id="email" name="email" type="email" autoComplete="email" required />
            </div>

            <div className={styles.formField}>
              <label className={styles.formLabel} htmlFor="message">
                How can we help?
              </label>
              <textarea
                className={styles.formTextarea}
                id="message"
                name="message"
                required
                placeholder="Tell us about the vehicle you're after, your timeline, and your budget."
              />
            </div>

            {status === 'success' && (
              <p className={`${styles.formStatus} ${styles.formStatusSuccess}`} role="status">
                Thanks — your message is on its way. Lawrence will be in touch shortly.
              </p>
            )}
            {status === 'error' && (
              <p className={`${styles.formStatus} ${styles.formStatusError}`} role="alert">
                {error}
              </p>
            )}

            <button className={styles.formButton} type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
          </form>

          <div className={styles.contactDetails}>
            <div className={styles.contactDetail}>
              <svg className={styles.contactDetailIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div>
                <span className={styles.contactDetailLabel}>Phone</span>
                <a href="tel:+15198033330" className={styles.contactLink}>519.803.3330</a>
              </div>
            </div>

            <div className={styles.contactDetail}>
              <svg className={styles.contactDetailIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              <div>
                <span className={styles.contactDetailLabel}>Email</span>
                <a href="mailto:lawrence@bailygroup.com" className={styles.contactLink}>lawrence@bailygroup.com</a>
              </div>
            </div>

            <div className={styles.contactDetail}>
              <svg className={styles.contactDetailIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <span className={styles.contactDetailLabel}>Service area</span>
                Guelph, Kitchener, Waterloo, Cambridge &amp; southwestern Ontario
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
