import './About.css'

function About() {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">About NexusConf</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              NexusConf is where the world's most forward-thinking engineers, developers, and tech leaders come together to shape the future. Now in its fifth year, the conference brings two days of deep-dive talks, hands-on workshops, and unmatched networking opportunities to the heart of San Francisco.
            </p>
            <p>
              From AI infrastructure and open-source innovation to platform engineering and developer experience — every session is designed to give you practical insights you can apply the moment you get back to your team. No fluff, no filler. Just signal.
            </p>
            <p>
              Whether you're a senior engineer looking to level up, a tech lead navigating organizational change, or a founder building the next breakout product, NexusConf is built for you. Join 1,500+ attendees and be part of the conversation that moves the industry forward.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <span className="stat-number">1,500+</span>
              <span className="stat-label">Attendees</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">30+</span>
              <span className="stat-label">Speakers</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">2</span>
              <span className="stat-label">Days</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">12+</span>
              <span className="stat-label">Workshops</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
