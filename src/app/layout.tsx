import './globals.css';
import { Inter } from 'next/font/google';
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
      <body className={inter.className}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
