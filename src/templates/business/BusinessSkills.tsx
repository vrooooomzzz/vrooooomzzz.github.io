import { useEffect, useRef, useState } from "react";
import { certificates } from "../../data/certificates";
import type { CertificateEntry } from "../../types/portfolio";
const process = [
  {
    name: "Ask",
    title: "Begin with the person behind the question.",
    text: "What do we want to understand, and what would a useful answer look like? For a recommender, that starts with the kind of discovery we want to support.",
    tools: ["Problem framing", "Data analytics", "Business context"],
    code: [
      "question = understand_the_context()",
      "goal = define_a_useful_answer()",
      "data = find_the_right_evidence()",
    ],
  },
  {
    name: "Explore",
    title: "Give the unexpected patterns some attention.",
    text: "Prepare the data, check its consistency, and look at what changes across groups. Reconciliation and exploration make the next steps more dependable.",
    tools: ["Python", "SQL", "Pandas", "Excel", "Tableau"],
    code: [
      "data = clean_and_reconcile(raw)",
      "patterns = compare_groups(data)",
      "questions = inspect_the_exceptions()",
    ],
  },
  {
    name: "Model",
    title: "Compare the approaches. Keep testing the idea.",
    text: "Represent the problem through useful features. For my recommendation projects, that meant working with nearest neighbors, feature weighting, PCA, and behavioral modeling.",
    tools: ["scikit-learn", "KNN", "PCA", "LightGBM", "Feature engineering"],
    code: [
      "features = represent_the_problem(data)",
      "candidates = compare_approaches(features)",
      "results = evaluate(candidates)",
    ],
  },
  {
    name: "Explain",
    title: "An answer matters when someone can use it.",
    text: "Explain the recommendation or communicate the business finding. Make the contribution, evidence, and limits as clear as the conclusion.",
    tools: ["SHAP", "Data visualization", "Tableau", "Analytical storytelling"],
    code: [
      "insight = interpret(results)",
      "context = describe_the_limits()",
      "share(insight, context)",
    ],
  },
];
export default function BusinessSkills() {
  const [active, setActive] = useState(0);
  const p = process[active];
  const [selected, setSelected] = useState<CertificateEntry | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (!selected || !dialog.current) return;
    const node = dialog.current;
    node.showModal();
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
      if (node.open) node.close();
      trigger.current?.focus();
    };
  }, [selected]);
  return (
    <>
      <section id="skills" className="dt-process" data-testid="skills-section">
        <div className="dt-wrap">
          <div className="dt-section-heading">
            <div>
              <p className="dt-eyebrow">
                02 / THE WAY I WORK THROUGH A QUESTION
              </p>
              <h2>
                Tools are a starting point.
                <br />
                <em>Thinking makes the difference.</em>
              </h2>
            </div>
            <span className="dt-section-mark" aria-hidden="true">
              ✳
            </span>
          </div>
          <div
            className="dt-process-tabs"
            role="tablist"
            aria-label="Explore my analytical process"
          >
            {process.map((step, i) => (
              <button
                key={step.name}
                id={`dt-process-tab-${i}`}
                role="tab"
                aria-selected={active === i}
                aria-controls="dt-process-panel"
                tabIndex={active === i ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  let next = i;
                  if (e.key === "ArrowRight") next = (i + 1) % 4;
                  else if (e.key === "ArrowLeft") next = (i + 3) % 4;
                  else if (e.key === "Home") next = 0;
                  else if (e.key === "End") next = 3;
                  else return;
                  e.preventDefault();
                  setActive(next);
                  document.getElementById(`dt-process-tab-${next}`)?.focus();
                }}
              >
                <span>0{i + 1}</span>
                {step.name}
                <i aria-hidden="true">↗</i>
              </button>
            ))}
          </div>
          <div
            className="dt-process-panel"
            role="tabpanel"
            id="dt-process-panel"
            aria-labelledby={`dt-process-tab-${active}`}
          >
            <div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <div className="dt-tags">
                {p.tools.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
            <div className="dt-code-note">
              <div>
                <span>A THINKING SKETCH</span>
                <span>PYTHON-INSPIRED PSEUDOCODE</span>
              </div>
              {p.code.map((line, i) => (
                <p key={line}>
                  <span>0{i + 1}</span>
                  <code>{line}</code>
                </p>
              ))}
            </div>
          </div>
          <div className="dt-learning-note">
            <p className="dt-eyebrow">ALWAYS MAKING ROOM TO LEARN</p>
            <p>
              Practical study through Google Data Analytics and Kaggle Learn —
              from programming foundations to model interpretation.
            </p>
            <a className="dt-text-link" href="#certificates">
              The learning record ↓
            </a>
          </div>
        </div>
      </section>
      <section id="certificates" className="dt-wrap dt-certificates">
        <div className="dt-evidence-heading">
          <div>
            <p className="dt-eyebrow">THE LEARNING BEHIND THE WORK</p>
            <h2>
              Foundations,
              <br />
              <em>put into practice.</em>
            </h2>
          </div>
          <p>
            Eight certificates from Google and Kaggle.
            <br />
            Select one to read the original.
          </p>
        </div>
        <div className="dt-certificate-sheet">
          {certificates.map((cert, index) => (
            <button
              key={cert.title}
              className="dt-certificate-plate"
              data-testid={`certificate-card-${index}`}
              aria-label={`View ${cert.title} certificate`}
              onClick={(event) => {
                trigger.current = event.currentTarget;
                setSelected(cert);
              }}
            >
              {cert.preview || cert.format === "image" ? (
                <img
                  src={cert.preview ?? cert.file}
                  alt={`${cert.title} completion certificate for Nguyễn Đức Tuấn`}
                  loading="lazy"
                  width={cert.preview ? 2400 : 4800}
                  height={cert.preview ? 1854 : 2960}
                />
              ) : (
                <div className="dt-pdf-cover">
                  <span>
                    Google <i>×</i> Coursera
                  </span>
                  <strong>
                    {cert.format === "pdf" &&
                    cert.title.startsWith("Google Data Analytics")
                      ? "Google Data Analytics"
                      : "AI for the job search"}
                  </strong>
                  <small>{cert.kind} / PDF</small>
                </div>
              )}
              <span>
                {cert.title}
                <i aria-hidden="true">↗</i>
              </span>
              <small>{cert.issuer}</small>
            </button>
          ))}
        </div>
        <dialog
          ref={dialog}
          className="dt-evidence-dialog"
          aria-labelledby="dt-certificate-title"
          onCancel={() => setSelected(null)}
          onClose={() => setSelected(null)}
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelected(null);
          }}
        >
          {selected && (
            <>
              <div className="dt-dialog-header">
                <div>
                  <p className="dt-eyebrow">
                    {selected.issuer} / {selected.kind}
                  </p>
                  <h2 id="dt-certificate-title">{selected.title}</h2>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  data-testid="certificate-close"
                >
                  Close ×
                </button>
              </div>
              {selected.preview || selected.format === "image" ? (
                <img
                  src={selected.preview ?? selected.file}
                  alt={`${selected.title} certificate for Nguyễn Đức Tuấn`}
                />
              ) : (
                <object
                  data={selected.file}
                  type="application/pdf"
                  aria-label={`${selected.title} PDF preview`}
                >
                  <p>
                    A PDF preview isn’t available in this browser. Use the
                    original-file link below.
                  </p>
                </object>
              )}
              <div className="dt-dialog-footer">
                <p>{selected.description}</p>
                <a
                  href={selected.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="certificate-original"
                  aria-label={selected.ariaLabel}
                >
                  Open original {selected.format === "image" ? "image" : "PDF"}{" "}
                  ↗
                </a>
              </div>
            </>
          )}
        </dialog>
      </section>
    </>
  );
}
