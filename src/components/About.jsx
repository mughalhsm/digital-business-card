import React from 'react'
import styles from "./About.module.css";

export default function About() {
  return (
    <main className={styles.about}>
      <h2 className={styles.header}>About</h2>
      <p className={styles.texts}>
        Medical Doctor | Data Engineer | Software Engineer | Interested in AI
      </p>
    </main>
  );
}