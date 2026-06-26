import Layout from '../components/Layout'
import { offerCatalogSchema } from '../lib/seo'
import styles from '../styles/Home.module.css'

const services = [
  {
    title: 'Buy',
    description: 'From a daily commuter to a weekend dream car, we find the vehicle that fits, confirm it is priced fairly against the market, and manage every step through to the day you drive it home — no lots, no pressure, no wasted Saturdays.',
  },
  {
    title: 'Lease',
    description: 'We compare lease programs across manufacturers to land terms that make sense for your kilometres, your timeline, and your cash flow, then explain the fine print in plain English before you ever sign.',
  },
  {
    title: 'Finance',
    description: 'Getting approved should not feel like a fight. We line up financing that fits your budget and credit, walk you through the real numbers, and make sure the monthly payment is one you are genuinely comfortable with.',
  },
  {
    title: 'Source',
    description: 'Have a specific build in mind? We use our dealer and manufacturer network to hunt down exact makes, models, trims, and colours — including allocation-only and hard-to-find vehicles — and bring them to you.',
  },
]

export default function Services() {
  return (
    <Layout
      title="Services — The Baily Group"
      description="Buy, lease, finance, and source vehicles with The Baily Group. Personal and commercial vehicle services across Southwestern Ontario."
      path="/services"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
      ]}
      schema={[offerCatalogSchema(services)]}
    >
      <section className={styles.section}>
        <h1 className={styles.title}>Services</h1>
        <p className={styles.subtitle}>
          Every Baily Group service runs on one idea: you tell us what you need, and we take care of the rest. Here is exactly how we help drivers and businesses across Kitchener, Waterloo, Cambridge, and Guelph get into the right vehicle.
        </p>
      </section>

      <section className={styles.section}>
        <div className={`${styles.grid} ${styles.services}`}>
          {services.map((service) => (
            <article key={service.title} className={styles.card}>
              <h2 className={styles.cardTitle}>{service.title}</h2>
              <p className={styles.cardText}>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>For local businesses</h2>
        <p className={styles.sectionText}>
          Your vehicles need to pull their weight. We structure commercial leases and purchases around how your business actually operates — cash flow, real-world usage, and where you are headed next — whether that is a single work van or a growing fleet of trucks moving across southwestern Ontario.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Fleet relationships</h2>
        <p className={styles.sectionText}>
          Years of dealer and manufacturer relationships mean better access and better pricing — and that advantage gets passed straight to you. We work with every domestic manufacturer, where GM tends to deliver the strongest savings, alongside a roster of premium import dealers.
        </p>
        <ul className={styles.brandList}>
          <li className={styles.brand}>GM</li>
          <li className={styles.brand}>BMW</li>
          <li className={styles.brand}>Porsche</li>
          <li className={styles.brand}>Land Rover</li>
          <li className={styles.brand}>Jaguar</li>
          <li className={styles.brand}>Volvo</li>
          <li className={styles.brand}>Acura</li>
          <li className={styles.brand}>Lexus</li>
        </ul>
      </section>

      <section className={styles.section}>
        <div className={styles.story}>
          <span className={styles.storyEyebrow}>Ready when you are</span>
          <p className={styles.storyQuote}>
            Tell us the vehicle you have in mind — or the problem you need solved — and we&apos;ll take it from there.
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
