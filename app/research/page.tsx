'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function LegacyResearchPage() {
  useEffect(() => {
    window.location.replace('/#research');
  }, []);

  return (
    <main className="legacy-page">
      <p>
        Research is now on the{' '}
        <Link href="/#research">homepage</Link>.
      </p>
    </main>
  );
}
