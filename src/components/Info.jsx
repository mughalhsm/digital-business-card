import React from "react";
import styles from "./Info.module.css";
import ProfilePicture from "../assets/profile-pic copy.jpg";
import emailLogo from "../assets/Email-logo.png";
import linkendinLogo from "../assets/LinkedIn-logo.png";

export default function Info() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img
          className={styles.avatar}
          src={ProfilePicture}
          alt="Hamza Mughal"
        />
      </header>
      <div className={styles.bio}>
        <h1 className={styles.name}>Dr Hamza Mughal</h1>
        <p className={styles.title}>Data & Software Engineer</p>
        <p className={styles.small}>Medical Doctor</p>
        <div className={styles.contacts}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.links} ${styles.email}`}
            href="mailto:hamza.mughal@hotmail.com"
          >
            <img className={styles.icons} src={emailLogo} alt="" /> Email
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.links} ${styles.linkedin}`}
            href="https://www.linkedin.com/in/hamzamughal1/"
          >
            <img className={styles.icons} src={linkendinLogo} alt="" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}