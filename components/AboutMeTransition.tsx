'use client';
import { useState } from "react";
import AboutMeScene from "./scenes/AboutMeScene";

export default function AboutMeTransition() {
  // sections are: basic bio, what i'm up to, and a mini resume
  const [section, setSection] = useState(0);
  return (
    <main className="h-screen bg-blue-400 w-screen">
      <AboutMeScene section={section} />
    </main>
  )
}