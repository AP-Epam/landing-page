import { useState } from 'react'
import './Registration.css'

function Registration() {
  const [form, setForm] = useState({ name: '', email: '', company: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Full name is required.'
    if (!form.email.trim()) {
      errs.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!form.company.trim()) errs.company = 'Company is required.'
    return errs
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
  }

  return (
    <section className="registration" id="registration">
      <div className="container">
        <h2 className="section-title">Register for NexusConf</h2>
        {submitted ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>You're registered!</h3>
            <p>Thanks, <strong>{form.name}</strong>! We'll send your confirmation to <strong>{form.email}</strong> shortly. See you at NexusConf 2026!</p>
          </div>
        ) : (
          <form className="reg-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jane Smith"
                value={form.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-msg">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="jane@example.com"
                value={form.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Acme Corp"
                value={form.company}
                onChange={handleChange}
                className={errors.company ? 'error' : ''}
              />
              {errors.company && <span className="error-msg">{errors.company}</span>}
            </div>
            <button type="submit" className="btn-submit">
              Secure My Spot
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Registration
