import Head from 'next/head'
import styles from '../styles/Home.module.css'

const services = [
  {
    title: 'Buy',
    description: 'We source and secure the right new or used vehicle, negotiate the price, and handle the details from search to delivery.',
  },
  {
    title: 'Lease',
    description: 'Flexible lease options with competitive terms and clear paperwork — matched to your budget, whether for yourself or your business.',
  },
  {
    title: 'Finance',
    description: 'Straightforward financing guidance to get you approved and into your vehicle without the runaround.',
  },
  {
    title: 'Source',
    description: 'Looking for something specific? We track down the right vehicle for you — including hard-to-find makes, models, and trims.',
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>The Baily Group — Vehicle Buying &amp; Leasing in Southwestern Ontario</title>
        <meta
          name="description"
          content="Lawrence Baily and The Baily Group help individuals and businesses buy and lease vehicles across Southwestern Ontario."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.page} container`}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <img
              src="/images/baily-group-logo.webp"
              alt="The Baily Group logo"
              className={styles.logoMark}
              width={44}
              height={44}
            />
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
              <h1 className={styles.title}>If it has four wheels and a license plate, I can help.</h1>
              <p className={styles.subtitle}>
                Buy. Lease. Finance. Source. Lawrence Baily and The Baily Group help individuals and businesses across Southwestern Ontario get the right personal or commercial vehicle — without spending their weekends at dealerships.
              </p>
              <div className={styles.ctaGroup}>
                <a href="#contact" className={styles.buttonPrimary}>
                  Get started
                </a>
                <a href="#services" className={styles.buttonSecondary}>
                  Explore our services
                </a>
              </div>
            </div>
            <div className={styles.heroMedia}>
              <img
                src="/images/hero-car.jpg"
                alt="A vehicle on the open road"
                loading="eager"
              />
            </div>
          </div>
        </section>

        <section id="services" className={styles.section}>
          <h2 className={styles.sectionTitle}>How we can help</h2>
          <p className={styles.sectionText}>
            Whether you are after a personal vehicle or outfitting your business, we handle the search, the negotiation, and the paperwork so you can drive away with confidence.
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
            Led by Lawrence Baily, The Baily Group helps individuals and businesses across Southwestern Ontario buy and lease vehicles. We bring straightforward advice and real market knowledge to every deal, so you get the right vehicle at the right price.
          </p>
          <div className={styles.aboutGrid}>
            <img
              src="/images/about-car.jpg"
              alt="Driver behind the wheel of a vehicle"
              className={styles.aboutImage}
              loading="lazy"
            />
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Your trusted partner on the road</h3>
              <p className={styles.cardText}>
                From a first car to a growing business fleet, we make buying and leasing clear, fair, and stress-free — and we are here for the questions that come up along the way.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className={`${styles.section} ${styles.contactCard}`}>
          <h2 className={styles.sectionTitle}>Get in touch</h2>
          <p className={styles.sectionText}>
            Tell us what you are looking for and we will help you find it. Reach out to start the conversation.
          </p>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Email</span>
            <p className={styles.contactValue}>hello@bailygroup.com</p>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Phone</span>
            <p className={styles.contactValue}>
              <a href="tel:+15198033330" className={styles.contactLink}>519.803.3330</a>
            </p>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Service Area</span>
            <p className={styles.contactValue}>Southwestern Ontario</p>
          </div>
        </section>

        <footer className={styles.footer}>
          © {new Date().getFullYear()} The Baily Group. Vehicle buying &amp; leasing across Southwestern Ontario.
        </footer>
      </main>
    </>
  )
}
