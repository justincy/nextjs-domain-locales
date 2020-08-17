import { appWithTranslation } from "../i18n";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import "../styles.css";
import App from 'next/app'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) });

export default appWithTranslation(MyApp);
