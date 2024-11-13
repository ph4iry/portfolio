import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import localFont from 'next/font/local';
import Head from './head';

const inter = localFont({
  src: [
    {
      path: './fonts/Inter.ttf',
      style: 'normal',
    },
    {
      path: './fonts/Inter-Italic.ttf',
      weight: '400',
      style: 'italic',
    }
  ],
  display: 'swap',
  variable: '--font-inter'
});

const victor_mono = localFont({
  src: [
    {
      path: './fonts/VictorMono.ttf',
      style: 'normal',
    },
    {
      path: './fonts/VictorMono-Italic.ttf',
      style: 'italic',
    }
  ],
  display: 'swap',
  variable: '--font-vm'
});

const gloock = localFont({
  src: './fonts/Gloock.ttf',
  display: 'swap',
  variable: '--font-gloock'
})



export const metadata: Metadata = {
  title: 'Welcome to the Phaedraverse',
  description: 'Phaedra Sanon\'s personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`max-h-lvh w-screen overflow-visible overscroll-none ${inter.variable} ${victor_mono.variable} ${gloock.variable}`}>
      <Head />
      <body className={'font-inter'}>
        <Analytics />
        {children}
      </body>
    </html>
  )
}