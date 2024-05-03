"use client";
import { handleLogin } from "app/actions";
import styles from "./LoginForm.module.sass";

export const LoginForm = () => {
  const handleSubmit = async (e: any) => {
    const formData = new FormData(e.target);
    e.preventDefault();
    await handleLogin(formData);
  };
  return (
    <div className={styles.NewAccountForm}>
      <h1 className={styles.NewAccountForm__title}>Ingresar</h1>
      <form className={styles.NewAccountForm__form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Correo"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
        <input type="password" name="password" placeholder="Contraseña" />
        <input type="submit" name="submit" value="Login" />
      </form>
    </div>
  );
};
