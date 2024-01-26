import styles from "./header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <h1>
        smart <span>FIT</span>
      </h1>
    </header>
  );
}
