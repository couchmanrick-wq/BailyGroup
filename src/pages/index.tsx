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
      <section className={styles.heroDark}>
        <div className={styles.heroDarkGrid}>
          <div className={styles.heroDarkContent}>
            <span className={styles.heroEyebrow}>Expert. Reliable. On your side.</span>
            <h1 className={styles.heroDarkTitle}>If it has four wheels and a license plate, I can help.</h1>
            <p className={styles.heroDarkSubtitle}>
              Buy. Lease. Finance. Source. Lawrence Baily and The Baily Group get you the right personal or commercial vehicle — without spending your weekends at dealerships.
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
              loading="eager"
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

    </Layout>
  )
}
