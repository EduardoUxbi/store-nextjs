import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.sass";

export const Header = () => {
  return (
    <header className={styles.Header}>
      <Image src="/img/favicon.png" height={50} width={50} alt="logo"></Image>
      <nav>
        <ul>
          <li>
            <Link href="/" scroll={false}>
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link href="/store">
              <p>Store</p>
            </Link>
          </li>
          <li>
            <Link href="/test" scroll={false}>
              <p>Test</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
