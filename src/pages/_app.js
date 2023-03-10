import { Sono } from '@next/font/google';
import '@/styles/globals.css';
import '@/styles/reset-css.css';

const sono = Sono({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={sono.className}>
      <Component {...pageProps} />
    </main>
  ) 
}
