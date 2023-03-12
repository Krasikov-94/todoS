import React from 'react';
import { Form } from '../Form';
import styles from './header.module.css';
export const Header = ({ addToList }) => {
  return (
    <>
      <header className={styles.wrapper}></header>
      <Form addToList={addToList} />
    </>
  );
};
