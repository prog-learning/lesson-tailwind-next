import '../styles/globals.css';
import 'tailwindcss/tailwind.css'; // 追記

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
