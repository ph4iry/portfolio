import type { Metadata } from 'next'
import './globals.css'

import localFont from 'next/font/local';

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
      <body className={'font-inter'}>
        {/* <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          innerStyle={{
            backgroundColor: 'white',
          }}
          outerStyle={{
            border: '3px solid rgba(255, 255, 255, 0.5)'
          }}
        /> */}
        {children}
      </body>
    </html>
  )
}