import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <Layout
      title="About — The Baily Group"
      description="Meet Lawrence Baily and The Baily Group, helping individuals and businesses buy and lease vehicles across Southwestern Ontario."
    >
      <section className={styles.section}>
        <h1 className={styles.title}>About The Baily Group</h1>
        <p className={styles.subtitle}>
          Led by Lawrence Baily, The Baily Group helps individuals and businesses across Southwestern Ontario buy and lease vehicles. We bring straightforward advice and real market knowledge to every deal, so you get the right vehicle at the right price.
        </p>
      </section>

      <section className={styles.section}>
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
            <h2 className={styles.cardTitle}>Who I work with</h2>
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
        <h2 className={styles.sectionTitle}>How we work</h2>
        <div className={`${styles.grid} ${styles.services}`}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>No dealership runaround</h3>
            <p className={styles.cardText}>
              You skip the showroom pressure. We do the searching, negotiating, and paperwork, then bring you the vehicle.
            </p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Honest, market-based advice</h3>
            <p className={styles.cardText}>
              Real market knowledge on every deal, so you understand exactly what you&apos;re getting and what it should cost.
            </p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Built for businesses too</h3>
            <p className={styles.cardText}>
              From a first car to a growing commercial fleet, we structure leases and purchases that fit how you operate.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Referral partners welcome</h2>
          <p className={styles.cardText}>
            Much of our best work comes through trusted partners. If you&apos;re an insurer, realtor, or operations manager with clients who need a vehicle handled the right way, we&apos;d love to work together.
          </p>
        </div>
      </section>
    </Layout>
  )
}
