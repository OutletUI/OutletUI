"use client";

import { useEffect, type ReactNode } from "react";
import Cursor from "./Cursor";

interface LandingLayoutProps {
  children: ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  useEffect(() => {
    document.body.classList.add("cursor-custom");
    return () => document.body.classList.remove("cursor-custom");
  }, []);

  return (
    <>
      <Cursor />
      {children}
    </>
  );
}
