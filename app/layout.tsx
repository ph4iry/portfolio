/* eslint-disable @next/next/no-img-element */
import './globals.css';
import './stars.css';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import { ReactNode } from 'react';
// import Image from 'next/image';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { IconDefinition, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
config.autoAddCss = false;

const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Welcome to the Phaedraverse',
  description: 'Phaedra Sanon\'s personal website',
  viewport: { width: 'device-width', initialScale: 1 },
};

/*
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Phaedraverse</title>
  <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png">
  <!-- <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css" rel="stylesheet" /> -->
  <link href="./css/output.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link href="./css/orbit.css" rel="stylesheet">
*/

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className="h-screen">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png"/>
        {/* <!-- <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css" rel="stylesheet" /> --> */}
        {/* <link href="./css/output.css" rel="stylesheet"/>
        <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" as="style"/> */}
        {/* <link href="./css/orbit.css" rel="stylesheet"/> */}
      </head>
      <body className={`${raleway.className} h-screen flex flex-col bg-[#22252C] overflow-hidden`}>
        <div id="star-container" className="opacity-25">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
        <div>
          {children}
        </div>
        <footer className="absolute bottom-0 right-0 w-full bg-slate-950/20 p-3 text-white flex justify-between">
          <div className="">
            <p className="text-xs">now playing on my spotify:</p>
            <img
              src="https://spotify-github-profile.vercel.app/api/view?uid=p44gq4wrzz0qlhy8prpq99n3a&cover_image=true&theme=natemoo-re&show_offline=true&background_color=121212&interchange=false&bar_color=53b14f&bar_color_cover=false"
              alt="Now playing on spotify"
              // width="0"
              // height="0"
              sizes="100vw"
              className="w-64 h-auto"
            />
          </div>
          <div className="flex space-x-4 items-center">
            <ContactIcon
              platform="Spotify"
              icon={faSpotify}
              link="https://open.spotify.com/user/p44gq4wrzz0qlhy8prpq99n3a?si=e54aee13739c4016"
            />
          </div>
        </footer>
      </body>
    </html>
  );
}

function ContactIcon({
  platform,
  icon,
  link,
}: {
  platform: string,
  icon: IconDefinition,
  link: string,
}) {
  return (
    <a href={link} aria-label={platform}>
      <div className="w-16 h-16 p-2 rounded-full bg-amber-100 hover:drop-shadow-[0_0_10px_rgba(254,243,199,0.25)] text-center text-gray-900">
        <FontAwesomeIcon icon={icon} className="fa-3x"/>
      </div>
    </a>
  );
}
