import React from "react";
import styles from "./NotFoundContent.module.css";
import LinkButton from "@/components/atoms/LinkButton/LinkButton";

interface NotFoundContentProps {
  code: string;
  title: string;
  text: string;
  linkLabel: string;
  linkHref: string;
}

const NotFoundContent: React.FC<NotFoundContentProps> = ({
  code,
  title,
  text,
  linkLabel,
  linkHref,
}) => (
  <section className={styles.container}>
    <p className={styles.code}>{code}</p>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.text}>{text}</p>
    <LinkButton href={linkHref}>{linkLabel}</LinkButton>
  </section>
);

export default NotFoundContent;
