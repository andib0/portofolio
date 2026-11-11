"use client";

import React, { useId, useState } from "react";
import { FiCheck } from "react-icons/fi";
import { experimentDemo } from "@/utils/mocks/data";
import styles from "./ExperimentDemo.module.css";

type Version = "control" | "variant";

const { cart } = experimentDemo;

/*
  A small basket rendered twice: once as the page shipped (control) and once
  with the three changes a test script would make (variant). Both stay in the
  DOM so the switch can cross-fade.
*/
const ExperimentDemo: React.FC = () => {
  const [version, setVersion] = useState<Version>("control");
  const [voucherOpen, setVoucherOpen] = useState(false);
  const titleId = useId();
  const voucherId = useId();
  const isVariant = version === "variant";

  const versions: { value: Version; label: string }[] = [
    { value: "control", label: experimentDemo.control },
    { value: "variant", label: experimentDemo.variant },
  ];

  const voucherField = (
    <div className={styles.voucherField}>
      <span className={styles.fieldLabel}>{cart.voucherLabel}</span>
      <div className={styles.fieldRow}>
        <span className={styles.input} />
        <span className={styles.apply}>{cart.voucherApply}</span>
      </div>
    </div>
  );

  return (
    <div className={styles.demo} aria-labelledby={titleId} role="group">
      <div className={styles.head}>
        <div>
          <h3 id={titleId} className={styles.title}>
            {experimentDemo.title}
          </h3>
          <p className={styles.intro}>{experimentDemo.intro}</p>
        </div>
        <div
          role="radiogroup"
          aria-label={experimentDemo.toggleLabel}
          className={styles.toggle}
        >
          {versions.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={version === value}
              className={`${styles.toggleOption} ${
                version === value ? styles.toggleActive : ""
              }`}
              onClick={() => setVersion(value)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.stage}>
          {/* Control: everything visible at once. */}
          <div
            className={`${styles.cart} ${isVariant ? styles.hidden : ""}`}
            aria-hidden={isVariant}
          >
            <p className={styles.cartTitle}>{cart.title}</p>
            <div className={styles.line}>
              <span>{cart.item}</span>
              <span>{cart.price}</span>
            </div>
            {voucherField}
            <p className={styles.banner}>{cart.returnsBanner}</p>
            <div className={styles.tradeIn}>
              <p className={styles.tradeInTitle}>{cart.tradeInTitle}</p>
              <p className={styles.tradeInText}>{cart.tradeInText}</p>
            </div>
            <div className={`${styles.line} ${styles.total}`}>
              <span>{cart.totalLabel}</span>
              <span>{cart.price}</span>
            </div>
            <span className={styles.checkout}>{cart.checkout}</span>
          </div>

          {/* Variant: the same basket after the script has run. */}
          <div
            className={`${styles.cart} ${isVariant ? "" : styles.hidden}`}
            aria-hidden={!isVariant}
          >
            <p className={styles.cartTitle}>{cart.title}</p>
            <div className={styles.line}>
              <span>{cart.item}</span>
              <span>{cart.price}</span>
            </div>
            <span className={styles.badge}>{cart.returnsBadge}</span>
            <button
              type="button"
              className={styles.voucherToggle}
              aria-expanded={voucherOpen}
              aria-controls={voucherId}
              tabIndex={isVariant ? 0 : -1}
              onClick={() => setVoucherOpen((open) => !open)}
            >
              {cart.voucherToggle}
            </button>
            <div id={voucherId} hidden={!voucherOpen}>
              {voucherField}
            </div>
            <p className={styles.teaser}>{cart.tradeInTeaser}</p>
            <div className={`${styles.line} ${styles.total}`}>
              <span>{cart.totalLabel}</span>
              <span>{cart.price}</span>
            </div>
            <span className={styles.checkout}>{cart.checkout}</span>
          </div>
        </div>

        <div className={styles.changes}>
          <p className={styles.changesTitle}>{experimentDemo.changesTitle}</p>
          <ul className={styles.changeList}>
            {experimentDemo.changes.map((change) => (
              <li
                key={change}
                className={`${styles.change} ${
                  isVariant ? styles.changeDone : ""
                }`}
              >
                <FiCheck className={styles.check} aria-hidden="true" />
                {change}
              </li>
            ))}
          </ul>
          <p className={styles.note}>{experimentDemo.note}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperimentDemo;
