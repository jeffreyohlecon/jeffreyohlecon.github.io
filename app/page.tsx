import Image from 'next/image';

const workingPapers = [
  {
    title: 'Tax Design, Efficiency, and Incidence in Sports Betting',
    href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5943554',
    authors: (
      <>
        with <a href="https://mattbrownecon.github.io/">Matthew Brown</a>
      </>
    ),
  },
  {
    title: 'Taxing Generative AI: Evidence from Chicago',
    href: 'https://drive.google.com/file/d/1S0T91mbSlCfaM4OLZ6JazVgqx0QAJK4Y/view?usp=sharing',
    authors: null,
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="site-name" href="#top" aria-label="Jeffrey W. Ohl, home">
          Jeffrey W. Ohl
        </a>
        <nav aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#work-in-progress">Work in progress</a>
          <a href="/cv/">CV</a>
        </nav>
      </header>

      <main id="main">
        <section className="intro" id="top" aria-labelledby="intro-heading">
          <div className="intro-copy">
            <p className="eyebrow">Economics PhD student</p>
            <h1 id="intro-heading">Jeffrey W. Ohl</h1>
            <p className="lede">
              I am a 4th-year Economics PhD student at the University of
              Chicago Booth School of Business.
            </p>
            <p className="contact-links">
              <a href="mailto:johl@chicagobooth.edu">Email</a>
              <a href="/cv/">Curriculum vitae</a>
            </p>
          </div>
          <Image
            className="portrait"
            src="/jeffrey-ohl.jpg"
            alt="Jeffrey W. Ohl"
            width="1280"
            height="1522"
            priority
          />
        </section>

        <section
          className="research-section"
          id="research"
          aria-labelledby="research-heading"
        >
          <h2 id="research-heading">Working papers</h2>
          <div className="paper-list">
            {workingPapers.map((paper) => (
              <article className="paper" key={paper.title}>
                <h3>
                  <a href={paper.href}>{paper.title}</a>
                </h3>
                {paper.authors ? (
                  <p className="paper-authors">{paper.authors}</p>
                ) : null}
                <p className="paper-links">
                  <a href={paper.href}>Paper</a>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="work-in-progress" aria-labelledby="work-in-progress-heading">
          <h2 id="work-in-progress-heading">Works in progress</h2>
          <div className="paper-list compact">
            <article className="paper">
              <h3>The Underprovision of Local Amenities</h3>
              <p className="paper-authors">
                with <a href="https://ericbudish.org/">Eric Budish</a>
              </p>
            </article>

            <article className="paper">
              <h3>
                Prior Beliefs and Political Identity Equally Explain Partisan
                Reasoning About Policy Evidence
              </h3>
              <p className="paper-authors">
                with Fatima Umar,{' '}
                <a href="https://www.su.se/english/profiles/a/argo2873">
                  Armita Golkar
                </a>
                ,{' '}
                <a href="https://triciamagalotti.wordpress.com/">
                  Tricia Magalotti
                </a>
                ,{' '}
                <a href="https://www.openu.ac.il/en/personalsites/levispectre.aspx">
                  Levi Spectre
                </a>
                ,{' '}
                <a href="https://www2.philosophy.su.se/wikforss/cv.html">
                  Åsa Wikforss
                </a>
                , <a href="https://kathrin.pagin.se/">Kathrin Glüer-Pagin</a>,
                and{' '}
                <a href="https://www.chabris.com/">Christopher F. Chabris</a>
              </p>
              <p className="paper-status">Under review</p>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <p>Jeffrey W. Ohl</p>
        <a href="mailto:johl@chicagobooth.edu">johl@chicagobooth.edu</a>
      </footer>
    </>
  );
}
