import Link from "next/link";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>Home</a>
      </Link>
      {" | "}
      <Link href="/gip">
        <a>getInitialProps</a>
      </Link>
      {" | "}
      <Link href="/gssp">
        <a>getServerSideProps</a>
      </Link>
      {" | "}
      <Link href="/gsprops">
        <a>getStaticProps</a>
      </Link>
      {" | "}
      <Link href="/gspaths">
        <a>getStaticPaths</a>
      </Link>
    </header>
  );
}

export default Header;