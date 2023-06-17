import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';
import Header from "@/components/Header";
import { SmoothScrolling } from './SmoothScrolling';
import Menu from './Menu';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuState, setMenuState] = useState<boolean>(false)

  const router = useRouter()
  useEffect(() => {
    setMenuState(false)
  }, [router, setMenuState])

  return (
    <>
      <Header menuState={menuState} setMenuState={setMenuState} />
      <Menu menuState={menuState} setMenuState={setMenuState} />
      {/* <SmoothScrolling> */}
        {children}
      {/* </SmoothScrolling> */}
    </>
  );
}