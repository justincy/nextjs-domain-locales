import Link from "next/link";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>Home</a>
      </Link>
    </header>
  );
}

export default Header;
