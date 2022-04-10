import React from "react";
import styles from './Welcome.module.scss';

export default function Welcome(){
    return <div style={{textAlign: "center"}}>
        <h1 className={styles.Intro}>
            אדם סופר
        </h1>
        <p className={styles.BelowIntro}>
            אלו הם חייך
        </p>
    </div>
}