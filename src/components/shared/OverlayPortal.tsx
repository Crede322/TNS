"use client";
import { createPortal } from "react-dom";
import { useState, ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode;
};

export default function OverlayPortal({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(
    children,
    document.getElementById("portal-root") as HTMLElement
  );
}
