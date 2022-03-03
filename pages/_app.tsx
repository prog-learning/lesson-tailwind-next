import '../styles/globals.css';
import { Layout } from '../src/Layout';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      {/* CDNを埋め込むことで動的にスタイルされるようにしている */}
      <Script src='https://cdn.tailwindcss.com' />
    </Layout>
  );
}

export default MyApp;
