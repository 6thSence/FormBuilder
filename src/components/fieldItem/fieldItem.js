import React, { Component } from 'react';

import styles from './fieldItem.css';

export default ({ questionTitle, choices, isRequired }) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.question}>{questionTitle}</div>
            <div className={styles.choices}>choices</div>
            <div className={styles.required}>required</div>
        </div>
    )
};
