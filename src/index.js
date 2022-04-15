import React from 'react'
import styles from './styles.module.css'
export { default as Btn } from './btns/Btn'
export { default as Input } from './forms/Input'

export const Card = ({ title, children }) => {
  return (
    <div className={styles.box}>
      <p className={styles.h1}>{title}</p>
      {children}
    </div>
  )
}
