import React from "react";
import styles from "./ContentTop.module.css";
import LinkButton from "@/components/atoms/LinkButton/LinkButton";
import { hero } from "@/utils/mocks/data";

const ContentTop = () => (
  <section className={styles.hero}>
    <div className={styles.inner}>
      <p className={styles.greet}>{hero.greet}</p>
      <h1 className={styles.name}>{hero.name}</h1>
      <p className={styles.tagline}>{hero.tagline}</p>
      <p className={styles.intro}>{hero.intro}</p>
      <div className={styles.cta}>
        <LinkButton href={hero.cta.href}>{hero.cta.label}</LinkButton>
      </div>
    </div>
  </section>
);

export default ContentTop;
