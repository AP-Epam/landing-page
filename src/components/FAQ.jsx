import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    question: 'What is NexusConf?',
    answer:
      'NexusConf is a two-day tech conference focused on software engineering, AI, and platform development. It brings together developers, engineers, and tech leaders for talks, workshops, and networking in San Francisco.',
  },
  {
    question: 'Who should attend?',
    answer:
      'NexusConf is ideal for software engineers, tech leads, engineering managers, and founders who want to stay ahead of the curve. Whether you have 1 year of experience or 20, there is something valuable here for you.',
  },
  {
    question: 'Is the event in-person or online?',
    answer:
      'NexusConf 2026 is an in-person event held at the Moscone Center in San Francisco, CA. All talks will be recorded and available to registered attendees after the conference.',
  },
  {
    question: 'How do I get my ticket after registering?',
    answer:
      'After you submit the registration form, you will receive a confirmation email within 24 hours with your ticket and event details. Please check your spam folder if you do not see it.',
  },
  {
    question: 'Can my company sponsor NexusConf?',
    answer:
      'Yes! We offer several sponsorship tiers with great visibility opportunities — from booth space to keynote slots. Reach out to us at sponsors@nexusconf.dev for the full sponsorship prospectus.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="faq" id="faq">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((item, i) => (
            <div className={`faq-item ${openIndex === i ? 'open' : ''}`} key={i}>
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{item.question}</span>
                <span className="faq-icon">{openIndex === i ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
