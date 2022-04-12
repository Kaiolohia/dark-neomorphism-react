import React from 'react'
import styles from './styles.module.css'
export { default as Btn } from "./btns/Btn"

export const ExampleComponent = ({ text }) => {
  return <div className={styles.box}>
      <p className={styles.text}>Example Component: {text}</p>
    </div>
}
