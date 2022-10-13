import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copy}>
        <p>
          <span>PokéNext</span> &copy; 2022
        </p>
      </div>
      <h5>Guilherme Cabral</h5>
    </footer>
  );
}
