import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.sass";
import { cookies } from "next/headers";
import { validateAccessToken } from "app/utils/auth/validateAccessToken";

export const Header = async () => {
  const customer = await validateAccessToken()

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
            {customer?.firstName ? (
              <Link href="/store">
                <p>Store</p>
              </Link>
            ) : (
              ""
            )}
          </li>
          <li>
            {customer?.firstName ? (
              <Link href="/logout">
                <p>Logout</p>
              </Link>
            ) : (
              <Link href="/login">
                <p>Login</p>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};
