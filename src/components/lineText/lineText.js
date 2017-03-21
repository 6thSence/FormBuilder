import React from 'react';

import styles from './lineText.css';

export default () => {
    return (
        <input type="text" placeholder="Single-line text" className={styles.input} readOnly />
    )
};
