"use client"

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
export function scrollToStart() {
  if (!isBrowser()) return;
  window.document.scrollingElement?.scrollTo(0, 0)
}