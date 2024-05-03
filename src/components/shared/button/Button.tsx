"use client"
import styles from "./Button.module.sass";
import { handleLogout } from "app/actions";

export const Button = () => {
  const handleOut = (e: any) => {
    e.preventDefault();
    handleLogout();
  };

  return (
    <div className={styles.Button}>
      <button onClick={handleOut}>Salir</button>
    </div>
  );
};
