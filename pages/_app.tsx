import '@/styles/globals.css';
import Layout from '@/pages/layout';
import type { AppProps } from 'next/app';
import { usePathname } from "next/navigation";
import { AnimatePresence, AnimatePresenceProps } from 'framer-motion';
import { ThemeProvider } from "next-themes";
import { Analytics } from '@vercel/analytics/react';

const presenceProps: AnimatePresenceProps = {
  mode: 'wait',
};

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();

  return (
    <ThemeProvider attribute="class">
      <Layout>
        <AnimatePresence {...presenceProps}>
          <Component {...pageProps} key={pathname} />
          <Analytics />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  )
}
