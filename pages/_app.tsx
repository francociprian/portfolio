import '@/styles/globals.css';
import Layout from './layout';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { usePathname } from "next/navigation";
import { AnimatePresence, AnimatePresenceProps } from 'framer-motion';
import { ThemeProvider } from "next-themes";


const presenceProps: AnimatePresenceProps = {
  mode: 'wait',
};

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();

  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Head>
          <title>Franco Ciprian</title>
        </Head>
        <AnimatePresence {...presenceProps}>
          <Component {...pageProps} key={pathname} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  )
}
