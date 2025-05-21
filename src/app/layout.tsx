import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
// import Navbar from '../app/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bernard Haryanto | Portfolio',
  description: 'Personal website of Bernard Haryanto, Software Developer',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script id="prevent-flash" strategy="beforeInteractive">
          {`
            (function() {
              try {
                const savedMode = localStorage.getItem('darkMode');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const isDark = savedMode === 'true' || (!savedMode && prefersDark);
                
                if (isDark) {
                  document.documentElement.style.backgroundColor = '#0f172a';
                  document.documentElement.classList.add('dark-mode');
                }
              } catch (e) {
                console.error('Dark mode detection failed:', e);
              }
            })()
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
