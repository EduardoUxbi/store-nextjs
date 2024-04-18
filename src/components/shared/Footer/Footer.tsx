import styles from './Footer.module.sass';

export const Footer = () => {
  return(
    <footer className={styles.Footer}>
      <p>Uxbi Store © {new Date().getFullYear()}</p>
    </footer>
  )
};