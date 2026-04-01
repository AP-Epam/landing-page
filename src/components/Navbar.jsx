import { useState, useEffect } from 'react'
import './Navbar.css'

const sections = ['about', 'program', 'speakers', 'faq', 'registration']

function Navbar() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observers = sections.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-50% 0px -50% 0px' }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <span className="navbar-logo">NexusConf <span>2026</span></span>
        <ul className="navbar-links">
          {['about', 'program', 'speakers', 'faq'].map((id) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={active === id ? 'active' : ''}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            </li>
          ))}
          <li>
            <button className="navbar-cta" onClick={() => scrollTo('registration')}>
              Register
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
