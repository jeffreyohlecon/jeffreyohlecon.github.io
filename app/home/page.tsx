'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function LegacyHomePage() {
  useEffect(() => {
    window.location.replace('/#top');
  }, []);

  return (
    <main className="legacy-page">
      <p>
        The homepage has moved to <Link href="/#top">jeffreyohl.com</Link>.
      </p>
    </main>
  );
}
