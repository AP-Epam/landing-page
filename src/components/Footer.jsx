import './Footer.css'

function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">NexusConf <span>2026</span></span>
          <p>June 14–15, 2026 · Moscone Center, San Francisco, CA</p>
        </div>
        <div className="footer-links">
          <h4>Navigate</h4>
          <ul>
            <li><button onClick={() => scrollTo('about')}>About</button></li>
            <li><button onClick={() => scrollTo('program')}>Program</button></li>
            <li><button onClick={() => scrollTo('speakers')}>Speakers</button></li>
            <li><button onClick={() => scrollTo('faq')}>FAQ</button></li>
            <li><button onClick={() => scrollTo('registration')}>Register</button></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@nexusconf.dev">hello@nexusconf.dev</a></li>
            <li><a href="mailto:sponsors@nexusconf.dev">sponsors@nexusconf.dev</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 NexusConf. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
