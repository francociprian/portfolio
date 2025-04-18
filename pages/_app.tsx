import '@/styles/globals.css';
import Layout from '@/pages/layout';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { usePathname } from "next/navigation";
import { useRouter } from 'next/router';
import { AnimatePresence, AnimatePresenceProps } from 'framer-motion';
import { ThemeProvider } from "next-themes";
import { Analytics } from '@vercel/analytics/react';


const presenceProps: AnimatePresenceProps = {
  mode: 'wait',
};

export default function App({ Component, pageProps }: AppProps) {
  const meta = {
    title: 'Franco Ciprian',
    description: `Front-end developer`,
    image: 'https://www.francociprian.com/static/images/banner.png',
    type: 'website',
  };
  const pathname = usePathname();
  const router = useRouter()

  return (
    <ThemeProvider attribute="class">
      <Layout>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://www.francociprian.com${router.asPath}`} />
        <link rel="canonical" href={`https://www.francociprian.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Franco Ciprian" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@fromfrancocip" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
        <AnimatePresence {...presenceProps}>
          <Component {...pageProps} key={pathname} />
          <Analytics />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  )
}
