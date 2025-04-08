import './globals.css';
import { Montserrat, Cormorant_Garamond, Playfair_Display } from 'next/font/google';
import ChatWidget from './components/ChatWidget';
import { COMPANY_NAME, SiteMetadata } from './data/site-metadata';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
});

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  metadataBase: new URL('https://luxuryhomeremodeling.com'), // Update with actual domain when available
  title: SiteMetadata.home.title,
  description: SiteMetadata.home.description,
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: SiteMetadata.home.title,
    description: SiteMetadata.home.description,
    url: 'https://luxuryhomeremodeling.com', // Update with actual domain when available
    siteName: COMPANY_NAME,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SiteMetadata.home.title,
    description: SiteMetadata.home.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cormorant.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="bg-white text-dark font-sans antialiased">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
} 