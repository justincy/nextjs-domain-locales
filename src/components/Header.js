import Link from "next/link";
import { useTranslation } from "../i18n";
import styles from "./Header.module.css";

function Header() {
  const { t } = useTranslation();
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>{t('home')}</a>
      </Link>
    </header>
  );
}

export default Header;
