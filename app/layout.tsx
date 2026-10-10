// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pabrik Rak Minimarket & Setup Toko Modern | Ritelindo Akselera Kolaborasi',
  description:
    'Produsen & Supplier Rak Minimarket, Rak Gudang, dan Perlengkapan Retail B2B. Gratis Konsultasi, Layout 3D & Ongkir Jawa-Bali. Hubungi kami sekarang!',
  keywords: [
    'Pabrik Rak Minimarket',
    'Paket Setup Toko Retail',
    'Rak Gondola Minimarket',
    'Rak Gudang B2B',
    'Jasa Interior Toko Modern',
    'Perlengkapan Toko Sembako',
  ],
  openGraph: {
    title: 'Pabrik Rak Minimarket & Setup Toko Modern | Ritelindo Group',
    description:
      'Solusi Lengkap Perlengkapan Retail & Rak Toko B2B. Gratis Layout 3D, Gratis Ongkir Jawa-Bali, dan Gratis Perakitan!',
    url: 'https://ritelindo-landing-page.vercel.app', // Ganti dengan URL Vercel kamu nanti
    siteName: 'Ritelindo Akselera Kolaborasi',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}