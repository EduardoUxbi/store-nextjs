"use client";
import { useState } from "react";
import styles from "./NewAccountForm.module.sass";
import { handleCreateUser } from "app/actions";

export const NewAccountForm = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSumbmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await handleCreateUser(formData);
  };

  return (
    <div className={styles.NewAccountForm}>
      <h1 className={styles.NewAccountForm__title}>Nueva Cuenta</h1>
      <form className={styles.NewAccountForm__form} onSubmit={handleSumbmit}>
        <input
          type="text"
          name="firstName"
          placeholder="Nombre(s)"
          disabled={loading}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Apellido(s)"
          disabled={loading}
        />
        <input
          type="text"
          name="email"
          placeholder="Correo"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          disabled={loading}
        />
        <input
          type="text"
          name="phone"
          placeholder="No. Telefono"
          pattern="^[0-9]*$"
          disabled={loading}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          disabled={loading}
        />
        <input
          type="password"
          name="password_confirmation"
          placeholder="Repetir Contraseña"
          disabled={loading}
        />
        <input
          type="submit"
          name="submit"
          value="Crear cuenta"
          disabled={loading}
        />
      </form>
      {errors.length > 0 && (
        <div>
          {errors.map((error, index) => {
            return (
              <p key={index} className={styles.NewAccountForm__error}>
                {error}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};
