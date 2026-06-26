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

const vehicleUses = ['Daily Driver', 'Weekend Cruiser', 'Business Related']
const purchaseTimelines = ['Immediately', 'Within 1 month', 'Within 3 months', 'Just exploring options']

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get('name') || ''),
      phone: String(formData.get('phone') || ''),
      email: String(formData.get('email') || ''),
      budget: String(formData.get('budget') || ''),
      vehicleDetails: String(formData.get('vehicleDetails') || ''),
      vehicleUse: formData.getAll('vehicleUse').map(String),
      timeline: formData.getAll('timeline').map(String),
      message: String(formData.get('message') || ''),
    }

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
      title="Contact The Baily Group | Car Buying Concierge Service"
      description="Contact The Baily Group for car buying concierge service, auto buying help, dealer negotiation, lease negotiation, financing, and vehicle sourcing across Kitchener, Waterloo, Cambridge, and Guelph."
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
          Tell us what you&apos;re looking for and our car buying concierge service will help you find it. Fill out the form below, or reach Lawrence directly by phone or email.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.contactGrid}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.formRow}>
              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="name">
                  Full Name
                </label>
                <input className={styles.formInput} id="name" name="name" type="text" autoComplete="name" placeholder="John Doe" required />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="phone">
                  Phone Number
                </label>
                <input className={styles.formInput} id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+1 234 5789" />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="email">
                  Email Address
                </label>
                <input className={styles.formInput} id="email" name="email" type="email" autoComplete="email" placeholder="hello@gmail.com" required />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="budget">
                  Budget Range
                </label>
                <select className={styles.formSelect} id="budget" name="budget" defaultValue="Under $30,000">
                  <option value="Under $30,000">Under $30,000</option>
                  <option value="$30,000-$60,000">$30,000 to $60,000</option>
                  <option value="$60,000-$100,000">$60,000 to $100,000</option>
                  <option value="$200,000+">$200,000+</option>
                  <option value="Not Sure Yet">Not Sure Yet</option>
                </select>
              </div>
            </div>

            <div className={`${styles.formField} ${styles.formFull}`}>
              <label className={styles.formLabel} htmlFor="vehicleDetails">
                Preferred Vehicle Details
              </label>
              <textarea
                className={`${styles.formTextarea} ${styles.formTextareaCompact}`}
                id="vehicleDetails"
                name="vehicleDetails"
                placeholder="What make/model/year or style of car are you looking for?"
              />
            </div>

            <div className={styles.formOptionsGrid}>
              <fieldset className={styles.formFieldset}>
                <legend className={styles.formLegend}>What will you use this vehicle for?</legend>
                <div className={styles.formChoiceList}>
                  {vehicleUses.map((use) => (
                    <label className={styles.formChoice} key={use}>
                      <input type="checkbox" name="vehicleUse" value={use} />
                      <span>{use}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className={styles.formFieldset}>
                <legend className={styles.formLegend}>How soon are you looking to purchase?</legend>
                <div className={styles.formChoiceList}>
                  {purchaseTimelines.map((timeline) => (
                    <label className={styles.formChoice} key={timeline}>
                      <input type="checkbox" name="timeline" value={timeline} />
                      <span>{timeline}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            <div className={`${styles.formField} ${styles.formFull}`}>
              <label className={styles.formLabel} htmlFor="message">
                Additional Notes / Must-Have Features
              </label>
              <textarea
                className={styles.formTextarea}
                id="message"
                name="message"
                required
                placeholder="Anything else we should know? (Color, trim, mileage cap, etc.)"
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
              {status === 'sending' ? 'Sending...' : 'Submit My Vehicle Wishlist'}
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
                <a href="mailto:lawrence@bailygrp.com" className={styles.contactLink}>lawrence@bailygrp.com</a>
              </div>
            </div>

            <div className={styles.contactDetail}>
              <svg className={styles.contactDetailIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <span className={styles.contactDetailLabel}>Service area</span>
                Car buying concierge service across Guelph, Kitchener, Waterloo, Cambridge &amp; southwestern Ontario
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
