import Link from "next/link";
import styles from "./Header.module.sass";

export const Header = () => {
    return (
        <header className={styles.Header}>
            <nav>
                <ul>
                    <li>
                        <Link href="/"><p>Home</p></Link>
                    </li>
                    <li>
                        <Link href="/store"><p>Store</p></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};
