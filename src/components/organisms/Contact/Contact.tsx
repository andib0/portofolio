import React from "react";
import { contact, sections, site } from "@/utils/mocks/data";

/* Stub: the sections agent builds this section. */
const Contact = () => {
  return (
    <section id={sections.contact.id} className="section section--narrow">
      <h2>{contact.heading}</h2>
      <p>{contact.text}</p>
      <a href={`mailto:${site.email}`}>{contact.cta}</a>
    </section>
  );
};

export default Contact;
