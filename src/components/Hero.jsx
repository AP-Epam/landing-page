import './Hero.css'

function Hero() {
  const scrollToRegistration = () => {
    document.getElementById('registration').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="container hero-content">
        <div className="hero-badge">June 14–15, 2026 · San Francisco, CA</div>
        <h1 className="hero-title">
          NexusConf <span className="hero-title-accent">2026</span>
        </h1>
        <p className="hero-subtitle">
          The premier tech conference for developers, engineers, and innovators pushing the boundaries of what's possible.
        </p>
        <button className="btn-primary" onClick={scrollToRegistration}>
          Register Now
        </button>
      </div>
    </section>
  )
}

export default Hero
