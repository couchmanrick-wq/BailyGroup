import Layout from '../components/Layout'
import { SITE_URL, personSchema } from '../lib/seo'
import styles from '../styles/Home.module.css'

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${SITE_URL}/about#aboutpage`,
  name: 'About The Baily Group',
  url: `${SITE_URL}/about`,
  about: { '@id': `${SITE_URL}/#organization` },
  mainEntity: { '@id': `${SITE_URL}/#lawrence` },
}

export const config = {
  unstable_runtimeJS: false,
}

export default function About() {
  return (
    <Layout
      title="About The Baily Group | Car Buying Consultant in Guelph"
      description="Meet Lawrence Baily and The Baily Group, a Guelph-based car buying consultant and auto buying service for Kitchener, Waterloo, Cambridge, Guelph, and southwestern Ontario."
      path="/about"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
      ]}
      schema={[aboutPageSchema, personSchema]}
    >
      <section className={styles.section}>
        <h1 className={styles.title}>About The Baily Group</h1>
        <p className={styles.subtitle}>
          Led by Lawrence Baily, The Baily Group is a Guelph-based car buying consultant helping individuals and businesses across Kitchener, Waterloo, Cambridge, Guelph, and southwestern Ontario buy, lease, finance, and source vehicles. We bring straightforward advice, dealer negotiation, and real market knowledge to every deal, so you get the right vehicle at the right price.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.aboutGrid}>
          <img
            src="/images/lawrence-baily.webp"
            alt="Lawrence Baily, founder of The Baily Group"
            className={styles.aboutImage}
            width={600}
            height={600}
            loading="lazy"
          />
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Who I work with</h2>
            <p className={styles.cardText}>
              I work with people who are tired of dealerships, who don&apos;t have the time, or who want a trusted auto buying service to handle the search and negotiation. I also work with local businesses to structure leases for their commercial operations — so the trucks and vans you rely on are working as hard for your company as you do.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.aboutGrid}>
          <img
            src="/images/lawrence-sold-vehicle-1.webp"
            alt="Recently sold vehicle handled by Lawrence Baily"
            className={styles.aboutImageFull}
            width={1200}
            height={900}
            loading="lazy"
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.story}>
          <span className={styles.storyEyebrow}>A recent win</span>
          <p className={styles.storyQuote}>
            &ldquo;A client&apos;s vehicle was stolen and they suddenly needed a family hauler. We lowered the anxiety, honed in on the right vehicle, set up the test drive, and walked them all the way to the finish line.&rdquo;
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>How we work</h2>
        <div className={`${styles.grid} ${styles.services}`}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>No dealership runaround</h3>
            <p className={styles.cardText}>
              You skip the showroom pressure. We do the searching, negotiating, and paperwork, then bring you the vehicle.
            </p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Honest, market-based advice</h3>
            <p className={styles.cardText}>
              Real market knowledge on every deal, so you understand exactly what you&apos;re getting and what it should cost.
            </p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Built for businesses too</h3>
            <p className={styles.cardText}>
              From a first car to a growing commercial fleet, we structure leases and purchases that fit how you operate.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.valuesHead}>
          <div>
            <span className={styles.valuesEyebrow}>What we stand for</span>
            <h2 className={styles.valuesHeading}>Driven by values, built on trust</h2>
          </div>
          <p className={styles.valuesIntro}>
            At The Baily Group, our values shape every deal. We are not here to push cars - we are here to change how people across Guelph, Kitchener, Waterloo, and Cambridge use a car buying concierge service to buy, lease, finance, and source vehicles. From personal guidance to honest, transparent pricing, our work is rooted in trust, convenience, and doing right by every client.
          </p>
        </div>

        <div className={styles.valuesGrid}>
          <article className={styles.valueItem}>
            <svg className={styles.valueIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
              <rect x="9" y="3" width="6" height="4" rx="1" />
              <path d="m9 14 2 2 4-4" />
            </svg>
            <h3 className={styles.valueTitle}>Transparency</h3>
            <p className={styles.valueText}>
              Upfront, honest communication from the first conversation to the final signature. No hidden fees and no surprises — just clear answers at every step.
            </p>
          </article>

          <article className={styles.valueItem}>
            <svg className={styles.valueIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="8" r="6" />
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
            </svg>
            <h3 className={styles.valueTitle}>Concierge care</h3>
            <p className={styles.valueText}>
              Whether you need new and used car buying help or support sourcing a hard-to-find build, you get personal attention, tailored recommendations, and support that goes the extra mile.
            </p>
          </article>

          <article className={styles.valueItem}>
            <svg className={styles.valueIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <h3 className={styles.valueTitle}>Efficiency</h3>
            <p className={styles.valueText}>
              We streamline the entire car buying, lease negotiation, and financing process so you spend less time at dealerships and more time on the road. Fast replies, smooth deals, done right the first time.
            </p>
          </article>

          <article className={styles.valueItem}>
            <svg className={styles.valueIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <h3 className={styles.valueTitle}>Community first</h3>
            <p className={styles.valueText}>
              We are proud to serve southwestern Ontario. When you work with The Baily Group, you support a local Guelph business invested in its neighbours across Kitchener, Waterloo, and Cambridge.
            </p>
          </article>
        </div>
      </section>
    </Layout>
  )
}
