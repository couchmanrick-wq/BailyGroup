import Head from 'next/head'
import styles from '../styles/Home.module.css'

const services = [
  {
    title: 'Market Strategy',
    description: 'Tailored investment and advisory strategies for commercial and residential development across the region.',
  },
  {
    title: 'Property Management',
    description: 'End-to-end asset management, leasing support, and operational efficiency for high-value portfolios.',
  },
  {
    title: 'Development Advisory',
    description: 'Feasibility planning, entitlement guidance, and capital sourcing for transformative projects.',
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>The Baily Group</title>
        <meta
          name="description"
          content="The Baily Group provides strategic advisory, property management, and development services for modern real estate portfolios."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.page} container`}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <span>BG</span>
            The Baily Group
          </div>
          <nav className={styles.nav} aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <h1 className={styles.title}>Real estate advisory built for ambitious portfolio growth.</h1>
              <p className={styles.subtitle}>
                The Baily Group delivers market-savvy strategy, trusted property operations, and development guidance to create value across every stage of your real estate journey.
              </p>
              <div className={styles.ctaGroup}>
                <a href="#contact" className={styles.buttonPrimary}>
                  Schedule a consultation
                </a>
                <a href="#services" className={styles.buttonSecondary}>
                  Explore our services
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className={styles.section}>
          <h2 className={styles.sectionTitle}>Solutions for every asset class</h2>
          <p className={styles.sectionText}>
            From ownership strategy to operational execution, we partner with investors, owners, and developers to unlock long-term value.
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

        <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>About The Baily Group</h2>
          <p className={styles.sectionText}>
            We help organizations shape strategy, manage assets, and execute development plans with clarity and confidence. Our approach blends market intelligence, experienced operations, and disciplined capital planning.
          </p>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Your trusted partner for real estate success</h3>
            <p className={styles.cardText}>
              Whether you are expanding a portfolio, repositioning assets, or planning a new development, The Baily Group provides the insight and execution support to move forward with conviction.
            </p>
          </div>
        </section>

        <section id="contact" className={`${styles.section} ${styles.contactCard}`}>
          <h2 className={styles.sectionTitle}>Get in touch</h2>
          <p className={styles.sectionText}>
            Let’s connect and discuss how we can support your next real estate initiative.
          </p>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Email</span>
            <p className={styles.contactValue}>hello@bailygroup.com</p>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Phone</span>
            <p className={styles.contactValue}>(555) 123-4567</p>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Location</span>
            <p className={styles.contactValue}>San Francisco, CA</p>
          </div>
        </section>

        <footer className={styles.footer}>
          © {new Date().getFullYear()} The Baily Group. Crafted for modern real estate leadership.
        </footer>
      </main>
    </>
  )
}
