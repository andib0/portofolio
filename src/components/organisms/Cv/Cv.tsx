import React from "react";
import { asset, cv, options, resume, site } from "@/utils/mocks/data";
import styles from "./Cv.module.css";

const stripProtocol = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "");

/*
  The CV as a web page. Printed (or exported by `npm run cv`) it becomes the
  PDF linked from the header, so the PDF can never drift from the site.
*/
const Cv: React.FC = () => {
  const recent = options.slice(0, cv.earlierFrom);
  const earlier = options.slice(cv.earlierFrom);

  const contacts = [
    { label: site.email, href: `mailto:${site.email}` },
    { label: stripProtocol(site.linkedin), href: site.linkedin },
    { label: stripProtocol(site.github), href: site.github },
    { label: stripProtocol(site.url), href: `${site.url}/` },
  ];

  return (
    <article className={`section ${styles.cv}`}>
      <a className={styles.download} href={asset(resume.file)} download>
        {cv.download}
      </a>

      <header className={styles.header}>
        <h1 className={styles.name}>{site.name}</h1>
        <p className={styles.role}>
          {site.role}, {site.location}
        </p>
        <ul className={styles.contacts}>
          {contacts.map(({ label, href }) => (
            <li key={label}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </header>

      <section className={styles.block}>
        <h2 className={styles.heading}>{cv.headings.summary}</h2>
        <p className={styles.text}>{cv.summary}</p>
      </section>

      <section className={styles.block}>
        <h2 className={styles.heading}>{cv.headings.experience}</h2>
        {recent.map(({ value, time, details }) => (
          <div key={value} className={styles.job}>
            <div className={styles.jobHead}>
              <h3 className={styles.jobTitle}>
                {details.role}{" "}
                <span className={styles.company}>@ {details.company}</span>
              </h3>
              <p className={styles.time}>{time}</p>
            </div>
            <ul className={styles.tasks}>
              {details.tasks.map((task) => (
                <li key={task} className={styles.task}>
                  {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className={styles.block}>
        <h2 className={styles.heading}>{cv.headings.earlier}</h2>
        {earlier.map(({ value, time, details }) => (
          <div key={value} className={styles.jobHead}>
            <p className={styles.line}>
              <strong>{details.role}</strong>{" "}
              <span className={styles.company}>@ {details.company}</span>
            </p>
            <p className={styles.time}>{time}</p>
          </div>
        ))}
      </section>

      <section className={styles.block}>
        <h2 className={styles.heading}>{cv.headings.projects}</h2>
        {cv.projects.map(({ name, line, url }) => (
          <div key={name} className={styles.jobHead}>
            <p className={styles.line}>
              <strong>{name}</strong> {line}
            </p>
            <p className={styles.time}>
              <a href={`https://${url}`}>{url}</a>
            </p>
          </div>
        ))}
      </section>

      <section className={styles.block}>
        <h2 className={styles.heading}>{cv.headings.skills}</h2>
        <dl className={styles.skills}>
          {cv.skills.map(({ label, items }) => (
            <div key={label} className={styles.skillRow}>
              <dt>{label}</dt>
              <dd>{items.join(", ")}</dd>
            </div>
          ))}
          <div className={styles.skillRow}>
            <dt>{cv.headings.languages}</dt>
            <dd>{cv.languages.join(", ")}</dd>
          </div>
        </dl>
      </section>

      <section className={styles.block}>
        <h2 className={styles.heading}>{cv.headings.education}</h2>
        {cv.education.map(({ school, detail, place }) => (
          <p key={school} className={styles.line}>
            <strong>{detail}</strong> {school}, {place}
          </p>
        ))}
      </section>

      <section className={styles.block}>
        <h2 className={styles.heading}>{cv.headings.courses}</h2>
        {cv.courses.map(({ name, by, year }) => (
          <div key={name} className={styles.jobHead}>
            <p className={styles.line}>
              <strong>{name}</strong> {by}
            </p>
            <p className={styles.time}>{year}</p>
          </div>
        ))}
      </section>
    </article>
  );
};

export default Cv;
