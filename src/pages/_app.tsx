import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/pages/layout';
import Head from 'next/head'
import { AnimatePresence, AnimatePresenceProps } from 'framer-motion';
import { usePathname } from "next/navigation";
import { ThemeProvider } from "next-themes"


const presenceProps: AnimatePresenceProps = {
  mode: 'wait',
};

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();

  return (
    <ThemeProvider attribute="class">
      <Layout>
        {/* <Head>
        <title>Franco Ciprian - {pathname}</title>
      </Head> */}
        <AnimatePresence {...presenceProps}>
          <Component {...pageProps} key={pathname} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  )
}
