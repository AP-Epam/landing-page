import './Speakers.css'

const speakers = [
  {
    name: 'Alex Rivera',
    title: 'CTO',
    company: 'QuantumStack',
    bio: 'Alex has spent 15 years building large-scale distributed systems. At QuantumStack she leads a 200-person engineering org pushing the frontier of real-time data infrastructure.',
    initials: 'AR',
    color: '#7b2ff7',
  },
  {
    name: 'Maya Chen',
    title: 'Principal Engineer',
    company: 'NovaTech',
    bio: 'Maya is a recognized expert in machine learning platform engineering. She has led the deployment of LLM infrastructure serving over 10 million daily active users.',
    initials: 'MC',
    color: '#00f5d4',
  },
  {
    name: 'Jordan Kim',
    title: 'Founder & CEO',
    company: 'OpenMind Labs',
    bio: 'Jordan founded OpenMind Labs to make AI tooling accessible to every developer. An open-source contributor and advocate, Jordan has starred in over 40 developer conferences worldwide.',
    initials: 'JK',
    color: '#f97316',
  },
  {
    name: 'Sam Patel',
    title: 'AI Research Lead',
    company: 'DeepSphere',
    bio: "Sam's research on efficient transformer architectures has been cited over 3,000 times. At DeepSphere, he bridges the gap between research breakthroughs and production-ready AI systems.",
    initials: 'SP',
    color: '#ec4899',
  },
]

function Speakers() {
  return (
    <section className="speakers">
      <div className="container">
        <h2 className="section-title">Speakers</h2>
        <div className="speakers-grid">
          {speakers.map((speaker) => (
            <div className="speaker-card" key={speaker.name}>
              <div className="speaker-avatar" style={{ background: speaker.color + '22', borderColor: speaker.color }}>
                <span style={{ color: speaker.color }}>{speaker.initials}</span>
              </div>
              <h3 className="speaker-name">{speaker.name}</h3>
              <p className="speaker-role">
                {speaker.title} · <span>{speaker.company}</span>
              </p>
              <p className="speaker-bio">{speaker.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Speakers
