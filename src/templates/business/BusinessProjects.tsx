import { useState } from "react";
import { projects } from "../../data/projects";
const audio = [
  {
    name: "Energy",
    copy: "Intensity is one way to describe a track. It becomes more useful when considered alongside its other characteristics.",
  },
  {
    name: "Danceability",
    copy: "Rhythm helps describe how a track feels. A nearest-neighbor model compares it with the rest of the feature set.",
  },
  {
    name: "Acousticness",
    copy: "Instrumentation adds another dimension. Feature weighting changes which similarities matter most.",
  },
];
const workflow = [
  "User–song interactions",
  "Behavioral features",
  "LightGBM training",
  "Repeat-listening prediction",
];
const discounts = [
  {
    name: "0–20%",
    copy: "In the team’s dataset, lower discount bands generally retained healthier margins. The recommendation was to favor profitable bands.",
  },
  {
    name: "21–40%",
    copy: "Higher discount bands coincided with more loss-making orders. The team investigated category and geographic differences.",
  },
  {
    name: "Above 40%",
    copy: "The highest band was associated with severely weakened margins in the analyzed data. This is an observed relationship, not a universal causal rule.",
  },
];
function ProjectLab({ index }: { index: number }) {
  const [active, setActive] = useState(0);
  return (
    <div className={`dt-project-lab dt-project-lab-${index}`}>
      <div className="dt-lab-top">
        <span>
          STUDY 0{index + 1} /{" "}
          {
            ["AUDIO FEATURES", "LISTENING BEHAVIOR", "BUSINESS ANALYTICS"][
              index
            ]
          }
        </span>
        <span aria-hidden="true">↗</span>
      </div>
      {index === 0 ? (
        <>
          <svg
            className={`dt-audio-art dt-audio-${active}`}
            viewBox="0 0 500 330"
            role="img"
            aria-label="Illustrative waveform highlighting different audio characteristics, not a real song or measured feature values"
          >
            <g>
              {Array.from({ length: 35 }, (_, i) => (
                <path
                  key={i}
                  d={`M${45 + i * 12} ${165 - (22 + ((i * 43 + active * 21) % 93))}V${165 + (22 + ((i * 43 + active * 21) % 93))}`}
                  style={{ animationDelay: `${i * 0.04}s` }}
                />
              ))}
            </g>
            <path className="dt-wave-guide" d="M30 165H470" />
            <text x="30" y="300">
              SIMILARITY HAS MORE THAN ONE DIMENSION.
            </text>
          </svg>
          <div
            className="dt-lab-controls"
            role="group"
            aria-label="Explore audio feature concepts"
          >
            {audio.map((v, i) => (
              <button
                key={v.name}
                aria-pressed={active === i}
                onClick={() => setActive(i)}
              >
                {v.name}
              </button>
            ))}
          </div>
          <p className="dt-lab-caption" aria-live="polite">
            {audio[active].copy}
          </p>
        </>
      ) : index === 1 ? (
        <>
          <div className="dt-workflow">
            <p className="dt-eyebrow">FROM INTERACTION TO PREDICTION</p>
            {workflow.map((step, i) => (
              <div
                className={
                  active === i
                    ? "dt-workflow-step is-active"
                    : "dt-workflow-step"
                }
                key={step}
              >
                <span>0{i + 1}</span>
                <strong>{step}</strong>
                <span aria-hidden="true">{i === 3 ? "↗" : "↓"}</span>
              </div>
            ))}
          </div>
          <div className="dt-workflow-controls">
            <button
              onClick={() => setActive((v) => (v + 1) % 4)}
              data-testid="workflow-next"
            >
              {active === 3 ? "Replay the workflow" : "Trace the workflow"} →
            </button>
            <span aria-live="polite">0{active + 1} / 04</span>
          </div>
        </>
      ) : (
        <>
          <div className="dt-discount-visual">
            <p className="dt-eyebrow">A PRICING DECISION IS A TRADE-OFF.</p>
            <svg
              viewBox="0 0 500 280"
              role="img"
              aria-label="Conceptual downward line illustrating the team's discount and profitability investigation; not plotted data"
            >
              <path
                className="dt-chart-grid"
                d="M50 50H450M50 110H450M50 170H450M50 230H450M50 40V230H450"
              />
              <path
                className="dt-chart-line"
                d="M60 65C150 65 190 95 240 135S350 205 440 220"
              />
              <circle
                className="dt-chart-point"
                cx={[100, 250, 410][active]}
                cy={[70, 142, 216][active]}
                r="8"
              />
              <text x="50" y="270">
                INCREASING DISCOUNT →
              </text>
            </svg>
          </div>
          <div
            className="dt-lab-controls"
            role="group"
            aria-label="Explore discount bands"
          >
            {discounts.map((v, i) => (
              <button
                key={v.name}
                aria-pressed={active === i}
                onClick={() => setActive(i)}
              >
                {v.name}
              </button>
            ))}
          </div>
          <p className="dt-lab-caption" aria-live="polite">
            {discounts[active].copy}
          </p>
        </>
      )}
      <p className="dt-concept">
        {index === 1
          ? "CONCEPTUAL WORKFLOW · NO LIVE PREDICTION"
          : "ILLUSTRATIVE VIEW · NOT EXPERIMENTAL OUTPUT"}
      </p>
    </div>
  );
}
const titles = [
  <>
    A song you know.
    <br />
    <em>A new way to find the next.</em>
  </>,
  <>
    The songs we return to.
    <br />
    <em>The patterns in between.</em>
  </>,
  <>
    A better offer?
    <br />
    <em>First, look at the margin.</em>
  </>,
];
const intros = [
  "Could a recommendation start with the music itself, rather than listening history?",
  "What can an interaction history tell us about whether someone will replay a song?",
  "When does a discount stop helping the business?",
];
export default function BusinessProjects() {
  return (
    <section
      id="projects"
      className="dt-wrap dt-work"
      data-testid="projects-section"
    >
      <div className="dt-section-heading">
        <div>
          <p className="dt-eyebrow">01 / SELECTED INVESTIGATIONS</p>
          <h2>
            Three questions.
            <br />
            <em>A few ways into the data.</em>
          </h2>
        </div>
        <p>
          Music, behavior, and business.
          <br />
          Different contexts. The same curiosity.
        </p>
      </div>
      {projects.map((project, index) => (
        <article
          className={`dt-project ${index % 2 ? "dt-project-reverse" : ""}`}
          id={`study-${project.id}`}
          key={project.id}
        >
          <ProjectLab index={index} />
          <div className="dt-project-story">
            <p className="dt-eyebrow">
              {
                [
                  "CONTENT-BASED RECOMMENDATION",
                  "BEHAVIORAL FEATURES × MACHINE LEARNING",
                  "TABLEAU × BUSINESS STORYTELLING",
                ][index]
              }
            </p>
            <h3>{titles[index]}</h3>
            <p className="dt-project-question">{intros[index]}</p>
            <p>
              {
                project.caseStudy?.find((p) => p.label === "Data & method")
                  ?.text
              }
            </p>
            <div className="dt-project-takeaway">
              <span className="dt-eyebrow">
                {index === 2 ? "THE PROPOSED DIRECTION" : "THE INVESTIGATION"}
              </span>
              <p>
                {index === 0
                  ? "Compare KNN, feature weighting, and PCA — then use feature explanations to make the recommendation understandable."
                  : index === 1
                    ? "Represent behavior carefully. Engineer interactions and preferences, then evaluate the modeling choices."
                    : "Investigate discount bands above 20%, with particular attention to Tables. Recommend pricing changes without claiming realized business gains."}
              </p>
            </div>
            <div className="dt-tags">
              {project.technologies.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <details
              className="dt-case-details"
              data-testid={`case-study-${project.id}`}
            >
              <summary data-testid={`case-study-${project.id}-toggle`}>
                Inside the investigation <span aria-hidden="true">↗</span>
              </summary>
              <dl>
                {project.caseStudy?.map((part) => (
                  <div key={part.label}>
                    <dt>{part.label}</dt>
                    <dd>{part.text}</dd>
                  </div>
                ))}
              </dl>
            </details>
          </div>
        </article>
      ))}
      <p className="dt-provenance">
        The visual explorations explain the ideas; they do not run models or
        reproduce measured results. Project narratives are based on my supplied
        work and résumé.
      </p>
    </section>
  );
}
