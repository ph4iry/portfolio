import { Victor_Mono, Libre_Caslon_Display, Gloock } from 'next/font/google'

export const libre_caslon_display = Libre_Caslon_Display({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

export const gloock = Gloock({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

export const victor_mono = Victor_Mono({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
})