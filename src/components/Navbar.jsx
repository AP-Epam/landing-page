import './Navbar.css'

function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <span className="navbar-logo">NexusConf <span>2026</span></span>
        <ul className="navbar-links">
          <li><button onClick={() => scrollTo('about')}>About</button></li>
          <li><button onClick={() => scrollTo('program')}>Program</button></li>
          <li><button onClick={() => scrollTo('speakers')}>Speakers</button></li>
          <li><button onClick={() => scrollTo('faq')}>FAQ</button></li>
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
