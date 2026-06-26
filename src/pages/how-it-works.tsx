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
  name: 'How The Baily Group car buying concierge service helps you buy or lease a vehicle',
  description:
    'The step-by-step process The Baily Group uses as a car buying concierge service to help individuals and businesses in Kitchener, Waterloo, Cambridge, Guelph, and southwestern Ontario buy, lease, finance, and source vehicles.',
  totalTime: 'P7D',
  step: steps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.title,
    text: step.text,
  })),
}

export const config = {
  unstable_runtimeJS: false,
}

export default function HowItWorks() {
  return (
    <Layout
      title="How Our Car Buying Concierge Service Works | The Baily Group"
      description="How The Baily Group car buying concierge service works: sourcing, dealer negotiation, lease or finance guidance, paperwork, and delivery in Kitchener, Waterloo, Cambridge, and Guelph."
      path="/how-it-works"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'How It Works', href: '/how-it-works' },
      ]}
      schema={[howToJsonLd]}
    >
      <section className={styles.section}>
        <h1 className={styles.title}>How Our Car Buying Concierge Service Works</h1>
        <p className={styles.leadAnswer}>
          The Baily Group makes buying or leasing a vehicle simple: you tell Lawrence Baily what you need, and our car buying concierge service sources the right vehicle, handles dealer negotiation through trusted manufacturer and dealer relationships, manages financing or lease paperwork, and delivers it to you without the dealership runaround. Based in Guelph, the service covers personal and commercial vehicles
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
        <span className={styles.diffEyebrow}>We don&apos;t just sell vehicles — we deliver an experience.</span>
        <h2 className={styles.diffHeading}>What makes us different</h2>
        <div className={styles.diffGrid}>
          <article className={styles.diffItem}>
            <span className={styles.diffIconWrap}>
              <svg className={styles.diffIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
                <circle cx="6.5" cy="16.5" r="2.5" />
                <circle cx="16.5" cy="16.5" r="2.5" />
              </svg>
            </span>
            <h3 className={styles.diffTitle}>Personal concierge</h3>
            <p className={styles.diffText}>
              Your own car buying consultant who handles it all: sourcing, negotiating, and scheduling. One point of contact, zero dealership hassle, from the first call to keys in hand.
            </p>
          </article>

          <article className={styles.diffItem}>
            <span className={styles.diffIconWrap}>
              <svg className={styles.diffIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="7.5" cy="15.5" r="5.5" />
                <path d="m21 2-9.6 9.6" />
                <path d="m15.5 7.5 3 3L22 7l-3-3" />
              </svg>
            </span>
            <h3 className={styles.diffTitle}>Private test drives</h3>
            <p className={styles.diffText}>
              Skip the showroom. We bring the vehicle to you anywhere in Guelph, Kitchener, Waterloo, or Cambridge for a relaxed, no-pressure test drive on your schedule.
            </p>
          </article>

          <article className={styles.diffItem}>
            <span className={styles.diffIconWrap}>
              <svg className={styles.diffIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </span>
            <h3 className={styles.diffTitle}>Business fleet programs</h3>
            <p className={styles.diffText}>
              Custom-built solutions for entrepreneurs, realtors, and business owners who need more than one vehicle — and a partner who understands how their company actually runs.
            </p>
          </article>

          <article className={styles.diffItem}>
            <span className={styles.diffIconWrap}>
              <svg className={styles.diffIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                <path d="M15 18H9" />
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                <circle cx="17" cy="18" r="2" />
                <circle cx="7" cy="18" r="2" />
              </svg>
            </span>
            <h3 className={styles.diffTitle}>White-glove delivery</h3>
            <p className={styles.diffText}>
              We deliver your vehicle straight to your door across southwestern Ontario — cleaned, detailed, and ready to drive — because your time and convenience matter.
            </p>
          </article>

          <article className={styles.diffItem}>
            <span className={styles.diffIconWrap}>
              <svg className={styles.diffIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
              </svg>
            </span>
            <h3 className={styles.diffTitle}>Transparent financing guidance</h3>
            <p className={styles.diffText}>
              No fine print and no fast talk. We break down your financing and car lease negotiation options in plain language, so the numbers genuinely make sense for your situation.
            </p>
          </article>

          <article className={styles.diffItem}>
            <span className={styles.diffIconWrap}>
              <svg className={styles.diffIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m17 2 4 4-4 4" />
                <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
                <path d="m7 22-4-4 4-4" />
                <path d="M21 13v1a4 4 0 0 1-4 4H3" />
              </svg>
            </span>
            <h3 className={styles.diffTitle}>Sell or trade seamlessly</h3>
            <p className={styles.diffText}>
              Selling or trading in your current vehicle should be simple. We make it fast, fair, and pressure-free — with no obligation to buy.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Local expertise across Kitchener, Waterloo, Cambridge &amp; Guelph</h2>
        <p className={styles.sectionText}>
          Lawrence Baily is based in Guelph, Ontario, and serves individuals and businesses across
          much of southwestern Ontario — including Kitchener, Waterloo, Cambridge, and Guelph. That local market knowledge means better sourcing, sharper dealership negotiation, and a vehicle that fits
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
