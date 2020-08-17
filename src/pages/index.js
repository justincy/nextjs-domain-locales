import { useTranslation } from "../i18n";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation();
  return <h1>{t("helloWorld")}</h1>;
}

Home.getInitialProps = async () => {
  return {};
};
