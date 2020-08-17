import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation();
  return <h1>{t("helloWorld")}</h1>;
}

Home.getInitialProps = async () => {
  return {};
};