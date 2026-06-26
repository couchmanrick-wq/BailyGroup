import Layout from '../components/Layout'
import { offerCatalogSchema } from '../lib/seo'
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
      path="/"
      breadcrumbs={[{ name: 'Home', href: '/' }]}
      schema={[offerCatalogSchema(services)]}
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
              Your own vehicle expert who handles it all — sourcing, negotiating, and scheduling. One point of contact, zero dealership hassle, from the first call to keys in hand.
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
              No fine print and no fast talk. We break down your financing and lease options in plain language, so the numbers genuinely make sense for your situation.
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
        <div className={styles.whyGrid}>
          <div>
            <h2 className={styles.whyHeading}>Why busy people hand us the keys</h2>
            <p className={styles.whyText}>
              Between work, family, and everything in between, nobody has a weekend to lose at dealerships. We take the entire vehicle hunt off your plate — sourcing, financing, test drives, and delivery — and hand back the hours you would rather spend elsewhere.
            </p>
            <p className={styles.whyText}>
              Whether you are a working professional, a growing family, or a business running vehicles across Kitchener, Waterloo, Cambridge, and Guelph, you get the right vehicle without the friction.
            </p>
            <p className={styles.whyLead}>Here is what working with The Baily Group actually feels like:</p>
            <ul className={styles.whyList}>
              {[
                'Hours back in your week',
                'Straight talk, never a sales pitch',
                'Matched to how you actually drive',
                'One trusted point of contact, start to finish',
              ].map((item) => (
                <li key={item} className={styles.whyItem}>
                  <svg className={styles.whyCheck} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m8 12 2.5 2.5L16 9" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <img
            src="/images/about-car.jpg"
            alt="A collection of premium vehicles"
            className={styles.whyImage}
            loading="lazy"
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.fitGrid}>
          <div className={styles.fitMedia}>
            <img
              src="/images/hero-car.jpg"
              alt="A premium vehicle on the open road"
              className={styles.fitImage}
              loading="lazy"
            />
            <p className={styles.fitCaption}>The vehicle-buying experience you deserve</p>
          </div>
          <div>
            <h2 className={styles.fitHeading}>Is a vehicle concierge right for you?</h2>
            <p className={styles.fitText}>
              The Baily Group is a personal vehicle concierge for people across Kitchener, Waterloo, Cambridge, and Guelph who would rather not lose a weekend to dealerships. If any of these sound like you, it is probably a great fit:
            </p>
            <ul className={styles.whyList}>
              {[
                'You would rather skip the dealership back-and-forth',
                'You run a business or have a packed schedule',
                'You value your time and straight answers',
                'You are buying your first car — or your next upgrade',
                'You want one trusted person to handle the legwork',
              ].map((item) => (
                <li key={item} className={styles.whyItem}>
                  <svg className={styles.whyCheck} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m8 12 2.5 2.5L16 9" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a href="/services" className={`${styles.heroDarkButton} ${styles.fitButton}`}>
              Our Services
            </a>
          </div>
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


    </Layout>
  )
}
