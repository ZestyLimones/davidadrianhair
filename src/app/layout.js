import { Inter } from 'next/font/google';
import './globals.css';
import TransitionProvider from '@/components/transitionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'David Adrian Hair',
  description: 'Website showcasing the amazing hairstyles of David Adrian',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
