import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AnimatedCursor from 'react-animated-cursor'
import './globals.css'

const base = Inter({ subsets: ['latin'] })

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
    <html lang="en" className="h-max">
      <body className={`${base.className} lg:min-h-[250vh] md:min-h-[300vh] min-h-[450vh]`}>
      <AnimatedCursor
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
      />
        {children}
      </body>
    </html>
  )
}
