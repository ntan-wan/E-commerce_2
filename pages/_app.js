import '../styles/globals.css'
import { Storeprovider } from '../utils/Store'

function MyApp({ Component, pageProps }) {
  return (
  <Storeprovider>
    <Component {...pageProps} />
  </Storeprovider>
  );
}

export default MyApp