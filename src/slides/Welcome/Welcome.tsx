import React from "react";
import styles from './Welcome.module.scss';

export default function Welcome(){
    return                 <div className={"align-xy flex-column"}>
        <h1 className={styles.Intro}>
            אדם סופר
        </h1>
        <p className={styles.BelowIntro}>
            אלו הם חייך
        </p>
    </div>
}