'use client';
import { LoremIpsum } from "lorem-ipsum";
import ReactLenis, { useLenis } from "lenis/react";
import { useState } from "react";

export default function Page() {
  const [lorem] = useState(() => new LoremIpsum().generateParagraphs(200))

  const lenis = useLenis((e) => {
    console.log(e)
  })
  console.log(lenis)
  return (
    <>
      {/* <ReactLenis root /> */}
      <ReactLenis className="wrapper" root>
        <div suppressHydrationWarning>
          {lorem}
        </div>
      </ReactLenis>
    </>
  )
}