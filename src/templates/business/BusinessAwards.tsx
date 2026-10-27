import { awards } from "../../data/awards";
import { experience } from "../../data/experience";
export default function BusinessAwards() {
  return (
    <section
      id="awards"
      className="dt-wrap dt-beyond"
      data-testid="awards-section"
    >
      <div className="dt-section-heading">
        <div>
          <p className="dt-eyebrow">04 / AWAY FROM THE DATASET</p>
          <h2>
            Some patterns
            <br />
            <em>are better played.</em>
          </h2>
        </div>
        <p>
          Music, language, and the people
          <br />
          on the other side of the screen.
        </p>
      </div>
      <div className="dt-beyond-grid">
        <figure className="dt-guitar-art">
          <svg
            viewBox="0 0 560 400"
            role="img"
            aria-label="Illustration of guitar strings and a sound hole, representing Duc Tuan’s interest in fingerstyle guitar"
          >
            <defs>
              <pattern
                id="string-grid"
                width="35"
                height="35"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 35H35"
                  stroke="#315c61"
                  strokeWidth=".5"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="560" height="400" fill="url(#string-grid)" />
            <circle cx="280" cy="200" r="110" fill="none" stroke="#b8c9b9" />
            <circle
              cx="280"
              cy="200"
              r="92"
              fill="none"
              stroke="#b8c9b9"
              strokeDasharray="2 8"
            />
            <circle cx="280" cy="200" r="73" fill="#153e45" />
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <path
                key={i}
                d={`M0 ${165 + i * 14}H560`}
                stroke="#e7d5a8"
                strokeWidth={1 + i * 0.2}
              />
            ))}
            <text
              x="30"
              y="360"
              fill="#d3e4df"
              fontFamily="monospace"
              fontSize="13"
            >
              SIX STRINGS. ANOTHER WAY TO EXPLORE.
            </text>
          </svg>
          <figcaption>
            Fingerstyle guitar / a different kind of pattern.
          </figcaption>
        </figure>
        <div className="dt-personal-notes">
          <article>
            <p className="dt-eyebrow">MUSIC / 2025</p>
            <h3>
              A little structure.
              <br />
              <em>A lot of expression.</em>
            </h3>
            <p>
              I play fingerstyle guitar. At the Magic Music Festival, I
              performed an arrangement of <em>Senbonzakura</em> and received a
              Silver Prize.
            </p>
            <p className="dt-small">{awards[0].organization}</p>
          </article>
          <article>
            <p className="dt-eyebrow">COMMUNITY / OCT 2025 — JUL 2026</p>
            <h3>
              Making ideas
              <br />
              <em>easier to share.</em>
            </h3>
            <p>
              As a content member of the HSGS English Club, I created
              educational social-media content and helped prepare the club’s Gen
              10 prom night.
            </p>
            <p className="dt-small">
              {experience[1].company} · communication and collaboration
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
