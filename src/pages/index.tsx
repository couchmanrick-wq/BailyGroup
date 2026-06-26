import Layout from '../components/Layout'
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
    <Layout
      title="The Baily Group — Vehicle Buying & Leasing in Southwestern Ontario"
      description="Lawrence Baily and The Baily Group help individuals and businesses buy and lease vehicles across Southwestern Ontario."
    >
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
              <a href="/services" className={styles.buttonSecondary}>
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
          <p className={styles.contactValue}>
            <a href="mailto:lawrence@bailygroup.com" className={styles.contactLink}>lawrence@bailygroup.com</a>
          </p>
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
    </Layout>
  )
}
