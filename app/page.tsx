// import Image from 'next/image';

export default function Home() {
  return (
    <></>
  //   <>
  //     <div id="circle-orbit-container" className="hidden lg:block z-[-1]">
  //   <img src="./img/planet.svg" alt="Planet" className="planet" />
  //   <div id="first-orbit" className="orbit-spin-short">
  //     <div className="first-orbit-circle"></div>
  //   </div>
  //   <div id="second-orbit" className="orbit-spin-long">
  //     <div className="second-orbit-circle"></div>
  //   </div>
  // </div>
  // <div className="px-8 lg:pl-24 pt-4 flex flex-col lg:pr-[55vh] w-full">
  //   <div className="navbar">
  //     <div className="flex items-baseline space-x-4 rounded-full border-slate-50 border-solid border-2 w-full md:w-fit px-4 py-2 overflow-x-scroll md:overflow-x-hidden">
  //       {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
  //       <a href="#about" className="text-muted hover:bg-slate-700 hover:text-white rounded-full px-3 py-2 text-md font-medium">about</a>
  //       <a href="#projects" className="text-muted hover:bg-slate-700 hover:text-white rounded-full px-3 py-2 text-md font-medium">projects</a>
  //       <a href="#" className="text-muted hover:bg-slate-700 hover:text-white rounded-full px-3 py-2 text-md font-medium">contact</a>
  //     </div>
  //   </div>

  //   <div className="mb-4 mt-36">
  //     <p className="font-display text-3xl md:text-4xl">Hi,</p>
  //     <p className="font-display text-6xl md:text-8xl">I&apos;m Phaedra.</p>
  //   </div>

  //   <div className="flex h-min items-center mt-4 mb-24">
  //     <div className="rounded bg-slate-800/50 w-full px-4 sm:px-16 py-6">
  //       <p className="text-muted mb-2 text-lg">I am a <span className="text-slate-50">16-year-old software developer</span> from <span className="text-slate-50">Boston, MA.</span></p>
  //       <div className="socials flex flex-row space-x-4">
  //         {/* <!-- LinkedIn--> */}
  //         <a href="https://www.linkedin.com/in/phaedra-sanon-323062274/" className="social-icon group border-4 border-slate-50 text-slate-50 hover:bg-slate-50 hover:text-slate-900 p-2 rounded-lg w-14 h-14">
  //           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-slate-50 group-hover:fill-slate-900">{ /* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */ }
  //             <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
  //           </svg>
  //         </a>

  //         {/* <!-- Github --> */}
  //         <a href="https://github.com/ph4iry" className="social-icon group border-4 border-slate-50 text-slate-50 hover:bg-slate-50 hover:text-slate-900 p-2 rounded-lg w-14 h-14">
  //           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="fill-slate-50 group-hover:fill-slate-900">{ /* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */ }
  //             <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
  //           </svg>
  //         </a>

  //         <a href="mailto:phaedrasanon@gmail.com" className="social-icon group border-4 border-slate-50 text-slate-50 hover:bg-slate-50 hover:text-slate-900 p-2 rounded-lg w-14 h-14">
  //           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-slate-50 group-hover:fill-slate-900">{ /* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */ }<path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
  //         </a>
  //       </div>
  //     </div>
  //   </div>

  //   <div id="about" className="flex flex-col">
  //     <div className="header flex flex-col items-center md:items-start mb-5">
  //       <span className="flex flex-row">
  //         <h1 className="font-display text-4xl md:text-6xl">
  //           <i className="fa-solid fa-terminal fa-sm text-[#72BF80]"></i> About Me
  //         </h1>
  //       </span>
  //       <p className="font-mono text-lg">welcome to my website!</p>
  //     </div>

  //     <div className="flex flex-col md:flex-row">
  //       <div className="mr-16">
  //         <img src="./img/pfp.png" alt="Phaedra Sanon" className="max-w-[300px]"/>
  //       </div>
  //       <div>
  //         <p className="text-center md:text-left">
  //           Hello! My name is <span className="text-[#FFE297]">Phaedra Sanon</span> and I&apos;m currently a sophomore in high school. One of my passions is being able to create things using technology, particularly web development. Seeking new opportunities to develop solutions to things, I am currently working on a handful of projects that have a real purpose. At the moment, I work at <a href="https://afhboston.org" className="underline text-[#72BF80]">Artists for Humanity</a>. Here&apos;s some of the technologies that I&apos;ve been using lately:
  //         </p>
  //         <div className="grid grid-cols-2 gap-y-3 mt-2 p-1 self-center justify-center">
  //           <span className="text-sky-500 flex flex-row">
  //             <svg width="24" viewBox="0 0 511 312" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-sky-500 mr-2">
  //               <path d="M249.5 214.5C158 108 16.5 152 0.491455 258.499C35.5 210 91 196.501 144 260C218 344.5 363.5 322 382.493 209.5C340.993 260.5 285 251.393 249.5 214.5Z"/>
  //               <path d="M377.009 61.1923C285.509 -45.3078 144.009 -1.30768 128 105.191C163.009 56.6924 218.509 43.1929 271.509 106.692C345.509 191.192 491.009 168.692 510.001 56.1922C468.501 107.193 412.509 98.0853 377.009 61.1923Z"/>
  //             </svg>Tailwind CSS
  //           </span>
  //           <span className="text-sky-500"><i className="fa-brands fa-figma text-sky-500 fa-xl"></i> Figma </span>
  //           <span className="text-sky-500"><i className="fa-brands fa-react text-sky-500 fa-xl"></i> React </span>
  //           <span className="text-sky-500"><i className="fa-brands fa-node-js text-sky-500 fa-xl"></i> Node.js </span>
  //         </div>
  //       </div>
  //     </div>
  //   </div>

  //   <div id="projects" className="my-24">
  //     <div className="header flex flex-col items-center md:items-start mb-5">
  //       <span className="flex flex-row">
  //         <h1 className="font-display text-4xl md:text-6xl">
  //           <i className="fa-solid fa-code fa-sm text-[#72BF80]"></i> Projects
  //         </h1>
  //       </span>
  //       <p className="font-mono text-lg">what i&apos;ve worked on</p>
  //     </div>

  //     <div className="projects grid grid-cols-1 md:grid-cols-2 gap-4 w-full p-1 md:p-10 rounded-lg">
  //       <div className="card flex flex-col justify-between">
  //         <span>
  //           <img className="cover-img rounded-lg" src="https://img2.storyblok.com/1080x0/filters:format(webp)/f/127407/1200x600/30fefd872f/artopia-header.png" alt=""/>
  //           {/* <!-- <img src="https://img2.storyblok.com/1080x0/filters:format(webp)/f/127407/1200x600/30fefd872f/artopia-header.png" alt="ARTOPIA Donation Interactive" className="" /> --> */}
  //           <h3 className="font-display text-3xl">ARTOPIA Donation Interactive</h3>
  //           <p className="mb-2">The interactive donation station for Artist for Humanity&apos;s key fundraiser event, ARTOPIA.</p>
  //         </span>
  //         <button className="bg-slate-800 p-2 rounded-lg w-full">details</button>
  //         <a href="https://github.com/Artists-for-Humanity/artopia-masking-demo" className="group underline text-mono">see the project on github <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
  //       </div>
  //       <div className="card flex flex-col justify-between">
  //         <span>
  //           <img className="cover-img rounded-lg" src="./img/aspen-sis.png" alt=""/>
  //           <h3 className="font-display text-3xl">Aspen SIS API</h3>
  //           <p className="mb-2">An API to process student records held in Boston Public Schools&apos; Student Information System, Aspen.</p>
  //         </span>
  //         {/* <!-- Modal toggle --> */}
  //         <button data-modal-target="aspen-sis-detail-modal" data-modal-toggle="aspen-sis-detail-modal" className="btn bg-slate-700/50 border-2 border-slate-50" type="button" aria-label="Details">
  //           <i className="fas fa-circle-info text-3xl"></i>
  //         </button>

  //         {/* <!-- Main modal --> */}
  //         <div id="aspen-sis-detail-modal" tabIndex={-1} aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
  //             <div className="relative w-full max-w-5xl max-h-full">
  //                 {/* <!-- Modal content --> */}
  //                 <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
  //                     {/* <!-- Modal header --> */}
  //                     <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
  //                         <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
  //                             Terms of Service
  //                         </h3>
  //                         <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="aspen-sis-detail-modal">
  //                             <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  //                             <span className="sr-only">Close modal</span>
  //                         </button>
  //                     </div>
  //                     {/* <!-- Modal body --> */}
  //                     <div className="p-6 space-y-6">
  //                         <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
  //                             With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
  //                         </p>
  //                         <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
  //                             The European Union&apos;s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
  //                         </p>
  //                     </div>
  //                     {/* <!-- Modal footer --> */}
  //                     <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
  //                         <button data-modal-hide="aspen-sis-detail-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
  //                         <button data-modal-hide="aspen-sis-detail-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
  //                     </div>
  //                 </div>
  //             </div>
  //         </div>

  //         <a href="https://github.com/ph4iry/aspen-sis" className="group underline text-mono">see the project on github <i className="fa fa-arrow-up-right-from-square"></i></a>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  // <footer className="w-full bg-gray-900 py-10 px-8 lg:pl-24 flex flex-row">
  //   <div className="flex flex-col">
  //     <h2 className="font-display text-3xl">Phaedra Sanon</h2>
  //     <p className="text-muted">Made with <i className="fa fa-star text-[#FFE297]"></i>&apos;s and <i className="fa fa-heart text-rose-600"></i></p>
  //     <div className="minis">
  //       <img src="https://spotify-github-profile.vercel.app/api/view?uid=p44gq4wrzz0qlhy8prpq99n3a&cover_image=true&theme=natemoo-re&show_offline=true&background_color=121212&interchange=false&bar_color=092b08&bar_color_cover=true" alt="Now Playing on Spotify"/>
  //       <div className="socials flex flex-row space-x-4">
  //         {/* <!-- LinkedIn--> */}
  //         <a href="https://www.linkedin.com/in/phaedra-sanon-323062274/" className="social-icon group border-2 border-slate-50 text-slate-50 hover:bg-slate-50 hover:text-slate-900 p-1 rounded-lg w-8 h-8">
  //           <i className="fab fa-linkedin-in text-xl text-center group-hover:text-slate-900"></i>
  //         </a>

  //         {/* <!-- Github --> */}
  //         <a href="https://github.com/ph4iry" className="social-icon group border-2 border-slate-50 text-slate-50 hover:bg-slate-50 hover:text-slate-900 p-1 rounded-lg w-8 h-8">
  //           <i className="fab fa-github text-xl text-center group-hover:text-slate-900"></i>
  //         </a>

  //         <a href="mailto:phaedrasanon@gmail.com" className="social-icon group border-2 border-slate-50 text-slate-50 hover:bg-slate-50 hover:text-slate-900 p-1 rounded-lg w-8 h-8">
  //           <i className="far fa-envelope text-xl text-center group-hover:text-slate-900"></i>
  //         </a>
  //       </div>
  //     </div>
  //   </div>
  // </footer>
  //   </>
  );
}
