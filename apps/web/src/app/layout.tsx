import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({ weight: ['300', '400', '500'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div id="d" className="fixed left-0 top-0 h-[5px] w-screen"></div>
        <div vaul-drawer-wrapper="" className="min-w-screen overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
