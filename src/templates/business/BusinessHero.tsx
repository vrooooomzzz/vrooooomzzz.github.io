import { useState } from "react";
const stages = [
  {
    name: "Describe",
    text: "Turn a song into a set of audio characteristics: energy, rhythm, and texture.",
  },
  {
    name: "Compare",
    text: "Look for nearby songs in feature space. Similarity is a starting point for discovery.",
  },
  {
    name: "Explain",
    text: "Ask which characteristics connect the songs, then make that relationship understandable.",
  },
];
export default function BusinessHero() {
  const [stage, setStage] = useState(1);
  return (
    <section id="home" className="dt-wrap dt-hero" data-testid="home-section">
      <div className="dt-hero-copy">
        <p className="dt-eyebrow">
          <span className="dt-dot" />
          AN ANALYTICAL MIND. A MUSICAL INSTINCT.
        </p>
        <h1>
          Hi, I’m <br />
          <em>Đức Tuấn.</em>
        </h1>
        <p className="dt-thesis">
          Listening for patterns.
          <br />
          Finding the <em>human story.</em>
        </p>
        <p className="dt-description">
          I’m Nguyễn Đức Tuấn, a mathematics student in Hanoi exploring the
          space between data, music, and better decisions.
        </p>
        <div className="dt-actions">
          <a className="dt-button" href="#projects">
            Explore my work <span aria-hidden="true">↗</span>
          </a>
          <a className="dt-quiet-link" href="#about">
            Meet the person <span aria-hidden="true">↓</span>
          </a>
        </div>
        <p className="dt-hero-note">
          <span className="dt-dot" />
          Hanoi, Vietnam <span>/</span> Learning through curiosity
        </p>
      </div>
      <div className={`dt-listening-field dt-field-${stage}`}>
        <div className="dt-lab-top">
          <span>A MAP OF MUSICAL CONNECTIONS</span>
          <span aria-hidden="true">↗</span>
        </div>
        <svg
          className="dt-signal-art"
          viewBox="0 0 560 430"
          role="img"
          aria-label="Conceptual audio feature field with a waveform and connections between songs; illustrative, not measured recommendations"
        >
          <defs>
            <pattern
              id="dt-dot-grid"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r=".8" fill="currentColor" opacity=".2" />
            </pattern>
          </defs>
          <rect width="560" height="430" fill="url(#dt-dot-grid)" />
          <g className="dt-orbits">
            {[90, 125, 160].map((r) => (
              <ellipse
                key={r}
                cx="280"
                cy="215"
                rx={r * 1.24}
                ry={r * 0.8}
                transform="rotate(-22 280 215)"
              />
            ))}
          </g>
          <g className="dt-feature-lines">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <path
                key={i}
                d={`M${95 + i * 65} ${120 + (i % 3) * 70}L280 215`}
              />
            ))}
          </g>
          <g className="dt-wave">
            {Array.from({ length: 29 }, (_, i) => (
              <path
                key={i}
                d={`M${96 + i * 13} ${215 - (15 + ((i * 37) % 75))}V${215 + (15 + ((i * 37) % 75))}`}
                style={{ animationDelay: `${i * 0.06}s` }}
              />
            ))}
          </g>
          <g className="dt-song-points">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <circle
                key={i}
                cx={95 + i * 65}
                cy={120 + (i % 3) * 70}
                r={i === stage + 1 ? 8 : 4}
              />
            ))}
          </g>
          <text x="25" y="395">
            AUDIO FEATURES → CONNECTIONS → DISCOVERY
          </text>
          <text x="450" y="38">
            NDT / 01
          </text>
        </svg>
        <div className="dt-field-note">
          <p className="dt-eyebrow">A WORKING QUESTION</p>
          <p>
            What makes a song
            <br />
            <em>feel like another?</em>
          </p>
        </div>
        <div
          className="dt-stage-controls"
          role="group"
          aria-label="Explore the recommendation idea"
        >
          {stages.map((s, i) => (
            <button
              key={s.name}
              aria-pressed={stage === i}
              onClick={() => setStage(i)}
            >
              <span>0{i + 1}</span>
              {s.name}
            </button>
          ))}
        </div>
        <p className="dt-stage-caption" aria-live="polite">
          {stages[stage].text}
        </p>
        <p className="dt-concept">CONCEPT SKETCH · NOT MODEL OUTPUT</p>
      </div>
    </section>
  );
}
