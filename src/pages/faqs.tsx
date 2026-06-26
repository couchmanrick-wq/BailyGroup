import Layout from '../components/Layout'
import { faqSchema } from '../lib/seo'
import styles from '../styles/Home.module.css'

const faqs = [
  {
    question: 'What does The Baily Group actually do?',
    answer: 'We help you buy, lease, finance, and source vehicles. We handle the search, the negotiation, and the paperwork so you get the right vehicle without spending your weekends at dealerships.',
  },
  {
    question: 'Who do you work with?',
    answer: 'Busy professionals, growing families, and first-time buyers who would rather skip the dealership grind — plus local businesses that need commercial leases structured around how they operate.',
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
    answer: 'We cover Guelph, Kitchener, Waterloo, Cambridge, and the surrounding southwestern Ontario communities. With Lawrence based in Guelph, local market knowledge is built in.',
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
      description="Answers to common questions about buying, leasing, financing, and sourcing vehicles with The Baily Group in Kitchener, Waterloo, Cambridge, Guelph, and southwestern Ontario."
      path="/faqs"
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'FAQs', href: '/faqs' },
      ]}
      schema={[faqSchema(faqs)]}
    >
      <section className={styles.section}>
        <h1 className={styles.title}>Frequently asked questions</h1>
        <p className={styles.subtitle}>
          A few of the things people ask us most. Don&apos;t see your question? Get in touch and we&apos;ll answer it directly.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.faqList}>
          {faqs.map((faq) => (
            <details key={faq.question} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>
                <span>{faq.question}</span>
                <svg className={styles.faqChevron} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <p className={styles.faqAnswer}>{faq.answer}</p>
            </details>
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
