import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Bernard Haryanto',
  description: 'Personal website of Bernard Haryanto',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#040613]">
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
