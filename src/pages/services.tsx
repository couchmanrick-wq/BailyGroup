import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

const services = [
  {
    title: 'Buy',
    description: 'We source and secure the right new or used vehicle, negotiate the price, and handle the details from search to delivery — so you skip the showroom and the back-and-forth.',
  },
  {
    title: 'Lease',
    description: 'Flexible lease options with competitive terms and clear paperwork, matched to your budget. For businesses, we structure commercial leases that keep your trucks and vans working for your company.',
  },
  {
    title: 'Finance',
    description: 'Straightforward financing guidance to get you approved and into your vehicle without the runaround, with options explained in plain language.',
  },
  {
    title: 'Source',
    description: 'Looking for something specific? We track down the right vehicle for you — including hard-to-find makes, models, and trims — through our dealer network.',
  },
]

export default function Services() {
  return (
    <Layout
      title="Services — The Baily Group"
      description="Buy, lease, finance, and source vehicles with The Baily Group. Personal and commercial vehicle services across Southwestern Ontario."
    >
      <section className={styles.section}>
        <h1 className={styles.title}>Services</h1>
        <p className={styles.subtitle}>
          Whether you are after a personal vehicle or outfitting your business, we handle the search, the negotiation, and the paperwork so you can drive away with confidence.
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
          We work with local businesses to structure leases for their commercial operations. If you run one or more trucks or vans and want to bring your vehicles in-house as you grow, we&apos;ll build a plan that fits how your company actually runs.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Fleet relationships</h2>
        <p className={styles.sectionText}>
          We hold fleet relationships with every domestic manufacturer — GM gives our clients the most competitive advantages — backed by a network of premium dealers we work with directly.
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
            Tell us what you&apos;re looking for and we&apos;ll take it from there.
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
