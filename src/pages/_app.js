import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import BootstrapClient from '../components/BootstrapClient.jsx';

function MyApp({ Component, pageProps }) {
  return (
      <>
      <BootstrapClient />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
