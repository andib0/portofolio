import React from "react";
import { contact, sections, site } from "@/utils/mocks/data";
import styles from "./Contact.module.css";

const Contact = () => {
  const titleId = `${sections.contact.id}-title`;

  return (
    <section
      id={sections.contact.id}
      className="section section--narrow"
      aria-labelledby={titleId}
    >
      <div className={`reveal-section ${styles.inner}`}>
        <p className={styles.overline}>
          {sections.contact.number}. {sections.contact.title}
        </p>
        <h2 id={titleId} className={styles.heading}>
          {contact.heading}
        </h2>
        <p className={styles.text}>{contact.text}</p>
        <a className={styles.cta} href={`mailto:${site.email}`}>
          {contact.cta}
        </a>
      </div>
    </section>
  );
};

export default Contact;
