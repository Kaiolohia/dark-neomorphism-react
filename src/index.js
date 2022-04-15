import React from 'react'
import styles from './styles.module.css'
export { default as Btn } from './btns/Btn'
export { default as Input } from './forms/Input'

// https://github.com/mui/material-ui/blob/master/packages/mui-material/src/Card/Card.js
// should follow MUI code design for handling components
export const Card = ({ title, children }) => {
  return (
    <div className={styles.box}>
      <p className={styles.h1}>{title}</p>
      {children}
    </div>
  )
}
