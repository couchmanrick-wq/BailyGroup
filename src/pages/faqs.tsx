import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

const faqs = [
  {
    question: 'What does The Baily Group actually do?',
    answer: 'We help you buy, lease, finance, and source vehicles. We handle the search, the negotiation, and the paperwork so you get the right vehicle without spending your weekends at dealerships.',
  },
  {
    question: 'Who do you work with?',
    answer: 'People who are tired of dealerships, who don’t have the time, or who have been burned in the past — plus local businesses looking to structure leases for their commercial operations.',
  },
  {
    question: 'Do you handle commercial and fleet vehicles?',
    answer: 'Yes. We work with local businesses to structure leases for trucks and vans, and we hold fleet relationships with every domestic manufacturer — GM offers the most competitive advantages for our clients.',
  },
  {
    question: 'Which brands can you get?',
    answer: 'Beyond our domestic fleet relationships, we work directly with BMW, Porsche, Land Rover, Jaguar, Volvo, Acura, and Lexus dealers, among others.',
  },
  {
    question: 'Can you find a specific or hard-to-find vehicle?',
    answer: 'Absolutely. Sourcing is one of our core services — tell us the make, model, and trim you want and we’ll track it down through our network.',
  },
  {
    question: 'What area do you serve?',
    answer: 'We serve individuals and businesses across Southwestern Ontario.',
  },
  {
    question: 'How do I get started?',
    answer: 'Reach out by phone or email and tell us what you’re looking for. We’ll take it from there and walk you all the way to the finish line.',
  },
]

export default function Faqs() {
  return (
    <Layout
      title="FAQs — The Baily Group"
      description="Answers to common questions about buying, leasing, financing, and sourcing vehicles with The Baily Group in Southwestern Ontario."
    >
      <section className={styles.section}>
        <h1 className={styles.title}>Frequently asked questions</h1>
        <p className={styles.subtitle}>
          A few of the things people ask us most. Don&apos;t see your question? Get in touch and we&apos;ll answer it directly.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.grid}>
          {faqs.map((faq) => (
            <article key={faq.question} className={styles.card}>
              <h2 className={styles.cardTitle}>{faq.question}</h2>
              <p className={styles.cardText}>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.story}>
          <span className={styles.storyEyebrow}>Still have questions?</span>
          <p className={styles.storyQuote}>
            We&apos;re happy to help — reach out and we&apos;ll point you in the right direction.
          </p>
          <div className={styles.ctaGroup} style={{ marginTop: '1.5rem' }}>
            <a href="/#contact" className={styles.buttonPrimary}>
              Contact us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
