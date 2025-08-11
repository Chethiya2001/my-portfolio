import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chethiya Bandara - Full Stack Developer Portfolio',
  description: 'Experienced Full Stack Developer specializing in React, Next.js, and modern web technologies. Creating exceptional digital experiences.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Chethiya Bandara' }],
  openGraph: {
    title: 'Chethiya Bandara - Full Stack Developer Portfolio',
    description: 'Experienced Full Stack Developer specializing in React, Next.js, and modern web technologies.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}