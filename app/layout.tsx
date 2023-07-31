/* eslint-disable @next/next/no-img-element */
import './globals.css';
import '../styles/stars.css';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import { ReactNode } from 'react';
// import Image from 'next/image';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedinIn, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ContactIcon } from '../components/planets';
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
        {children}
        <footer className="hidden md:flex absolute bottom-0 right-0 w-full bg-slate-950/20 p-3 text-white justify-between 2xl:min-h-[15vh]">
          <div>
            <p className="text-sm">now playing on my spotify:</p>
            <img
              src="https://spotify-github-profile.vercel.app/api/view?uid=p44gq4wrzz0qlhy8prpq99n3a&cover_image=true&theme=natemoo-re&show_offline=true&background_color=121212&interchange=true&bar_color=ffffff&bar_color_cover=false"
              alt="the current spotify song that my account is playing"
              // width="0"
              // height="0"
              sizes="100vw"
              className="w-auto md:h-10 lg:h-14 hover:h-20 2xl:min-h-[9vh] 2xl:hover:h-[12vh] transition-all"
            />
          </div>
          <div className="flex space-x-4 items-center">
            <ContactIcon
              platform="Spotify"
              icon={faSpotify}
              link="https://open.spotify.com/user/p44gq4wrzz0qlhy8prpq99n3a?si=e54aee13739c4016"
              hoverColor="group-hover:text-[#1db954]"
            />
            <ContactIcon
              platform="Linkedin"
              icon={faLinkedinIn}
              link="https://www.linkedin.com/in/phaedra-sanon-323062274/"
              hoverColor="group-hover:text-[#0072b1]"
            />
            <ContactIcon
              platform="Github"
              icon={faGithub}
              link="https://github.com/ph4iry"
              hoverColor="group-hover:text-[#000000]"
            />
            <ContactIcon
              platform="Email"
              icon={faEnvelope}
              link="mailto:phaedrasanon@gmail.com"
              hoverColor="group-hover:text-[#BB001B]"
            />
          </div>
        </footer>
      </body>
    </html>
  );
}
