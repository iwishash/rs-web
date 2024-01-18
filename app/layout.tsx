import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/header';
import Footer from './components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RS REHAB',
  description: 'RS REHAB Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='viewport'
          content='width=device-width, height=device-height, initial-scale=1'
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className='pt-[var(--navigation-height)] bg-page-gradient'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
