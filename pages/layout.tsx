import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from "@/components/Header";
import Menu from '@/components/Menu';

export default function Layout({ 
  children,
  title = 'Franco Ciprian | Frontend Developer',
  description = 'Portfolio de Franco Ciprian, desarrollador frontend especializado en React, Next.js y tecnologías web modernas',
  keywords = 'frontend, developer, react, next.js, javascript, typescript, portfolio',
  ogImage = '/static/image/banner.png',
}: { 
  children: React.ReactNode,
  title?: string,
  description?: string,
  keywords?: string,
  ogImage?: string
}) {
  const [menuState, setMenuState] = useState<boolean>(false)
  const router = useRouter()
  
  useEffect(() => {
    setMenuState(false)
  }, [router, setMenuState])

  const canonicalUrl = `https://francociprian.com${router.asPath}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={ogImage} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header menuState={menuState} setMenuState={setMenuState} />
      <Menu menuState={menuState} setMenuState={setMenuState} />
      <main>{children}</main>
    </>
  );
}