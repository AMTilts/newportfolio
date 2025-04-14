import '../styles/globals.css'; // Import global styles
import Layout from '../components/Layout'; // Import the Layout component
import { AnimatePresence } from 'framer-motion'; // For page transitions
import { useRouter } from 'next/router'; // Import useRouter

function MyApp({ Component, pageProps }) {
  const router = useRouter(); // Get router instance

  return (
    <Layout>
      {/* AnimatePresence enables animations when components mount/unmount */}
      {/* `mode="wait"` ensures the exiting page finishes animating before the new one enters */}
      <AnimatePresence mode="wait" initial={false}>
        {/* The `key={router.route}` tells AnimatePresence when the page changes */}
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
