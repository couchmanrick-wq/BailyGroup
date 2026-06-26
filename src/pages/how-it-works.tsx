import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

const steps = [
  {
    title: 'Tell us what you’re after',
    text: 'Share your budget, your must-haves, and how you’ll use the vehicle. Personal or commercial, new or used — we start by understanding exactly what the right vehicle looks like for you.',
  },
  {
    title: 'We source the right vehicle',
    text: 'Using our fleet relationships with every domestic manufacturer and a network of premium dealers, we track down the best matches — including hard-to-find makes, models, and trims.',
  },
  {
    title: 'We negotiate on your behalf',
    text: 'No showroom pressure and no back-and-forth. We use real market knowledge to negotiate the price and terms, so you get a fair deal without spending your weekends at dealerships.',
  },
  {
    title: 'Financing and paperwork, handled',
    text: 'We line up straightforward financing or a lease structure that fits your budget — or your business — and take care of the paperwork so there are no surprises at signing.',
  },
  {
    title: 'Delivery, keys in hand',
    text: 'We walk you all the way to the finish line and hand over a vehicle you’re confident in. And we’re still here for the questions that come up down the road.',
  },
]

const reasons = [
  {
    title: 'Less time, less stress',
    text: 'You skip the lots, the haggling, and the hours of research. We do the legwork and bring you the vehicle.',
  },
  {
    title: 'Honest, market-based pricing',
    text: 'Real market knowledge on every deal means you understand exactly what you’re paying and why it’s fair.',
  },
  {
    title: 'Built for people and businesses',
    text: 'From a first car to a growing commercial fleet of trucks and vans, the process scales to fit how you operate.',
  },
]

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How The Baily Group helps you buy or lease a vehicle',
  description:
    'The step-by-step process The Baily Group uses to help individuals and businesses in Southwestern Ontario buy, lease, finance, and source vehicles.',
  totalTime: 'P7D',
  step: steps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.title,
    text: step.text,
  })),
}

const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoDealer',
  name: 'The Baily Group',
  description:
    'Vehicle buying, leasing, financing, and sourcing concierge led by Lawrence Baily, based in Guelph and serving Kitchener, Waterloo, Cambridge, Guelph, and southwestern Ontario.',
  founder: 'Lawrence Baily',
  email: 'lawrence@bailygroup.com',
  telephone: '+1-519-803-3330',
  url: 'https://bailygroup.pages.dev/how-it-works',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Guelph',
    addressRegion: 'ON',
    addressCountry: 'CA',
  },
  areaServed: [
    { '@type': 'City', name: 'Guelph' },
    { '@type': 'City', name: 'Kitchener' },
    { '@type': 'City', name: 'Waterloo' },
    { '@type': 'City', name: 'Cambridge' },
    { '@type': 'AdministrativeArea', name: 'Southwestern Ontario, Canada' },
  ],
  sameAs: ['https://www.linkedin.com/in/lawrencebaily/'],
}

export default function HowItWorks() {
  return (
    <Layout
      title="How It Works — The Baily Group | Vehicle Buying & Leasing in Kitchener, Waterloo, Cambridge & Guelph"
      description="How The Baily Group works: a simple 5-step process to buy, lease, finance, or source the right vehicle in Kitchener, Waterloo, Cambridge, Guelph, and southwestern Ontario — no dealership hassle. Led by Lawrence Baily of Guelph."
    >
      <Head>
        <link rel="canonical" href="https://bailygroup.pages.dev/how-it-works" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
      </Head>

      <section className={styles.section}>
        <h1 className={styles.title}>How It Works</h1>
        <p className={styles.leadAnswer}>
          The Baily Group makes buying or leasing a vehicle simple: you tell Lawrence Baily what you
          need, we source and negotiate the right vehicle through our dealer and manufacturer fleet
          relationships, handle the financing and paperwork, and deliver it to you — all without the
          dealership runaround. Based in Guelph, the service covers personal and commercial vehicles
          across Kitchener, Waterloo, Cambridge, Guelph, and southwestern Ontario.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>The process, step by step</h2>
        <p className={styles.sectionText}>
          Five clear stages take you from &ldquo;I need a vehicle&rdquo; to driving away with
          confidence.
        </p>
        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.stepNumber}>{index + 1}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Why this approach works</h2>
        <div className={`${styles.grid} ${styles.services}`}>
          {reasons.map((reason) => (
            <article key={reason.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{reason.title}</h3>
              <p className={styles.cardText}>{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Local expertise across Kitchener, Waterloo, Cambridge &amp; Guelph</h2>
        <p className={styles.sectionText}>
          Lawrence Baily is based in Guelph, Ontario, and serves individuals and businesses across
          much of southwestern Ontario — including Kitchener, Waterloo, Cambridge, and Guelph. That
          local market knowledge means better sourcing, sharper negotiation, and a vehicle that fits
          both your life and the way people actually drive here.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.story}>
          <span className={styles.storyEyebrow}>Ready to start?</span>
          <p className={styles.storyQuote}>
            Tell us what you&apos;re looking for and we&apos;ll handle the rest.
          </p>
          <div className={styles.ctaGroup} style={{ marginTop: '1.5rem' }}>
            <a href="/#contact" className={styles.buttonPrimary}>
              Get started
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
