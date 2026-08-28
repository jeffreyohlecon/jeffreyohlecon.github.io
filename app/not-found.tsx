import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="legacy-page">
      <p className="eyebrow">Page not found</p>
      <h1>There is nothing at this address.</h1>
      <p>
        Return to the <Link href="/">homepage</Link>.
      </p>
    </main>
  );
}
