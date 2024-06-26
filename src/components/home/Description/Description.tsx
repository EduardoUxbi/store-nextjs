"use client";
import classNames from "classnames/bind";
import Image from "next/image";
import styles from "./Description.module.sass";
import { useState } from "react";

const PLACEHOLDER_IMAGE =
  "data:image/jpeg;base64,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";

export const Description = () => {
  const [hasBorder, setBorder] = useState(false);

  const handleClick = () => setBorder(!hasBorder);

  const cx = classNames.bind(styles);

  const buttonStyles = cx("Description__button", {
    "Description__button--border": hasBorder,
  });

  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description__imageContainer}>
          <Image
            src="/img/desc.png"
            alt="description uxbi"
            fill
            placeholder="blur"
            blurDataURL={PLACEHOLDER_IMAGE}
          />
        </div>
      </button>
      <div className={styles.Description__text}>
        <h2>Uxbi Start</h2>
        <ul>
          <li>
            Ahorra recursos controlando de forma automatizada los costos de tu
            operación.
          </li>
          <li>Determina presupuestos por partidas específicas.</li>
          <li>Identifica desviaciones de tu presupuesto de forma inmediata</li>
        </ul>
      </div>
    </section>
  );
};
