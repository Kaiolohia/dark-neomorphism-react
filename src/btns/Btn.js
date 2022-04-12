import React from "react";
import styles from '../styles.module.css'

export default function Btn ({value}) {
    return (
        <div>
            <input type="button" value={value} className={styles.btn}/>
        </div>
    )
}