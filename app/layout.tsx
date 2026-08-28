import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://jeffreyohl.com'),
  title: 'Jeffrey W. Ohl',
  description:
    'Jeffrey W. Ohl is an Economics PhD student at the University of Chicago Booth School of Business.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/jeffrey-ohl.jpg',
  },
  openGraph: {
    title: 'Jeffrey W. Ohl',
    description:
      'Economics PhD student at the University of Chicago Booth School of Business.',
    type: 'website',
    url: '/',
    images: [
      {
        url: '/jeffrey-ohl.jpg',
        width: 1280,
        height: 1522,
        alt: 'Jeffrey W. Ohl',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Jeffrey W. Ohl',
    description:
      'Economics PhD student at the University of Chicago Booth School of Business.',
    images: ['/jeffrey-ohl.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
