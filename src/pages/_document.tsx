import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {

  return (
    <Html lang="en">
      <Head />
      <body className='bg-white/80 dark:bg-black/50'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}