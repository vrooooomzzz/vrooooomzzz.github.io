export default function BusinessAbout() {
  return (
    <>
      <div className="dt-discipline-strip">
        <span>APPLIED MATHEMATICS</span>
        <i aria-hidden="true">✳</i>
        <span>MUSIC RECOMMENDATION</span>
        <i aria-hidden="true">↗</i>
        <span>DATA ANALYTICS</span>
        <i aria-hidden="true">✳</i>
        <span>PYTHON & SQL</span>
      </div>
      <section
        id="about"
        className="dt-wrap dt-about"
        data-testid="about-section"
      >
        <p className="dt-eyebrow">A LITTLE CONTEXT</p>
        <div>
          <h2>
            Numbers are a language.
            <br />
            <em>I’m interested in what they say.</em>
          </h2>
          <p>
            My starting point is mathematics. At HUS High School for Gifted
            Students, I’m learning to reason carefully — and finding ways to
            bring that thinking into the world outside a classroom.
          </p>
          <p>
            That might mean discovering a song through its audio features,
            understanding repeat listening, or asking when a discount stops
            making business sense. The aim is the same: make a complicated
            question a little clearer.
          </p>
        </div>
        <aside>
          <span aria-hidden="true">⌁</span>
          <p>
            Look for a pattern.
            <br />
            Question the explanation.
            <br />
            <em>Keep the person in view.</em>
          </p>
        </aside>
      </section>
    </>
  );
}
