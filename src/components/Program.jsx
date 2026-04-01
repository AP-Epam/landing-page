import './Program.css'

const sessions = [
  {
    time: '09:00',
    title: 'Opening Keynote: The Future of AI-Driven Development',
    speaker: 'Alex Rivera',
    type: 'Keynote',
  },
  {
    time: '10:30',
    title: 'Workshop: Building & Deploying LLMs in Production',
    speaker: 'Maya Chen',
    type: 'Workshop',
  },
  {
    time: '12:00',
    title: 'Lunch & Networking',
    speaker: null,
    type: 'Break',
  },
  {
    time: '14:00',
    title: 'Panel: Open Source Innovation in 2026',
    speaker: 'Jordan Kim, Sam Patel & guests',
    type: 'Panel',
  },
  {
    time: '16:30',
    title: 'Closing Talk: What's Next — Predictions for the Next Decade',
    speaker: 'Alex Rivera',
    type: 'Talk',
  },
]

const typeColors = {
  Keynote: '#7b2ff7',
  Workshop: '#00f5d4',
  Break: '#444466',
  Panel: '#f97316',
  Talk: '#7b2ff7',
}

function Program() {
  return (
    <section className="program">
      <div className="container">
        <h2 className="section-title">Program Schedule</h2>
        <div className="timeline">
          {sessions.map((session, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-time">{session.time}</div>
              <div className="timeline-dot" style={{ background: typeColors[session.type] }} />
              <div className="timeline-card">
                <span
                  className="session-type"
                  style={{ color: typeColors[session.type], borderColor: typeColors[session.type] }}
                >
                  {session.type}
                </span>
                <h3 className="session-title">{session.title}</h3>
                {session.speaker && (
                  <p className="session-speaker">{session.speaker}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Program
