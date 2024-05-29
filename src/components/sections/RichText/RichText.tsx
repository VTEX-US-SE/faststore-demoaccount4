import React from "react";
import styles from "./RichText.module.scss";

export interface RichTextProps {
  title: string;
  description: string;
  isMainDescription: boolean;
}

function RichText({ title, description, isMainDescription }: RichTextProps) {
  return (
    <section
      className={styles.RichText}
      data-fs-rich-text-main-description={isMainDescription}
    >
      <p data-fs-rich-text-title>{title}</p>
      <p data-fs-rich-text-description>{description}</p>
    </section>
  );
}

export default RichText;
