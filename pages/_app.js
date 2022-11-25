import '../styles/globals.css';
import '../styles/login.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <p>text parent</p>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
