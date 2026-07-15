import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header} role="banner">
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <Link href="/" aria-label="Noveo - Página inicial">
            Noveo
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;




