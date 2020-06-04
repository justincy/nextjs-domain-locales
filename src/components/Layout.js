import Header from "./Header";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
}

export default Layout;
