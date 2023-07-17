import '../styles/globals.css';
import '../styles/login.css';
import "../styles/tesku.css"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
