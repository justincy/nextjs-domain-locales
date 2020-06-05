import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import "../styles.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { locale } = router.query;
  return (
    <I18nextProvider i18n={i18n(locale)}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </I18nextProvider>
  );
}

export default MyApp;
