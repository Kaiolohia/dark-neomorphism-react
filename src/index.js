import React from 'react'
import styles from './styles.module.css'
export { default as Btn } from "./btns/Btn"
export { default as Input } from "./forms/Input"

export const ExampleComponent = ({ text }) => {
  return <div className={styles.box}>
      <p className={styles.text}>{text}</p>
    </div>
}
