"use client";

import Image from "next/image";
import styles from "app/sass/global-error.module.sass";

export default function GlobalError({ error, reset }: ErrorPageProps) {
  return (
    <main className={styles.Error }>
      <h1 className={styles.Error__title}>Ha ocurrido un error</h1>
      <Image src="/img/error.png" width={500} height={500} alt="Error" />
      <p className={styles.Error__mesage}>Al parecer ha ocurrido un error</p>
      <button onClick={reset} className={styles.Error__button}>Reintentar</button>
    </main>
  );
}
