import { education } from "../../data/education";
import { experience } from "../../data/experience";
export default function BusinessExperience() {
  return (
    <section
      id="experience"
      className="dt-wrap dt-journey"
      data-testid="experience-section"
    >
      <div className="dt-section-heading">
        <div>
          <p className="dt-eyebrow">03 / LEARNING IN PRACTICE</p>
          <h2>
            A foundation in mathematics.
            <br />
            <em>A growing field of questions.</em>
          </h2>
        </div>
        <p>
          From the classroom to a BI team.
          <br />
          Learning what careful analysis involves.
        </p>
      </div>
      <div className="dt-journey-layout">
        <div className="dt-timeline">
          <article>
            <p className="dt-eyebrow">JUL — OCT 2026 / HANOI</p>
            <h3>
              Learning from
              <br />
              <em>the everyday data.</em>
            </h3>
            <p className="dt-entry-role">{experience[0].title} · FOXAi</p>
            <p>
              At FOXAi, I assisted the Business Intelligence team with
              exploratory analysis and reporting. A useful insight starts with
              data you can trust.
            </p>
            <ul>
              {experience[0].description.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <div className="dt-tags">
              <span>SQL</span>
              <span>Tableau</span>
              <span>Data reconciliation</span>
            </div>
          </article>
          <article>
            <p className="dt-eyebrow">2026 / INDEPENDENT STUDY</p>
            <h3>
              Making the foundations
              <br />
              <em>part of the practice.</em>
            </h3>
            <p>
              Completed the nine-course Google Data Analytics Professional
              Certificate and hands-on Kaggle coursework in Python, Pandas,
              visualization, feature engineering, and machine learning.
            </p>
            <a className="dt-text-link" href="#certificates">
              Explore the coursework ↗
            </a>
          </article>
        </div>
        <aside
          id="education"
          className="dt-academic-sheet"
          data-testid="education-section"
        >
          <div className="dt-lab-top">
            <span>THE MATHEMATICAL FOUNDATION</span>
            <span aria-hidden="true">∑</span>
          </div>
          <div className="dt-academic-copy">
            <p className="dt-eyebrow">HUS HIGH SCHOOL FOR GIFTED STUDENTS</p>
            <h3>
              Think carefully.
              <br />
              <em>Then look further.</em>
            </h3>
            <p>{education[0].institution}</p>
            <p>Vietnam National University, Hanoi</p>
            <div className="dt-academic-record">
              <span>Specialization</span>
              <strong>Mathematics</strong>
              <span>Study period</span>
              <strong>
                Sep 2024 — May 2027
                <br />
                <small>Expected graduation</small>
              </strong>
              <span>Exploring</span>
              <strong>Data analytics & applied mathematics</strong>
            </div>
            <p className="dt-sheet-note">
              A place to start.
              <br />A lot more to discover.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
