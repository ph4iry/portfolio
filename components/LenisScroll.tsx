'use client';
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";

export default function LenisScroll({ children, inModal }:{ children: React.ReactNode, inModal: boolean }) {
  return <ReactLenis root options={{ lerp: 0.1, duration: 1.5, orientation: 'vertical' }}>{children}</ReactLenis>;
}