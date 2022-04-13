import React from "react";
import styles from '../styles.module.css'

export default function Input({ label }) {
    return (
        <div>
            <input type="text" className={styles.txtinput} placeholder={ label }/>
        </div>
    )
}