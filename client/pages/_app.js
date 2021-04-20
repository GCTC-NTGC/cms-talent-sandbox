
import Menu from '../components/menu.js'

function ClientApp({ Component, pageProps }) {
  return (
    <>
     <Menu />
     <Component {...pageProps} />
    </>
  );
}

export default ClientApp
