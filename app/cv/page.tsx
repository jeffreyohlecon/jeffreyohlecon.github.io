import type { Metadata } from 'next';
import Link from 'next/link';

const cvDocument =
  'https://docs.google.com/document/d/1ONfDGr0q5y77hj76D3ZtC5M6YsXVSkocoYrZVXj8JUA/edit';
const cvPdf =
  'https://docs.google.com/document/d/1ONfDGr0q5y77hj76D3ZtC5M6YsXVSkocoYrZVXj8JUA/export?format=pdf';

export const metadata: Metadata = {
  title: 'CV | Jeffrey W. Ohl',
  description: 'Curriculum vitae for Jeffrey W. Ohl.',
};

export default function CvPage() {
  return (
    <>
      <header className="site-header">
        <Link className="site-name" href="/">
          Jeffrey W. Ohl
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/#research">Research</Link>
          <Link href="/#work-in-progress">Work in progress</Link>
          <Link aria-current="page" href="/cv/">
            CV
          </Link>
        </nav>
      </header>

      <main className="inner-page">
        <p className="eyebrow">Curriculum vitae</p>
        <h1>CV</h1>
        <p className="lede">
          My CV is maintained as a public Google Doc.
        </p>
        <p className="document-links">
          <a href={cvDocument}>View CV</a>
          <a href={cvPdf}>Download PDF</a>
        </p>
      </main>

      <footer>
        <p>Jeffrey W. Ohl</p>
        <a href="mailto:johl@chicagobooth.edu">johl@chicagobooth.edu</a>
      </footer>
    </>
  );
}
