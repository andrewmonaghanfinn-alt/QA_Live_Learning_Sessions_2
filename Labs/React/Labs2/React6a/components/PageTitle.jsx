import React from 'react';
import styles from './PageTitle.module.css';

export default function PageTitle() {
  return (
    <header>
      <h1 className={styles.title}>Page title</h1>
    </header>
  );
}
