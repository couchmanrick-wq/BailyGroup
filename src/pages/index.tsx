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
      <div className={styles.topBar}>
        <div className={`${styles.topBarInner} container`}>
          <div className={styles.topBarContact}>
            <a href="tel:+15198033330" className={styles.topBarLink}>
              <svg
                className={styles.topBarIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>519.803.3330</span>
            </a>
            <a href="mailto:lawrence@bailygroup.com" className={styles.topBarLink}>
              <svg
                className={styles.topBarIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              <span>lawrence@bailygroup.com</span>
            </a>
          </div>
          <div className={styles.topBarSocial}>
            <a
              href="https://www.linkedin.com/in/lawrencebaily/"
              className={styles.topBarSocialLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="The Baily Group on LinkedIn"
            >
              <svg
                className={styles.topBarSocialIcon}
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.76-1.75 1.76zm13.5 12.27h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96v5.7h-3v-11h2.88v1.5h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v6.47z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <main className={`${styles.page} container`}>
        <header className={styles.header}>
          <a href="#" className={styles.logo} aria-label="The Baily Group home">
            <img
              src="/images/baily-group-logo.webp"
              alt="The Baily Group"
              className={styles.logoMark}
              width={112}
              height={112}
            />
          </a>
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
              src="/images/lawrence-baily.webp"
              alt="Lawrence Baily, founder of The Baily Group"
              className={styles.aboutImage}
              width={600}
              height={600}
              loading="lazy"
            />
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Who I work with</h3>
              <p className={styles.cardText}>
                I work with people who are tired of dealerships, who don&apos;t have the time, or who have been burned in the past. I also work with local businesses to structure leases for their commercial operations — so the trucks and vans you rely on are working as hard for your company as you do.
              </p>
            </div>
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
          <h2 className={styles.sectionTitle}>Fleet relationships</h2>
          <p className={styles.sectionText}>
            We hold fleet relationships with every domestic manufacturer — GM gives our clients the most competitive advantages — backed by a network of premium dealers we work with directly. If you run one or more trucks or vans and want to bring your vehicles in-house as you grow, let&apos;s talk.
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
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Referral partners welcome</h3>
            <p className={styles.cardText}>
              Much of our best work comes through trusted partners. If you&apos;re an insurer, realtor, or operations manager with clients who need a vehicle handled the right way, we&apos;d love to work together.
            </p>
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
