import Layout from '../components/Layout'
import { faqSchema } from '../lib/seo'
import styles from '../styles/Home.module.css'

const faqs = [
  {
    question: 'What is a car buying concierge service, and what does The Baily Group do?',
    answer: 'The Baily Group is a personal car buying concierge service led by Lawrence Baily. Instead of sending you to dealerships, we handle the whole process for you: searching, dealership negotiation, financing, lease support, and paperwork for personal and commercial vehicles across Guelph, Kitchener, Waterloo, and Cambridge.',
  },
  {
    question: 'Why use a car buying consultant instead of going to a dealership myself?',
    answer: 'You save time and skip the showroom pressure. Our auto buying service brings real market knowledge to every deal, negotiates on your behalf, and delivers the right vehicle to your door — so you avoid the lots, the back-and-forth, and the lost weekends.',
  },
  {
    question: 'Who does The Baily Group work with?',
    answer: 'Busy professionals, growing families, and first-time buyers who would rather skip the dealership grind — plus local businesses that need commercial leases structured around how they operate.',
  },
  {
    question: 'Do you handle commercial and fleet vehicles?',
    answer: 'Yes. We structure commercial leases and purchases for trucks and vans, and we hold fleet relationships with every domestic manufacturer — where GM tends to offer our clients the strongest advantages.',
  },
  {
    question: 'Do you offer new and used car buying help?',
    answer: 'Yes. Whether you want a brand-new build or a quality used vehicle, The Baily Group sources it, confirms it is priced fairly against the market, negotiates with the dealer, and manages the deal from search to delivery.',
  },
  {
    question: 'Which vehicle brands can you get?',
    answer: 'Beyond our domestic fleet relationships, we work directly with BMW, Porsche, Land Rover, Jaguar, Volvo, Acura, and Lexus dealers, among others — and we can source most makes and models on request.',
  },
  {
    question: 'Can you find a specific or hard-to-find vehicle?',
    answer: 'Absolutely. Sourcing is one of our core services — tell us the exact make, model, trim, and colour you want, including allocation-only builds, and we will track it down through our dealer and manufacturer network.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We cover Guelph, Kitchener, Waterloo, Cambridge, and the surrounding southwestern Ontario communities. With Lawrence based in Guelph, local market knowledge is built in.',
  },
  {
    question: 'How long does the process take?',
    answer: 'It depends on what you are after — a common in-stock vehicle can move quickly, while a specific or hard-to-find build takes longer. Either way, we keep you posted at every step and handle the details.',
  },
  {
    question: 'How do I get started with The Baily Group?',
    answer: 'Call or email Lawrence, or fill out the contact form, and tell us what you are looking for. We will take it from there and walk you all the way to delivery.',
  },
]

export default function Faqs() {
  return (
    <Layout
      title="Car Buying Concierge FAQs | The Baily Group"
      description="Answers to common questions about car buying concierge service, auto buying help, dealer negotiation, lease negotiation, financing, and vehicle sourcing in Kitchener, Waterloo, Cambridge, and Guelph."
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
