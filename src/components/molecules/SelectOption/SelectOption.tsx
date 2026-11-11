"use client";

import React, {
  CSSProperties,
  FC,
  KeyboardEvent,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import type { ExperienceOption } from "@/utils/mocks/data";
import styles from "./SelectOption.module.css";

type SelectOptionProps = {
  options: ExperienceOption[];
  initialSelected?: number;
  /** Accessible name for the tab list. */
  label?: string;
};

/* Matches the CSS breakpoint where the tab list becomes a horizontal row. */
const HORIZONTAL_QUERY = "(max-width: 768px)";

const subscribe = (onChange: () => void) => {
  const query = window.matchMedia(HORIZONTAL_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
};

const SelectOption: FC<SelectOptionProps> = ({
  options,
  initialSelected = 0,
  label,
}) => {
  const [selected, setSelected] = useState(initialSelected);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const isHorizontal = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(HORIZONTAL_QUERY).matches,
    () => false,
  );

  if (options.length === 0) return null;

  const current = options[selected] ?? options[0];
  const tabId = (index: number) => `${baseId}-tab-${index}`;
  const panelId = `${baseId}-panel`;

  const select = (index: number) => {
    setSelected(index);
    tabRefs.current[index]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const last = options.length - 1;
    const prevKeys = isHorizontal ? ["ArrowUp", "ArrowLeft"] : ["ArrowUp"];
    const nextKeys = isHorizontal ? ["ArrowDown", "ArrowRight"] : ["ArrowDown"];
    let target: number | null = null;

    if (nextKeys.includes(event.key)) target = selected === last ? 0 : selected + 1;
    else if (prevKeys.includes(event.key)) target = selected === 0 ? last : selected - 1;
    else if (event.key === "Home") target = 0;
    else if (event.key === "End") target = last;

    if (target !== null) {
      event.preventDefault();
      select(target);
    }
  };

  return (
    <div className={styles.container}>
      <div
        role="tablist"
        aria-label={label}
        aria-orientation={isHorizontal ? "horizontal" : "vertical"}
        className={styles.tabList}
        onKeyDown={onKeyDown}
        style={{ "--active-index": selected } as CSSProperties}
      >
        {options.map((option, index) => {
          const isSelected = index === selected;
          return (
            <button
              key={option.value}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={tabId(index)}
              aria-selected={isSelected}
              aria-controls={panelId}
              tabIndex={isSelected ? 0 : -1}
              className={`${styles.tab} ${isSelected ? styles.selected : ""}`}
              onClick={() => setSelected(index)}
            >
              {option.label}
            </button>
          );
        })}
        <span className={styles.marker} aria-hidden="true" />
      </div>

      <div
        role="tabpanel"
        id={panelId}
        aria-labelledby={tabId(selected)}
        tabIndex={0}
        className={styles.panel}
      >
        <h3 className={styles.heading}>
          <span className={styles.role}>{current.details.role}</span>{" "}
          <span className={styles.company}>
            @&nbsp;
            {current.details.url ? (
              <a
                href={current.details.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.companyLink}
              >
                {current.details.company}
              </a>
            ) : (
              current.details.company
            )}
          </span>
        </h3>
        <p className={styles.time}>
          <time>{current.time}</time>
        </p>
        <ul className={styles.tasks}>
          {current.details.tasks.map((task) => (
            <li key={task} className={styles.task}>
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectOption;
