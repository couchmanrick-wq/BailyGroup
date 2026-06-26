import Layout from '../components/Layout'
import { offerCatalogSchema } from '../lib/seo'
import styles from '../styles/Home.module.css'

const services = [
  {
    title: 'Buy',
    description: 'New and used car buying help from search to delivery: we source the right vehicle, negotiate the price, and handle the details.',
  },
  {
    title: 'Lease',
    description: 'Car lease negotiation service with competitive terms and clear paperwork, matched to your budget, kilometres, and business needs.',
  },
  {
    title: 'Finance',
    description: 'Straightforward financing guidance to get you approved and into your vehicle without the runaround.',
  },
  {
    title: 'Source',
    description: 'Looking for something specific? Our auto buying service tracks down the right vehicle, including hard-to-find makes, models, and trims.',
  },
]

export const config = {
  unstable_runtimeJS: false,
}

export default function Home() {
  return (
    <Layout
      title="Car Buying Concierge Service in Kitchener, Waterloo, Cambridge & Guelph | The Baily Group"
      description="The Baily Group is a car buying concierge service and auto buying consultant helping drivers and businesses in Kitchener, Waterloo, Cambridge, and Guelph buy, lease, finance, and source vehicles."
      path="/"
      breadcrumbs={[{ name: 'Home', href: '/' }]}
      schema={[offerCatalogSchema(services)]}
    >
      <section className={styles.heroDark}>
        <div className={styles.heroDarkGrid}>
          <div className={styles.heroDarkContent}>
            <span className={styles.heroEyebrow}>Expert. Reliable. Concierge service.</span>
            <h1 className={styles.heroDarkTitle}>Car buying concierge service for Kitchener, Waterloo, Cambridge, Guelph and beyond.</h1>
            <p className={styles.heroTagline}>Most people don&apos;t need a vehicle, they need a solution.</p>
            <p className={styles.heroDarkSubtitle}>
              Buy. Lease. Finance. Source. Lawrence Baily and The Baily Group get you the right personal or commercial vehicle with expert car dealership negotiation and no wasted weekends.
            </p>
            <a href="#contact" className={styles.heroDarkButton}>
              Get started
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className={styles.heroDarkMedia}>
            <img
              src="/images/lawrence-baily2.webp"
              alt="Lawrence Baily of The Baily Group"
              width={600}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <div className={styles.heroCards}>
        <div className={`${styles.heroCard} ${styles.heroCardDark}`}>
          <div className={styles.heroCardHead}>
            <svg className={styles.heroCardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
              <path d="M8 13h8" />
              <path d="M8 17h8" />
              <path d="M8 9h2" />
            </svg>
            <h2 className={styles.heroCardTitle}>Expert Guidance</h2>
          </div>
          <p className={styles.heroCardText}>
            Real market knowledge on every deal, so you find the right vehicle at the right price with ease.
          </p>
        </div>
        <div className={`${styles.heroCard} ${styles.heroCardLight}`}>
          <div className={styles.heroCardHead}>
            <svg className={styles.heroCardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 10v12" />
              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88z" />
            </svg>
            <h2 className={styles.heroCardTitle}>Premium Service</h2>
          </div>
          <p className={styles.heroCardText}>
            Personalized, end-to-end handling of the search, negotiation, and paperwork for a seamless experience.
          </p>
        </div>
      </div>

      <section id="services" className={styles.section}>
        <h2 className={styles.sectionTitle}>How we can help</h2>
        <p className={styles.sectionText}>
          Whether you need a personal vehicle or a commercial fleet, our auto buying service handles the search, dealership negotiation, lease or finance details, and paperwork so you can drive away with confidence.
        </p>
        <div className={`${styles.grid} ${styles.services}`}>
          {services.map((service) => (
            <article key={service.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardText}>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.whyGrid}>
          <div>
            <h2 className={styles.whyHeading}>Why busy people hand us the keys</h2>
            <p className={styles.whyText}>
              Between work, family, and everything in between, nobody has a weekend to lose at dealerships. We take the entire vehicle hunt off your plate — sourcing, financing, test drives, and delivery — and hand back the hours you would rather spend elsewhere.
            </p>
            <p className={styles.whyText}>
              Whether you are a working professional, a growing family, or a business running vehicles across Kitchener, Waterloo, Cambridge, and Guelph, you get the right vehicle without the friction.
            </p>
            <p className={styles.whyLead}>Here is what working with The Baily Group actually feels like:</p>
            <ul className={styles.whyList}>
              {[
                'Hours back in your week',
                'Straight talk, never a sales pitch',
                'Matched to how you actually drive',
                'One trusted point of contact, start to finish',
              ].map((item) => (
                <li key={item} className={styles.whyItem}>
                  <svg className={styles.whyCheck} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m8 12 2.5 2.5L16 9" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <img
            src="/images/about-car.jpg"
            alt="A collection of premium vehicles"
            className={styles.whyImage}
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.fitGrid}>
          <div className={styles.fitMedia}>
            <img
              src="/images/hero-car.jpg"
              alt="A premium vehicle on the open road"
              className={styles.fitImage}
              loading="lazy"
              decoding="async"
            />
            <p className={styles.fitCaption}>The vehicle-buying experience you deserve</p>
          </div>
          <div>
            <h2 className={styles.fitHeading}>Is a car buying concierge right for you?</h2>
            <p className={styles.fitText}>
              The Baily Group is a personal car buying consultant for people across Kitchener, Waterloo, Cambridge, and Guelph who would rather not lose a weekend to dealerships. If any of these sound like you, it is probably a great fit:
            </p>
            <ul className={styles.whyList}>
              {[
                'You would rather skip the dealership back-and-forth',
                'You run a business or have a packed schedule',
                'You value your time and straight answers',
                'You are buying your first car — or your next upgrade',
                'You want one trusted person to handle the legwork',
              ].map((item) => (
                <li key={item} className={styles.whyItem}>
                  <svg className={styles.whyCheck} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m8 12 2.5 2.5L16 9" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a href="/services" className={`${styles.heroDarkButton} ${styles.fitButton}`}>
              Our Services
            </a>
          </div>
        </div>
      </section>

      <section id="about" className={styles.section}>
        <h2 className={styles.sectionTitle}>Meet Lawrence Baily</h2>
        <p className={styles.sectionText}>
          The Baily Group is a personal car buying concierge service - not a dealership. Lawrence does the searching, dealership negotiation, and paperwork for individuals and businesses across Kitchener, Waterloo, Cambridge, and Guelph, then delivers the right vehicle to your door.
        </p>
        <div className={styles.aboutGrid}>
          <img
            src="/images/lawrence-baily.webp"
            alt="Lawrence Baily, founder of The Baily Group"
            className={styles.aboutImage}
            width={600}
            height={600}
            loading="lazy"
            decoding="async"
          />
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>A better way to buy a vehicle</h3>
            <p className={styles.cardText}>
              No showroom pressure and no wasted weekends — just honest, market-based advice and one trusted point of contact from the first call to delivery.
            </p>
            <a href="/about" className={styles.aboutLink}>More about The Baily Group →</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
